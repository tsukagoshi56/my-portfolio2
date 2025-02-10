import React from 'react';

export default function About() {
  return (
    <section id="profile" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">私について</h2>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto space-y-8">
          {/* 自己紹介 */}
          <section>
            <p>
              はじめまして。塚越駿大と申します。現在、大学院で音声・音響信号処理を専攻している修士1年です。音声認識技術の革新や新たなマルチタスク認識モデルの構築を通して、研究成果の実社会への応用を目指しています。
            </p>
          </section>

          {/* 学部研究 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">学部研究</h3>
            <p>
              <strong>研究テーマ:</strong> 皮膚接触型マイクを活用した雑音環境に頑健な音声認識モデルの構築
            </p>
            <p>
              <strong>研究室:</strong> 西田研究室
            </p>
            <p>
              <strong>指導教官:</strong> 西田昌史
            </p>
            <p>
              <strong>研究内容:</strong> 雑音環境下での音声認識性能向上を目指し、外部雑音に頑健な皮膚接触型マイクの活用の検討を行いました。このマイクは一般的なマイクとの音響特性の違いから、従来の音声認識モデルに入力することが困難でした。そこで、皮膚接触型マイクの音声特徴を一般的なマイク特徴へ変換するモデルを構築することで、雑音に頑健なシステムを実現しました。学会発表での質疑応答を通じ、技術的価値を効果的に伝える力の重要性を実感しました。
            </p>
          </section>

          {/* 修士研究 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">修士研究</h3>
            <p>
              <strong>研究テーマ:</strong> 『たべること』『はなすこと』同時認識モデルの構築
            </p>
            <p>
              <strong>研究室:</strong> 西田研究室
            </p>
            <p>
              <strong>指導教官:</strong> 西田昌史
            </p>
            <p>
              <strong>研究内容:</strong> 日常生活における食事と会話の自動認識モデルの研究開発に取り組みました。うつ病や嚥下障害の早期発見への応用を目指し、食行動認識という未開拓な分野に挑戦。先行研究が限られる中、音声認識など関連分野の知見を幅広く取り入れ、小規模な検証を素早く繰り返すアプローチで効率的に研究を進めました。限られた計算リソースの中で、仮説検証から改善までのサイクルを何度も回すことで最適解を追求する重要性を学びました。
            </p>
          </section>

          {/* 実績 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">実績</h3>
            <p className="mb-2">
              <strong>国内会議発表:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>
                情報処理学会：学生奨励賞 (2024年3月)
                <br />
                「FreeVCを用いた声質変換に基づく咽喉マイク音声認識」 – 塚越駿大, 西田昌史, 西村雅史 (ポスター番号: 2B-7)
              </li>
              <li>
                第6回応用物理学会東海支部学術講演会：発表審査員特別賞 (2018年11月)
                <br />
                “コイルが作る磁場の広がり方についての考察” – 近藤壮馬, 塚越駿大
                <br />
                詳細は&nbsp;
                <a
                  href="https://tokai.jsap.or.jp/encouragement.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  こちら
                </a>
                をご覧ください。
              </li>
            </ul>
            <p className="mb-2">
              <strong>国際会議発表 (査読あり):</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                IEEE 13th Global Conference on Consumer Electronics (GCCE 2024)
                <br />
                Excellent Poster Awards – Outstanding Prize 受賞
                <br />
                採択論文: &quot;Simultaneous Speech and Eating Behavior Recognition Using Multitask Learning&quot;
                <br />
                詳細は&nbsp;
                <a
                  href="https://www.researchgate.net/publication/385688780_Simultaneous_Speech_and_Eating_Behavior_Recognition_Using_Multitask_Learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  こちら
                </a>
                をご覧ください。
              </li>
              <li>
                Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC 2024)
                <br />
                採択論文: &quot;SSL-based Chewing and Swallowing Detection Using Multiple Skin-contact Microphones&quot;
                <br />
                詳細は&nbsp;
                <a
                  href="https://www.researchgate.net/publication/388424419_SSL-based_Chewing_and_Swallowing_Detection_Using_Multiple_Skin-contact_Microphones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  こちら
                </a>
                をご覧ください。
              </li>
            </ul>
          </section>

          {/* 教育活動 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">教育活動</h3>
            <p>
              ・静岡大学情報学部授業「創造的プログラミング」の授業資料作成
            </p>
          </section>

          {/* 共同研究・技術協力 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">共同研究・技術協力</h3>
            <p>
              ・医療用自動問診システムの開発および (株)シルバコンパスへの技術相談（2023年12月～2024年1月）
            </p>
          </section>

          {/* 学内記事・取材 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">学内記事・取材</h3>
            <p>
              ・国際会議 GCCE にて、西田研究室修士1年の塚越駿大が Excellent Poster Award を受賞しました。詳細は&nbsp;
              <a
                href="https://www.inf.shizuoka.ac.jp/news/3514/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                こちら
              </a>
              をご覧ください。
            </p>
            <p>
              ・情報処理学会第86回全国大会にて、西田研究室の学生3名、綱川研究室の学生1名が学生奨励賞を受賞しました。詳細は&nbsp;
              <a
                href="https://www.inf.shizuoka.ac.jp/news/1307/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                こちら
              </a>
              をご覧ください。
            </p>
            <p>
              ・FM AICHI、ならびに中電シーティーアイ Welcome Generationでの取材を受けました。詳細は&nbsp;
              <a
                href="https://fma.co.jp/f/prg/welcomegeneration/?y=2024&m=10"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                こちら
              </a>
              からご確認いただけます。
            </p>
          </section>

          {/* インターンシップ */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">インターンシップ</h3>
            <p>
              ・学校法人角川ドワンゴ学園 N/S 高等学校 通学コースにおいて、キャンパス運営、授業サポート、コーチングの実習を経験。
            </p>
            <p>
              ・日立製作所 中央研究所でのインターンシップ経験あり。
            </p>
          </section>

          {/* 目標 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">目標</h3>
            <p>
              音声・音響技術を通じて人々の生活の質向上に貢献し、研究成果を実社会へ応用するための新たな挑戦や協力の機会を積極的に追求していきます。
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
