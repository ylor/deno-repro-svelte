export async function load({ fetch }) {
  const res = await fetch("/api");
  const items = await res.json();

  console.log('+page.server.js')
  return { items };
}
