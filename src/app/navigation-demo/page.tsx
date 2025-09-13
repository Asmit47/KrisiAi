"use client"

import ModernNavbar from '@/components/common/modern-navbar'

export default function NavigationDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-8 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Modern Navigation Demo</h1>
          <p className="text-lg text-gray-600">Radix UI powered navigation with Krisi AI branding</p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Light Theme</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <ModernNavbar theme="light" />
              <div className="p-8 text-center text-gray-600">
                <p>This is the main content area. The navigation above uses Radix UI components.</p>
                <p className="mt-2 text-sm">Try hovering over the Services and Support menus to see the dropdowns.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dark Theme</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-900">
              <ModernNavbar theme="dark" />
              <div className="p-8 text-center text-gray-300">
                <p>This is the main content area. The navigation above uses Radix UI components.</p>
                <p className="mt-2 text-sm">Try hovering over the Services and Support menus to see the dropdowns.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Radix UI Navigation Menu with smooth animations</li>
            <li>✅ Responsive design with mobile-first approach</li>
            <li>✅ Dropdown menus for Services and Support</li>
            <li>✅ Integrated language switcher with Krisi AI branding</li>
            <li>✅ Accessible keyboard navigation</li>
            <li>✅ Touch-friendly mobile menu</li>
            <li>✅ Consistent with shadcn/ui design system</li>
            <li>✅ TypeScript support with proper type safety</li>
            <li>✅ Smooth hover and focus states</li>
            <li>✅ Professional agricultural theme integration</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Navigation Structure</h3>
          <div className="space-y-2 text-blue-700">
            <div><strong>Services:</strong> Crop Diagnosis, Weather Forecast, Market Prices</div>
            <div><strong>Support:</strong> Help Center, Contact Us, Documentation</div>
            <div><strong>Language:</strong> English, हिंदी, Hinglish</div>
            <div><strong>Mobile:</strong> Collapsible hamburger menu with all options</div>
          </div>
        </div>
      </div>
    </div>
  )
}
