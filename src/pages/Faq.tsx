
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { ChevronDown } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = React.useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  const faqs = [
    {
      question: "Uber Eats配達員になるための条件はありますか？",
      answer: "18歳以上であることが基本条件です。また、ワーキングホリデービザ保持者の場合、就労が認められています。配達手段（自転車や電動自転車）があること、スマートフォンを持っていることも必要です。"
    },
    {
      question: "登録から稼働開始までどのくらいかかりますか？",
      answer: "一般的に7〜14日程度かかります。クライムチェック（約3日）、ABN取得（TFNがあれば即日〜数日）、配達バッグの到着（約4日）などの各プロセスによって変わります。"
    },
    {
      question: "Tax File Number(TFN)の申請方法は？",
      answer: "オーストラリア税務局(ATO)のウェブサイトからオンラインで申請できます。申請完了後、郵送で通知が届くまで10〜28日ほどかかります。なるべく早めに申請することをおすすめします。"
    },
    {
      question: "ABNの取得は難しいですか？",
      answer: "TFNを持っていれば、オンラインで比較的簡単に申請できます。Australian Business Registerのウェブサイトから申請でき、多くの場合即日〜数日で取得できます。"
    },
    {
      question: "配達バッグはどこで購入できますか？",
      answer: "Uber Eats公式サイトからオンラインで購入できます。また、Amazonなどのオンラインショップでも購入可能ですが、Uber Eatsのロゴ入りの公式バッグを使用することが推奨されています。"
    },
    {
      question: "ワーキングホリデービザでの就労制限はありますか？",
      answer: "Uber Eats配達員は独立請負業者（Individual Contractor）として扱われるため、6ヶ月の就労制限は適用されません。ただし、税金の申告は必要です。"
    },
    {
      question: "英語が不安ですが、配達はできますか？",
      answer: "基本的な英語力があれば問題ありません。配達は主にアプリ上での操作で完結し、レストランや顧客とのやり取りも最小限です。シンプルな英語フレーズを覚えておくと安心です。"
    },
    {
      question: "自転車がなくても登録できますか？",
      answer: "登録自体は可能ですが、実際に配達を始めるには自転車か電動自転車が必要です。ブリスベンでは中古自転車が$100〜200程度から購入できます。"
    },
    {
      question: "紹介コードの入力を忘れました。後から追加できますか？",
      answer: "残念ながら、紹介コードは新規アカウント作成時にのみ入力可能で、後から追加することはできません。この場合、新しいメールアドレスで再登録する必要があります。"
    },
    {
      question: "配達中のトラブル（注文キャンセルなど）はどう対応すればいいですか？",
      answer: "アプリ内のサポート機能を使って対応します。また、community_brisbaneのInstagramアカウントでもサポートを受けられますので、困ったことがあればお気軽にご連絡ください。"
    }
  ];

  return (
    <>
      <Helmet>
        <title>よくある質問 | Uber Eats配達員登録ガイド | community_brisbane</title>
        <meta name="description" content="Uber Eats配達員登録に関するよくある質問と回答。ワーキングホリデーでの就労条件やTFN、ABN取得についても解説。" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div className="pt-24 pb-12 bg-uber-lightGray">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">よくある質問</h1>
              <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
                Uber Eats配達員登録や活動に関する疑問にお答えします。
              </p>
            </div>
          </div>

          <section className="section-container bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="glass-panel rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleQuestion(index)}
                    >
                      <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                      <ChevronDown 
                        className={`text-uber-green transition-transform duration-300 ${
                          openQuestion === index ? 'transform rotate-180' : ''
                        }`} 
                        size={20} 
                      />
                    </button>
                    <div 
                      className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                        openQuestion === index 
                          ? 'max-h-96 opacity-100 pb-6' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg mb-6">
                  その他の質問がある場合は、お気軽にお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="https://instagram.com/community_brisbane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="uber-button"
                  >
                    Instagramでメッセージする
                  </a>
                  <a 
                    href="#contact" 
                    className="uber-outline-button"
                  >
                    お問い合わせフォームへ
                  </a>
                </div>
              </div>
            </div>
          </section>

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Faq;
