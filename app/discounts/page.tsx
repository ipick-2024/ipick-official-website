"use client";
import { useState, useEffect } from "react";
import "@fontsource/montserrat/900.css";
import "@fontsource/montserrat/400.css";
import { FiUser, FiMail, FiPhone, FiUpload, FiCheck, FiAlertCircle } from "react-icons/fi";

export default function Discounts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    idType: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filePreview, setFilePreview] = useState(null);

  // Form validation
  const validateForm = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9+\s()-]{10,15}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
    }

    if (!form.idType) newErrors.idType = "Please select an ID type";

    if (!form.file) {
      newErrors.file = "Please upload your ID";
    } else if (form.file.size > 10 * 1024 * 1024) {
      newErrors.file = "File size must be less than 10MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prevForm) => ({ ...prevForm, file }));

      // Create file preview
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Clear error
      if (errors.file) {
        setErrors((prevErrors) => ({ ...prevErrors, file: null }));
      }
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form submitted:", form);
        setIsSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
          setForm({
            name: "",
            email: "",
            mobile: "",
            idType: "",
            file: null,
          });
          setFilePreview(null);
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form has errors");
    }
  };

  // Background parallax effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen py-6  px-4 overflow-hidden pt-23 bg-black"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url('/assets/car.png')",
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollY * 0.5}px`,
          filter: "contrast(1.1) brightness(1.1)"
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-16  z-10" />


      {/* Form card */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md z-20 overflow-hidden">
        {/* Header */}
        <div className="bg-green-700 p-6 text-white">
          <h2 className="text-2xl font-bold text-center">Get Your 20% Discount</h2>
          <p className="text-sm text-center opacity-90 mt-1">
            Fill in the details below to validate your discount within 7 working days
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-10 flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <FiCheck className="text-green-700 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
            <p className="text-gray-600 text-center">
              Your discount request has been submitted successfully. We'll process it within 7 working days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Name field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={`text-black pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  className={`text-black pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.email}
                </p>
              )}
            </div>

            {/* Mobile field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={form.mobile}
                  onChange={handleChange}
                  className={`text-black pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.mobile ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                />
              </div>
              {errors.mobile && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.mobile}
                </p>
              )}
            </div>

            {/* ID Type field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type of ID</label>
              <select
                name="idType"
                value={form.idType}
                onChange={handleChange}
                className={`text-gray-700 p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition appearance-none bg-white ${errors.idType ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
              >
                <option value="">Select ID Type</option>
                <option value="PWD">PWD (Person with Disability)</option>
                <option value="Senior">Senior Citizen</option>
                <option value="Student">Student</option>
              </select>
              {errors.idType && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.idType}
                </p>
              )}
            </div>

            {/* File upload field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload ID (Max 10MB)</label>
              <div className={`border-2 border-dashed rounded-lg p-4 text-center hover:bg-gray-50 transition cursor-pointer ${errors.file ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}>
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,.pdf"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  {filePreview ? (
                    <div className="flex flex-col items-center">
                      {form.file.type.startsWith('image/') ? (
                        <img
                          src={filePreview}
                          alt="ID Preview"
                          className="h-32 object-contain mb-2 rounded"
                        />
                      ) : (
                        <div className="bg-gray-100 p-4 rounded mb-2">
                          <FiUpload className="mx-auto text-green-700 text-xl" />
                        </div>
                      )}
                      <span className="text-sm text-green-700 font-medium">{form.file.name}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        {(form.file.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <FiUpload className="text-green-700 text-xl mb-2" />
                      <span className="text-sm font-medium">Click to upload your ID</span>
                      <span className="text-xs text-gray-500 mt-1">
                        JPG, PNG or PDF (max. 10MB)
                      </span>
                    </div>
                  )}
                </label>
              </div>
              {errors.file && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <FiAlertCircle className="mr-1" /> {errors.file}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-700 text-white py-3 px-4 rounded-lg font-bold hover:bg-green-800 transition shadow ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </div>
              ) : (
                "Submit Discount Request"
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to iPick's{" "}
              <a href="#" className="text-green-700 hover:underline">Terms of Service</a> and{" "}
              <a href="#" className="text-green-700 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
