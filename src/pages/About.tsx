import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";

const About = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-black via-[#1a1410] to-[#2e2520]">
      <Sidebar isCollapsed={isSidebarCollapsed} />

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-[hsl(var(--sidebar-border))] bg-black/20 backdrop-blur-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="p-2 hover:bg-[hsl(var(--sidebar-accent))] rounded-lg transition-smooth"
              >
                <Menu className="w-5 h-5 text-[hsl(var(--sidebar-foreground))]" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-[hsl(var(--sidebar-primary))] text-glow">
                  About PRP AI Agent
                </h1>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Learn about the Professional Readiness Program Assistant
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Project Overview */}
            <section className="bg-[hsl(var(--card))] rounded-lg p-6 border border-[hsl(var(--border))] shadow-elegant">
              <h2 className="text-2xl font-bold text-[hsl(var(--sidebar-primary))] mb-4">
                Project Overview
              </h2>
              <p className="text-[hsl(var(--foreground))] leading-relaxed mb-4">
                The PRP AI Agent is an intelligent assistant designed specifically for the 
                Professional Readiness Program. It serves as your interactive mentor, helping 
                you navigate through various aspects of the program including attendance tracking, 
                event management, quizzes, and progress monitoring.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                This is an MVP (Minimum Viable Product) in active development.
              </p>
            </section>

            {/* Features */}
            <section className="bg-[hsl(var(--card))] rounded-lg p-6 border border-[hsl(var(--border))] shadow-elegant">
              <h2 className="text-2xl font-bold text-[hsl(var(--sidebar-primary))] mb-4">
                Key Features
              </h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">FAQ System</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      Instant answers to common questions about the PRP program
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Attendance Tracking</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      Monitor your attendance and participation in program activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Event Management</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      Stay updated on upcoming events and sessions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Quizzes</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      Access and complete program assessments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Progress Dashboard</h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      Track your advancement through the program
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Stack */}
            <section className="bg-[hsl(var(--card))] rounded-lg p-6 border border-[hsl(var(--border))] shadow-elegant">
              <h2 className="text-2xl font-bold text-[hsl(var(--sidebar-primary))] mb-4">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Tailwind CSS", "Vite", "AI/ML Models"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[hsl(var(--sidebar-accent))] text-[hsl(var(--sidebar-accent-foreground))] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-[hsl(var(--accent))]/10 rounded-lg p-6 border border-[hsl(var(--accent))]/20">
              <h2 className="text-lg font-bold text-[hsl(var(--accent))] mb-2">
                ⚠️ Development Notice
              </h2>
              <p className="text-sm text-[hsl(var(--foreground))]">
                This is an active MVP. Tools, features, and integrations listed here may change 
                during the development process. We appreciate your patience and feedback as we 
                continue to improve the PRP AI Agent.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
