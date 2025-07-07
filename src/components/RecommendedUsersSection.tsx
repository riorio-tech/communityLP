'use client';

import React from 'react';

export default function RecommendedUsersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        {/* コミュニティ概要 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-pop animate-pop">
            インフルエンサーのコミュニティ概要
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-pop animate-fade-in-up max-w-2xl mx-auto">
            このコミュニティは、インフルエンサー「ささみ」が主催する、<br />
            みんなで楽しく学び・交流し・成長できる特別な場所です。<br />
            料理・日常・最新トレンドなど、幅広いテーマでワクワクする体験をお届けします！
          </p>
        </div>
        {/* YouTube埋め込み */}
        <div className="flex justify-center mb-16">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0qwGysmM5sA?si=ccE8FasTipVI8fTL" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-2xl shadow-lg w-full max-w-2xl aspect-video"></iframe>
        </div>
        {/* 提供コンテンツ例 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-8 text-center font-pop animate-pop">
            提供コンテンツ例
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-yellow-50 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
              <img src="/globe.svg" alt="限定ライブ" className="w-16 h-16 mb-4" />
              <h4 className="text-lg font-bold text-pink-500 mb-2 font-pop">限定ライブ配信</h4>
              <p className="text-gray-700 text-sm">インフルエンサーと一緒に楽しむ限定ライブ！リアルタイムで交流＆質問もOK。</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-yellow-50 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img src="/window.svg" alt="愛用品紹介" className="w-16 h-16 mb-4" />
              <h4 className="text-lg font-bold text-pink-500 mb-2 font-pop">愛用品紹介</h4>
              <p className="text-gray-700 text-sm">普段使っている調理グッズやお気に入りアイテムを紹介。こだわりポイントも解説！</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-yellow-50 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <img src="/star.svg" alt="特別イベント" className="w-16 h-16 mb-4" />
              <h4 className="text-lg font-bold text-pink-500 mb-2 font-pop">特別イベント</h4>
              <p className="text-gray-700 text-sm">メンバー限定のワークショップやコラボ企画など、ここだけの体験が盛りだくさん！</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}