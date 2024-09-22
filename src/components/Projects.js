// src/components/Projects.js
import Link from 'next/link';

const projects = [
  {
    title: '食行動認識',
    description: '産業技術総合研究所(AIST)との共同研究',
    image: '/images/eating_exp.png',
    link: '#',
  },
  {
    title: '幸せな酔いの追求',
    description: 'サッポロビールとの共同研究',
    image: '/images/sapporo.png',
    link: '#',
  },
  // 他のプロジェクトも追加
];

export default function Projects() {
  return (
    <section id="research" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">研究</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover transform hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <Link href={project.link} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
