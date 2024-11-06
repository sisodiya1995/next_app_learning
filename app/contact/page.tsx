import Header from "@/components/Header";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Please fill out the form below or reach
            out to us directly.
          </p>
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <form>
              <div className="mb-4">
                <label
                  className="block text-left text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-left text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
