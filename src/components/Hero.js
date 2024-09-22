// src/components/Hero.js
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      {/* プロフィール画像 */}
      <motion.div
        className="mb-6 md:mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/hero-background.jpg" // プロフィール画像のパスに置き換えてください
          alt="プロフィール画像"
          width={150} // 必要に応じてサイズを調整
          height={150}
          className="rounded-full"
        />
      </motion.div>
      
      {/* タイトル */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typewriter
          words={['Tsukagoshi Toshihiro']}
          loop={1}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h1>
      
      {/* 説明文 */}
      <motion.p
        className="text-lg md:text-xl mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        クリエイティブなソリューションを提供します。最新の技術とデザインのトレンドを取り入れ、常に学び続けています。
      </motion.p>
      
      {/* プロジェクトを見るボタン */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Link href="#projects" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          プロジェクトを見る
        </Link>
      </motion.div>
    </section>
  );
}
