import { Mail, MessageCircle, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleContactClick = () => {
    const message = encodeURIComponent('Hi! I need support with JOPIPS.');
    window.open(`https://t.me/Aadilshane?text=${message}`, '_blank');
  };

  return (
    <footer className="border-t border-white/10 bg-[#151B2E]" id="contact">
      {/* Risk Disclaimer */}
      <div className="border-b border-white/10 bg-[#C9A227]/5">
        <div className="container mx-auto py-6">
          <div className="flex items-start gap-3 max-w-5xl mx-auto">
            <AlertTriangle className="size-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-400 leading-relaxed">
              <strong className="text-[#C9A227]">Risk Disclaimer:</strong> Forex trading involves risk and may not be suitable for all investors. 
              The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider 
              your investment objectives, level of experience, and risk appetite. There is a possibility that you may sustain a loss of some 
              or all of your investment. You should only trade with money you can afford to lose. Past performance is not indicative of future results.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">JOPIPS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional Forex & Gold trading signals delivered to your Telegram daily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Support</h4>
            <div className="space-y-2">
              <a href="mailto:aadilshan5065@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-[#C9A227] transition-colors text-sm">
                <Mail className="size-4" />
                <span>aadilshan5065@gmail.com</span>
              </a>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-[#C9A227] hover:bg-[#C9A227]/10 -ml-2"
                onClick={handleContactClick}
              >
                <MessageCircle className="size-4 mr-2" />
                Telegram Support
              </Button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-[#C9A227] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#C9A227] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#C9A227] transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {currentYear} JOPIPS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}