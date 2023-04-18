import Image from "next/image";

// TODO: I dont think this should be a separated component
export default function Avatar() {
  return (
    <Image
      src="/avatar/bgs.jpg"
      width={200}
      height={200}
      alt="avatar"
      priority
      style={{ aspectRatio: "1 / 1", width: "100%", height: "auto" }}
    />
  );
}
