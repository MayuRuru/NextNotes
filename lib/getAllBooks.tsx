export default async function getAllBooks() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetch("http://localhost:8000/books");

  if (!res.ok) throw new Error("failed to fecth data");

  return res.json();
}
