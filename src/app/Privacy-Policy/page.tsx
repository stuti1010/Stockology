"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const supportEmail = "support@stockology.com"; // Replace with your actual email

  return (
    <main className=" flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-6xl w-full border border-gray-200">
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 mb-6 transition-all"
        >
          <FaArrowLeft className="text-lg" /> Back
        </button>

        {/* Title */}
        <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your privacy is important to us. Please read our policy carefully.
        </p>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {/* Data Collection */}
          <section className="p-5 border-l-4 border-blue-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-blue-600">1. Data Collection</h2>
            <p className="text-gray-700 mt-2">
              We collect personal information such as your name, email address, and contact details when you register or interact with our services.
            </p>
            <p className="text-gray-700 mt-2">
              This information helps us improve user experience and ensure secure transactions.
            </p>
          </section>

          {/* Use of Information */}
          <section className="p-5 border-l-4 border-green-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-green-600">2. Use of Information</h2>
            <p className="text-gray-700 mt-2">
              Your personal data is used for account verification, customer support, and service improvement.
            </p>
            <p className="text-gray-700 mt-2">
              We do not sell or rent your information to third parties.
            </p>
          </section>

          {/* Cookies & Tracking */}
          <section className="p-5 border-l-4 border-yellow-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-yellow-600">3. Cookies & Tracking</h2>
            <p className="text-gray-700 mt-2">
              Our website uses cookies to enhance user experience and track site performance.
            </p>
            <p className="text-gray-700 mt-2">
              You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          {/* Data Security */}
          <section className="p-5 border-l-4 border-red-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-red-600">4. Data Security</h2>
            <p className="text-gray-700 mt-2">
              We implement strong security measures to protect your personal data from unauthorized access.
            </p>
            <p className="text-gray-700 mt-2">
              Always keep your account credentials safe and avoid sharing them with others.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="p-5 border-l-4 border-purple-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-purple-600">5. Third-Party Links</h2>
            <p className="text-gray-700 mt-2">
              Our website may contain links to third-party sites. We are not responsible for their privacy practices.
            </p>
            <p className="text-gray-700 mt-2">
              Please review their policies before providing any personal information.
            </p>
          </section>
        </div>

        {/* Contact Support Section */}
        <div className="mt-8 text-center bg-gray-200 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Need Assistance?</h3>
          <p className="text-gray-600 mt-2">For privacy-related concerns, feel free to reach out.</p>
          <a 
            href={`mailto:${supportEmail}`} 
            className="mt-3 inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Contact Us at {supportEmail}
          </a>
        </div>

        {/* User Agreement */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            By using our services, you agree to this Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
