import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      //className="rounded-full object-cover object-center"
      src="/avatar/bgs.jpg"
      width={200}
      height={200}
      alt="avatar"
      priority={true}
      style={{ aspectRatio: "1 / 1", width: "100%", height: "auto" }}
    />
  );
}
