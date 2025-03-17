
import { DollarSign, Clock, MapPin, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';

const IncomeBreakdown = () => {
  const [activeTab, setActiveTab] = useState('breakdown');
  
  return (
    <section className="section-container bg-uber-black text-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title mx-auto w-fit after:mx-auto after:bg-white">
          Uberの収入ってどう決まるの？
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Uber Eatsの報酬システムを理解して、効率的に稼ぐコツを掴みましょう。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            className={`px-6 py-3 rounded-l-md transition-all duration-300 ${
              activeTab === 'breakdown'
                ? 'bg-uber-green text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            onClick={() => setActiveTab('breakdown')}
          >
            報酬の内訳
          </button>
          <button
            className={`px-6 py-3 rounded-r-md transition-all duration-300 ${
              activeTab === 'tips'
                ? 'bg-uber-green text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            onClick={() => setActiveTab('tips')}
          >
            収入アップのコツ
          </button>
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {activeTab === 'breakdown' ? (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel-dark rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <DollarSign className="text-uber-green mr-2" />
                    基本報酬の計算方法
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-uber-green/20 p-2 rounded">
                        <MapPin className="text-uber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">ピックアップ料金</h4>
                        <p className="text-gray-400">レストランでの受け取り時に発生する固定料金</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-uber-green/20 p-2 rounded">
                        <Clock className="text-uber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">配達時間料金</h4>
                        <p className="text-gray-400">配達にかかる予想時間に基づく料金</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-uber-green/20 p-2 rounded">
                        <MapPin className="text-uber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">配達距離料金</h4>
                        <p className="text-gray-400">配達距離に基づいて計算される料金</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-lg font-medium">基本料金: <span className="text-uber-green">$6〜$12</span></p>
                    <p className="text-gray-400 text-sm">時間帯や距離、位置により変動します</p>
                  </div>
                </div>
                
                <div className="glass-panel-dark rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Zap className="text-uber-green mr-2" />
                    追加報酬とボーナス
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-uber-green/20 p-2 rounded">
                        <TrendingUp className="text-uber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">サージ料金</h4>
                        <p className="text-gray-400">需要が高いエリアや時間帯の追加料金</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-uber-green/20 p-2 rounded">
                        <Zap className="text-uber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">クエストボーナス</h4>
                        <p className="text-gray-400">特定時間内に指定数の配達を完了するとボーナス獲得</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-uber-green/20 p-2 rounded">
                        <DollarSign className="text-uber-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">プロモーション</h4>
                        <p className="text-gray-400">特定の曜日や時間帯に発生する特別なボーナス</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-lg font-medium">追加収入: <span className="text-uber-green">最大 $10+/時間</span></p>
                    <p className="text-gray-400 text-sm">時期やプロモーションにより大きく変動します</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel-dark rounded-xl p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">効率的な戦略</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-uber-green/20 p-1 rounded-full mr-3 mt-1">
                        <span className="flex items-center justify-center text-uber-green w-5 h-5 font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium">最適なエリアを選ぶ</p>
                        <p className="text-gray-400 text-sm">レストランが集中するエリアで待機して、移動距離を最小限に</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-uber-green/20 p-1 rounded-full mr-3 mt-1">
                        <span className="flex items-center justify-center text-uber-green w-5 h-5 font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium">マルチ配達を活用</p>
                        <p className="text-gray-400 text-sm">同じ方向への複数配達は効率が良く、収入も増加</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-uber-green/20 p-1 rounded-full mr-3 mt-1">
                        <span className="flex items-center justify-center text-uber-green w-5 h-5 font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium">複数のアプリを併用</p>
                        <p className="text-gray-400 text-sm">UberだけでなくDoorDashなど複数のアプリを使い待機時間を削減</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-panel-dark rounded-xl p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">収入を最大化するコツ</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-uber-green/20 p-1 rounded-full mr-3 mt-1">
                        <span className="flex items-center justify-center text-uber-green w-5 h-5 font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium">ピーク時間を狙う</p>
                        <p className="text-gray-400 text-sm">ランチ（11-14時）とディナー（17-21時）は報酬が高い</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-uber-green/20 p-1 rounded-full mr-3 mt-1">
                        <span className="flex items-center justify-center text-uber-green w-5 h-5 font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium">プロモーションを活用</p>
                        <p className="text-gray-400 text-sm">アプリのプロモーション通知を定期的にチェック</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-uber-green/20 p-1 rounded-full mr-3 mt-1">
                        <span className="flex items-center justify-center text-uber-green w-5 h-5 font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium">効率的なルート選択</p>
                        <p className="text-gray-400 text-sm">Google Mapsなどを活用して最適なルートを選ぶ</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-uber-green to-uber-blue p-6 rounded-xl mt-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">実際の稼働データを共有しています</h3>
                    <p>実績ベースの詳細なアドバイスや収入例をチェック</p>
                  </div>
                  <a 
                    href="https://instagram.com/community_brisbane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-uber-black font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Instagramをフォロー
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IncomeBreakdown;
