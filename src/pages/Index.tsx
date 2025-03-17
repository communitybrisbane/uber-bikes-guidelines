
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RegistrationGuide from '../components/RegistrationGuide';
import EarningsTips from '../components/EarningsTips';
import IncomeBreakdown from '../components/IncomeBreakdown';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Uber Eatsで新しい可能性を</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/registration" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uber-green"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">登録方法</h3>
                  <p className="text-gray-600">Uber Eats配達員になるための詳しい登録手順を解説します。</p>
                </Link>
                
                <Link to="/earning-tips" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uber-green"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">稼ぎ方のコツ</h3>
                  <p className="text-gray-600">効率よく稼ぐための時間帯やエリア選びのコツをご紹介します。</p>
                </Link>
                
                <Link to="/success-stories" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uber-green"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">成功事例</h3>
                  <p className="text-gray-600">実際に活動している配達員の体験談と収入事例を紹介します。</p>
                </Link>
                
                <Link to="/referral-code" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-uber-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uber-green"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">紹介コード</h3>
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
          
          <RegistrationGuide />
          <EarningsTips />
          <IncomeBreakdown />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
