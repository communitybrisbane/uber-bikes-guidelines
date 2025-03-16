
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
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
        <title>お問い合わせ | Uber Eats配達員登録ガイド | community_brisbane</title>
        <meta name="description" content="Uber Eats配達員登録に関するご質問やサポートのご依頼は、お気軽にお問い合わせください。" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div className="pt-24 pb-12 bg-uber-lightGray">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">お問い合わせ</h1>
              <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
                登録方法のご質問などは、Instagram(@community_brisbane)からお気軽にお問い合わせください。
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto my-12 px-4">
            <div className="bg-uber-green/10 p-6 rounded-xl border border-uber-green/30 text-center">
              <h2 className="text-2xl font-bold mb-4">紹介コード</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="font-bold text-lg mb-3">登録時に必ず入力してください！</p>
                <div className="bg-uber-green p-4 rounded-md mb-4">
                  <p className="text-white font-mono text-2xl font-bold tracking-wider">353ebz8exhf7</p>
                </div>
                <p className="text-gray-700 mb-3">
                  このコードを入力することで、<span className="font-bold text-uber-green">$500の特典</span>を受け取ることができます。
                </p>
                <p className="text-red-500 text-sm font-semibold">
                  ※ 登録時に入力しないと後から追加することはできません！
                </p>
              </div>
            </div>
          </div>

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
