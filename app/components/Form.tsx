"use client";
import { Button } from "./Button";
import { Input } from "./Input";

//TODO: convert imports to alias not dynamic

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData.entries());
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-center">
        Contact From
      </h2>
      <form
        onSubmit={handleSubmit}
        className="min-w-[400px] p-8 space-y-8 border rounded border-white/10"
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
