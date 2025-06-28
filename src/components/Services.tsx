import { motion } from 'framer-motion';
import { GraduationCap, Heart, Lightbulb, TrendingUp, Youtube } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Self Improvement",
      description: "Mental health counselling, relationship guidance, growth mindset development, and fitness coaching",
      features: ["Depression & Stress Management", "Relationship Counselling", "Growth Mindset", "Fitness Guidance"],
      color: "from-rose-400 to-pink-500",
      youtube: "https://youtube.com/playlist?list=PLI4P-XZU6btqYGMN2T3iO1miaDbmQ1G8F&si=a2xFwzD2BIfCDScL"
    },
    {
      icon: GraduationCap,
      title: "College Guidance",
      description: "Expert counselling for COMEDK and KCET admissions with personalized guidance",
      features: ["COMEDK Counselling", "KCET Guidance", "College Selection", "Admission Strategy"],
      color: "from-blue-400 to-indigo-500",
      youtube: "https://youtube.com/playlist?list=PLI4P-XZU6btqi-zdNaZz_0y4gGrEHVlws&si=L0y2ZEPzdp4yBa8Y"
    },
    {
      icon: Lightbulb,
      title: "Career Guidance",
      description: "Discover your passion, plan your career growth, and solve professional challenges",
      features: ["Passion Identification", "Career Planning", "Problem Solving", "Professional Growth"],
      color: "from-green-400 to-emerald-500",
      youtube: "https://youtube.com/playlist?list=PLI4P-XZU6btryUvrciDQAqJcn9G60vJix&si=sLhoPPcrtX4gIJYW"
    },
    {
      icon: TrendingUp,
      title: "Personal Growth",
      description: "Comprehensive development programs for holistic personal and professional growth",
      features: ["Leadership Skills", "Communication", "Goal Setting", "Success Mindset"],
      color: "from-purple-400 to-violet-500",
      youtube: "https://youtube.com/playlist?list=PLI4P-XZU6btqYGMN2T3iO1miaDbmQ1G8F&si=a2xFwzD2BIfCDScL"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
            We Can Help <span className="text-gradient">Transform</span> You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive guidance across multiple areas of personal and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg card-hover h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.color} mb-6 text-white`}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={service.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>Watch Videos</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;