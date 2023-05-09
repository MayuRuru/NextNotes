"use client";
import { toast } from "sonner";
import { Button } from "./Button";
import { Input } from "./Input";

//TODO: convert imports to alias not dynamic

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData.entries());

    // POSTGRES: ('api/postgres-form-send')
    fetch("/api/kv-form-send", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("Message sent!");
        form.reset();

        const $view = document.querySelector("#count-views");
        if ($view != null) $view.innerHTML = `${Number($view.textContent) + 1}`;
      })
      .catch(() => {
        toast.error("Error sending message");
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-center">
        Contact me:
      </h2>
      <form
        onSubmit={handleSubmit}
        className="text-left min-w-[400px] p-8 space-y-8 border rounded border-white/10"
      >
        <Input
          name="email"
          id="label"
          label="Your e-mail"
          type="email"
          placeholder="example@protonmail.com"
        />

        <Input
          name="name"
          id="label"
          label="Your name"
          type="text"
          placeholder="Mayu Ness"
        />

        <Input
          name="message"
          id="message"
          label="Your message"
          type="text"
          placeholder="Hi Mayu I contact you because..."
        />

        <Button>Send message</Button>
      </form>
    </main>
  );
};
