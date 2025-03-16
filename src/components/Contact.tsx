
import { Instagram, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-container bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title mx-auto w-fit after:mx-auto">
          お問い合わせ
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Uber Eats配達員登録や活動に関するご質問は、お気軽にお問い合わせください。
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
                    <p className="text-gray-600 mb-2">最も早い返信が可能です</p>
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
                
                <div className="flex items-start space-x-4">
                  <div className="bg-uber-blue/10 p-3 rounded-full">
                    <Mail size={24} className="text-uber-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">メール</h4>
                    <p className="text-gray-600 mb-2">24時間以内に返信いたします</p>
                    <a 
                      href="mailto:contact@communitybrisbane.com.au" 
                      className="text-uber-blue font-medium hover:underline"
                    >
                      contact@communitybrisbane.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-uber-black/10 p-3 rounded-full">
                    <MessageSquare size={24} className="text-uber-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">LINE</h4>
                    <p className="text-gray-600 mb-2">プライベートなご質問に</p>
                    <p className="text-gray-800 font-medium">
                      ID: community_brisbane
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-lg mb-4">よくあるご質問</h4>
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
              <h3 className="text-2xl font-bold mb-6">お問い合わせフォーム</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    お名前
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-uber-green"
                    placeholder="例: 山田太郎" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    メールアドレス
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-uber-green"
                    placeholder="例: example@mail.com" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    件名
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-uber-green"
                    placeholder="例: 登録方法について" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    メッセージ
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-uber-green resize-none"
                    placeholder="ご質問内容を入力してください" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-uber-green text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-uber-black"
                >
                  送信する
                </button>
              </form>
              
              <p className="mt-6 text-sm text-white/70">
                ※ お問い合わせいただいてから24時間以内に返信いたします。
                返信がない場合は、お手数ですがInstagramからご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
