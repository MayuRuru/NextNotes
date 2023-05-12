import type { Metadata } from "next";
import { Form } from "../form/Form";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <div className="flex flex-col text-center max-w-2xl mx-auto">
        <Form />
      </div>
    </>
  );
}
