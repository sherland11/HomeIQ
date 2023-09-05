async function getData() {
  const res = await fetch('http://localhost:3000/api', { next: { revalidate: 3600 } })

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return (
    <div>Ответ = {data.str}; url = {data.url}</div>
  )
}
