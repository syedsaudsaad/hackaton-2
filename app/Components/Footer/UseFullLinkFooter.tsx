import Link from "next/link";

export default function UsefulLinksSection() {
  const links = ["About", "News", "Partners", "Team", "Menu", "Contact"];
  return (
    <div className="w-[120.36px]">
      <h3 className="text-xl font-bold mb-6">Useful Links</h3>
      <ul className="text-[16px] leading-6 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link} className="mb-2">
            <Link
              href="#"
              className="hover:text-[#FF9F0D] transition duration-300"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}