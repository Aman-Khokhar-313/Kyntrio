import { useState } from "react";
import { Upload, X, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    services: [],
    message: "",
    attachment: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const budgetOptions = ["<$1k", "$1k–$3k", "$3k–$10k", "$10k+"];
  const serviceOptions = [
    "Digital Marketing",
    "Software Development",
    "AI/ML Projects & Custom Software",
    "Customized Web Design",
    "SEO Optimization",
    "ML Architecture & Model Designing",
    "AI Automation Workflows",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      attachment: file,
    }));
  };

  const removeFile = () => {
    setFormData((prev) => ({
      ...prev,
      attachment: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "services") {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else if (key === "attachment" && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        services: [],
        message: "",
        attachment: null,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-3xl p-8 border border-[#E5E5E5] dark:border-[#333333] text-center">
        <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={32} className="text-[#22C55E]" />
        </div>
        <h3 className="text-2xl font-bold text-[#111111] dark:text-white mb-4">
          Thanks! We'll reach out shortly.
        </h3>
        <p className="text-[#666666] dark:text-[#B0B0B0] mb-6">
          Your message has been sent successfully. We typically respond within
          24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="px-6 py-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium rounded-xl transition-colors duration-200"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl text-[#111111] dark:text-white placeholder-[#666666] dark:placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl text-[#111111] dark:text-white placeholder-[#666666] dark:placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl text-[#111111] dark:text-white placeholder-[#666666] dark:placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent"
          placeholder="Your company name"
        />
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
        >
          Budget *
        </label>
        <select
          id="budget"
          name="budget"
          required
          value={formData.budget}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent"
        >
          <option value="">Select budget range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Services */}
      <div>
        <label className="block text-sm font-medium text-[#111111] dark:text-white mb-3">
          Services *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-center gap-3 p-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl cursor-pointer hover:border-[#22C55E]/50 transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
                className="w-4 h-4 text-[#22C55E] border-[#E5E5E5] dark:border-[#333333] rounded focus:ring-[#22C55E] focus:ring-2"
              />
              <span className="text-sm text-[#111111] dark:text-white">
                {service}
              </span>
            </label>
          ))}
        </div>
        {formData.services.length === 0 && (
          <p className="text-sm text-[#666666] dark:text-[#B0B0B0] mt-2">
            Please select at least one service
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl text-[#111111] dark:text-white placeholder-[#666666] dark:placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent resize-vertical"
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-[#111111] dark:text-white mb-2">
          Attachment
        </label>
        {!formData.attachment ? (
          <div className="relative">
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
            />
            <label
              htmlFor="attachment"
              className="flex items-center justify-center gap-3 p-6 bg-white dark:bg-[#1A1A1A] border-2 border-dashed border-[#E5E5E5] dark:border-[#333333] rounded-xl cursor-pointer hover:border-[#22C55E]/50 transition-colors duration-200"
            >
              <Upload
                size={20}
                className="text-[#666666] dark:text-[#B0B0B0]"
              />
              <span className="text-[#666666] dark:text-[#B0B0B0]">
                Drop a file or click to upload
              </span>
            </label>
          </div>
        ) : (
          <div className="flex items-center justify-between p-3 bg-[#F8F9FA] dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl">
            <span className="text-sm text-[#111111] dark:text-white">
              {formData.attachment.name}
            </span>
            <button
              type="button"
              onClick={removeFile}
              className="p-1 hover:bg-[#E5E5E5] dark:hover:bg-[#404040] rounded-lg transition-colors duration-200"
            >
              <X size={16} className="text-[#666666] dark:text-[#B0B0B0]" />
            </button>
          </div>
        )}
        <p className="text-xs text-[#666666] dark:text-[#B0B0B0] mt-1">
          Max file size: 10MB. Formats: PDF, DOC, DOCX, TXT, PNG, JPG
        </p>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting || formData.services.length === 0}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#22C55E] hover:bg-[#16A34A] disabled:bg-[#666666] text-white font-semibold text-lg rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
            </>
          )}
        </button>

        {submitStatus === "error" && (
          <p className="text-red-500 text-sm mt-2 text-center">
            There was an error sending your message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
