import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Builder + ATS Checker",
      description: "Built an AI-powered resume builder with integrated ATS score evaluation to help candidates optimize their resumes for job applications.",
      tech: ["AI", "Python", "React", "Streamlit"],
      github: "",
      demo: "https://resumely.streamlit.app/",
      gradient: "https://github.com/chhavibhalla/AI-RESUME-BUILDER",
    },
    {
      title: "SheSync",
      description: "Platform for connecting women, fostering community and collaboration. Built with modern web technologies for a seamless user experience.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "React.js"],
      github: "https://github.com/chhavibhalla/SheSync",
      demo: "https://www.shesync.live",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "IGDTUW 3D Map",
      description: "Contributed to an interactive 3D campus map using Three.js, providing an immersive way to explore the university grounds.",
      tech: ["Three.js", "JavaScript", "WebGL", "React"],
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Peek.AI - Competitor Tracker",
      description: "Monitors competitor websites and highlights product & UI changes, helping businesses stay ahead of market trends.",
      tech: ["AI", "Python", "Web Scraping", "Node.js"],
      github: "https://github.com/chhavibhalla/peek.ai",
      demo: "#",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="card-glass p-6 h-full flex flex-col border-border/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 group">
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-6`}></div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
