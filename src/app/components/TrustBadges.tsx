import { Shield, TrendingUp, FileText, Award } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'No Guaranteed Profits',
    description: 'We believe in honest trading. No false promises of guaranteed returns.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Risk Management Focused',
    description: 'Every signal includes proper risk management to protect your capital.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    icon: FileText,
    title: 'Transparent Signal History',
    description: 'Complete transparency with all our past signals and their outcomes.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    icon: Award,
    title: 'Professional Trading Approach',
    description: 'Disciplined, systematic approach based on technical and fundamental analysis.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20'
  }
];

export function TrustBadges() {
  return (
    <section className="py-20 bg-[#151B2E] border-t border-white/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're committed to honest, professional trading guidance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`rounded-2xl ${badge.bgColor} border ${badge.borderColor} p-6 text-center hover:border-opacity-60 transition-all`}
            >
              <div className="flex justify-center mb-4">
                <div className={`rounded-xl ${badge.bgColor} ${badge.borderColor} border p-3`}>
                  <badge.icon className={`size-6 ${badge.color}`} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{badge.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
