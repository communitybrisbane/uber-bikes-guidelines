
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToGuide = () => {
    const guideElement = document.getElementById('registration-guide');
    if (guideElement) {
      guideElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1561122092-afa9fe49afa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          filter: 'brightness(0.7)' 
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-uber-black/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            オーストラリアでの生活の幅を広げる<br className="hidden sm:inline" />
            <span className="text-uber-green">uber 配達員</span>
          </h1>
          
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            今なら紹介コード入力で
            <span className="bg-uber-green text-white px-2 py-1 mx-1 rounded font-bold animate-pulse-slow">
              $500 GET！
            </span>
          </p>
          
          <div className="glass-panel-dark p-4 rounded-lg inline-block mb-8">
            <p className="text-white text-lg font-mono tracking-wider">紹介コード: <span className="text-uber-green font-bold">353ebz8exhf7</span></p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a 
              href="https://www.uber.com/signup/drive/deliver/?invite_code=1248nns95uhm"
              target="_blank"
              rel="noopener noreferrer" 
              className="uber-button text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              今すぐ登録する
            </a>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToGuide}
        >
          <ChevronDown size={32} className="text-white hover:text-uber-green transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
