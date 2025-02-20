"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function TermsPage() {
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
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please read the following terms carefully before using our services.
        </p>

        {/* Terms Sections */}
        <div className="space-y-6">
          {/* Client Responsibilities */}
          <section className="p-5 border-l-4 border-blue-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-blue-600">1. Client Responsibilities</h2>
            <p className="text-gray-700 mt-2">
              The Client shall immediately notify the Member in writing via email and Registered AD if they become aware of any loss, theft, or unauthorized use of their security codes or account number.
              This includes any failure to receive execution confirmation, receipt of orders they did not place, or inaccuracies in account balances.
            </p>
            <p className="text-gray-700 mt-2">
              Upon notification, the Member will suspend the Client’s account usage. However, the Client remains responsible for all transactions carried out using their password.
              The Member and its officers shall bear no responsibility for unauthorized usage prior to suspension.
            </p>
          </section>

          {/* Protection */}
          <section className="p-5 border-l-4 border-green-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-green-600">2. Protection</h2>
            <p className="text-gray-700 mt-2">
              We provide a unique username and two passwords for transactions. When placing an order, a transaction password is required for authentication.
            </p>
            <p className="text-gray-700 mt-2">
              Passwords automatically expire every 30 days, ensuring security. Users may change passwords online anytime. We recommend using the "Log Off" button to exit securely.
            </p>
          </section>

          {/* Internet Security */}
          <section className="p-5 border-l-4 border-yellow-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-yellow-600">3. Internet Scanners & Intrusion Detection</h2>
            <p className="text-gray-700 mt-2">
              Our system maintains an up-to-date database of attack signatures, scanning incoming traffic for malicious activity or hacking attempts.
            </p>
            <p className="text-gray-700 mt-2">
              If an attack is detected, the system terminates the session, logs details, and alerts administrators to prevent unauthorized access.
            </p>
          </section>

          {/* Identity Protection */}
          <section className="p-5 border-l-4 border-red-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-red-600">4. Identity Protection</h2>
            <p className="text-gray-700 mt-2">
              Do not respond to emails, SMS, or phone calls requesting your personal information, account details, or passwords.  
            </p>
            <p className="text-gray-700 mt-2">
              Always verify website authenticity before entering financial or personal data. Ensure the URL in your browser matches the intended website before proceeding.
            </p>
          </section>

          {/* Surveillance */}
          <section className="p-5 border-l-4 border-purple-600 bg-gray-100 rounded-lg">
            <h2 className="md:text-2xl text-lg font-semibold text-purple-600">5. Surveillance</h2>
            <p className="text-gray-700 mt-2">
              We have a sophisticated risk management system that continuously monitors market exposure, margin requirements, cash flow, and trading activities.
            </p>
            <p className="text-gray-700 mt-2">
              Our surveillance team actively reviews branch and franchisee activities to ensure compliance with regulatory and financial standards.
            </p>
          </section>
        </div>

        {/* Contact Support Section */}
        <div className="mt-8 text-center bg-gray-200 p-4 rounded-lg">
          <h3 className="md:text-2xl text-lg font-semibold text-gray-800">Need Assistance?</h3>
          <p className="text-gray-600 mt-2">If you have any questions about these terms, feel free to reach out to us.</p>
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
            If you do not agree with these terms, please exit the site.
          </p>
        </div>
      </div>
    </main>
  );
}
