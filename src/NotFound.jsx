import { Link } from 'react-router-dom';
import Seo from './Seo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Seo title="Page Not Found | Sparklean Cleaning Services" noindex />
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has moved. Explore our cleaning services in Lafayette, LA instead.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">Back to home</Link>
          <Link to="/residential-cleaning-lafayette" className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">House cleaning</Link>
          <Link to="/blog" className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">Blog</Link>
        </div>
      </div>
    </div>
  );
}
