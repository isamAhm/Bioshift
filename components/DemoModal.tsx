"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "./Icon";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic spam protection (honeypot)
    if (formData.website) {
      setIsSuccess(true);
      return;
    }

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured. Please contact support.");
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          company: formData.company.trim() || "Not provided",
          phone: formData.phone.trim() || "Not provided",
          message: formData.message.trim(),
        },
        publicKey
      );

      setIsSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send your request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-5 bg-[rgba(5,18,32,0.72)] backdrop-blur-[7px] overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[540px] max-h-[calc(100vh-40px)] overflow-y-auto bg-white text-navy rounded-2xl p-9 shadow-[0_24px_80px_rgba(0,0,0,0.25)] animate-slideUpFade"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4.5 w-9 h-9 rounded-full bg-slate text-navy text-[26px] leading-none transition-colors duration-200 hover:bg-line flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <span className="inline-block mb-2.5 text-[#b88700] text-[11px] font-extrabold tracking-[1.8px] uppercase">
                Get Started
              </span>
              <h2 className="text-[27px] leading-tight mb-2.5 font-serif text-navy">Request a Demo</h2>
              <p className="text-[#64748b] text-sm leading-relaxed m-0">
                Tell us about your needs and we'll show you how BioShift can help manage your workforce attendance.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-navy text-[13px] font-bold">
                  Name <span className="text-[#d97706]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full min-h-[46px] px-3.5 py-3 border border-[#dbe2ea] rounded-lg bg-slate text-navy text-sm font-sans outline-none transition-all duration-200 focus:border-navy focus:shadow-[0_0_0_3px_rgba(11,34,57,0.08)] focus:bg-white placeholder:text-[#94a3b8]"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-navy text-[13px] font-bold">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corporation"
                  className="w-full min-h-[46px] px-3.5 py-3 border border-[#dbe2ea] rounded-lg bg-slate text-navy text-sm font-sans outline-none transition-all duration-200 focus:border-navy focus:shadow-[0_0_0_3px_rgba(11,34,57,0.08)] focus:bg-white placeholder:text-[#94a3b8]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-navy text-[13px] font-bold">
                  Email <span className="text-[#d97706]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full min-h-[46px] px-3.5 py-3 border border-[#dbe2ea] rounded-lg bg-slate text-navy text-sm font-sans outline-none transition-all duration-200 focus:border-navy focus:shadow-[0_0_0_3px_rgba(11,34,57,0.08)] focus:bg-white placeholder:text-[#94a3b8]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-navy text-[13px] font-bold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full min-h-[46px] px-3.5 py-3 border border-[#dbe2ea] rounded-lg bg-slate text-navy text-sm font-sans outline-none transition-all duration-200 focus:border-navy focus:shadow-[0_0_0_3px_rgba(11,34,57,0.08)] focus:bg-white placeholder:text-[#94a3b8]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-navy text-[13px] font-bold">
                  Message <span className="text-[#d97706]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your workforce size, locations, and what you're looking for..."
                  rows={5}
                  className="w-full min-h-[150px] px-3.5 py-3 border border-[#dbe2ea] rounded-lg bg-slate text-navy text-sm font-sans outline-none transition-all duration-200 focus:border-navy focus:shadow-[0_0_0_3px_rgba(11,34,57,0.08)] focus:bg-white placeholder:text-[#94a3b8] resize-vertical leading-[1.65]"
                />
                <small className="text-[#94a3b8] text-[11px]">
                  Include number of employees and locations
                </small>
              </div>

              {/* Honeypot - hidden from users */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Error message */}
              {error && (
                <div className="p-3 px-3.5 border border-[#fecaca] rounded-lg bg-[#fef2f2] text-[#b91c1c] text-[13px] leading-relaxed">
                  {error}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-gradient-to-br from-navy to-navy-light text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:opacity-65 disabled:cursor-not-allowed flex justify-center items-center gap-2.5 relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-[17px] h-[17px] border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Request</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </>
                )}
              </button>

              {/* Privacy note */}
              <p className="m-0 text-[#94a3b8] text-center text-[11px] leading-relaxed">
                Your information is safe with us and will only be used to contact you about BioShift.
              </p>
            </form>
          </>
        ) : (
          /* Success state */
          <div className="py-6 px-1.5 text-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-5 rounded-full bg-[#ecfdf5] text-[#059669]">
              <Icon name="check" size={32} />
            </div>
            <h2 className="text-[25px] font-serif mb-3 text-navy">Thank You!</h2>
            <p className="m-0 mx-auto mb-6 max-w-[360px] text-[#64748b] text-sm leading-relaxed">
              Your demo request has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="inline-block px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-gradient-to-br from-navy to-navy-light text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
