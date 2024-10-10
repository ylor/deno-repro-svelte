import { json } from "@sveltejs/kit";

export const GET = async ({ fetch }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const items = await res.json();
  console.log("+server.js");

  return json(items);
};
