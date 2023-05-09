import CardSlider from "./carousel/CardSlider";
import { ContactsView } from "./form/ContactsView";
import { Form } from "./form/Form";

export default function Home() {
  return (
    <main>
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-blue text-4xl font-bold pb-6">
          My highlighted references:
        </h2>
        <CardSlider />
        <div className="flex flex-col text-center max-w-2xl mx-auto">
          <Form />
          {/*           <ContactsView />
           */}
        </div>
      </section>
    </main>
  );
}
