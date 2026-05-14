import { Check, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { TELEGRAM_LINKS, CONTACT_MESSAGES } from '../../config/links';
import { useScrollReveal } from '../hooks/useScrollReveal';

const trialFeatures = [
  '7 days full access',
  'Daily forex signals',
  'Entry, SL & TP levels',
  'Telegram trial group',
  'No payment required',
  'No credit card needed'
];

const vipFeatures = [
  'Unlimited daily signals',
  'Premium Telegram VIP group',
  'Advanced trade setups',
  'Priority support',
  'Weekly performance reports',
  'Risk management guidance',
  'Educational resources',
  'Monthly subscription flexibility'
];

export function Pricing() {
  const { ref, isVisible } = useScrollReveal();

  const handleContactPremium = () => {
    const message = encodeURIComponent(CONTACT_MESSAGES.vipUpgrade);
    window.open(`${TELEGRAM_LINKS.contact}?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="py-20 bg-[#151B2E] border-t border-white/10" id="pricing">
      <div className="container mx-auto">
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Free, Upgrade When Ready
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Try our signals for 7 days with no commitment
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Free Trial Card */}
          <div className={`relative rounded-3xl bg-gradient-to-b from-[#1a2332] to-[#0f1620] border border-white/20 p-8 md:p-10 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="size-4" />
                Perfect to Start
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Free Trial</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-gray-400 text-lg">for 7 days</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {trialFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-500/20 p-1 mt-0.5">
                    <Check className="size-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg h-14 font-semibold"
              onClick={() => window.open(TELEGRAM_LINKS.trial, '_blank')}
            >
              Start Free Trial
            </Button>
          </div>

          {/* VIP Card */}
          <div className={`relative rounded-3xl bg-gradient-to-b from-[#1a2332] to-[#0f1620] border-2 border-[#C9A227]/40 p-8 md:p-10 shadow-2xl fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#C9A227] to-[#B39120] text-black px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">VIP Signals</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-gray-400 text-lg">/month</span>
              </div>
              <p className="text-[#C9A227] text-sm mt-2">After trial period</p>
            </div>

            <div className="space-y-4 mb-8">
              {vipFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="rounded-full bg-[#C9A227]/20 p-1 mt-0.5">
                    <Check className="size-4 text-[#C9A227]" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-[#C9A227] hover:bg-[#B39120] text-black text-lg h-14 font-semibold"
              onClick={handleContactPremium}
            >
              Contact for VIP
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Cancel anytime • Flexible monthly billing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}