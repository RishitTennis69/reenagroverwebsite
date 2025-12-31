import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Users, Star, ArrowRight } from "lucide-react"
import { Card } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/ui/button"
import { MeetTheDoctor } from "@/components/MeetTheDoctor"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [experienceCount, setExperienceCount] = useState(0)
  const [degreesCount, setDegreesCount] = useState(0)
  const [patientsCount, setPatientsCount] = useState(0)
  
  const statsRef = useRef<HTMLDivElement>(null)
  const credentialsRef = useRef<HTMLElement>(null)
  const [credentialsVisible, setCredentialsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true)
          
          // Animate experience counter (0 to 15)
          let expCount = 0
          const expInterval = setInterval(() => {
            expCount += 1
            if (expCount > 15) {
              setExperienceCount(15)
              clearInterval(expInterval)
            } else {
              setExperienceCount(expCount)
            }
          }, 60)

          // Animate degrees counter (0 to 4)
          let degCount = 0
          const degInterval = setInterval(() => {
            degCount += 1
            if (degCount > 4) {
              setDegreesCount(4)
              clearInterval(degInterval)
            } else {
              setDegreesCount(degCount)
            }
          }, 200)

          // Animate patients counter (0 to 1000) - Visual trick 0->1000
          let patCount = 0
          const patInterval = setInterval(() => {
            patCount += 50
            if (patCount > 1000) {
              setPatientsCount(1000)
              clearInterval(patInterval)
            } else {
              setPatientsCount(patCount)
            }
          }, 40)
        }
      },
      { threshold: 0.3 },
    )

    const credentialsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCredentialsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) statsObserver.observe(statsRef.current)
    if (credentialsRef.current) credentialsObserver.observe(credentialsRef.current)

    return () => {
      if (statsRef.current) statsObserver.unobserve(statsRef.current)
      if (credentialsRef.current) credentialsObserver.unobserve(credentialsRef.current)
    }
  }, [statsVisible])

  const stats = [
    { number: `${experienceCount}+`, label: "Years Experience" },
    { number: patientsCount >= 1000 ? "1000s" : patientsCount, label: "Happy Patients" },
    { number: degreesCount.toString(), label: "Degrees & Certifications" },
  ]

  const timelineItems = [
    {
      year: "2002",
      title: "University of California, Berkeley",
      subtitle: "B.A. English & B.S. Business Administration",
      description: "Laid a strong academic foundation at one of the world's top public universities."
    },
    {
      year: "2009",
      title: "Doctor of Dental Surgery (D.D.S.)",
      subtitle: "University of the Pacific, Arthur A. Dugoni School of Dentistry",
      description: "Graduated with honors from a renowned dental school known for clinical excellence."
    },
    {
      year: "2014",
      title: "Pediatric Dentistry Residency",
      subtitle: "USC & Long Beach Miller Children's Hospital",
      description: "Completed specialized residency focusing on complex pediatric cases and special needs care."
    },
    {
      year: "2015",
      title: "Board Certified Pediatric Dentist",
      subtitle: "American Board of Pediatric Dentistry",
      description: "Achieved the highest level of certification in the field, demonstrating commitment to lifelong learning."
    }
  ]

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <Star className="w-4 h-4 fill-current" />
                Board-Certified Pediatric Dentist
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance leading-[1.1] tracking-tight text-slate-900">
                Dr. Reena Grover
              </h1>
              <p className="text-2xl lg:text-3xl font-medium mb-6 text-primary">
                D.D.S., Diplomate ABPD
              </p>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                Creating joyful, confident smiles for children across Silicon Valley with gentle, expert care.
              </p>

              <div 
                ref={statsRef} 
                className={`grid grid-cols-3 gap-4 lg:gap-8 mb-8 p-8 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 transition-all duration-1000 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 tabular-nums tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-[2.5rem] blur-3xl group-hover:blur-2xl transition-all duration-500" />
                <img
                  src="/images/hero-new.png"
                  alt="Dr. Reena Grover with patient"
                  className="relative rounded-[2.5rem] shadow-2xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02] border-4 border-white"
                />
                
                {/* Floating badge */}
                {/* Removed the floating badge as per instruction */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <MeetTheDoctor />

      {/* Credentials Timeline Section */}
      <section ref={credentialsRef} id="credentials" className="py-24 px-4 bg-blue-50/30">
        <div className="container mx-auto max-w-6xl"> {/* Increased max-width for horizontal space */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-sm border-primary/20 text-primary bg-primary/5">
              Experience & History
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-slate-900">Professional Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of dedication to pediatric dental excellence and lifelong learning
            </p>
          </div>

          <div className="relative">
            {/* Center Line for Desktop, Left for Mobile */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 md:-translate-x-1/2 h-full rounded-full ${credentialsVisible ? 'timeline-line-draw' : ''}`} />

            <div className="space-y-12 md:space-y-24">
              {timelineItems.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                     <div className={`${credentialsVisible ? 'timeline-slide-in' : 'opacity-0'}`} style={{ animationDelay: credentialsVisible ? `${index * 150}ms` : '0ms' }}>
                        <Card className={`p-8 border-none shadow-xl hover:shadow-2xl transition-all duration-300 relative bg-white group ${index % 2 === 1 ? 'text-left md:text-right' : 'text-left'}`}>
                          {/* Year Badge */}
                          <div className={`inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm`}>
                            {item.year}
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-lg font-medium text-primary mb-3">
                            {item.subtitle}
                          </p>
                          <p className="text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </Card>
                     </div>
                  </div>

                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10 shadow-lg shadow-primary/20 mt-1.5 md:mt-0 ${credentialsVisible ? 'timeline-dot-scale' : ''} ${credentialsVisible ? 'timeline-dot-pulse' : ''}`} style={{ animationDelay: credentialsVisible ? `${index * 150 + 300}ms` : '0ms' }} />
                  
                  {/* Empty Side for alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Section */}
      <section className="py-24 px-4 bg-white text-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            {/* Removed the Heart icon container */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Community & Global Outreach
            </h2>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Dedicated to serving communities both locally in the Bay Area and internationally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <Card className="p-10 bg-gradient-to-br from-blue-50 to-white shadow-lg border-blue-100/50 hover:shadow-xl transition-all group">
              <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Local Impact</h3>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                Active in community dental health initiatives throughout the Bay Area, providing education and care to
                families in need. Regularly partners with local schools for dental health awareness.
              </p>
            </Card>
            <Card className="p-10 bg-gradient-to-br from-blue-50 to-white shadow-lg border-blue-100/50 hover:shadow-xl transition-all group">
              <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <GlobeIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">International Mission</h3>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                Participated in dental mission to Lima, Peru, providing essential dental care to underserved children.
                committed to improving global dental health standards.
              </p>
            </Card>
          </div>

          {/* Blog CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900">Want to learn more?</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                Explore our latest articles on pediatric dental health, tips for parents, and community stories.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                <Link to="/blog" className="flex items-center gap-2">
                  Visit the Blog <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}