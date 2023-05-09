import kv from "@vercel/kv";

export const ContactsView = async () => {
  const keys = await kv.keys("contact-*");
  return (
    <small>
      <span id="count-views">{keys.length}</span> contacts so far
    </small>
  );
};
