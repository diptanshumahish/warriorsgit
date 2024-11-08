import ContactForm from "@/components/contact/form";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

export default function page() {
  return (
    <div className="flex items-center flex-col relative justify-center min-h-screen">
      <Image
        src="/pic.jpg"
        height={800}
        width={1920}
        alt="background"
        className="inset-0 absolute max-h-[50h] opacity-20 z-0"
      />
      <ContactForm />
      <div className="h-8">

      </div>
      <footer className="w-full border-t flex items-center justify-center border-gray-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2024 WarriorsGit LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-400 hover:text-green-400">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
