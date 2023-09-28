import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="absolute top-14 z-10 left-5" id="sidebar">
        <ul className="bgColorSidebar p-2">
          <li className="mb-4 w-full">
            <div className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/search.png" width={100} height={100} alt="contact" />
              <input type="text" placeholder="Search" className="custom-input pl-2 text-white font-sans text-2xl font-bold" />
            </div>
          </li>
          <li className="mb-4 w-full">
            <Link href={"/"} className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/contact.png" width={100} height={100} alt="contact" />
              <span className="pl-2 text-white font-sans text-2xl font-bold">No Deposit Casino Guide</span>
            </Link>
          </li>
          <li className="mb-4 w-full">
          <Link href={"/"} className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/privacy.png" width={100} height={100} alt="contact" />
              <span className="pl-2 text-white font-sans text-2xl font-bold">Privacy Policy</span>
            </Link>
          </li>
          <li className="mb-4 w-full">
            <Link href={"/"} className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/tree.png" width={100} height={100} alt="contact" />
              <span className="pl-2 text-white font-sans text-2xl font-bold">Casino By Software</span>
            </Link>
          </li>
          <li className="mb-4 w-full">
            <Link href={"/page/slots-by-software"} className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/laptop.png" width={100} height={100} alt="contact" />
              <span className="pl-2 text-white font-sans text-2xl font-bold">Slots By Software</span>
            </Link>
          </li>
          <li className="mb-4 w-full">
            <Link href={"/page/bit-coin"} className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/bitcoin.png" width={100} height={100} alt="contact" />
              <span className="pl-2 text-white font-sans text-2xl font-bold">Bitcoin Casino</span>
            </Link>
          </li>
          <li className="mb-4 w-full">
            <Link href={"/page/news"} className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/notes.png" width={100} height={100} alt="contact" />
              <span className="pl-2 text-white font-sans text-2xl font-bold">News</span>
            </Link>
          </li>
          <li className="w-full">
            <Link href={"/page/usa-casino"} className="flex items-center justify-start">
              <Image src="/assets/sidebar-icon/flag.png" width={100} height={100} alt="contact" />
              <span className="pl-2 text-white font-sans text-2xl font-bold">USA Casino</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}