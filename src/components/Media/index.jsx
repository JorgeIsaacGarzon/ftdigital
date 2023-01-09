import React from "react";
import Image from "next/image";

export default function Media({ picture }) {
  return (
    <div className="flex flex-col justify-between gap-1">
      <h2 className=" text-xs text-center font-bold text-slate-300">
        {picture.title}
      </h2>
      <Image
        alt={`Image from ${picture.title}`}
        src={picture.thumbnail}
        width={200}
        height={200}
        className="rounded-md"
      />
    </div>
  );
}
