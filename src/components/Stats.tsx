import { motion } from 'framer-motion';
import { Award, Heart, Users, Video } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "1.3K+",
      label: "YouTube Subscribers",
      color: "text-red-500"
    },
    {
      icon: Video,
      number: "50+",
      label: "Educational Videos",
      color: "text-blue-500"
    },
    {
      icon: Award,
      number: "1639",
      label: "COMEDK Rank",
      color: "text-green-500"
    },
    {
      icon: Heart,
      number: "100+",
      label: "Students Guided",
      color: "text-rose-500"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
            My <span className="text-gradient">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These numbers represent the lives I've touched and the growth we've achieved together
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-3xl shadow-lg card-hover"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 mb-4`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
              >
                {stat.number}
              </motion.div>
              
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;