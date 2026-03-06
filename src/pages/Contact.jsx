import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

// ------------------
// Zod Schema
// ------------------

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const {
    register, handleSubmit, formState: { errors, isSubmitting }, reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    reset();
    alert("Message sent successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-orange-600/10 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Get In <span className="text-orange-500">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Whether it's feedback, questions, or catering requests — we're here for you.
          </motion.p>
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section className="py-24 bg-orange-50/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* ---------------- LEFT INFO ---------------- */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Reach out to ABT Kitchen anytime. Our team is ready to serve you with excellence and care.
                </p>
              </div>

              <div className="space-y-8">

                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-white rounded-2xl shadow-md text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Location</h4>
                    <p className="text-slate-600 text-sm">
                      25 Admiralty Way, Lekki, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-white rounded-2xl shadow-md text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Phone</h4>
                    <p className="text-slate-600 text-sm">
                      +234 812 345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-white rounded-2xl shadow-md text-orange-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email</h4>
                    <p className="text-slate-600 text-sm">
                      support@abtkitchen.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-white rounded-2xl shadow-md text-orange-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Opening Hours</h4>
                    <p className="text-slate-600 text-sm">
                      Mon - Sun: 8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ---------------- RIGHT FORM ---------------- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Name */}
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    {...register("email")}
                    placeholder="Your Email"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <input
                    {...register("subject")}
                    placeholder="Subject"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    {...register("message")}
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 transition-all shadow-lg hover:shadow-xl"
                >
                  <span>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <Send size={20} />
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;