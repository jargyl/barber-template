import React from "react";
import { Instagram, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-zinc-900">Contact</h2>
          <p className="mt-4 text-lg text-zinc-600">
            Get in touch for appointments and inquiries
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="text-center p-6"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 mb-4"
              variants={iconVariants}
            >
              <Instagram className="h-6 w-6 text-zinc-900" />
            </motion.div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
              Book Appointment
            </h3>
            <p className="text-zinc-600">DM on Instagram for bookings</p>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-zinc-900 hover:text-zinc-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @yourhandle
            </motion.a>
          </motion.div>

          <motion.div
            className="text-center p-6"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 mb-4"
              variants={iconVariants}
            >
              <MapPin className="h-6 w-6 text-zinc-900" />
            </motion.div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
              Location
            </h3>
            <p className="text-zinc-600">Los Angeles, CA</p>
            <p className="text-zinc-600">Exact address provided upon booking</p>
          </motion.div>

          <motion.div
            className="text-center p-6"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 mb-4"
              variants={iconVariants}
            >
              <Clock className="h-6 w-6 text-zinc-900" />
            </motion.div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Hours</h3>
            <p className="text-zinc-600">Tuesday - Saturday</p>
            <p className="text-zinc-600">10:00 AM - 7:00 PM</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
