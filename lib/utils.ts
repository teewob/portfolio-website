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

export function resolveMediaUrl(path: string, type: "image" | "video" = "image") {
  if (!path) return path
  if (path.startsWith("http") || path.startsWith("data:")) return path
  if (!CLOUDINARY_CLOUD_NAME || !shouldRouteToCloudinary(path)) return path

  const sanitizedPath = path.startsWith("/") ? path.slice(1) : path
  const encodedPath = sanitizedPath
    .split("/")
    .map((segment) => encodeSegment(segment))
    .join("/")

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${type}/upload/${encodedPath}`
}
