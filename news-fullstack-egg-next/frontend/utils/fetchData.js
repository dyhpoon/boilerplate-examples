import fetch from 'isomorphic-unfetch'

export default async function fetchStories(page = 1) {
  const res = await fetch(`http://localhost:7001/news?page=${page}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
}
