import { Link } from 'react-router-dom';

const SERVICES = [
  { to: '/residential-cleaning-lafayette', title: 'House Cleaning', text: 'One-time or recurring home cleaning for Lafayette families.' },
  { to: '/deep-cleaning-lafayette', title: 'Deep Cleaning', text: 'Top-to-bottom cleaning for homes that need a full reset.' },
  { to: '/move-out-cleaning-lafayette', title: 'Move-Out Cleaning', text: 'Spotless move-in and move-out cleaning to protect your deposit.' },
  { to: '/commercial-cleaning-lafayette', title: 'Commercial Cleaning', text: 'Reliable office and business cleaning across Lafayette.' },
];

export default function RelatedServices({ current }) {
  const others = SERVICES.filter((s) => s.to !== current);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          More Cleaning Services in Lafayette, LA
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="block bg-green-50 border-2 border-green-100 hover:border-green-300 rounded-xl p-6 transition"
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">{s.title} in Lafayette</h3>
              <p className="text-gray-700">{s.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
