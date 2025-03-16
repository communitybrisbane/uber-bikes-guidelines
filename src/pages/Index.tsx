
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RegistrationGuide from '../components/RegistrationGuide';
import EarningsTips from '../components/EarningsTips';
import IncomeBreakdown from '../components/IncomeBreakdown';
import Support from '../components/Support';
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
          
          <section className="bg-uber-lightGray py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">詳しい情報を見る</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/registration" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3">登録方法</h3>
                  <p className="text-gray-600 mb-4">Uber Eats配達員になるための詳しい登録手順を解説します。</p>
                  <span className="text-uber-green font-medium">詳細を見る →</span>
                </Link>
                
                <Link to="/earning-tips" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3">稼ぎ方のコツ</h3>
                  <p className="text-gray-600 mb-4">効率よく稼ぐための時間帯やエリア選びのコツをご紹介します。</p>
                  <span className="text-uber-green font-medium">詳細を見る →</span>
                </Link>
                
                <Link to="/success-stories" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3">成功事例</h3>
                  <p className="text-gray-600 mb-4">実際に活動している配達員の体験談と収入事例を紹介します。</p>
                  <span className="text-uber-green font-medium">詳細を見る →</span>
                </Link>
                
                <Link to="/referral-code" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3">紹介コード</h3>
                  <p className="text-gray-600 mb-4">$500ボーナスがもらえる紹介コードの使い方と注意点。</p>
                  <span className="text-uber-green font-medium">詳細を見る →</span>
                </Link>
                
                <Link to="/faq" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3">よくある質問</h3>
                  <p className="text-gray-600 mb-4">Uber Eats配達員登録や活動に関する疑問にお答えします。</p>
                  <span className="text-uber-green font-medium">詳細を見る →</span>
                </Link>
                
                <Link to="/contact" className="glass-panel hover:shadow-glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3">お問い合わせ</h3>
                  <p className="text-gray-600 mb-4">質問やサポートのご依頼は、お気軽にお問い合わせください。</p>
                  <span className="text-uber-green font-medium">詳細を見る →</span>
                </Link>
              </div>
            </div>
          </section>
          
          <RegistrationGuide />
          <EarningsTips />
          <IncomeBreakdown />
          <Support />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
