import { useState } from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-burgundy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">GG Corporation Vietnam</h3>
            <p className="text-warm-beige mb-6 leading-relaxed">
              Leading the way in premium wellbeing solutions, delivering excellence across healthcare, automotive, and technology sectors.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="icon" 
                variant="ghost"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
              >
                <Facebook size={20} />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
              >
                <Instagram size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-warm-beige">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Medical Wellness
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Premium Automotive
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Selective Healthcare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  AI & Smart Systems
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-warm-beige">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('core-values')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Core Values
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-warm-beige">
            © 2025 GG Corporation Vietnam. All rights reserved. |{" "}
            <button
              className="underline hover:text-white transition-colors duration-300"
              onClick={() => setShowPrivacy(true)}
              type="button"
            >
              Privacy Policy
            </button>{" "}
            |{" "}
            <button
              className="underline hover:text-white transition-colors duration-300"
              onClick={() => setShowTerms(true)}
              type="button"
            >
              Terms of Service
            </button>
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-black rounded-lg max-w-lg w-full p-8 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-800"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">📌 1. Privacy Policy</h2>
            <div className="space-y-4 text-sm">
              <div>
                <strong>1.1. Introduction &amp; Purpose</strong>
                <p>
                  This policy explains how we collect, use, store, share, and protect your personal data when you interact with our website or services.
                </p>
              </div>
              <div>
                <strong>1.2. Data We Collect</strong>
                <ul className="list-disc ml-5">
                  <li>Personal Information: name, email, phone number, address, company/organization (if applicable).</li>
                  <li>Technical Data: IP address, device type, browser, access behavior.</li>
                  <li>Cookies and similar tracking technologies.</li>
                </ul>
              </div>
              <div>
                <strong>1.3. Purpose of Data Collection</strong>
                <ul className="list-disc ml-5">
                  <li>To provide services and customer support.</li>
                  <li>To analyze and improve user experience.</li>
                  <li>For marketing or promotional purposes (with user consent).</li>
                  <li>To comply with legal obligations (investigation, law enforcement, taxation, etc.).</li>
                </ul>
              </div>
              <div>
                <strong>1.4. Legal Basis</strong>
                <p>
                  We process your data in accordance with Vietnamese laws including the Cybersecurity Law, Electronic Transactions Law, and Consumer Protection Law.
                </p>
              </div>
              <div>
                <strong>1.5. Data Retention</strong>
                <p>
                  Personal data is retained only as long as necessary for the stated purposes, typically 1–3 years, or as required by law.
                </p>
              </div>
              <div>
                <strong>1.6. Sharing with Third Parties</strong>
                <ul className="list-disc ml-5">
                  <li>Service providers (e.g., hosting, email delivery).</li>
                  <li>Legal authorities upon valid request.</li>
                  <li>We do not sell personal data to third parties.</li>
                </ul>
              </div>
              <div>
                <strong>1.7. User Rights</strong>
                <p>
                  You have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:info@ggcvietnam.vn" className="underline text-blue-600">info@ggcvietnam.vn</a> to make such requests.
                </p>
              </div>
              <div>
                <strong>1.8. Data Security</strong>
                <p>
                  We apply appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.
                </p>
              </div>
              <div>
                <strong>1.9. Changes to the Policy</strong>
                <p>
                  This policy may be updated periodically. Changes will be posted with the effective date clearly indicated.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-black rounded-lg max-w-lg w-full p-8 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-800"
              onClick={() => setShowTerms(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">2. Terms of Service</h2>
            <div className="space-y-4 text-sm">
              <div>
                <strong>2.1. Effective Date</strong>
                <p>
                  These terms apply from [insert date]. By accessing or using our website, you agree to these terms.
                </p>
              </div>
              <div>
                <strong>2.2. User Conduct</strong>
                <ul className="list-disc ml-5">
                  <li>Submit unlawful, defamatory, or abusive content.</li>
                  <li>Use bots or automated tools to harvest data.</li>
                  <li>Attempt to disrupt or damage the website.</li>
                </ul>
              </div>
              <div>
                <strong>2.3. Account &amp; Security</strong>
                <ul className="list-disc ml-5">
                  <li>Users must provide accurate information when registering.</li>
                  <li>Users are responsible for keeping their login credentials secure.</li>
                  <li>Violations may result in account suspension or termination.</li>
                </ul>
              </div>
              <div>
                <strong>2.4. Content Ownership</strong>
                <ul className="list-disc ml-5">
                  <li>Content on the site is owned by us unless otherwise noted.</li>
                  <li>Users retain rights to content they submit but grant us a license to use it when posted.</li>
                </ul>
              </div>
              <div>
                <strong>2.5. Disclaimer &amp; Limitation of Liability</strong>
                <ul className="list-disc ml-5">
                  <li>All information is provided “as is” without warranties.</li>
                  <li>We are not liable for indirect or incidental damages arising from the use of the site.</li>
                </ul>
              </div>
              <div>
                <strong>2.6. Modifications</strong>
                <p>
                  We may update these terms at any time. For significant changes, we’ll notify users via the site or email. Users are encouraged to review periodically.
                </p>
              </div>
              <div>
                <strong>2.7. Termination</strong>
                <p>
                  We reserve the right to suspend or terminate access for violations of these terms or applicable laws.
                </p>
              </div>
              <div>
                <strong>2.8. Governing Law &amp; Dispute Resolution</strong>
                <p>
                  These terms are governed by the laws of Vietnam.<br />
                  Any disputes shall be resolved amicably or by the competent courts of Vietnam.
                </p>
              </div>
              <div>
                <strong>2.9. Contact Information</strong>
                <p>
                  Email: <a href="mailto:info@ggcvietnam.vn" className="underline text-blue-600">info@ggcvietnam.vn</a><br />
                  Address: 9th Floor, 233 Dong Khoi, Ben Thanh District, Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
