import Link from "next/link";

export default function Navbar(props) {
  return (
    <nav className="bg-yellow-300 py-2 flex justify-center font-bold text-lg">
      <h4>
        <Link href="/" className="hover:text-blue-600 mx-2" title="Homepage">
          Home
        </Link>
      </h4>

      <ul className="flex">
        <li>
          <Link
            href="/achievements"
            className="mx-2 hover:text-blue-600"
            title="My projects"
          >
            Achievements
          </Link>
        </li>
        <li>
          <Link href="/map" className="mx-2 hover:text-blue-600" title="map">
            Map
          </Link>
        </li>
      </ul>
    </nav>
  );
}
