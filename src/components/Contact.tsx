
import { Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-container bg-white" id="contact">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title mx-auto w-fit after:mx-auto">
          お問い合わせ
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Uber Eats配達員登録や活動に関するご質問は、Instagramからお気軽にお問い合わせください。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="glass-panel rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">お問い合わせ方法</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-uber-green/10 p-3 rounded-full">
                    <Instagram size={24} className="text-uber-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Instagram</h4>
                    <p className="text-gray-600 mb-2">唯一の連絡手段です</p>
                    <a 
                      href="https://instagram.com/community_brisbane" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-uber-green font-medium hover:underline"
                    >
                      @community_brisbane
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-lg mb-4">重要なお知らせ</h4>
                <p className="text-gray-600 mb-4">
                  community_brisbaneは基本的にサポートを行いません。当サイトの情報は参考用としてご利用ください。
                </p>
                <p className="text-gray-600 mb-4">
                  よくある質問はFAQページにまとめています。
                  まずはそちらをご確認ください。
                </p>
                <a 
                  href="/faq" 
                  className="uber-outline-button inline-block"
                >
                  FAQを見る
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-uber-black text-white rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">紹介コード</h3>
              
              <div className="bg-white/10 p-6 rounded-lg mb-6 border border-white/20">
                <h4 className="font-bold text-xl mb-4">登録時に必ず入力！</h4>
                <div className="bg-uber-green p-4 rounded-md text-center mb-4">
                  <p className="text-white font-mono text-xl font-bold tracking-wider">353ebz8exhf7</p>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  このコードを入力することで、<span className="font-bold text-uber-green">$500の特典</span>を受け取ることができます。
                </p>
                <p className="text-white/90 text-sm">
                  ※ 登録時に入力しないと後から追加することはできません。
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-white/90">
                  紹介コードについての詳細は、紹介コードページをご覧ください。
                </p>
                <a 
                  href="/referral-code" 
                  className="w-full bg-uber-green text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-uber-black inline-block text-center"
                >
                  紹介コードについて詳細を見る
                </a>
              </div>
              
              <p className="mt-6 text-sm text-white/70">
                ※ お問い合わせは必ずInstagram（@community_brisbane）からお願いします。
                その他の連絡手段では対応いたしかねます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
