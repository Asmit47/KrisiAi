"use client"

import * as React from "react"
import { useState, useId, useContext } from "react"
import { ChevronDownIcon, GlobeIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Logo from "./logo"
import { LanguageContext } from "@/context/language-context"
import { translations } from "@/lib/i18n"

interface ModernNavbarProps {
  className?: string
  theme?: 'light' | 'dark'
}

export default function ModernNavbar({ className = '', theme = 'light' }: ModernNavbarProps) {
  const id = useId()
  const { language, setLanguage } = useContext(LanguageContext)
  const t = translations[language]

  // Navigation links for Krisi AI
  const navigationLinks = [
    { href: "/", label: t.appName },
    { href: "/services", label: "Services" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
  ]

  // Language options
  const languages = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "हिंदी" },
    { value: "Hinglish", label: "Hinglish" },
  ]

  // Services dropdown items
  const servicesItems = [
    {
      title: "Crop Diagnosis",
      href: "/diagnosis",
      description: "AI-powered crop disease detection using advanced machine learning algorithms.",
    },
    {
      title: "Weather Forecast",
      href: "/weather",
      description: "Real-time weather updates and agricultural weather predictions.",
    },
    {
      title: "Market Prices",
      href: "/prices",
      description: "Current crop pricing information and market trends.",
    },
  ]

  // Support dropdown items
  const supportItems = [
    {
      title: "Help Center",
      href: "/help",
      description: "Get help and support for using Krisi AI effectively.",
    },
    {
      title: "Contact Us",
      href: "/contact",
      description: "Reach out to our team for assistance and feedback.",
    },
    {
      title: "Documentation",
      href: "/docs",
      description: "Comprehensive guides and API documentation.",
    },
  ]

  return (
    <header className={`w-full border-b border-border bg-background ${className}`}>
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6 max-w-screen-2xl mx-auto">
        {/* Left side - Logo and Navigation */}
        <div className="flex flex-1 items-center gap-1 md:gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <MenuIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="block w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <div className="flex items-center gap-6">
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
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {servicesItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {supportItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/about"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>

        {/* Right side - Language Selector */}
        <div className="flex items-center gap-2">
          <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
            <SelectTrigger
              id={`language-${id}`}
              className="h-9 w-auto min-w-[120px] border-none shadow-none bg-transparent hover:bg-accent"
              aria-label="Select language"
            >
              <div className="flex items-center gap-2">
                <GlobeIcon className="h-4 w-4" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}
