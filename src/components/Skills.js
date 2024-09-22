// src/components/Skills.js
import { FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiPytorch, SiJava, SiCplusplus } from 'react-icons/si';
// カスタム画像を使用する場合は Image をインポート
import Image from 'next/image';

export default function Skills() {
  const skills = [
    { icon: <SiNextdotjs size={40} color="#000000" />, name: 'Next.js' },
    { icon: <SiPython size={40} color="#306998" />, name: 'Python' },
    { icon: <SiPytorch size={40} color="#EE4C2C" />, name: 'PyTorch' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">スキル</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-4 text-gray-700 dark:text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
