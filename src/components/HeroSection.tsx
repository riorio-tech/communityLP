'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Star, Zap } from 'lucide-react';

function HeroContent() {
  const searchParams = useSearchParams();
  const communityName = searchParams.get('name') || 
    process.env.NEXT_PUBLIC_DEFAULT_COMMUNITY_NAME || 
    'コミュニティ名';
  const description = searchParams.get('description') || 
    process.env.NEXT_PUBLIC_DEFAULT_COMMUNITY_DESCRIPTION || 
    '革新的なコミュニティで新しい体験を始めましょう';
  const redirectUrl = searchParams.get('redirect') || 
    process.env.NEXT_PUBLIC_DEFAULT_REDIRECT_URL || 
    'https://example.com/join';

  const [activeUsers, setActiveUsers] = useState<number>(0);

  useEffect(() => {
    setActiveUsers(Math.floor(Math.random() * 50) + 150);
  }, []);

  const handleJoinClick = () => {
    window.open(redirectUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* インフルエンサー写真とキャッチコピー */}
        <div className="flex flex-col items-center mb-10 animate-fade-in-up">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-4 border-pink-400 shadow-xl mb-4 animate-bounce-slow flex items-center justify-center text-white text-4xl font-bold">
            👤
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-pink-500 drop-shadow-lg mb-2 animate-pop font-pop">
            あなたの人生に、最高のエンタメ体験を！
          </h2>
          <p className="text-lg md:text-2xl text-yellow-600 font-bold animate-fade-in font-pop">
            インフルエンサー名が贈る、ワクワクのコミュニティへようこそ！
          </p>
        </div>
        
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4 bounce-gentle">
            限定コミュニティ
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-6 leading-tight font-pop">
          {communityName}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={handleJoinClick}
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 pulse-glow border-2 border-orange-300"
          >
            今すぐ参加する！
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-10 py-5 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            詳細を見る
          </Button>
        </div>
        
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>現在 {activeUsers} 人が参加中</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span>今月限定特典あり</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <Suspense fallback={
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-6">
            🌟 コミュニティ名 ✨
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            🚀 革新的なコミュニティで新しい体験を始めましょう 🎉
          </p>
        </div>
      </section>
    }>
      <HeroContent />
    </Suspense>
  );
}