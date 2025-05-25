import React from "react";
import { Star, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    username: "johnnycuts",
    pfp: "https://randomuser.me/api/portraits/men/32.jpg",
    instagramUrl: "https://instagram.com/johnnycuts",
    text: "Best haircut I've ever had. The attention to detail is amazing!",
    rating: 5,
    date: "2 days ago",
  },
  {
    name: "Mike Ross",
    username: "miketheross",
    pfp: "https://randomuser.me/api/portraits/men/45.jpg",
    instagramUrl: "https://instagram.com/miketheross",
    text: "Great atmosphere and even better results. Will definitely be coming back!",
    rating: 5,
    date: "1 week ago",
  },
  {
    name: "Chris Miller",
    username: "chris.millz",
    pfp: "https://randomuser.me/api/portraits/men/76.jpg",
    instagramUrl: "https://instagram.com/chris.millz",
    text: "Professional service in a comfortable setting. Highly recommended!",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "Sarah Lee",
    username: "sarahlee_styles",
    pfp: "https://randomuser.me/api/portraits/women/65.jpg",
    instagramUrl: "https://instagram.com/sarahlee_styles",
    text: "Absolutely loved my new look! Super friendly and talented barber.",
    rating: 5,
    date: "5 days ago",
  },
  {
    name: "Alex Kim",
    username: "alexk.barber",
    pfp: "https://randomuser.me/api/portraits/men/88.jpg",
    instagramUrl: "https://instagram.com/alexk.barber",
    text: "Quick, clean, and stylish. Highly recommend for anyone in the area!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Emily Carter",
    username: "emilycarterxo",
    pfp: "https://randomuser.me/api/portraits/women/44.jpg",
    instagramUrl: "https://instagram.com/emilycarterxo",
    text: "The best barber experience I've had. Will be back for sure!",
    rating: 5,
    date: "4 days ago",
  },
  {
    name: "David Smith",
    username: "davesmithcuts",
    pfp: "https://randomuser.me/api/portraits/men/12.jpg",
    instagramUrl: "https://instagram.com/davesmithcuts",
    text: "Super chill vibe and a perfect fade every time.",
    rating: 5,
    date: "6 days ago",
  },
];

const Testimonials = () => {
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

  const swiperVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-zinc-900">Testimonials</h2>
          <p className="mt-4 text-lg text-zinc-600">What clients are saying</p>
        </motion.div>

        <motion.div
          className="relative px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={swiperVariants}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-0 sm:p-0 rounded-2xl shadow-md h-full border border-zinc-200 flex flex-col">
                  {/* Instagram-style top bar */}
                  <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.pfp}
                        alt={testimonial.username}
                        className="w-10 h-10 rounded-full border border-zinc-200 object-cover"
                      />
                      <div className="flex flex-col">
                        <a
                          href={testimonial.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-zinc-900 hover:underline flex items-center gap-1"
                        >
                          {testimonial.username}
                          <Instagram className="w-4 h-4 text-pink-500" />
                        </a>
                        <span className="text-xs text-zinc-400">
                          {testimonial.name}
                        </span>
                        <span className="text-xs text-zinc-300 mt-0.5">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review text */}
                  <div className="flex-1 flex flex-col justify-between px-4 py-4">
                    <div>
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-base text-zinc-700 mb-4 font-medium">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
