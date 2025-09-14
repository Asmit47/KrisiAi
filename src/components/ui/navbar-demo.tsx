"use client"

import * as React from "react"
import { Header, Button } from "@/components/ui/21st-navbar"
import { Menu, User, Sun, Moon, ChevronDown, Camera, Upload, Globe } from "lucide-react"
import Logo from "@/components/common/logo"

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
    text: "Resources",
    to: "/resources"
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
  }
]

// Basic light theme demo
export const LightDemo = () => {
  return (
    <div className="w-full">
      <Header
        logo={
          <div className="flex items-center space-x-3">
            <Logo size="md" className="text-green-700" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Krisi AI</h1>
              <p className="text-xs text-gray-500">Crop Disease Diagnosis</p>
            </div>
          </div>
        }
        menuItems={menuItems}
        rightContent={
          <div className="flex items-center space-x-2">
            <Button variant="default">
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        }
      />
    </div>
  )
}

// Dark theme demo
export const DarkDemo = () => {
  return (
    <div className="w-full bg-[#0B0C0F] min-h-[200px]">
      <Header
        theme="dark"
        logo={
          <div className="flex items-center space-x-3">
            <Logo size="md" className="text-green-400" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Krisi AI</h1>
              <p className="text-xs text-gray-400">Crop Disease Diagnosis</p>
            </div>
          </div>
        }
        menuItems={menuItems}
        rightContent={
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
            <Button 
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        }
      />
    </div>
  )
}

// Theme switcher demo
export const ThemeDemo = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
  
  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-[#0B0C0F]' : 'bg-white'} min-h-[200px]`}>
      <Header
        theme={theme}
        logo={
          <div className="flex items-center space-x-3">
            <Logo size="md" className={theme === 'dark' ? 'text-green-400' : 'text-green-700'} />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Krisi AI
              </h1>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Crop Disease Diagnosis
              </p>
            </div>
          </div>
        }
        menuItems={menuItems}
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        rightContent={
          <div className="flex items-center space-x-2">
            <Button 
              variant={theme === 'dark' ? 'outline' : 'default'}
              className={theme === 'dark' ? 'text-white border-white/20 hover:bg-white/10' : ''}
            >
              {theme === 'dark' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
              {theme === 'dark' ? 'Dark' : 'Light'}
            </Button>
            <Button 
              variant={theme === 'dark' ? 'outline' : 'default'}
              className={theme === 'dark' ? 'text-white border-white/20 hover:bg-white/10' : ''}
            >
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
          </div>
        }
      />
    </div>
  )
}

