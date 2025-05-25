import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg",
    "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg",
    "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg",
    "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg",
    "https://images.pexels.com/photos/1804638/pexels-photo-1804638.jpeg",
    "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
  ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-zinc-900">Gallery</h2>
          <p className="mt-4 text-lg text-zinc-600">
            Check out some of my recent work
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => openLightbox(index)}
              className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
};

export default Gallery;
