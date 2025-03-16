
import React from 'react';
import { Helmet } from 'react-helmet';
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
