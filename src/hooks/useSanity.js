import { useState, useEffect } from 'react'
import { client, projectsQuery, servicesQuery, aboutQuery, contactQuery } from '@/lib/sanity'

export const useSanityQuery = (query, params = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await client.fetch(query, params)
        setData(result)
      } catch (err) {
        console.error('Error fetching data from Sanity:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query, JSON.stringify(params)])

  return { data, loading, error }
}

export const useProjects = () => {
  return useSanityQuery(projectsQuery)
}

export const useServices = () => {
  return useSanityQuery(servicesQuery)
}

export const useAbout = () => {
  return useSanityQuery(aboutQuery)
}

export const useContact = () => {
  return useSanityQuery(contactQuery)
}
