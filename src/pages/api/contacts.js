// src/pages/api/contact.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      // ここでメール送信やデータベースへの保存を行います
      // 例: Nodemailerを使用してメール送信
      res.status(200).json({ message: 'お問い合わせを受け付けました。' });
    } else {
      res.status(405).json({ message: 'メソッドが許可されていません。' });
    }
  }
  