import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Classic Haircut",
    description: "Traditional cut with modern precision",
    price: "$30",
    duration: "45 mins",
  },
  {
    name: "Fade",
    description: "Clean, precise fade with any style on top",
    price: "$35",
    duration: "45 mins",
  },
  {
    name: "Beard Trim",
    description: "Shape and style your beard",
    price: "$20",
    duration: "30 mins",
  },
  {
    name: "Hair + Beard Combo",
    description: "Complete grooming package",
    price: "$45",
    duration: "1 hour",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-zinc-900">Services</h2>
          <p className="mt-4 text-lg text-zinc-600">
            Professional cuts and styling services
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                {service.name}
              </h3>
              <p className="text-zinc-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-zinc-900">
                  {service.price}
                </span>
                <span className="text-sm text-zinc-500">
                  {service.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
