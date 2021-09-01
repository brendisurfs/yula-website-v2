import Link from "next/link";
import Image from "next/image";

export default function EventItem({ evt }: any) {
  return (
    <div>
      <Image src={evt.imageURL} />
      <Link href={evt.show_link} />
    </div>
  );
}
