import { Button } from './ui/button';
import { ArrowRight, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TELEGRAM_LINKS, CONTACT_MESSAGES } from '../../config/links';

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  const handleContactClick = () => {
    const message = encodeURIComponent(CONTACT_MESSAGES.ready);
    window.open(`${TELEGRAM_LINKS.contact}?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0B0F19] to-[#151B2E] border-t border-white/10">
      <div className="container mx-auto">
        <div className={`max-w-4xl mx-auto text-center fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-[#C9A227]/10 px-4 py-2 rounded-full text-sm text-[#C9A227] border border-[#C9A227]/20 mb-8">
            <Send className="size-4" />
            <span>Join via Telegram Now</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your 7-Day Free Trial Today
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Experience professional forex signals with no commitment. Join our Telegram trial group and see the quality for yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#C9A227] hover:bg-[#B39120] text-black text-lg h-16 px-10 font-semibold group"
              onClick={() => window.open(TELEGRAM_LINKS.trial, '_blank')}
            >
              Join Telegram Trial
              <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black text-lg h-16 px-10 font-semibold"
              onClick={handleContactClick}
            >
              Contact for Premium
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}