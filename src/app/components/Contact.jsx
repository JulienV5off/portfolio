import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div class="absolute bottom-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,hsl(0,0%,85%)_100%)]"></div>
      <div
        className={`flex flex-col justify-center min-h-screen transition-all duration-500 transform py-20 px-24 w-full `}
      >
        <div>
          <h1 className="text-7xl lg:text-left text-center w-full">Contact</h1>
        </div>
        <div>
          <span>
            Contact me for any project or collaboration. I am available for any
            web development project.
          </span>
        </div>
        <div className="grid grid-cols-3 mt-14 w-full">
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-left text-center w-full">Email</h2>
            <span>julien.sarrau@edu.esiee.fr</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-left text-center w-full">Mobile</h2>
            <span>+33 6 12 34 56 78</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-left text-center w-full">Links</h2>
            <div className="flex gap-4">
              <Link href={"/mongithub"}>
                <Image
                  src={"/img/github-mark.svg"}
                  width={30}
                  height={30}
                  alt="github logo"
                />
              </Link>
              <Link href={"/mongithub"}>
                <Image
                  src={"/img/linkedin.svg"}
                  width={30}
                  height={30}
                  alt="github logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
