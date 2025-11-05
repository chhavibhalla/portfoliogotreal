import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Project Admin",
      organization: "GirlScript Summer of Code (GSSoC)",
      type: "Open Source",
      period: "2025",
      location: "Remote",
      description: "Led and mentored open-source contributors across multiple projects, fostering collaboration and managing project workflows.",
      achievements: [
        "Managed multiple open-source projects",
        "Mentored 50+ contributors",
        "Facilitated successful project completions",
      ],
    },
    {
      title: "AI Intern",
      organization: "IGDTUW",
      type: "Internship",
      period: "June – July 2025",
      location: "New Delhi",
      description: "Worked on AI-based applications and automation tools, gaining hands-on experience with machine learning and AI technologies.",
      achievements: [
        "Developed AI-powered applications",
        "Implemented automation solutions",
        "Collaborated with research teams",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      organization: "IGDTUW",
      type: "Internship",
      period: "June – July 2025",
      location: "New Delhi",
      description: "Contributed to front-end and back-end development of university platforms, building responsive web applications.",
      achievements: [
        "Built full-stack web applications",
        "Improved platform performance",
        "Worked with modern web technologies",
      ],
    },
    {
      title: "Frontend Developer",
      organization: "Freelance & Team Projects",
      type: "Freelance",
      period: "2024 - Present",
      location: "Remote",
      description: "Built responsive UI and web apps in solo and team settings, delivering high-quality solutions for various clients.",
      achievements: [
        "Delivered multiple client projects",
        "Created responsive web interfaces",
        "Collaborated with cross-functional teams",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through tech, innovation, and learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.35rem] top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"></div>

                <Card className="card-glass p-6 border-border/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.organization}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
