
import { useRef, useEffect, useState } from 'react';
import { 
  Bike, 
  Car,
  Smartphone, 
  Mail, 
  FileCheck, 
  DollarSign, 
  Clock, 
  Check, 
  ArrowRight, 
  ChevronDown,
  ChevronUp 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "登録前に準備するもの",
    icon: <FileCheck className="text-uber-green" size={28} />,
    content: [
      { item: "パスポート", description: "本人確認用" },
      { item: "オーストラリアの携帯番号", description: "アカウント登録用" },
      { item: "メールアドレス", description: "アカウント登録用" },
      { item: "海外銀行のキャッシュカード", description: "Wiseなど" },
      { item: "Tax File Number（TFN）", description: "ABN取得時に必要" },
      { item: "クライムチェックの支払い用クレジットカード", description: "約$40～50 AUD目安" }
    ]
  },
  {
    id: 2,
    title: "Uber Driverアプリのダウンロード",
    icon: <Smartphone className="text-uber-green" size={28} />,
    content: "iOSとAndroid両方のアプリストアで入手できます。"
  },
  {
    id: 3,
    title: "招待コードの入力",
    icon: <DollarSign className="text-uber-green" size={28} />,
    content: "招待コードを入力しないと$500の特典が受け取れません！"
  },
  {
    id: 4,
    title: "アカウント情報の入力",
    icon: <Mail className="text-uber-green" size={28} />,
    content: [
      { item: "氏名", description: "パスポートと同じスペル" },
      { item: "メールアドレス", description: "" },
      { item: "オーストラリアの携帯番号", description: "" },
      { item: "パスワードの設定", description: "" }
    ]
  },
  {
    id: 5,
    title: "配達手段の選択",
    icon: <Bike className="text-uber-green" size={28} />,
    content: "「自転車」または「車」を選択します（電動自転車も「自転車」扱い）"
  },
  {
    id: 6,
    title: "必要書類のアップロード",
    icon: <FileCheck className="text-uber-green" size={28} />,
    content: [
      { item: "パスポート", description: "本人確認用" },
      { item: "海外銀行のキャッシュカード", description: "報酬の振込先用" },
      { item: "海外クレジットカード", description: "Wiseなど" }
    ]
  },
  {
    id: 7,
    title: "背景調査（クライムチェック）",
    icon: <Clock className="text-uber-green" size={28} />,
    content: "費用は約$40～50 AUDかかり、完了までに約3日かかります。数回の配達ですぐに回収できます。"
  },
  {
    id: 8,
    title: "ABN取得（オーストラリア事業者番号）",
    icon: <FileCheck className="text-uber-green" size={28} />,
    content: "ABN取得には「Tax File Number（TFN）」が必要。TFNの申請には10日～28日ほどかかるため、オーストラリア到着後すぐに申請するのがおすすめです。"
  },
  {
    id: 9,
    title: "動画トレーニングの受講",
    icon: <Smartphone className="text-uber-green" size={28} />,
    content: "Uber Driverアプリ内の「トレーニングビデオ」の視聴が必須です。"
  },
  {
    id: 10,
    title: "配達バッグの準備",
    icon: <Clock className="text-uber-green" size={28} />,
    content: "配達バッグは無料で提供されます。バッグが届くまでアカウントは有効化されませんので、早めに手配してください。"
  },
  {
    id: 11,
    title: "配達開始！",
    icon: <Check className="text-uber-green" size={28} />,
    content: "すべての手続きが完了すると、Uber Driverアプリから稼働開始できます。"
  },
];

const RegistrationGuide = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, steps.length);
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleStep = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  const maxDisplaySteps = 5;
  const displayedSteps = expanded ? steps : steps.slice(0, maxDisplaySteps);

  return (
    <section 
      id="registration-guide" 
      className="section-container bg-uber-lightGray"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title mx-auto w-fit after:mx-auto">
          自転車でのUber Eats配達員登録ガイド
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          ワーキングホリデーでオーストラリアに滞在中の方向けに、Uber Eats配達員の登録方法を詳しく解説します。
          すべての手続きが完了するまでに約7～14日かかりますので、計画的に進めましょう。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {displayedSteps.map((step, index) => (
          <div 
            key={step.id}
            ref={el => stepsRef.current[index] = el}
            className={`mb-6 ${
              index === displayedSteps.length - 1 && !expanded ? '' : 'border-l-2 border-uber-green pb-8'
            } pl-8 relative transition-all duration-500`}
          >
            {/* Step Indicator */}
            <div 
              className="absolute left-0 transform -translate-x-1/2 w-12 h-12 rounded-full
                         flex items-center justify-center bg-white shadow-md border-2 border-uber-green"
            >
              <span className="text-uber-green font-bold">{step.id}</span>
            </div>

            {/* Content */}
            <div 
              className="glass-panel rounded-xl p-6 hover:shadow-glass-hover transition-all duration-300 cursor-pointer"
              onClick={() => toggleStep(step.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {step.icon}
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                {Array.isArray(step.content) && (
                  <button className="text-uber-green">
                    {activeStep === step.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                )}
              </div>

              {/* Step Content */}
              <div 
                className={`mt-4 transition-all duration-300 overflow-hidden ${
                  !Array.isArray(step.content) || activeStep === step.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                {Array.isArray(step.content) ? (
                  <ul className="space-y-2">
                    {step.content.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <ArrowRight size={16} className="text-uber-green mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">{item.item}</span>
                          {item.description && (
                            <span className="text-gray-600 ml-2">（{item.description}）</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{step.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {steps.length > maxDisplaySteps && (
          <div className="text-center mt-8">
            <button
              onClick={toggleExpand}
              className="uber-outline-button"
            >
              {expanded ? "折りたたむ" : "すべてのステップを表示"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationGuide;
