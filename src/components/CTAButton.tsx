'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

function CTAButtonContent({ variant = 'primary', size = 'md', className = '', children }: CTAButtonProps) {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || 
    process.env.NEXT_PUBLIC_DEFAULT_REDIRECT_URL || 
    'https://example.com/join';

  const handleClick = () => {
    window.open(redirectUrl, '_blank');
  };

  const getButtonStyles = () => {
    const baseStyles = 'font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200';
    
    switch (variant) {
      case 'primary':
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white`;
      case 'secondary':
        return `${baseStyles} bg-green-600 hover:bg-green-700 text-white`;
      case 'outline':
        return `${baseStyles} border-blue-600 text-blue-600 hover:bg-blue-50`;
      default:
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white`;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <Button 
      onClick={handleClick}
      className={`${getButtonStyles()} ${getSizeStyles()} ${className}`}
      variant={variant === 'outline' ? 'outline' : 'default'}
    >
      {children}
    </Button>
  );
}

export default function CTAButton(props: CTAButtonProps) {
  return (
    <Suspense fallback={
      <Button 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold rounded-lg"
        disabled
      >
        {props.children}
      </Button>
    }>
      <CTAButtonContent {...props} />
    </Suspense>
  );
}