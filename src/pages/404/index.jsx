import React from "react";
import Header from "@/components/header";
import Image from "next/image";
import Button from "@/components/common/button";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center my-24">
        <Image src="/assets/svgs/404.svg" alt="404" width={700} height={400} />
        <div className="flex justify-center my-12">
          <h1 className="text-4xl font-bold w-2/3 text-center">
            Oops! This page is not included in BCSPCA redesign project
          </h1>
        </div>
        <Link href="/">
          <Button
            label="Go back to home"
            bgColor="bg-primary"
            textColor="text-white"
            width="w-44"
            height="h-12"
          />
        </Link>
      </div>
    </div>
  );
};

export default index;
