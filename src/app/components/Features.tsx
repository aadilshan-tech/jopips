import { Target, Shield, Bell, MessageCircle, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: Target,
    title: 'Daily Forex Signals',
    description: 'Receive high-quality forex trading signals every day with precise entry points and targets.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Entry, SL & TP Levels',
    description: 'Every signal includes complete trade setup: entry price, stop loss, and take profit levels.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    icon: Shield,
    title: 'Risk Management Focused',
    description: 'Learn professional risk management strategies to protect your capital and trade with discipline.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    icon: MessageCircle,
    title: 'Telegram Signal Delivery',
    description: 'Get instant notifications on Telegram. No need to check websites - signals come directly to you.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    icon: Bell,
    title: 'Transparent Trading Approach',
    description: 'Full transparency with signal history and results. No false promises, just honest trading.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20'
  }
];

export function Features() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-[#151B2E] border-t border-white/10">
      <div className="container mx-auto">
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional trading signals delivered directly to your Telegram
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`rounded-2xl ${feature.bgColor} border ${feature.borderColor} p-8 hover:border-opacity-60 transition-all duration-200 fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`rounded-xl ${feature.bgColor} ${feature.borderColor} border p-3 inline-flex mb-4`}>
                <feature.icon className={`size-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}