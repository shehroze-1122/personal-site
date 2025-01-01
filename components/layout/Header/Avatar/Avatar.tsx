import Image from "next/image";
import React from "react";
import imageSrc from "./image.webp";
import TitleSlider from "./TitleSlider";
import Link from "next/link";

function Avatar() {
  return (
    <div className="flex flex-col gap-3">
      <Link href="/">
        <Image
          src={imageSrc}
          alt="my avatar"
          width={60}
          height={60}
          unoptimized
          priority
          placeholder="blur"
          className="border rounded border-secondary cursor-pointer hover:scale-105 hover:-rotate-3"
        />
      </Link>
      <div>
        <h1 className="text-highlight">Shehroze Talat</h1>
        <TitleSlider className="mt-2" />
      </div>
    </div>
  );
}

export default Avatar;
