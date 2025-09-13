"use client"

import TopNavbar from '@/components/common/top-navbar'

export default function MobileDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-8 p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mobile-Friendly Navbar Demo</h1>
          <p className="text-lg text-gray-600">Optimized for phone and tablet devices</p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Light Theme</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <TopNavbar theme="light" />
              <div className="p-8 text-center text-gray-600">
                <p>This is the main content area. The navbar above is optimized for mobile devices.</p>
                <p className="mt-2 text-sm">Try resizing your browser window to see the responsive behavior.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Dark Theme</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-900">
              <TopNavbar theme="dark" />
              <div className="p-8 text-center text-gray-300">
                <p>This is the main content area. The navbar above is optimized for mobile devices.</p>
                <p className="mt-2 text-sm">Try resizing your browser window to see the responsive behavior.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile Optimizations</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Language switcher integrated as dropdown menu item</li>
            <li>✅ Removed Resources menu for cleaner layout</li>
            <li>✅ Responsive logo sizing (smaller on mobile)</li>
            <li>✅ Touch-friendly mobile menu button</li>
            <li>✅ Collapsible mobile menu with all options</li>
            <li>✅ Optimized spacing and padding for mobile</li>
            <li>✅ Better visual hierarchy on small screens</li>
            <li>✅ Smooth transitions and animations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
