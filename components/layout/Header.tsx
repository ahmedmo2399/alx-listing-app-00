export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">ALX Listing</h1>
      <nav>
        <ul className="flex gap-4 text-gray-600">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">Listings</a></li>
          <li><a href="#" className="hover:text-black">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}