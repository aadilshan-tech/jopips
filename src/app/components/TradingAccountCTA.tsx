import { Button } from './ui/button';
import { TrendingUp, Shield, Zap, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BROKER_LINKS } from '../../config/links';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Professional Platform',
    description: 'Trade with advanced tools and real-time charts',
  },
  {
    icon: Shield,
    title: 'Secure & Regulated',
    description: 'Your funds are protected with top-tier security',
  },
  {
    icon: Zap,
    title: 'Instant Execution',
    description: 'Lightning-fast order execution for all trades',
  },
];

export function TradingAccountCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-[#0B0F19] border-t border-white/10">
      <div className="container mx-auto">
        <div className={`max-w-6xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#C9A227]/10 px-4 py-2 rounded-full text-sm text-[#C9A227] border border-[#C9A227]/20 mb-6">
              <TrendingUp className="size-4" />
              <span>Start Trading Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Trade with Our Signals?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Open your trading account with our recommended broker and start using our signals immediately
            </p>
          </div>

          {/* Main Card */}
          <div className={`relative rounded-3xl bg-gradient-to-br from-[#1a2332] via-[#0f1620] to-[#1a2332] border-2 border-[#C9A227]/30 p-8 md:p-12 overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Open Your Trading Account
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Get started with MH Markets - a trusted broker offering competitive spreads,
                    fast execution, and excellent customer support. Perfect for executing our forex signals.
                  </p>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div
                        key={benefit.title}
                        className={`flex items-start gap-4 fade-in-up ${isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: `${300 + index * 100}ms` }}
                      >
                        <div className="rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/20 p-2.5">
                          <benefit.icon className="size-5 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-400">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-[#C9A227] hover:bg-[#B39120] text-black text-lg h-14 px-8 font-semibold group"
                    onClick={() => window.open(BROKER_LINKS.signup, '_blank')}
                  >
                    Create Trading Account
                    <ExternalLink className="size-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-gray-500">
                    * Free to open • No minimum deposit required • Instant approval
                  </p>
                </div>

                {/* Right Content - Visual */}
                <div className={`hidden md:block fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                  <div className="relative">
                    {/* Decorative Chart Visualization */}
                    <div className="bg-gradient-to-br from-[#C9A227]/10 to-transparent rounded-2xl border border-[#C9A227]/20 p-8">
                      <div className="space-y-6">
                        {/* Mock Trading Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5">
                            <div className="text-sm text-gray-400 mb-1">Avg. Spread</div>
                            <div className="text-2xl font-bold text-emerald-400">0.8 pips</div>
                          </div>
                          <div className="bg-[#0B0F19]/50 rounded-xl p-4 border border-white/5">
                            <div className="text-sm text-gray-400 mb-1">Execution</div>
                            <div className="text-2xl font-bold text-blue-400">&lt;50ms</div>
                          </div>
                        </div>

                        {/* Decorative Chart Bars */}
                        <div className="flex items-end gap-2 h-32">
                          {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-[#C9A227] to-[#FFD700] rounded-t opacity-70"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>

                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Live Market Data</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
            {['Regulated Broker', '24/5 Support', 'Multiple Markets', 'Low Spreads'].map((feature) => (
              <div key={feature} className="text-center py-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
