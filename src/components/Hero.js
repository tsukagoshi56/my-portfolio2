// src/components/Hero.js
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900">
      <Image
        src="/images/hero-background.jpg"
        alt="背景画像"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-50"
      />
      <motion.div
        className="absolute text-center text-white px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Tsukagoshi Toshihiro</h1>
        <p className="text-xl md:text-2xl">クリエイティブなソリューションを提供します</p>
        <Link href="#projects" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          プロジェクトを見る
        </Link>
      </motion.div>
    </section>
  );
}
