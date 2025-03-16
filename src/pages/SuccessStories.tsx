
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCircle, MessageSquare, TrendingUp } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const SuccessStories = () => {
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
        <title>成功事例 | Uber Eats配達員登録ガイド | community_brisbane</title>
        <meta name="description" content="ブリスベンでUber Eats配達員として成功した日本人の体験談をご紹介。ワーキングホリデーでの収入事例も。" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div className="pt-24 pb-12 bg-uber-lightGray">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">成功事例</h1>
              <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
                実際にブリスベンでUber Eats配達員として活動している方々の体験談をご紹介します。
              </p>
            </div>
          </div>

          <section className="section-container bg-white">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="story1" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="story1" className="flex items-center gap-2">
                    <UserCircle size={20} />
                    <span className="hidden sm:inline">Tさん（25歳）</span>
                    <span className="sm:hidden">Tさん</span>
                  </TabsTrigger>
                  <TabsTrigger value="story2" className="flex items-center gap-2">
                    <UserCircle size={20} />
                    <span className="hidden sm:inline">Kさん（28歳）</span>
                    <span className="sm:hidden">Kさん</span>
                  </TabsTrigger>
                  <TabsTrigger value="story3" className="flex items-center gap-2">
                    <UserCircle size={20} />
                    <span className="hidden sm:inline">Mさん（23歳）</span>
                    <span className="sm:hidden">Mさん</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="story1" className="glass-panel p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Tさん（25歳）の場合</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex flex-col">
                      <div className="bg-uber-lightGray p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <TrendingUp size={18} className="text-uber-green mr-2" />
                          活動パターン
                        </h4>
                        <ul className="space-y-2">
                          <li>週5日、1日5時間稼働</li>
                          <li>主にディナータイム</li>
                          <li>City中心部を中心に配達</li>
                        </ul>
                      </div>
                      <div className="bg-uber-lightGray p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <TrendingUp size={18} className="text-uber-green mr-2" />
                          週間収入
                        </h4>
                        <p className="text-2xl font-bold text-uber-green">約$700-850</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <MessageSquare size={18} className="text-uber-green mr-2" />
                          体験談
                        </h4>
                        <p className="mb-4">
                          「初めは慣れないブリスベンの道に苦戦しましたが、GoogleMapを活用しながら2週間ほどで慣れてきました。夕方から夜にかけての時間帯が特に注文が多く、効率よく稼げています。雨の日は少し大変ですが、報酬が上がるのでそれを狙って出ることもあります。」
                        </p>
                        <p>
                          「語学力に不安がありましたが、配達は基本的にアプリ操作と簡単な英会話だけで済むので、英語初心者でも始めやすいと思います。ワーホリの資金稼ぎとして最適な仕事だと感じています。」
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="story2" className="glass-panel p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Kさん（28歳）の場合</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex flex-col">
                      <div className="bg-uber-lightGray p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <TrendingUp size={18} className="text-uber-green mr-2" />
                          活動パターン
                        </h4>
                        <ul className="space-y-2">
                          <li>週4日、1日7-8時間稼働</li>
                          <li>ランチ+ディナー両方</li>
                          <li>South Bank周辺エリア</li>
                        </ul>
                      </div>
                      <div className="bg-uber-lightGray p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <TrendingUp size={18} className="text-uber-green mr-2" />
                          週間収入
                        </h4>
                        <p className="text-2xl font-bold text-uber-green">約$800-950</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <MessageSquare size={18} className="text-uber-green mr-2" />
                          体験談
                        </h4>
                        <p className="mb-4">
                          「平日のランチタイムは短時間でも効率よく稼げるのがメリットです。私は午前中に語学学校に通っているため、ランチタイムとディナータイムを組み合わせて働いています。」
                        </p>
                        <p>
                          「最初は自転車での配達に不安がありましたが、慣れると良い運動になり、健康的に過ごせています。雨の日は注文が増えるので、雨具をしっかり準備してがんばると稼ぎが大きく違います。他の日本人配達員とも知り合うことができ、情報交換できるのも良い点です。」
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="story3" className="glass-panel p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Mさん（23歳）の場合</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex flex-col">
                      <div className="bg-uber-lightGray p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <TrendingUp size={18} className="text-uber-green mr-2" />
                          活動パターン
                        </h4>
                        <ul className="space-y-2">
                          <li>週末中心、週3日稼働</li>
                          <li>金土日の夕方〜夜</li>
                          <li>Fortitude Valley〜New Farm</li>
                        </ul>
                      </div>
                      <div className="bg-uber-lightGray p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <TrendingUp size={18} className="text-uber-green mr-2" />
                          週間収入
                        </h4>
                        <p className="text-2xl font-bold text-uber-green">約$600-750</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <MessageSquare size={18} className="text-uber-green mr-2" />
                          体験談
                        </h4>
                        <p className="mb-4">
                          「平日はカフェでバリスタとして働き、週末はUber Eatsで稼いでいます。週末は特に注文が多く、時給換算すると平日よりもかなり良い収入になります。」
                        </p>
                        <p>
                          「Fortitude Valleyは夜になると若者向けのレストランやバーからの注文が増えるので、効率よく稼げます。最初は登録手続きに少し時間がかかりましたが、community_brisbaneのアドバイスでスムーズに進められました。ワーホリでの滞在費を稼ぐのに最適な仕事だと思います。」
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">詳細なデータはInstagramで</h3>
                <p className="text-lg mb-6">
                  より詳しい情報が必要な場合は、Instagramのダイレクトメッセージからお問い合わせください。
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://instagram.com/community_brisbane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="uber-button"
                  >
                    Instagramでお問い合わせ
                  </a>
                </div>
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

export default SuccessStories;
