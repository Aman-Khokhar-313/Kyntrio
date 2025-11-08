import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Send } from "lucide-react";

export default function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    company: "",
    companySize: "",
    industry: "",
    goals: [],
    timeline: "",
    budget: "",
    services: [],
    additionalInfo: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const steps = [
    {
      id: "company",
      title: "Company",
      description: "Tell us about your business",
    },
    {
      id: "goals",
      title: "Goals",
      description: "What do you want to achieve?",
    },
    {
      id: "timeline",
      title: "Timeline",
      description: "When do you need this done?",
    },
    {
      id: "budget",
      title: "Budget",
      description: "What's your investment range?",
    },
    {
      id: "services",
      title: "Services",
      description: "Which services do you need?",
    },
  ];

  const companyOptions = [
    "Startup (1-10 employees)",
    "Small Business (11-50 employees)",
    "Medium Business (51-200 employees)",
    "Enterprise (200+ employees)",
  ];

  const industryOptions = [
    "Technology/SaaS",
    "E-commerce",
    "Healthcare",
    "Finance/FinTech",
    "Education",
    "Manufacturing",
    "Professional Services",
    "Other",
  ];

  const goalOptions = [
    "Increase online sales",
    "Generate more leads",
    "Improve website performance",
    "Automate business processes",
    "Enhance customer experience",
    "Build AI/ML capabilities",
    "Improve SEO rankings",
    "Modernize technology stack",
  ];

  const timelineOptions = [
    "ASAP (Within 2 weeks)",
    "1 month",
    "2-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  const budgetOptions = [
    "Under ₹20k",
    "₹20k - ₹50k",
    "₹50k - ₹1L",
    "₹1L+",
    "Not sure yet",
  ];

  const serviceOptions = [
    "Digital Marketing",
    "Software Development",
    "AI/ML Projects & Custom Software",
    "Customized Web Design",
    "SEO Optimization",
    "ML Architecture & Model Designing",
    "AI Automation Workflows",
  ];

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleMultiSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSubmitStatus("success");
    } catch (error) {
      console.error("Quote submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.company && formData.companySize && formData.industry;
      case 1:
        return formData.goals.length > 0;
      case 2:
        return formData.timeline;
      case 3:
        return formData.budget;
      case 4:
        return formData.services.length > 0;
      default:
        return true;
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-3xl p-12 border border-[#E5E5E5] dark:border-[#333333] text-center">
        <div className="w-20 h-20 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check size={40} className="text-[#22C55E]" />
        </div>
        <h3 className="text-3xl font-bold text-[#111111] dark:text-white mb-6">
          Quote Request Received!
        </h3>
        <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
          Thank you for your interest! We'll analyze your requirements and send
          you a detailed quote within 48 hours.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[#666666] dark:text-[#B0B0B0]">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
            <span>Custom proposal tailored to your needs</span>
          </div>
          <div className="flex items-center gap-3 text-[#666666] dark:text-[#B0B0B0]">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
            <span>Transparent pricing breakdown</span>
          </div>
          <div className="flex items-center gap-3 text-[#666666] dark:text-[#B0B0B0]">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
            <span>Optional discovery call included</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-3xl p-8 border border-[#E5E5E5] dark:border-[#333333]">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                  index <= currentStep
                    ? "bg-[#22C55E] text-white"
                    : "bg-[#E5E5E5] dark:bg-[#333333] text-[#666666] dark:text-[#B0B0B0]"
                }`}
              >
                {index < currentStep ? <Check size={16} /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 md:w-16 h-1 mx-2 transition-colors duration-200 ${
                    index < currentStep
                      ? "bg-[#22C55E]"
                      : "bg-[#E5E5E5] dark:bg-[#333333]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-2">
            {steps[currentStep].title}
          </h3>
          <p className="text-[#666666] dark:text-[#B0B0B0]">
            {steps[currentStep].description}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {currentStep === 0 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#111111] dark:text-white mb-3">
                Company Name *
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111111] dark:text-white mb-3">
                Company Size *
              </label>
              <div className="space-y-2">
                {companyOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl cursor-pointer hover:border-[#22C55E]/50 transition-colors duration-200"
                  >
                    <input
                      type="radio"
                      name="companySize"
                      value={option}
                      checked={formData.companySize === option}
                      onChange={(e) =>
                        handleInputChange("companySize", e.target.value)
                      }
                      className="w-4 h-4 text-[#22C55E] border-[#E5E5E5] dark:border-[#404040] focus:ring-[#22C55E] focus:ring-2"
                    />
                    <span className="text-[#111111] dark:text-white">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111111] dark:text-white mb-3">
                Industry *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
              >
                <option value="">Select your industry</option>
                {industryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <label className="block text-sm font-medium text-[#111111] dark:text-white mb-4">
              Primary Goals (Select all that apply) *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {goalOptions.map((goal) => (
                <label
                  key={goal}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl cursor-pointer hover:border-[#22C55E]/50 transition-colors duration-200"
                >
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal)}
                    onChange={() => handleMultiSelect("goals", goal)}
                    className="w-4 h-4 text-[#6C5CE7] border-[#E5E5E5] dark:border-[#404040] rounded focus:ring-[#6C5CE7] focus:ring-2"
                  />
                  <span className="text-[#111111] dark:text-white">{goal}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <label className="block text-sm font-medium text-[#111111] dark:text-white mb-4">
              Project Timeline *
            </label>
            <div className="space-y-3">
              {timelineOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl cursor-pointer hover:border-[#22C55E]/50 transition-colors duration-200"
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={option}
                    checked={formData.timeline === option}
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
                    }
                    className="w-4 h-4 text-[#6C5CE7] border-[#E5E5E5] dark:border-[#404040] focus:ring-[#6C5CE7] focus:ring-2"
                  />
                  <span className="text-[#111111] dark:text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <label className="block text-sm font-medium text-[#111111] dark:text-white mb-4">
              Budget Range *
            </label>
            <div className="space-y-3">
              {budgetOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl cursor-pointer hover:border-[#22C55E]/50 transition-colors duration-200"
                >
                  <input
                    type="radio"
                    name="budget"
                    value={option}
                    checked={formData.budget === option}
                    onChange={(e) =>
                      handleInputChange("budget", e.target.value)
                    }
                    className="w-4 h-4 text-[#6C5CE7] border-[#E5E5E5] dark:border-[#404040] focus:ring-[#6C5CE7] focus:ring-2"
                  />
                  <span className="text-[#111111] dark:text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#111111] dark:text-white mb-4">
                Services Needed (Select all that apply) *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl cursor-pointer hover:border-[#22C55E]/50 transition-colors duration-200"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleMultiSelect("services", service)}
                      className="w-4 h-4 text-[#6C5CE7] border-[#E5E5E5] dark:border-[#404040] rounded focus:ring-[#6C5CE7] focus:ring-2"
                    />
                    <span className="text-[#111111] dark:text-white text-sm">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111111] dark:text-white mb-3">
                Additional Information
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleInputChange("additionalInfo", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent resize-vertical"
                placeholder="Tell us more about your project requirements, specific features needed, or any questions you have..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#111111] dark:text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.contactInfo.name}
                  onChange={(e) =>
                    handleInputChange("contactInfo.name", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111111] dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) =>
                    handleInputChange("contactInfo.email", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#404040] rounded-xl text-[#111111] dark:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F8F9FA] dark:hover:bg-[#333333] transition-colors duration-200"
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={
              !canProceed() ||
              !formData.contactInfo.name ||
              !formData.contactInfo.email ||
              isSubmitting
            }
            className="flex items-center gap-2 px-8 py-3 bg-[#22C55E] hover:bg-[#16A34A] disabled:bg-[#666666] text-white font-semibold rounded-xl transition-colors duration-200"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Get Quote</span>
              </>
            )}
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className="flex items-center gap-2 px-6 py-3 bg-[#22C55E] hover:bg-[#16A34A] disabled:bg-[#666666] text-white font-medium rounded-xl transition-colors duration-200"
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      {submitStatus === "error" && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
          <p className="text-red-600 dark:text-red-400 text-sm text-center">
            There was an error submitting your quote request. Please try again.
          </p>
        </div>
      )}
    </div>
  );
}
