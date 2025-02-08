'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  const initializeRecaptcha = () => {
    if (window.grecaptcha && recaptchaRef.current && !recaptchaWidgetId.current) {
      try {
        recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          callback: () => setRecaptchaError(null),
          'expired-callback': () => {
            setRecaptchaError('reCAPTCHA has expired, please verify again');
            if (recaptchaWidgetId.current !== null) {
              window.grecaptcha.reset(recaptchaWidgetId.current);
            }
          },
        });
        setRecaptchaLoaded(true);
      } catch (error) {
        console.error('Error rendering reCAPTCHA:', error);
        setRecaptchaError('Error loading reCAPTCHA. Please refresh the page.');
      }
    }
  };

  useEffect(() => {
    // Define the callback function that will be called when reCAPTCHA script loads
    window.onRecaptchaLoad = () => {
      initializeRecaptcha();
    };

    // If grecaptcha is already loaded, initialize it
    if (window.grecaptcha && window.grecaptcha.ready) {
      window.grecaptcha.ready(initializeRecaptcha);
    }

    return () => {
      window.onRecaptchaLoad = () => {};
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const recaptchaResponse = window.grecaptcha.getResponse(recaptchaWidgetId.current);
      if (!recaptchaResponse) {
        setRecaptchaError('Please complete the reCAPTCHA verification');
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus('idle');
      setRecaptchaError(null);

      const formData = new FormData(e.currentTarget);
      formData.append('g-recaptcha-response', recaptchaResponse);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        if (recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`}
        strategy="afterInteractive"
      />
      
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 dark:text-white mb-4 tracking-wide">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-poppins">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-poppins mb-1">
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-poppins mb-1">
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-poppins mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#DF6D14] focus:border-transparent outline-none transition-colors font-poppins resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div ref={recaptchaRef} className="g-recaptcha" />
              {recaptchaError && (
                <p className="text-red-500 dark:text-red-400 text-sm font-poppins">
                  {recaptchaError}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 font-poppins
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#DF6D14] hover:bg-[#DF6D14]/90'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 font-poppins text-sm">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 font-poppins text-sm">
                Sorry, something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};
