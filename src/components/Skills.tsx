import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Back-End & Data",
      skills: [
        { name: "Python", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "R", level: 75 },
        { name: "NumPy & Pandas", level: 85 },
        { name: "Streamlit", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Netlify/Vercel", level: 88 },
        { name: "Tableau", level: 80 },
        { name: "Canva", level: 90 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "AI & ML", level: 85 },
        { name: "DSA (C++)", level: 75 },
        { name: "Open-Source", level: 90 },
        { name: "Content Creation", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="card-glass p-6 border-border/50">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
