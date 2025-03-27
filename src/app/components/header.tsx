import Link from "next/link"

export default function Header() {
  return (
    <header className="text-foreground py-4">
      <nav>
        <ul className="flex flex-row gap-4 justify-center items-center w-full">
          <li className="block py-2 px-4">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="block py-2 px-4">
            <Link href={"/about"}>About us</Link>
          </li>
          <li className="block py-2 px-4">
            <Link href={"/services"}>Our services</Link>
          </li>
          <li className="block py-2 px-4">
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li className="block py-2 px-4">
            <Link href={"/contact"}>Contact</Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}
