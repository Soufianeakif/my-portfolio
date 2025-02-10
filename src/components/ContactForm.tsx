'use client';

import React, { useState, useRef, useEffect } from 'react';

interface ReCaptchaOptions {
  sitekey: string;
  size?: 'normal' | 'compact' | 'invisible';
  theme?: 'light' | 'dark';
  callback?: (response: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: () => Promise<string>;
      render: (element: HTMLElement, options: ReCaptchaOptions) => number;
      reset: () => void;
      getResponse: () => string;
    };
  }
}

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    setRecaptchaError(null);

    try {
      // Get reCAPTCHA response
      const recaptchaValue = window.grecaptcha?.getResponse();
      
      if (!recaptchaValue) {
        setRecaptchaError('Please complete the reCAPTCHA verification');
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData(event.currentTarget);
      const formValues = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        subject: "New Contact Form Submission",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formValues)
      });

      const data = await response.json();

      if (response.ok) {
        setResult("Thank you for your message! I'll get back to you soon.");
        if (formRef.current) {
          formRef.current.reset();
        }
        window.grecaptcha?.reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out to me for any questions or opportunities!
            </p>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#DF6D14] focus:border-transparent outline-none transition-colors font-poppins"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#DF6D14] focus:border-transparent outline-none transition-colors font-poppins"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#DF6D14] focus:border-transparent outline-none transition-colors font-poppins resize-none"
                placeholder="Your message"
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div 
                className="g-recaptcha" 
                data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              ></div>
              {recaptchaError && (
                <p className="text-red-500 dark:text-red-400 text-sm">{recaptchaError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#DF6D14] hover:bg-[#DF6D14]/90'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {result && (
            <div className={`mt-4 p-4 rounded-lg text-center ${
              result.includes("Thank you")
                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
            }`}>
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
