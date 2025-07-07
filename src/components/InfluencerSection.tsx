'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function InfluencerSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            インフルエンサーからのメッセージ
          </h2>
          <p className="text-xl font-bold text-pink-500 animate-bounce mt-2">
            あなたの人生を変えるきっかけ、ここに！
          </p>
        </div>
        
        <Card className="shadow-xl border-0 overflow-hidden bg-gradient-to-br from-pink-100 to-yellow-100">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 border-4 border-pink-300 shadow-lg flex items-center justify-center text-white text-4xl font-bold">
                  👨‍💼
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
                  このコミュニティは、同じ志を持つ仲間たちと繋がり、
                  お互いに成長し合える特別な場所です。
                  私自身も皆さんと一緒に学び、
                  価値のある情報を共有していきたいと思っています。
                  ぜひ一緒に新しい挑戦を始めましょう！
                </blockquote>
                <div className="border-l-4 border-pink-400 pl-4">
                  <p className="font-semibold text-gray-900 text-lg">
                    インフルエンサー名
                  </p>
                  <p className="text-gray-600">
                    コミュニティ主催者
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <a 
              href={process.env.NEXT_PUBLIC_TWITTER_URL || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.988 11.987S24.005 18.608 24.005 11.987C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.902 8.247 7.053 7.757 8.35 7.757s2.448.49 3.324 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.324c-.876.876-2.027 1.366-3.324 1.366zm7.599 0c-1.297 0-2.448-.49-3.324-1.297-.876-.876-1.366-2.027-1.366-3.324s.49-2.448 1.366-3.324c.876-.876 2.027-1.366 3.324-1.366s2.448.49 3.324 1.366c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.324c-.876.876-2.027 1.366-3.324 1.366z"/>
              </svg>
            </a>
            <a 
              href={process.env.NEXT_PUBLIC_YOUTUBE_URL || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}