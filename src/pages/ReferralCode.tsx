
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { Gift, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ReferralCode = () => {
  return (
    <>
      <Helmet>
        <title>紹介コード | Uber Eats配達員登録ガイド | community_brisbane</title>
        <meta name="description" content="Uber Eats配達員登録で$500ボーナスがもらえる紹介コードの使い方と注意点をご紹介。" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div className="pt-24 pb-12 bg-uber-lightGray">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">紹介コード</h1>
              <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
                Uber Eats配達員登録時に紹介コードを入力すると、$500のボーナスがもらえます！
              </p>
            </div>
          </div>

          <section className="section-container bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-panel rounded-xl p-8 hover:shadow-glass-hover transition-all duration-300">
                  <div className="w-16 h-16 bg-uber-green/10 rounded-full flex items-center justify-center mb-6">
                    <Gift size={32} className="text-uber-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">紹介コードとは？</h3>
                  <p className="text-gray-700 mb-4">
                    既存のUber Eats配達員が持つ固有のコードで、新規登録時に入力すると、条件達成時に両者にボーナスが付与されるシステムです。
                  </p>
                  <div className="bg-uber-green/10 p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">ボーナス額</h4>
                    <p className="text-3xl font-bold text-uber-green">$500</p>
                    <p className="text-sm text-gray-600">※条件達成後に付与</p>
                  </div>
                </div>

                <div className="glass-panel rounded-xl p-8 hover:shadow-glass-hover transition-all duration-300">
                  <div className="w-16 h-16 bg-uber-green/10 rounded-full flex items-center justify-center mb-6">
                    <Clock size={32} className="text-uber-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">ボーナス受取の条件</h3>
                  <p className="text-gray-700 mb-4">
                    紹介コードを入力した後、一定期間内に指定された配達回数を達成すると、ボーナスが付与されます。
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-uber-green mr-2 mt-1 flex-shrink-0" />
                      <span>30日以内に100配達を達成</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-uber-green mr-2 mt-1 flex-shrink-0" />
                      <span>アカウントが有効な状態を維持</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-uber-green mr-2 mt-1 flex-shrink-0" />
                      <span>登録時に正しく紹介コードを入力</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="glass-panel rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <AlertTriangle size={24} className="text-amber-500 mr-3" />
                  <span>紹介コード入力の注意点</span>
                </h3>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-amber-800 mb-2">重要！</h4>
                  <p className="text-amber-700">
                    紹介コードは<strong>アカウント作成時</strong>にのみ入力できます。登録後に追加することはできないため、必ず最初のステップで入力してください。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold mb-2 text-uber-green">入力タイミング</h4>
                    <p>アプリをダウンロードして、最初のアカウント登録画面で「招待コード」の欄に入力します。</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold mb-2 text-uber-green">入力できなかった場合</h4>
                    <p>一度登録を中断し、再度新しいメールアドレスで登録し直す必要があります。</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-8 inline-block">
                  <h3 className="text-2xl font-bold mb-4">有効な紹介コード</h3>
                  <div className="bg-uber-black text-white text-2xl font-mono py-4 px-8 rounded-lg">
                    CBRIS2024
                  </div>
                  <p className="text-sm text-gray-500 mt-2">※ 2024年6月現在有効なコードです</p>
                </div>

                <p className="text-lg mb-6">
                  最新の紹介コードや詳細について、お気軽にお問い合わせください。
                </p>
                
                <a 
                  href="https://instagram.com/community_brisbane" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="uber-button"
                >
                  Instagramで最新情報をチェック
                </a>
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

export default ReferralCode;
