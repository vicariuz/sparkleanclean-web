import { Link } from 'react-router-dom';
import { Home, Phone, FileText } from 'lucide-react';
import Seo from './Seo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo title="Page Not Found | Sparklean Cleaning Services" noindex />

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/img/sparklean-cleaning-logo-lafayette.webp"
                alt="Sparklean Cleaning Services Lafayette LA logo"
                width="200"
                height="48"
                className="h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition font-medium">Home</Link>
              <Link to="/blog" className="text-gray-700 hover:text-green-600 transition font-medium">Blog</Link>
              <a href="tel:3375540468" className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition shadow-md">
                (337) 554-0468
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Message */}
      <main className="flex-1 flex items-center bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-7xl md:text-8xl font-bold text-green-600 mb-4">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! This page got cleaned away
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            We couldn't find the page you were looking for. It may have moved or the link may be incorrect.
            Head back home or ask us for a free cleaning quote in Lafayette, LA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-xl"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center space-x-2 bg-white text-green-700 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition"
            >
              <FileText className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </Link>
          </div>
          <p className="mt-8 text-gray-600">
            Prefer to talk?{' '}
            <a href="tel:3375540468" className="inline-flex items-center space-x-1 font-semibold text-green-700 hover:text-green-800">
              <Phone className="w-4 h-4" />
              <span>(337) 554-0468</span>
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Sparklean Cleaning Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
