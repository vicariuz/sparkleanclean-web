import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center p-8 max-w-lg">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We received your quote request! We'll contact you within 24 hours at the number or email you provided.
        </p>
        <Link 
          to="/" 
          className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}