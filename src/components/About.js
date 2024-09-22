import React from 'react';

export default function About() {
  return (
    <section id="profile" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">私について</h2>
        <div className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          <p className="mb-4">
            はじめまして。塚越駿大と申します。現在、大学院で音声・音響信号処理を専攻している研究者です。
          </p>
          <p className="mb-4">
            主な研究領域は、音声認識技術の革新、声質変換システムの開発、音響信号処理モデルの汎用化です。
            情報処理学会での発表や、医療用自動問診システムの開発、産業技術総合研究所との共同研究など、
            幅広いプロジェクトに携わっています。
          </p>
          <p className="mb-4">
            GCCE、APSIPAなどの国際会議に参加し、グローバルな視点から最新技術を学んでいます。
            また、大学でのTA経験や企業への技術相談を通じて、研究成果の実社会への応用にも取り組んでいます。
          </p>
          <p>
            音声・音響技術を通じて人々の生活の質向上に貢献することが目標です。
            新しい挑戦や協力の機会を心待ちにしています。
          </p>
        </div>
      </div>
    </section>
  );
}