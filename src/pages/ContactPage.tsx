
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
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
                登録方法のご質問や、活動中のサポートなど、お気軽にお問い合わせください。
              </p>
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
