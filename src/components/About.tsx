import { AnimatePresence, motion } from 'framer-motion';
import { Award, BookOpen, ChevronLeft, ChevronRight, Heart, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "2.jpeg",
      alt: "Adrija Singh - Professional"
    },
    {
      src: "1.jpeg",
      alt: "Adrija Singh - Content Creator"
    },
    {
      src: "3.jpeg",
      alt: "Adrija Singh - Engineer"
    },
    {
      src: "6.jpeg",
      alt: "Adrija Singh - Counselor"
    },
    {
      src: "4.jpeg",
      alt: "Adrija Singh - YouTuber"
    },
    {
      src: "5.jpeg",
      alt: "Adrija Singh - Academic Excellence"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Class 10 & 12 Topper (CBSE), Merit Based Entrant into MSRIT with 1639 rank (COMEDK)"
    },
    {
      icon: BookOpen,
      title: "Professional Growth",
      description: "R&D Engineer at Schneider, CAT Aspirant"
    },
    {
      icon: Heart,
      title: "Content Creator",
      description: "YouTuber with 1.3K+ subscribers sharing valuable insights"
    },
    {
      icon: TrendingUp,
      title: "Best Outgoing Student",
      description: "ECE Department 2025 - Leadership & Excellence"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about" className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Image Carousel Container */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'bg-white scale-110'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-8 h-8 text-rose-600"
              >
                🌸
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-serif font-bold text-gray-800"
              >
                Welcome To <span className="text-gradient">Adrija's</span> World
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                I'm passionate about empowering individuals through personal growth, career guidance, 
                and educational counselling. With my experience as a top performer and content creator, 
                I help others unlock their potential and achieve their dreams.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg card-hover"
                >
                  <achievement.icon className="w-8 h-8 text-rose-500 mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;