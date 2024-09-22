// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="text-2xl font-bold text-blue-600">
          Tsukagoshi Toshihiro
        </div>
        {/* ナビゲーションリンク */}
        <ul className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300">
          <li><Link href="#about" className="hover:text-blue-500">My profile</Link></li>
          <li><Link href="#projects" className="hover:text-blue-500">reserach</Link></li>
        </ul>
      </nav>
    </header>
  );
}
