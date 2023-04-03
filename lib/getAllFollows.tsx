export default async function getAllFollows() {
  const res = await fetch("http://localhost:8000/follows");

  if (!res.ok) throw new Error("failed to fecth data");

  return res.json();
}
