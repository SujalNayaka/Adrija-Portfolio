import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const Travel = () => {
  const travelVlogs = [
    {
      title: "Ladakh Adventure",
      description: "Epic journey through the breathtaking landscapes of Ladakh",
      thumbnail: "Ladakh.png",
      youtubeUrl: "https://youtube.com/playlist?list=PLI4P-XZU6btrdXHwQBbuAaDtnFKiaflIc&feature=shared",
      location: "Ladakh, India"
    },
    {
      title: "My Love For Dogs 🐾",
      description: "Pawsitive Vibes Only! Join us for wagging tails and endless adventures with my furry friends.",
      thumbnail: "dogs.png",
      youtubeUrl: "https://youtube.com/playlist?list=PLI4P-XZU6btrtwghyZLGgNNIkZQ8IXDkI&feature=shared",
      location: "Goa, India"
    },
    {
      title: "Lifestyle🔮🧿",
      description: "Your go-to for GRWM, latest trends, plus my take on style, habits, and motivation. Let's grow together! 💗",
      thumbnail: "lifestyle.png",
      youtubeUrl: "https://youtube.com/playlist?list=PLI4P-XZU6btrGGRhbuXyjngh25MTogdTb&feature=shared",
      location: "Himachal Pradesh, India"
    },
    {
      title: "Dance💃🩰",
      description: "All the amazing tunes and moves right here! Don't have to go anywhere elseee🤭",
      thumbnail: "dance.png",
      youtubeUrl: "https://youtube.com/playlist?list=PLI4P-XZU6btrMuX0cNq5MO2CtGmMlTM3u&feature=shared",
      location: "Kerala, India"
    },
    {
      title: "30 Days Of My Life",
      description: "Witness the everyday and the unexpected. This series captures the essence of 30 days of my life, one vlog at a time.",
      thumbnail: "30days.png",
      youtubeUrl: "https://youtube.com/playlist?list=PLI4P-XZU6btqY_HxtP6HMyFjws3J0UYEC&feature=shared",
      location: "Rajasthan, India"
    },
    {
      title: "Travel 🛣️🔍",
      description: "This is an exclusive playlist to provide itineraries, guides for your next tourist destination,resorts, activities,reviews etc based on first hand experience by me! 💗",
      thumbnail: "travel.png",
      youtubeUrl: "https://youtube.com/playlist?list=PLI4P-XZU6btrZuwkbqNwl_ah4WHKjWqdQ&feature=shared",
      location: "Northeast India"
    }
  ];

  return (
    <section id="vlogs" className="section-padding bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
            My <span className="text-gradient">Vlogs</span> 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step into my world, one captivating video at a time. This is where I share all my passions, insights, and experiences, going beyond just one topic. Get ready to explore and be inspired!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelVlogs.map((vlog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 rounded-full p-4"
                    >
                      <Play className="w-8 h-8 text-rose-600" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                    {vlog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {vlog.description}
                  </p>

                  <motion.a
                    href={vlog.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center space-x-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Watch Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://youtube.com/@adrijasinghh?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>View All My Vlogs Here</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Travel;