
import { Link } from 'react-router-dom';
import { Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-uber-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl mb-4">
              <span className="text-uber-green">community</span>
              <span>brisbane</span>
            </Link>
            <p className="text-gray-400 mb-6">
              ブリスベンでのワーキングホリデー滞在をサポートする情報コミュニティです。
              効率的な稼ぎ方や生活に役立つ情報を発信しています。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/community_brisbane" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-uber-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              内容に間違いがある場合は、Instagramからお気軽にご連絡ください。
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">ホーム</Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-400 hover:text-white transition-colors">登録方法</Link>
              </li>
              <li>
                <Link to="/earning-tips" className="text-gray-400 hover:text-white transition-colors">稼ぎ方のコツ</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-white transition-colors">成功事例</Link>
              </li>
              <li>
                <Link to="/referral-code" className="text-gray-400 hover:text-white transition-colors">紹介コード</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">リソース</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.uber.com/au/en/drive/delivery/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  <span>Uber Eats公式サイト</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://apps.apple.com/au/app/uber-driver/id1131342792" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  <span>Uber Driver App (iOS)</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.abr.gov.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  <span>ABN申請サイト</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ato.gov.au/individuals/tax-file-number/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  <span>TFN申請サイト</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://wise.com/invite/ihpc/takumat89" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  <span>Wise（海外送金サービス）</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} communitybrisbane. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors"
          >
            トップに戻る
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

