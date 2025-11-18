import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const CLOUDINARY_FOLDERS = ["filipinos in hawaii", "honolulu grit", "the strays", "roll002"]

const decodeSegment = (segment: string) => {
  try {
    return decodeURIComponent(segment)
  } catch {
    return segment
  }
}

const encodeSegment = (segment: string) => encodeURIComponent(decodeSegment(segment))

const shouldRouteToCloudinary = (path: string) => {
  if (!path?.startsWith("/")) return false
  const [firstSegment] = path.slice(1).split("/")
  const normalized = decodeSegment(firstSegment).toLowerCase()
  return CLOUDINARY_FOLDERS.includes(normalized)
}

const CLOUDINARY_HOST = "https://res.cloudinary.com/"

const optimizeCloudinaryUrl = (url: string, type: "image" | "video") => {
  if (!url?.startsWith(CLOUDINARY_HOST)) return url
  const [base, query = ""] = url.split("?")
  const uploadIndex = base.indexOf("/upload/")
  if (uploadIndex === -1) return url

  const prefix = base.slice(0, uploadIndex + "/upload/".length)
  const suffix = base.slice(uploadIndex + "/upload/".length)

  if (suffix.startsWith("f_")) {
    return query ? `${base}?${query}` : base
  }

  const transformation = type === "video" ? "f_auto:video,q_auto" : "f_auto,q_auto"
  const optimized = `${prefix}${transformation}/${suffix}`
  return query ? `${optimized}?${query}` : optimized
}

export function resolveMediaUrl(path: string, type: "image" | "video" = "image") {
  if (!path) return path
  if (path.startsWith("http") || path.startsWith("data:")) {
    return optimizeCloudinaryUrl(path, type)
  }
  if (!CLOUDINARY_CLOUD_NAME || !shouldRouteToCloudinary(path)) return path

  const sanitizedPath = path.startsWith("/") ? path.slice(1) : path
  const encodedPath = sanitizedPath
    .split("/")
    .map((segment) => encodeSegment(segment))
    .join("/")

  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${type}/upload/${encodedPath}`
  return optimizeCloudinaryUrl(baseUrl, type)
}
