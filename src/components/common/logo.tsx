import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/images/KrisiAiLogo.png"
        alt="Krisi AI Logo"
        fill
        className="object-contain drop-shadow-sm"
        priority
        onError={(e) => {
          // Fallback to SVG if image not found
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <svg viewBox="0 0 100 100" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 60 C25 50, 30 45, 40 45 C45 45, 50 48, 55 50 C60 52, 65 50, 70 45 C75 40, 80 35, 80 30 C80 25, 75 20, 70 20 C65 20, 60 25, 55 30 C50 35, 45 40, 40 40 C35 40, 30 45, 25 50 Z" fill="#2D5016" class="drop-shadow-sm"></path>
                <path d="M35 35 C30 25, 25 20, 20 25 C15 30, 20 35, 25 40 C30 45, 35 40, 40 35 C38 33, 36 31, 35 35 Z" fill="#4A7C59" class="drop-shadow-sm"></path>
                <path d="M55 30 C52 25, 48 22, 45 25 C42 28, 45 32, 48 35 C51 38, 55 35, 58 30 C57 28, 56 26, 55 30 Z" fill="#4A7C59" class="drop-shadow-sm"></path>
                <path d="M25 30 L30 35 M30 30 L35 35" stroke="#2D5016" stroke-width="1" stroke-linecap="round"></path>
                <path d="M48 25 L50 30 M50 25 L52 30" stroke="#2D5016" stroke-width="0.8" stroke-linecap="round"></path>
              </svg>
            `;
          }
        }}
      />
    </div>
  );
}
