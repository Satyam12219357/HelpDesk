import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ticket, Shield, Clock, Users, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex-1">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex justify-center">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg"
            >
              <Ticket className="h-10 w-10 text-primary-foreground" />
            </motion.div>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
            Professional
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> HelpDesk </span>
            Solution
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground">
            Streamline your support operations with intelligent ticket management, 
            SLA tracking, and role-based workflows.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" onClick={() => navigate("/register")} className="shadow-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/login")}>
              Sign In
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[ 
            { icon: <Shield className="h-6 w-6 text-primary" />, title: "Role-Based Access", text: "Secure ticket management with user, agent, and admin roles. Each role has tailored permissions and workflows." },
            { icon: <Clock className="h-6 w-6 text-warning" />, title: "SLA Tracking", text: "Automatic 24-hour SLA deadlines with breach monitoring. Never miss critical response times." },
            { icon: <Users className="h-6 w-6 text-success" />, title: "Team Collaboration", text: "Comment system, ticket assignment, and status tracking. Keep your entire team in sync." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border bg-card p-12 text-center shadow-xl"
        >
          <h2 className="mb-4 text-3xl font-bold">Ready to transform your support?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join teams using HelpDesk to deliver exceptional customer support.
          </p>
          <Button size="lg" onClick={() => navigate("/register")} className="shadow-lg">
            Start Free Today
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div>
            <h3 className="text-lg font-bold">HelpDesk</h3>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
