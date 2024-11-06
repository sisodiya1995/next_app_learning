// pages/about.js

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our company! We are committed to delivering the best services to our customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional services that exceed our customers' expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of innovative solutions in our industry.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
            <p className="text-gray-600">
              Integrity, Excellence, and Customer Focus.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

