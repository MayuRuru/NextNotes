import CardSlider from "./carousel/CardSlider";
import { Form } from "./components/Form";

export default function Home() {
  return (
    <main>
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-blue text-4xl font-bold pb-6">
          My highlighted references:
        </h2>
        <CardSlider />
        <div className="flex max-w-2xl mx-auto">
          <Form />
        </div>
      </section>
    </main>
  );
}
