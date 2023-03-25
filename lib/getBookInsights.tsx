export default async function getBookInsights(bookId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?bookId=/${bookId}`
  );
  if (!res.ok) throw new Error("faled to fecth book");

  return res.json();
}
