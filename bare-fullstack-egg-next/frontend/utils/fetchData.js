import fetch from 'isomorphic-unfetch'

export default async function fetchCount() {
  const res = await fetch(`http://localhost:7001/count`, {
    headers: { 'Content-Type': 'application/json' }
  })
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
}
