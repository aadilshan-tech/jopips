import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoSvg from '../../imports/jopips_website_logo.svg';
import { TELEGRAM_LINKS, CONTACT_MESSAGES } from '../../config/links';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Signals', href: '#signals' },
  { label: 'Performance', href: '#performance' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    const message = encodeURIComponent(CONTACT_MESSAGES.general);
    window.open(`${TELEGRAM_LINKS.contact}?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1520]/95 backdrop-blur-md shadow-lg shadow-black/10">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#')}>
            <img src={logoSvg} alt="JOPIPS" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="sm"
              className="bg-[#C9A227] hover:bg-[#B39120] text-black font-semibold rounded-full px-6"
              onClick={() => window.open(TELEGRAM_LINKS.trial, '_blank')}
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black rounded-full px-6 font-semibold"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0f1520]/98 backdrop-blur-md">
          <div className="container mx-auto py-6 space-y-4">
            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-amber-400 transition-colors text-base font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Button
                size="sm"
                className="bg-[#C9A227] hover:bg-[#B39120] text-black font-semibold rounded-full w-full"
                onClick={() => {
                  window.open(TELEGRAM_LINKS.trial, '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black rounded-full w-full font-semibold"
                onClick={() => {
                  handleContactClick();
                  setMobileMenuOpen(false);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}