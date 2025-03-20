
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RegistrationGuide from '../components/RegistrationGuide';
import Footer from '../components/Footer';

const Registration = () => {
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Registration;
