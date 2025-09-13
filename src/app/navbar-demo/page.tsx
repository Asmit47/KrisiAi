"use client"

import { LightDemo, DarkDemo, ThemeDemo } from '@/components/ui/navbar-demo'

export default function NavbarDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">21st Century Navbar Demo</h1>
          <p className="text-lg text-gray-600">Modern navigation component for Krisi AI</p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Light Theme</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <LightDemo />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dark Theme</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <DarkDemo />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Theme Switcher</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <ThemeDemo />
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Modern 21st century design</li>
            <li>✅ Light and dark theme support</li>
            <li>✅ Responsive design</li>
            <li>✅ Dropdown menus with icons</li>
            <li>✅ Smooth animations</li>
            <li>✅ Sticky navigation option</li>
            <li>✅ Backdrop blur effects</li>
            <li>✅ Mobile-friendly</li>
            <li>✅ Customizable branding</li>
            <li>✅ TypeScript support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
