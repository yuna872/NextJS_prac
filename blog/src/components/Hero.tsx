import next from "next";
import Link from "next/link";
import React from "react";
import profileImage from "../../public/images/profile.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
      className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, 일리엄이얌"}</h2>
      <h3 className="text-xl font-semibold">Front-end Developer</h3>
      <p>아가야 너 배고프니 hoxy?</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me!</button>
      </Link>
    </section>
  );
}
