import { Target, Users, Target as TargetIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  {
    icon: TargetIcon,
    value: '87%',
    label: 'Win Rate',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    icon: Users,
    value: '12,450+',
    label: 'Members Joined',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    icon: Target,
    value: '+24.8%',
    label: 'Monthly Performance',
    color: 'text-[#C9A227]',
    bgColor: 'bg-[#C9A227]/10',
    borderColor: 'border-[#C9A227]/20'
  }
];

const testimonials = [
  {
    name: 'Muhammed Sidan',
    role: 'Day Trader',
    image: 'https://images.unsplash.com/photo-1766066014773-0074bf4911de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGFzaWFuJTIwbWFufGVufDF8fHx8MTc3MTU2NjMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'The signals are incredibly accurate. Risk management approach helped me trade with discipline and consistency.'
  },
  {
    name: 'Aadil Shan',
    role: 'Forex Investor',
    image: 'https://images.unsplash.com/photo-1729284439270-df2eb5648877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRyYWRlcnxlbnwxfHx8fDE3NzE2MDc0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Professional service with clear entry and exit points. The transparency in signal history builds real trust.'
  },
  {
    name: 'Joseph Kuruvila',
    role: 'Gold Trader',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUwOTA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Best trading signals I\'ve used. The Telegram delivery is instant and the community is supportive. Highly recommend!'
  }
];

export function TrustSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-[#0B0F19]" id="performance">
      <div className="container mx-auto">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative rounded-2xl ${stat.bgColor} border ${stat.borderColor} p-8 text-center fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className={`rounded-xl ${stat.bgColor} ${stat.borderColor} border p-3`}>
                  <stat.icon className={`size-8 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Performance Note */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#C9A227]/80 italic">
            Past performance does not guarantee future results. All trading involves risk.
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Traders Worldwide
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of disciplined traders who rely on our signals daily
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`rounded-2xl bg-[#1a2332] border border-white/10 p-6 hover:border-[#C9A227]/30 transition-colors fade-in-up ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}