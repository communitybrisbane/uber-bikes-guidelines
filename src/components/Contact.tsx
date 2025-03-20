
import { Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-container bg-white" id="contact">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title mx-auto w-fit after:mx-auto">
          お問い合わせ
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          お気軽にご連絡ください
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
                    <p className="text-gray-600 mb-2">間違いやご不明点がある場合のみ</p>
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
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-uber-black text-white rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">講習で分かること</h3>
              
              <div className="bg-white/10 p-6 rounded-lg mb-6 border border-white/20">
                <h4 className="font-bold text-xl mb-4">あなたに最適な稼ぎ方</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                    <p>効率よく稼げる時間帯とエリア</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                    <p>収入を最大化するためのコツと戦略</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                    <p>あなたの地域に特化した配達情報</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                    <p>実績データに基づくアドバイス</p>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <p className="text-white/90">
                  1対1の個別講習で、あなたの状況に合わせたアドバイスが受けられます。
                </p>
                <a 
                  href="https://instagram.com/community_brisbane" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-uber-green text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-uber-black inline-block text-center"
                >
                  講習の詳細を見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
