import React from 'react';

export default function About() {
  return (
    <section id="profile" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">私について</h2>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto space-y-8">

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
              <strong>指導教官:</strong> 西田昌史, 西村雅史
            </p>
            <p>
              <strong>研究内容:</strong> 日常生活における食事と会話の自動認識モデルの研究開発に取り組みました。
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
              <strong>指導教官:</strong> 西田昌史, 西村雅史
            </p>
            <p>
              <strong>研究内容:</strong> 雑音環境下での音声認識性能向上を目指し、皮膚接触型マイクの音響特徴を一般的なマイク特徴へ変換するモデルを構築しました。
            </p>
          </section>

          {/* 受賞歴 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">受賞歴</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>2024 IEEE 13th Global Conference on Consumer Electronics (GCCE) Excellent Poster Award – Outstanding Prize</strong>
                <br />“Simultaneous Speech and Eating Behavior Recognition Using Multitask Learning”<br />Toshihiro Tsukagoshi, Masafumi Nishida, Masafumi Nishimura
              </li>
              <li>
                <strong>情報処理学会第87回全国大会 学生奨励賞</strong> (2025年3月) - “飲酒が発話行動に与える影響の分析と評価”
              </li>
              <li>
                <strong>情報処理学会第86回全国大会 学生奨励賞</strong> (2024年3月) - “FreeVCを用いた声質変換に基づく咽喉マイク音声認識”
              </li>
              <li>
                <strong>第6回応用物理学会東海支部学術講演会 発表審査員特別賞</strong> (2018年11月) - “コイルが作る磁場の広がり方についての考察”
              </li>
            </ul>
          </section>

          {/* 教育活動・ボランティア */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">教育活動・ボランティア</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                静岡大学 情報学部「創造的プログラミング」<br />
                授業資料作成・TAサポート（2024年度・2025年度）
              </li>
              <li>
                静岡大学 情報学部「アカデミックリテラシー」授業 TA（2025年度）
              </li>
              <li>
                静岡大学オープンキャンパス 学生トークショー出演（2024年）
              </li>
            </ul>
          </section>

          {/* 共同研究・技術協力 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">共同研究・技術協力</h3>
            <p>・医療用自動問診システムの開発、株式会社シルバコンパスへの技術相談（2023年12月～2024年1月）</p>
          </section>

          {/* インターンシップ */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">インターンシップ</h3>
            <ul className="list-disc list-inside ml-4 space-y-4">
              <li>
                <strong>学校法人角川ドワンゴ学園 N/S 高等学校 通学コース</strong><br />
                実習内容：キャンパス運営および授業サポート、コーチング
              </li>
              <li>
                <strong>日本電気株式会社 (NEC)</strong><br />
                実習内容：生成AIを活用した社内コーポレートの企画
              </li>
              <li>
                <strong>日立製作所</strong><br />
                実習内容：【研究開発】音声/音響/時系列信号AIと基盤モデルに関する研究開発
              </li>
            </ul>
          </section>

          {/* 論文・発表 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">Journal</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Tsukagoshi, T.; Nishida, M.; Nishimura, M. Simultaneous Speech and Eating Behavior Recognition Using Data Augmentation and Two-Stage Fine-Tuning. <em>MDPI Sensors</em>, 2 March 2025.
                <a href="/papers/Simultaneous Speech and Ea...d Two-Stage Fine-Tuning.pdf" target="_blank" rel="noopener noreferrer" className="underline ml-2">[PDF]</a>
              </li>
            </ul>
          </section>


          <section>
            <h3 className="text-2xl font-semibold mb-2">Journal</h3>
              <ul className="list-disc list-inside ml-4">
                <li>
                  塚越駿大, 松田将典, 朝田圭, 石鍋菜々子, 梶原芳典, 山本泰生, 西村雅史, “飲酒が発話行動に与える影響の分析と評価”, 情報処理学会第87回全国大会, 1ZB-05, 2025年3月.
                </li>
                <li>
                  小祝和寛, 竹内麻衣, 塚越駿大, 松田将典, 朝田圭, 石鍋菜々子, 梶原芳典, 山本泰生, 西村雅史, “飲酒が発話行動に与える影響の分析と評価”, 情報処理学会第87回全国大会, 1T-08, 2025年3月.
                </li>
                <li>
                  Tsukagoshi, T.; Koiwai, K.; Nishida, M.; Nishimura, M. Simultaneous Speech and Eating Behavior Recognition Using Multitask Learning. In Proceedings of IEEE GCCE 2024, 北九州, 日本, 2024年10月29日～11月1日.
                  <a href="/papers/Simultaneous Speech and Ea...Using Multitask Learning.pdf" target="_blank" rel="noopener noreferrer" className="underline ml-2">[PDF]</a>
                </li>
                <li>
                  Tsukagoshi, T.; Koiwai, K.; Nishida, M.; Nishimura, M. SSL-based Chewing and Swallowing Detection Using Multiple Skin-Contact Microphones. In Proceedings of APSIPA ASC 2024, マカオ, 中国, 2024年12月3日～6日.
                  <a href="/papers/SSL-based Chewing and Swa...le Skin-contact Microphones.pdf" target="_blank" rel="noopener noreferrer" className="underline ml-2">[PDF]</a>
                </li>
                <li>
                  Koiwai, K.; Tsukagoshi, T.; Nishida, M.; Nishimura, M. Improved Performance of a CA-SSL-based Daily Eating Sounds Recognition Model. 16th International Conference on Smart Computing and Artificial Intelligence (SCAI 2024-Winter), 2025年1月.
                  <a href="/papers/ImprovedPerformanceofaCA-...onModel_IEEEpdfeXpress.pdf" target="_blank" rel="noopener noreferrer" className="underline ml-2">[PDF]</a>
                </li>
                <li>
                  塚越駿大, 西田昌史, 西村雅史, “FreeVCを用いた声質変換に基づく咽喉マイク音声認識”, 第21回情報学ワークショップ (WiNF2023), 2B-7, 2023年12月.
                  <a href="/papers/FreeVCを用いた声質変換に基づく咽喉マイク音声認識.pdf" target="_blank" rel="noopener noreferrer" className="underline ml-2">[PDF]</a>
                </li>
                <li>
                  塚越駿大, 西田昌史, 西村雅史, “声質変換を用いたデータ拡張に基づく咽喉マイク音声認識”, 情報処理学会第86回全国大会, 1R-02, 2024年3月.
                  <a href="/papers/声質変換を用いたデータ拡張に基づく咽喉マイク音声認識.pdf" target="_blank" rel="noopener noreferrer" className="underline ml-2">[PDF]</a>
                </li>
                <li>
                  近藤壮馬, 塚越駿大, “コイルが作る磁場の広がり方についての考察”, 第6回応用物理学会東海支部学術講演会, November 2018.
                </li>
            </ul>
          </section>

          {/* 特許 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">特許</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>開眼度で酔いレベルを推定する技術</strong> [出願番号: 特願2025-24149] (2025年2月18日)
              </li>
            </ul>
          </section>

          {/* 学内記事・取材 */}
          <section>
            <h3 className="text-2xl font-semibold mb-2">学内記事・取材</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>情報処理学会第87回全国大会 学生奨励賞受賞の記事: <a href="https://www.inf.shizuoka.ac.jp/news/3985/" target="_blank" rel="noopener noreferrer" className="underline">こちら</a></li>
              <li>国際会議 GCCE Excellent Poster Award 受賞の記事: <a href="https://www.inf.shizuoka.ac.jp/news/3514/" target="_blank" rel="noopener noreferrer" className="underline">こちら</a></li>
              <li>情報処理学会第86回全国大会 学生奨励賞受賞の記事: <a href="https://www.inf.shizuoka.ac.jp/news/1307/" target="_blank" rel="noopener noreferrer" className="underline">こちら</a></li>
              <li>FM AICHI・中電シーティーアイ Welcome Generation 取材: <a href="https://fma.co.jp/f/prg/welcomegeneration/?y=2024&m=10" target="_blank" rel="noopener noreferrer" className="underline">こちら</a></li>
            </ul>
          </section>

        </div>
      </div>
    </section>
  );
}
