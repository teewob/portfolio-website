import { workRoles } from "./work"

export const experiences = workRoles.map((role) => ({
  slug: role.slug,
  company: role.company,
  role: `${role.title} · ${role.tenure}`,
  description: role.intro,
  image: role.cardImage,
}))

export default {
  experiences,
}
