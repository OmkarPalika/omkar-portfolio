// components/sections/ContactSection.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import SectionLayout from "../SectionLayout";

type FormData = {name: string; email: string; message: string};
type FormStatus = {message: string; isError: boolean; isSubmitting: boolean};

const INITIAL_STATE = {
  form: {name: "", email: "", message: ""} as FormData,
  status: {message: "", isError: false, isSubmitting: false} as FormStatus
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE.form);
  const [formStatus, setFormStatus] = useState<FormStatus>(INITIAL_STATE.status);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value.trim()}));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({message: "Please fill in all fields", isError: true, isSubmitting: false});
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({message: "Please enter a valid email", isError: true, isSubmitting: false});
      return;
    }

    setFormStatus({message: "", isError: false, isSubmitting: true});

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({message: "Message sent successfully ✅", isError: false, isSubmitting: false});
      setFormData(INITIAL_STATE.form);
      setTimeout(() => setFormStatus(INITIAL_STATE.status), 1500);
    } catch (error) {
      setFormStatus({
        message: error instanceof Error ? error.message : "Failed to send message",
        isError: true,
        isSubmitting: false
      });
    }
  };

  const baseClasses = "w-full px-5 py-4 rounded-xl transition duration-200";
  const inputClasses = `${baseClasses} bg-[var(--color-card-bg)] text-white border border-gray-700 focus:border-[var(--color-brand-green)] focus:outline-none hover:border-gray-600`;
  const buttonClasses = `${baseClasses} bg-[var(--color-brand-green)] text-white hover:bg-green-700 flex items-center justify-center ${formStatus.isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`;

  return (
    <SectionLayout id="contact" title="CONTACT ME">
      <div className="max-w-xl mx-auto">
        <div className="bg-card-bg rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} noValidate>
            {["name", "email"].map(field => (
              <div key={field} className="mb-6">
                <input
                  type={field}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  required
                  minLength={field === "name" ? 2 : undefined}
                  className={inputClasses}
                  aria-label={`Your ${field}`}
                />
              </div>
            ))}

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                rows={5}
                className={inputClasses}
                aria-label="Your message"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className={buttonClasses}
              aria-busy={formStatus.isSubmitting}
            >
              {isClient ? (formStatus.isSubmitting ? "Sending Message..." : "Send Message") : "Send Message"}
            </button>

            {isClient && formStatus.message && (
              <div
                className={`mt-4 p-3 rounded-lg text-center ${formStatus.isError ? "bg-red-900/50 text-red-200" : "bg-green-900/50 text-green-200"}`}
                role="alert"
                aria-live="polite"
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </SectionLayout>
  );
}
