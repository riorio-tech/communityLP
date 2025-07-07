'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqData = [
    {
      id: 'payment',
      question: '決済方法について教えてください',
      answer: 'クレジットカード（Visa、Mastercard、JCB、American Express）でのお支払いが可能です。決済は安全なStripe決済システムを使用しています。'
    },
    {
      id: 'billing',
      question: '引き落とし日はいつですか？',
      answer: 'ご登録いただいた日が毎月の引き落とし日となります。例：5日に登録した場合、毎月5日に自動で課金されます。'
    },
    {
      id: 'cancellation',
      question: '解約はいつでもできますか？',
      answer: 'はい、いつでも解約可能です。解約手続きは会員ページから簡単に行えます。解約後は次回の課金日まで継続してご利用いただけます。'
    },
    {
      id: 'refund',
      question: '返金は可能ですか？',
      answer: 'お支払い済みの料金の返金は基本的に承っておりません。ただし、システムの不具合等により正常にサービスをご利用いただけない場合は、個別に対応いたします。'
    },
    {
      id: 'content',
      question: 'どのようなコンテンツが提供されますか？',
      answer: '専用コミュニティでの情報交換、月3回の限定コンテンツ配信、質問への個別回答、特別イベントへの招待など、多彩なコンテンツをご用意しています。'
    },
    {
      id: 'access',
      question: 'コミュニティへのアクセス方法は？',
      answer: 'お支払い確認後、登録いただいたメールアドレス宛に招待リンクをお送りします。24時間以内にアクセス可能になります。'
    },
    {
      id: 'device',
      question: 'スマートフォンからでも利用できますか？',
      answer: 'はい、スマートフォン、タブレット、PCなど、あらゆるデバイスからアクセス可能です。専用アプリは不要で、ブラウザから直接ご利用いただけます。'
    },
    {
      id: 'support',
      question: '困ったときのサポートはありますか？',
      answer: 'コミュニティ内でのサポートに加え、重要な問題については個別にお答えします。お気軽にお問い合わせください。'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-gray-600">
            お支払いや利用方法について
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}