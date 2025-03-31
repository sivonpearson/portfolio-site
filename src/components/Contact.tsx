import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    const response = await fetch("https://formspree.io/f/xblgawjn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
    // Handle form submission logic (API call, email service, etc.)
  };

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto p-6 bg-black bg-opacity-10 rounded-lg shadow-2xl shadow-white mb-16 scrolling-appear"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-transparent rounded bg-black text-white placeholder-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-transparent rounded bg-black text-white placeholder-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-transparent rounded bg-black text-white placeholder-white"
            rows={4}
            style={{ resize: "vertical" }}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
