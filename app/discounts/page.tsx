"use client";
import { useState } from "react";
import "@fontsource/montserrat/900.css";

export default function Discounts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    idType: "",
    file: null,
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    setForm((prevForm) => ({ ...prevForm, file: e.target.files[0] }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700">Get your 20% discount</h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Fill in the details below to validate your discount within 7 working days.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 border border-black rounded w-full text-black placeholder-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-2 border border-black rounded w-full text-black placeholder-black"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="p-2 border border-black rounded w-full text-black placeholder-black"
            required
          />
          <div>
            <label className="block mb-1 text-sm text-black">Types of ID</label>
            <select
              name="idType"
              value={form.idType}
              onChange={handleChange}
              className="p-2 border border-black rounded w-full text-black"
              required
            >
              <option value="">Select ID Type</option>
              <option value="PWD">PWD</option>
              <option value="Senior">Senior</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm text-black">Upload ID (Max 10MB)</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="p-2 border border-black rounded w-full text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
