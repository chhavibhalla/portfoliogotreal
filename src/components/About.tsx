import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Tech Explorer",
      description: "From Arduino to AI, I love diving into new technologies and building innovative solutions.",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "Every challenge is an opportunity to think differently and create something amazing.",
    },
    {
      icon: Rocket,
      title: "Innovation Driver",
      description: "Member of ARES Robotics Society, contributing to cutting-edge robotics projects.",
    },
    {
      icon: Sparkles,
      title: "Design Enthusiast",
      description: "Merging aesthetics with functionality to create beautiful, user-centric experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering student with a passion for innovation, AI, and creating technology that makes a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-glass p-6 h-full hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 border-border/50">
                <div className="mb-4">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="card-glass p-8 border-border/50">
            <p className="text-lg leading-relaxed mb-4">
              I'm a B.Tech student in <span className="text-primary font-semibold">Artificial Intelligence & Machine Learning</span> at 
              Indira Gandhi Delhi Technological University for Women (IGDTUW). I believe in the power of technology to transform 
              ideas into reality, and I'm passionate about building innovative solutions that make a real difference.
            </p>
           
            
            <p className="text-lg leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new tech trends, participating in hackathons, 
              or working on projects that blend creativity with cutting-edge technology. 
              <span className="text-gradient font-semibold"> Let's build the future together! 🚀</span>
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
