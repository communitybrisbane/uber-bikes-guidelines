
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-uber-black font-bold text-xl"
          >
            <span className="text-uber-green">community_</span>
            <span>brisbane</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="ホーム" currentPath={location.pathname} />
            <NavLink to="/registration" label="登録方法" currentPath={location.pathname} />
            <NavLink to="/earning-tips" label="稼ぎ方のコツ" currentPath={location.pathname} />
            <NavLink to="/success-stories" label="成功事例" currentPath={location.pathname} />
            <NavLink to="/referral-code" label="紹介コード" currentPath={location.pathname} />
            <NavLink to="/faq" label="FAQ" currentPath={location.pathname} />
            <NavLink to="/contact" label="お問い合わせ" currentPath={location.pathname} />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-uber-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-uber-black transition-all duration-300" />
            ) : (
              <Menu size={24} className="text-uber-black transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <MobileNavLink to="/" label="ホーム" onClick={toggleMenu} />
          <MobileNavLink to="/registration" label="登録方法" onClick={toggleMenu} />
          <MobileNavLink to="/earning-tips" label="稼ぎ方のコツ" onClick={toggleMenu} />
          <MobileNavLink to="/success-stories" label="成功事例" onClick={toggleMenu} />
          <MobileNavLink to="/referral-code" label="紹介コード" onClick={toggleMenu} />
          <MobileNavLink to="/faq" label="FAQ" onClick={toggleMenu} />
          <MobileNavLink to="/contact" label="お問い合わせ" onClick={toggleMenu} />
        </nav>
      </div>
    </header>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, label, currentPath }: { to: string; label: string; currentPath: string }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`relative font-medium hover:text-uber-green transition-colors duration-300 py-2
        ${isActive ? 'text-uber-green' : 'text-uber-black'}`}
    >
      {label}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-uber-green transform origin-bottom 
        transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} hover:scale-x-100`}
      />
    </Link>
  );
};

// Mobile NavLink Component
const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link
    to={to}
    className="text-lg font-medium py-3 px-4 hover:bg-uber-lightGray rounded-md transition-colors duration-200"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
