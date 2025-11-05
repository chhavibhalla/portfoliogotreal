import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Prize - Hack It Up Hackathon",
      description: "Won first place competing against 250+ teams, building an innovative tech solution.",
      category: "Hackathon",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Medal,
      title: "Gold Medal - Kho Kho (Inter-College)",
      description: "Secured gold medal in inter-college Kho Kho tournament, showcasing teamwork and athleticism.",
      category: "Sports",
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      icon: Medal,
      title: "Silver Medal - IIT Kanpur Tournament",
      description: "Earned silver medal at prestigious IIT Kanpur sports tournament.",
      category: "Sports",
      gradient: "from-gray-400 to-gray-500",
    },
    {
      icon: Award,
      title: "Winner - Meme-Making Competition",
      description: "Won creative meme-making competition, demonstrating creativity and cultural awareness.",
      category: "Creative",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Community Leadership",
      description: "Active in arts, mentorship, and women-led community initiatives, fostering inclusive tech culture.",
      category: "Leadership",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Achievements & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognitions and milestones that reflect my journey of growth and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="card-glass p-6 h-full flex flex-col border-border/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
                    {achievement.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground text-sm flex-grow">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
