"use client";

import React, { useContext } from 'react';
import { Header } from '@/components/ui/21st-navbar';
import Logo from './logo';
import { LanguageContext } from '@/context/language-context';

interface TopNavbarProps {
  className?: string;
  theme?: 'light' | 'dark';
  isSticky?: boolean;
  isStickyOverlay?: boolean;
  withBorder?: boolean;
}

export default function TopNavbar({ 
  className = '', 
  theme = 'light',
  isSticky = false,
  isStickyOverlay = false,
  withBorder = true
}: TopNavbarProps) {
  const { language, setLanguage } = useContext(LanguageContext);

  // Sample menu items for Krisi AI
  const menuItems = [
    {
      text: "Services",
      items: [
        {
          text: "Crop Diagnosis",
          description: "AI-powered crop disease detection",
          to: "/diagnosis",
          icon: {
            light: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=20&h=20&fit=crop&crop=center"
          }
        },
        {
          text: "Weather Forecast",
          description: "Real-time weather updates",
          to: "/weather",
          icon: {
            light: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=20&h=20&fit=crop&crop=center"
          }
        },
        {
          text: "Market Prices",
          description: "Crop pricing information",
          to: "/prices",
          icon: {
            light: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=20&h=20&fit=crop&crop=center"
          }
        }
      ]
    },
    {
      text: "Support",
      items: [
        {
          text: "Help Center",
          description: "Get help and support",
          to: "/help",
          icon: {
            light: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=20&h=20&fit=crop&crop=center"
          }
        },
        {
          text: "Contact Us",
          description: "Reach out to our team",
          to: "/contact",
          icon: {
            light: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=20&h=20&fit=crop&crop=center"
          }
        }
      ]
    },
    {
      text: "Language",
      items: [
        {
          text: "English",
          description: "Switch to English",
          to: "#",
          icon: {
            light: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=20&h=20&fit=crop&crop=center"
          }
        },
        {
          text: "हिंदी",
          description: "हिंदी में बदलें",
          to: "#",
          icon: {
            light: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=20&h=20&fit=crop&crop=center"
          }
        },
        {
          text: "Hinglish",
          description: "Hinglish mein badle",
          to: "#",
          icon: {
            light: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=20&h=20&fit=crop&crop=center",
            dark: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=20&h=20&fit=crop&crop=center"
          }
        }
      ]
    }
  ];

  return (
    <Header
      className={className}
      theme={theme}
      isSticky={isSticky}
      isStickyOverlay={isStickyOverlay}
      withBorder={withBorder}
      logo={
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Logo size="md" className={theme === 'dark' ? 'text-green-400' : 'text-green-700'} />
          <div className="hidden sm:block">
            <h1 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Krisi AI
            </h1>
            <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Crop Disease Diagnosis
            </p>
          </div>
          <div className="sm:hidden">
            <h1 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Krisi AI
            </h1>
          </div>
        </div>
      }
      menuItems={menuItems}
      rightContent={null}
    />
  );
}
