export default async function getBookInsights(bookId: string) {
  /*  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?bookId=/${bookId}`
  );
 */

  const res = await fetch(`http://localhost:8000/books/${bookId}`);

  //if (!res.ok) throw new Error("faled to fecth book");
  if (!res.ok) return undefined;

  return res.json();
}
