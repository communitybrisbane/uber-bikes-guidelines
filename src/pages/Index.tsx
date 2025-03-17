
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Smartphone, FileCheck, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Uber Eats配達員登録ガイド | community_brisbane</title>
        <meta name="description" content="オーストラリア・ブリスベンでのUber Eats配達員登録方法と効率的な稼ぎ方のガイド。ワーキングホリデー向けの情報が満載。" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop" 
                alt="オーストラリアの風景" 
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Uber Eatsで自由な働き方を実現</h2>
              <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
                好きな時間に働ける！スキマ時間に最適！迷ったらとりあえず登録！
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/registration" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="text-uber-green" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">登録は簡単！すぐに収入UP</h3>
                  <p className="text-gray-600">Uber Eats配達員になるための詳しい登録手順を解説します。</p>
                </Link>
                
                <Link to="/earning-tips" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-uber-green" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">スキマ時間の有効活用</h3>
                  <p className="text-gray-600">効率よく稼ぐための時間帯やエリア選びのコツをご紹介します。</p>
                </Link>
                
                <Link to="/success-stories" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-uber-green" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">成功事例</h3>
                  <p className="text-gray-600">実際に活動している配達員の体験談と収入事例を紹介します。</p>
                </Link>
                
                <Link to="/referral-code" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="text-uber-green" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">$500ボーナスをGET</h3>
                  <p className="text-gray-600">$500ボーナスがもらえる紹介コードの使い方と注意点。</p>
                </Link>
                
                <Link to="/faq" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uber-green"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">よくある質問</h3>
                  <p className="text-gray-600">Uber Eats配達員登録や活動に関する疑問にお答えします。</p>
                </Link>
                
                <Link to="/contact" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uber-green"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">お問い合わせ</h3>
                  <p className="text-gray-600">質問やサポートのご依頼は、お気軽にお問い合わせください。</p>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-uber-lightGray relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1524293568345-75d62c3664f7?q=80&w=2070&auto=format&fit=crop" 
                alt="シドニーオペラハウス" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-4">紹介コードで$500ボーナス</h2>
                <p className="text-lg text-center mb-6">登録時に紹介コードを入力することで特典を受け取れます</p>
                <div className="bg-uber-green/10 p-4 rounded-md text-center mb-4">
                  <p className="text-uber-green font-mono text-2xl font-bold tracking-wider">353ebz8exhf7</p>
                </div>
                <p className="text-center text-gray-600 text-sm">※ 登録時に入力しないと後から追加することはできません</p>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Uber Eats配達員登録の流れ</h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="glass-panel rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-uber-green rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">1</div>
                      <h3 className="text-xl font-bold">アプリ内の手続き</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ArrowRight className="text-uber-green mt-1 mr-2 flex-shrink-0" size={16} />
                        <p>アカウント作成（メール、電話番号登録）</p>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-uber-green mt-1 mr-2 flex-shrink-0" size={16} />
                        <p>紹介コード入力（特典$500獲得）</p>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-uber-green mt-1 mr-2 flex-shrink-0" size={16} />
                        <p>身分証明書のアップロード（パスポート）</p>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-uber-green mt-1 mr-2 flex-shrink-0" size={16} />
                        <p>銀行口座情報の登録（報酬受取用）</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass-panel rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-uber-green rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">2</div>
                      <h3 className="text-xl font-bold">アプリ外の手続き</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ArrowRight className="text-uber-green mt-1 mr-2 flex-shrink-0" size={16} />
                        <div>
                          <p className="font-medium">TFN取得（個人納税番号）</p>
                          <p className="text-sm text-gray-600">10〜28日かかるので早めに申請</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-uber-green mt-1 mr-2 flex-shrink-0" size={16} />
                        <div>
                          <p className="font-medium">ABN取得（事業者番号）</p>
                          <p className="text-sm text-gray-600">TFN必須、即日〜数日で取得可能</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-uber-green mt-1 mr-2 flex-shrink-0" size={16} />
                        <div>
                          <p className="font-medium">クライムチェック（犯罪歴確認）</p>
                          <p className="text-sm text-gray-600">費用約$40、完了まで約3日</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-16">
                  <div className="inline-block bg-uber-green/10 p-6 rounded-xl border border-uber-green/30">
                    <p className="text-lg font-bold mb-2">配達開始までの期間：<span className="text-uber-green">約7〜14日</span></p>
                    <p className="text-gray-600">TFN申請を早めに行うことで、配達開始までの期間を短縮できます</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-uber-lightGray">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Uber Eatsの魅力</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="glass-panel rounded-xl p-6 text-center">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-uber-green" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">好きな時間に働ける</h3>
                  <p className="text-gray-600">シフトの縛りなし！自分の都合に合わせて自由に稼働できます。</p>
                </div>
                
                <div className="glass-panel rounded-xl p-6 text-center">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="text-uber-green" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">登録は簡単！</h3>
                  <p className="text-gray-600">オンライン手続きがメインで、書類も最小限。簡単に始められます。</p>
                </div>
                
                <div className="glass-panel rounded-xl p-6 text-center">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="text-uber-green" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">スキマ時間に最適</h3>
                  <p className="text-gray-600">空いた時間だけでも稼働OK！副業として最適です。</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/registration" 
                  className="uber-button text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  今すぐ登録する
                </Link>
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

export default Index;
