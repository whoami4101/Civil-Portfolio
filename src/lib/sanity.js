import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'ybtkofwm',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: true, // Set to false if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

// GROQ queries for fetching data
export const projectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    location,
    description,
    "mainImage": mainImage.asset->url,
    "images": images[].asset->url,
    client,
    projectDate,
    services,
    status,
    featured,
    order
  }
`

export const projectsByCategoryQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    location,
    description,
    "mainImage": mainImage.asset->url,
    "images": images[].asset->url,
    client,
    projectDate,
    services,
    status,
    featured,
    order
  }
`

export const servicesQuery = `
  *[_type == "service" && active == true] | order(order asc) {
    _id,
    title,
    slug,
    "icon": icon.asset->url,
    description,
    details,
    features,
    order,
    active
  }
`

export const aboutQuery = `
  *[_type == "about"][0] {
    title,
    subtitle,
    description,
    mission,
    vision,
    values,
    teamMembers[] {
      name,
      position,
      "photo": photo.asset->url,
      bio
    },
    stats[] {
      label,
      value
    }
  }
`

export const contactQuery = `
  *[_type == "contact"][0] {
    title,
    subtitle,
    description,
    email,
    phone,
    address,
    offices[] {
      name,
      address,
      phone,
      email
    },
    socialMedia {
      linkedin,
      twitter,
      facebook
    },
    businessHours
  }
`
