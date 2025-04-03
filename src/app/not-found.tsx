'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <head>
        <title>Custom 404 Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center text-center p-5 font-sans">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              404
            </h1>
            <p className="text-2xl text-gray-700 max-w-md mx-auto">
              Oops! It seems we&apos;ve lost this page in our medical records.
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Return Home
            </Link>
          </div>
        </div>
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out;
          }
        `}</style>
      </body>
    </html>
  );
}
