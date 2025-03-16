
import { MessageSquare, Instagram, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <section className="section-container bg-uber-lightGray">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title mx-auto w-fit after:mx-auto">
          登録後のサポートもお任せください！
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Uber Eats配達員としての活動をしっかりサポート。
          登録時のトラブルから、稼働中の疑問まで、気軽にご相談ください。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-xl p-8 transition-all duration-300 hover:shadow-glass-hover">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-uber-green/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare size={32} className="text-uber-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2">登録時のサポート</h3>
                <p className="text-gray-600">
                  登録手続きで困ったことがあれば、いつでもご相談ください。
                  書類の準備から申請方法まで、丁寧にサポートします。
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="bg-uber-green/10 rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-2">よくあるご相談</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-uber-green mt-1 mr-2 flex-shrink-0" />
                      <span>ABN取得の手続き方法について</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-uber-green mt-1 mr-2 flex-shrink-0" />
                      <span>クライムチェックの支払い方法について</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-uber-green mt-1 mr-2 flex-shrink-0" />
                      <span>配達バッグはどこで購入するべきか</span>
                    </li>
                  </ul>
                </div>
                
                <a 
                  href="https://instagram.com/community_brisbane" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="uber-button inline-flex items-center w-full justify-center"
                >
                  <Instagram size={20} className="mr-2" />
                  <span>Instagramでメッセージする</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl p-8 transition-all duration-300 hover:shadow-glass-hover">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-uber-blue/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare size={32} className="text-uber-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2">活動中のサポート</h3>
                <p className="text-gray-600">
                  配達中のトラブルや効率的な稼ぎ方のアドバイスなど、
                  実際の活動中に発生する疑問にもお答えします。
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="bg-uber-blue/10 rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-2">サポート内容</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-uber-blue mt-1 mr-2 flex-shrink-0" />
                      <span>効率的な配達エリアのアドバイス</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-uber-blue mt-1 mr-2 flex-shrink-0" />
                      <span>配達中のトラブル対応方法</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-uber-blue mt-1 mr-2 flex-shrink-0" />
                      <span>収入を最大化するためのコツ</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  to="/contact" 
                  className="uber-secondary-button inline-flex items-center w-full justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  <span>お問い合わせフォームへ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-uber-black rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">コミュニティに参加しよう</h3>
          <p className="text-lg mb-6">
            ブリスベンで働く日本人Uber Eats配達員のコミュニティに参加して、
            最新情報やコツを共有しましょう！
          </p>
          <a 
            href="https://instagram.com/community_brisbane" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-uber-black font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors"
          >
            Instagramでフォローする
          </a>
        </div>
      </div>
    </section>
  );
};

export default Support;
