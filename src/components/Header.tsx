'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HeaderContent() {
  const searchParams = useSearchParams();
  const communityName = searchParams.get('name') || 
    process.env.NEXT_PUBLIC_DEFAULT_COMMUNITY_NAME || 
    'コミュニティ名';

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {communityName}
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              概要
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              料金
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                コミュニティ名
              </h1>
            </div>
          </div>
        </div>
      </header>
    }>
      <HeaderContent />
    </Suspense>
  );
}