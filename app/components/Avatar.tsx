import Image from "next/image";

export default function Avatar() {
  // TODO figure out slight distorsion

  return (
    <Image
      className="rounded-full"
      src="/images/bgs.jpg"
      width={200}
      height={200}
      alt="avatar"
      priority={true}
    />
  );
}
