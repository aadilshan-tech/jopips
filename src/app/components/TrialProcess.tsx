import { MousePointerClick, Send, Signal, CreditCard } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    icon: MousePointerClick,
    title: 'Click Start Free Trial',
    description: 'Click the "Start Free Trial" button anywhere on this page to begin your journey.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    number: '02',
    icon: Send,
    title: 'Join the Telegram Trial Bot',
    description: 'You\'ll be redirected to Telegram where you can join our trial signals group instantly.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    number: '03',
    icon: Signal,
    title: 'Receive Daily Signals for 7 Days',
    description: 'Get access to professional forex signals with entry, stop loss, and take profit levels for 7 days.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Upgrade to VIP After Trial',
    description: 'After your trial ends, payment details will be provided to upgrade to the VIP signals group.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20'
  }
];

export function TrialProcess() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-[#0B0F19]">
      <div className="container mx-auto">
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How the Trial Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started with our 7-day free trial in 4 simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className={`relative ${step.bgColor} border ${step.borderColor} rounded-2xl p-6 hover:border-opacity-60 transition-all h-full fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  {/* Step number */}
                  <div className={`text-5xl font-bold ${step.color} opacity-20 absolute top-4 right-4`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`relative mb-4 inline-flex rounded-xl ${step.bgColor} border ${step.borderColor} p-3`}>
                    <step.icon className={`size-6 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
