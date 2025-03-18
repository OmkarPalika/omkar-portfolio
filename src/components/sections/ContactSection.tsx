// components/sections/ContactSection.tsx
"use client"
import { useState, useEffect } from 'react';
import SectionLayout from '../SectionLayout';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  // Ensure consistent rendering on client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ message: '', isError: false, isSubmitting: true });

    setTimeout(() => {
      setFormStatus({
        message: 'Message sent successfully ✅',
        isError: false,
        isSubmitting: false
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus({ message: '', isError: false, isSubmitting: false });
      }, 5000);
    }, 1500);
  };

  return (
    <SectionLayout id="contact" title="CONTACT ME">
      <div className="max-w-xl mx-auto">
        <div className="bg-card-bg rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Names"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-[var(--color-brand-green)] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-[var(--color-brand-green)] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-800 text-white px-5 py-4 rounded-xl border border-gray-700 focus:border-[var(--color-brand-green)] focus:outline-none transition-colors"
              ></textarea>
            </div>

            {/* Ensure button text is consistent */}
            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className={`w-full bg-[var(--color-brand-green)] text-white py-4 px-6 rounded-xl hover:bg-green-700 transition duration-300 flex items-center justify-center ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isClient ? (formStatus.isSubmitting ? 'Sending Message...' : 'Send Message') : 'Send Message'}
            </button>

            {/* Ensure success message doesn't cause hydration errors */}
            {isClient && formStatus.message && (
              <div className={`mt-4 p-3 rounded-lg text-center ${formStatus.isError ? 'bg-red-900 text-red-200' : 'bg-green-900 text-green-200'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </SectionLayout>
  );
}
