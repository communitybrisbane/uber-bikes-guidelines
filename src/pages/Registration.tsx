
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import RegistrationGuide from '../components/RegistrationGuide';
import Support from '../components/Support';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>登録方法 | Uber Eats配達員登録ガイド | community_brisbane</title>
        <meta name="description" content="ブリスベンでのUber Eats配達員登録方法を詳しく解説。必要書類からABN取得まで、ワーキングホリデー向けの完全ガイド。" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div className="pt-24 pb-12 bg-uber-lightGray">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Uber Eats配達員登録方法</h1>
              <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
                ワーキングホリデーでオーストラリアに滞在中の方向けに、Uber Eats配達員の登録方法を詳しく解説します。
              </p>
            </div>
          </div>
          <RegistrationGuide />
          <Support />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Registration;
