import { TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { TradingChart } from './TradingChart';
import profileBanner from '../../imports/jopips_telegram_profile.svg';
import { TELEGRAM_LINKS, CONTACT_MESSAGES } from '../../config/links';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0B0F19] to-[#151B2E]">
      <div className="container mx-auto py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A227]/10 px-4 py-2 text-sm text-[#C9A227] border border-[#C9A227]/20">
              <TrendingUp className="size-4" />
              <span>7-Day Free Trial Available</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Forex Signals for Disciplined Traders
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl">
                Start a 7-day free trial and receive real-time forex signals directly on Telegram.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#C9A227] hover:bg-[#B39120] text-black text-lg h-14 px-8 font-semibold group"
                onClick={() => window.open(TELEGRAM_LINKS.trial, '_blank')}
              >
                Start Free Trial
                <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-lg h-14 px-8"
                onClick={() => {
                  const message = encodeURIComponent(CONTACT_MESSAGES.general);
                  window.open(`${TELEGRAM_LINKS.contact}?text=${message}`, '_blank');
                }}
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-gray-500">7 days free • No credit card required • Join via Telegram</p>
          </div>

          {/* Right Content - Brand Logo */}
          <div className="relative flex justify-center">
            <img
              src={profileBanner}
              alt="JOPIPS"
              className="w-48 sm:w-64 md:w-80 lg:w-full lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}