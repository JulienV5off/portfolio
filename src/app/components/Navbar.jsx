import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 ml-4 mr-4 mt-2">
      <aside className="flex items-center gap-2">
        <Link href={"/fr"} className="flex flex-row items-center gap-4">
          <span className="text-2xl font-bold">J.S</span>
        </Link>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#home"}>Home</Link>
          <Link href={"#skills"}>Skills</Link>
          <Link href={"#works"}>Work</Link>
          <Link href={"#contact"}>Contact</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link href={"https://github.com/JulienV5off/portfolio"}>
          <Image
            src={"/img/github-mark.svg"}
            width={30}
            height={30}
            alt="github logo"
          />
        </Link>
      </aside>
    </div>
  );
};

export default Navbar;
