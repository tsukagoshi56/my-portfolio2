// src/components/Skills.js
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { icon: <FaReact size={40} color="#61DBFB" />, name: 'React' },
    { icon: <FaNodeJs size={40} color="#68A063" />, name: 'Node.js' },
    { icon: <FaDatabase size={40} color="#f29111" />, name: 'データベース' },
    // 他のスキルも追加
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
