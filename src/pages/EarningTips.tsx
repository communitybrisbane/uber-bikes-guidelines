
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import EarningsTips from '../components/EarningsTips';
import IncomeBreakdown from '../components/IncomeBreakdown';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const EarningTips = () => {
  const location = useLocation();

  // Handle scroll to sections when page loads or hash changes
  useEffect(() => {
    if (location.hash) {
      // Remove the # character
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Wait a bit for the page to render completely
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // Adjust offset as needed
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // Scroll to top when page loads without hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>稼ぎ方のコツ | Uber Eats配達員登録ガイド | community_brisbane</title>
        <meta name="description" content="ブリスベンでUber Eats配達員として効率的に稼ぐ方法。最適な時間帯やエリア選びのコツをご紹介。" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div className="pt-24 pb-12 bg-uber-lightGray">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">効率的な稼ぎ方のコツ</h1>
              <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
                ブリスベンでのUber Eats配達で効率的に稼ぐためのスケジュール例と実践的なアドバイスをご紹介します。
              </p>
            </div>
          </div>
          
          <EarningsTips />
          <IncomeBreakdown />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EarningTips;
