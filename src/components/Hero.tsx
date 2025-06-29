import { motion } from 'framer-motion';
import { Briefcase, Instagram, Play, Youtube } from 'lucide-react';

const Hero = () => {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchVideos = () => {
    window.open('https://youtube.com/@adrijasinghh?feature=shared', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight"
              >
                Your Growth is
                <span className="text-gradient block">What Makes Your</span>
                Character
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                Hi, I'm Adrija Singh - YouTuber with 1.3K+ subscribers, Automation Engineer at Schneider, 
                and your guide for personal growth, career guidance, and college counselling.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={handleLearnMore}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Learn More</span>
              </button>
              <button 
                onClick={handleWatchVideos}
                className="btn-secondary flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Videos</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2 text-gray-600">
                <Youtube className="w-5 h-5 text-red-500" />
                <span className="font-medium">1.3K+ Subscribers</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="font-medium">Follow Me</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <span className="font-medium">R&D Engineer in Schneider</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 text-rose-400"
              >
                ✨
              </motion.div>
              
              <div className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-full p-8 relative overflow-hidden">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-80 h-80 bg-gradient-to-br from-rose-100 to-white rounded-full flex items-center justify-center"
                >
                  <img
                    src="main.jpeg"
                    alt="Adrija Singh"
                    className="w-64 h-64 object-cover rounded-full shadow-xl"
                  />
                </motion.div>
              </div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 left-4 w-6 h-6 text-rose-500"
              >
                🌟
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;