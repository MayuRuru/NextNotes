import Image from "next/image";

export default function Avatar() {
  return (
    <section className="mx-auto">
      <Image
        className="border-4 relative h-200 w-200 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mt-8"
        src="/images/bgs.jpg"
        width={200}
        height={200}
        alt="avatar"
        priority={true}
      />
    </section>
  );
}
