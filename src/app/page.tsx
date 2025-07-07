import { Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RecommendedUsersSection from '@/components/RecommendedUsersSection';
import ContentExamplesSection from '@/components/ContentExamplesSection';
import PricingSection from '@/components/PricingSection';
import InfluencerSection from '@/components/InfluencerSection';
import FAQSection from '@/components/FAQSection';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RecommendedUsersSection />
      <ContentExamplesSection />
      <PricingSection />
      <InfluencerSection />
      <FAQSection />
      
      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            今すぐコミュニティに参加しよう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            あなたの成長を加速させる特別なコミュニティが待っています
          </p>
          <CTAButton 
            variant="secondary" 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl"
          >
            コミュニティに参加する
          </CTAButton>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Community Landing Page. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              特定商取引法
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
