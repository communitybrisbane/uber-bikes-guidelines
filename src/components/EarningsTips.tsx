
import { Clock, DollarSign, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const EarningsTips = () => {
  const [selectedDay, setSelectedDay] = useState('weekday');
  
  return (
    <section className="section-container bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-title mx-auto w-fit after:mx-auto">
          効率よく稼ぐためのスケジュール例
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          時間帯や曜日によって注文数や報酬額が大きく変わります。
          効率的に稼ぐためのおすすめの時間帯をご紹介します。
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Day selection tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 rounded-l-md transition-all duration-300 ${
              selectedDay === 'weekday'
                ? 'bg-uber-green text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedDay('weekday')}
          >
            平日
          </button>
          <button
            className={`px-6 py-3 rounded-r-md transition-all duration-300 ${
              selectedDay === 'weekend'
                ? 'bg-uber-green text-white font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedDay('weekend')}
          >
            週末
          </button>
        </div>

        {/* Time blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedDay === 'weekday' ? (
            <>
              <TimeBlock 
                title="ランチタイム" 
                time="11:00〜14:00" 
                earnings="$20-30"
                orders="2-3件/時間" 
                description="オフィス街ならではのランチ需要があります。短距離の配達が多いため効率的です。"
                icon={<Clock size={32} className="text-uber-green" />}
              />
              <TimeBlock 
                title="ディナータイム" 
                time="17:00〜20:30" 
                earnings="$25-35"
                orders="3-4件/時間" 
                description="最も稼げる時間帯。プロモーションも多く実施されています。"
                icon={<TrendingUp size={32} className="text-uber-green" />}
                featured={true}
              />
              <TimeBlock 
                title="深夜" 
                time="21:30〜23:00" 
                earnings="$20-30"
                orders="2-3件/時間" 
                description="競合が少なく、単価の高い注文が入りやすい時間帯です。"
                icon={<DollarSign size={32} className="text-uber-green" />}
              />
            </>
          ) : (
            <>
              <TimeBlock 
                title="ブランチ" 
                time="10:00〜13:00" 
                earnings="$25-35"
                orders="3-4件/時間" 
                description="週末特有のブランチ需要があります。カフェからの配達が多くなります。"
                icon={<Clock size={32} className="text-uber-green" />}
              />
              <TimeBlock 
                title="アフタヌーン" 
                time="14:00〜17:00" 
                earnings="$20-30"
                orders="2-3件/時間" 
                description="平日に比べて注文量が多くなります。"
                icon={<DollarSign size={32} className="text-uber-green" />}
              />
              <TimeBlock 
                title="ディナーピーク" 
                time="18:00〜21:30" 
                earnings="$30-45"
                orders="4-5件/時間" 
                description="週末の最も稼げるゴールデンタイム。高単価注文が増えます。"
                icon={<TrendingUp size={32} className="text-uber-green" />}
                featured={true}
              />
            </>
          )}
        </div>

        <div className="bg-uber-lightGray p-6 rounded-xl mt-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp size={24} className="text-uber-green mr-2" />
            プロのヒント
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
              <p>繁華街や学生街など、飲食店が集中しているエリアを選びましょう</p>
            </li>
            <li className="flex items-start">
              <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
              <p>天候が悪い日は注文数が増加し、配達員が少ないため単価が上がりやすくなります</p>
            </li>
            <li className="flex items-start">
              <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
              <p>アプリのプロモーション通知を確認し、ボーナスが発生する時間帯を狙いましょう</p>
            </li>
            <li className="flex items-start">
              <span className="bg-uber-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
              <p>複数の配達アプリを併用することで、待機時間を減らし収入を最大化できます</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

interface TimeBlockProps {
  title: string;
  time: string;
  earnings: string;
  orders: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const TimeBlock = ({ title, time, earnings, orders, description, icon, featured = false }: TimeBlockProps) => (
  <div 
    className={`rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${
      featured 
        ? 'bg-uber-green text-white shadow-lg' 
        : 'bg-white border border-gray-200 shadow-subtle hover:shadow-md'
    }`}
  >
    <div className="flex items-center mb-4">
      <div className={`mr-3 ${featured ? 'text-white' : ''}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    
    <div className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-uber-green'}`}>
      {time}
    </div>
    
    <div className="space-y-2 mb-4">
      <div className="flex items-center">
        <DollarSign size={16} className={featured ? 'text-white' : 'text-uber-green'} />
        <span className="ml-2">時給目安: {earnings}</span>
      </div>
      <div className="flex items-center">
        <TrendingUp size={16} className={featured ? 'text-white' : 'text-uber-green'} />
        <span className="ml-2">配達数: {orders}</span>
      </div>
    </div>
    
    <p className={featured ? 'text-white/90' : 'text-gray-600'}>
      {description}
    </p>
    
    {featured && (
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
        <div className="bg-white text-uber-green text-xs font-bold uppercase py-1 px-2 rounded shadow-md">
          おすすめ
        </div>
      </div>
    )}
  </div>
);

export default EarningsTips;
