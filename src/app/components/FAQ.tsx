import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, absolutely. The 7-day trial is completely free with no commitment. If you upgrade to VIP, you can cancel your subscription at any time with no penalties or questions asked. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'Do I need trading experience?',
    answer: 'While basic knowledge of Forex trading is helpful, our signals are designed to be clear and easy to follow for traders of all experience levels. We provide detailed entry points, stop loss, and take profit levels, along with risk management guidance to help you trade responsibly.'
  },
  {
    question: 'How do I receive signals?',
    answer: 'All signals are delivered through our private Telegram group in real-time. You\'ll receive instant notifications on your phone or desktop whenever a new signal is posted. Simply click the "Start Free Trial" button to join the Telegram group.'
  },
  {
    question: 'Is profit guaranteed?',
    answer: 'No. Trading Forex involves significant risk and there are no guaranteed profits. While we strive to provide accurate signals based on thorough analysis, markets can be unpredictable. Past performance does not guarantee future results. You should never trade with money you cannot afford to lose. Always trade responsibly.'
  },
  {
    question: 'What happens after the 7-day trial ends?',
    answer: 'After your 7-day trial period ends, you\'ll receive information about upgrading to our VIP signals group. There\'s no automatic charge - you decide if you want to continue. You can upgrade anytime by clicking the "Upgrade to VIP" button.'
  },
  {
    question: 'How many signals do you provide per day?',
    answer: 'We typically provide 3-5 high-quality signals per day for Forex markets. We focus on quality over quantity, only sharing signals that meet our strict criteria for potential success based on our risk management approach.'
  },
  {
    question: 'Do I need to download any software?',
    answer: 'No additional software needed! Everything is delivered through Telegram, which you can use on your phone, tablet, or computer. Just install the free Telegram app if you don\'t have it already.'
  }
];

export function FAQ() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 bg-[#0B0F19]" id="faq">
      <div className="container mx-auto">
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our service
          </p>
        </div>

        <div className={`max-w-3xl mx-auto fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-xl bg-[#1a2332] px-6 hover:border-amber-500/30 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-amber-400 text-left py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}