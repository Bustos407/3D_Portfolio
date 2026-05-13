import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Santiago",
          from_email: form.email,
          to_email: "bustosmoralesantiago@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setLoading(false);
        showNotification("success", "Thank you! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        showNotification("error", "Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="xl:mt-6 flex xl:flex-row flex-col gap-8 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1.5] glass-card p-6 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className="gradient-text font-black md:text-[50px] sm:text-[40px] xs:text-[32px] text-[26px]">
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white/10 border border-white/20 py-3 px-5 placeholder:text-white/40 text-white rounded-lg outline-none font-medium focus:border-blue-500 transition-colors duration-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white/10 border border-white/20 py-3 px-5 placeholder:text-white/40 text-white rounded-lg outline-none font-medium focus:border-blue-500 transition-colors duration-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-white/10 border border-white/20 py-3 px-5 placeholder:text-white/40 text-white rounded-lg outline-none font-medium focus:border-blue-500 transition-colors duration-200 resize-none"
            />
          </label>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={loading}
              className={`${styles.gradientBtn} w-fit disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    notification.type === "success"
                      ? "bg-green-500/20 border border-green-500/40 text-green-300"
                      : "bg-red-500/20 border border-red-500/40 text-red-300"
                  }`}
                >
                  {notification.message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] xs:h-[300px] h-[250px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
