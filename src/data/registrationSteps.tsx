
import React from 'react';
import { 
  Bike, 
  Car,
  Smartphone, 
  Mail, 
  FileCheck, 
  DollarSign, 
  Clock, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export type StepContentItem = {
  item: string;
  description: string;
};

export type Step = {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode | StepContentItem[];
};

export const registrationSteps: Step[] = [
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
    content: (
      <div>
        <p className="mb-3">招待コードを入力しないと$500の特典が受け取れません！</p>
        <div className="flex items-center justify-center bg-uber-green/10 p-3 rounded-lg mb-2">
          <p className="text-uber-green font-mono font-bold tracking-wider mr-2">353ebz8exhf7</p>
        </div>
        <p className="text-sm text-gray-600">※ 登録時にのみ入力可能。後から追加することはできません。</p>
      </div>
    )
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
