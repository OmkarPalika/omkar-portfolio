// components/sections/ContactSection.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import SectionLayout from "../SectionLayout";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  message: string;
  isError: boolean;
  isSubmitting: boolean;
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  message: "",
};

const INITIAL_FORM_STATUS: FormStatus = {
  message: "",
  isError: false,
  isSubmitting: false,
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [formStatus, setFormStatus] = useState<FormStatus>(INITIAL_FORM_STATUS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
  }, []);

  const updateFormStatus = useCallback((status: Partial<FormStatus>) => {
    setFormStatus((prev) => ({
      ...prev,
      ...status,
    }));
  }, []);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trim() }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      updateFormStatus({
        message: "Please fill in all fields",
        isError: true,
        isSubmitting: false
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      updateFormStatus({
        message: "Please enter a valid email address",
        isError: true,
        isSubmitting: false
      });
      return;
    }

    updateFormStatus({ message: "", isError: false, isSubmitting: true });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      updateFormStatus({
        message: "Message sent successfully ✅",
        isError: false,
        isSubmitting: false,
      });

      resetForm();

      setTimeout(() => {
        updateFormStatus(INITIAL_FORM_STATUS);
      }, 1500);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      updateFormStatus({
        message: errorMessage,
        isError: true,
        isSubmitting: false,
      });
    }
  };

  const inputClasses = `
    w-full bg-gray-800 text-white px-5 py-4 rounded-xl 
    border border-gray-700 
    focus:border-[var(--color-brand-green)] focus:outline-none 
    transition-colors duration-200
    hover:border-gray-600
  `;

  const buttonClasses = `
    w-full bg-[var(--color-brand-green)] text-white 
    py-4 px-6 rounded-xl 
    hover:bg-green-700 
    transition duration-300 
    flex items-center justify-center
    ${formStatus.isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
  `;

  return (
    <SectionLayout id="contact" title="CONTACT ME">
      <div className="max-w-xl mx-auto">
        <div className="bg-card-bg rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Names"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                className={inputClasses}
                aria-label="Your name"
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
                className={inputClasses}
                aria-label="Your email"
              />
            </div>

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
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className={buttonClasses}
              aria-busy={formStatus.isSubmitting}
            >
              {isClient
                ? formStatus.isSubmitting
                  ? "Sending Message..."
                  : "Send Message"
                : "Send Message"}
            </button>

            {isClient && formStatus.message && (
              <div
                className={`mt-4 p-3 rounded-lg text-center ${
                  formStatus.isError
                    ? "bg-red-900/50 text-red-200"
                    : "bg-green-900/50 text-green-200"
                }`}
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
