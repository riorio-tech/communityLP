'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown, Sparkles } from 'lucide-react';

function PricingContent() {
  const searchParams = useSearchParams();
  const price = Number(searchParams.get('price')) || 
    Number(process.env.NEXT_PUBLIC_DEFAULT_PRICE) || 
    2980;
  const currency = searchParams.get('currency') || 
    process.env.NEXT_PUBLIC_DEFAULT_CURRENCY || 
    'JPY';
  const redirectUrl = 'https://mura.club/invite?code=awm30oHgUt';

  const handleJoinClick = () => {
    window.open(redirectUrl, '_blank');
  };

  const features = [
    '秘密のチャンネルへ特別アクセス',
    '毎週ガチの限定コンテンツ配信',
    '直接質問・相談し放題！',
    '同じ志を持つ仲間と熱い交流',
    'メンバー限定スペシャルイベント'
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block bounce-gentle"></span>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            超お得な料金プラン！
          </h2>
          <p className="text-xl text-gray-700 font-bold">
            この価格でこの内容はヤバい！
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="w-full max-w-md shadow-2xl border-4 border-gradient-to-r from-orange-400 to-pink-400 bg-gradient-to-br from-orange-50 to-pink-50 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-t-lg relative">
              <div className="absolute top-2 right-2">
                <Crown className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="absolute top-2 left-2">
                <Sparkles className="h-6 w-6 text-yellow-300" />
              </div>
              <CardTitle className="text-3xl font-black mb-2">
                プレミアムプラン
              </CardTitle>
              <CardDescription className="text-orange-100 font-bold text-lg">
                特別なコミュニティ体験
              </CardDescription>
              <div className="mt-6 bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-sm text-orange-100 line-through">¥{Math.floor(price * 1.5).toLocaleString('ja-JP')}</div>
                <div className="flex items-center justify-center">
                  <span className="text-6xl font-black">
                    ¥{price.toLocaleString('ja-JP')}
                  </span>
                  <span className="text-2xl ml-2 font-bold">
                    /月
                  </span>
                </div>
                <div className="text-sm text-orange-100 font-bold mt-1">特別価格！</div>
              </div>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-3 hover:shadow-md transition-all duration-300">
                    <Check className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={handleJoinClick}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 text-xl font-black rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 pulse-glow mb-4"
              >
                無料で参加する
              </Button>
             
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function PricingSection() {
  return (
    <Suspense fallback={
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
              💰 超お得な料金プラン！
            </h2>
            <p className="text-xl text-gray-700 font-bold">
              🎆 この価格でこの内容はヤバい！ 🎆
            </p>
          </div>
        </div>
      </section>
    }>
      <PricingContent />
    </Suspense>
  );
}