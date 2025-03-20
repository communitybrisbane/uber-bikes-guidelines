
import { Instagram, Users, Globe, MessageSquare, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section className="section-container bg-gradient-to-b from-white to-uber-lightGray" id="contact">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-uber-black">
          <span className="text-gradient bg-gradient-to-r from-uber-green to-uber-blue">お問い合わせ</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          お気軽にご連絡ください
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="glass-panel rounded-xl p-8 h-full shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-uber-black">お問い合わせ方法</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-uber-green/10 p-3 rounded-full">
                    <Instagram size={24} className="text-uber-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Instagram</h4>
                    <p className="text-gray-600 mb-2">お気軽にご連絡ください</p>
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
            <div className="bg-uber-black text-white rounded-xl p-8 h-full shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6">community_brisbane について</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                    <Users size={22} className="text-uber-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">国際交流イベント</h4>
                    <p className="text-white/80">様々な国の人と交流できるイベントを定期的に開催しています</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                    <Calendar size={22} className="text-uber-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">BBQや日本文化イベント</h4>
                    <p className="text-white/80">オーストラリアでの日本文化紹介や現地の文化を楽しむイベントを開催</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                    <MessageSquare size={22} className="text-uber-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">言語交換</h4>
                    <p className="text-white/80">英語や日本語を学びたい人向けの言語交換の機会を提供しています</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <a 
                    href="https://instagram.com/community_brisbane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-uber-green text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-uber-black inline-block text-center"
                  >
                    Instagramで詳細を見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
