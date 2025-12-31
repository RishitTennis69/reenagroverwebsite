import { Heart, Sparkles, Bike, MapPin, GraduationCap } from "lucide-react"
import { Badge } from "@/components/Badge"
import { Card } from "@/components/Card"

export function MeetTheDoctor() {
  return (
    <section id="meet-dr-grover" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="order-1 lg:order-1 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -z-10 rotate-3 transition-transform duration-500 hover:rotate-6" />
              <img
                src="/images/headshot.png"
                alt="Dr. Reena Grover"
                className="rounded-[2rem] shadow-2xl w-full h-auto border-4 border-white object-cover aspect-[3/4]"
              />
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -right-8 hidden md:block">
                <Card className="p-6 bg-white shadow-xl border-blue-100 max-w-xs rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                  <p className="text-slate-600 italic font-medium">
                    "My goal is to make every dental visit a positive, fun experience for your child."
                  </p>
                  <p className="text-primary font-bold mt-2 text-right">- Dr. Grover</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-2 lg:order-2 space-y-8">
            <div>
              <Badge variant="outline" className="mb-6 text-sm border-primary/20 text-primary bg-primary/5">
                Meet Dr. Grover
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
                More than just a <span className="text-primary">Dentist</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                Pediatric Specialist, Community Volunteer, & Mom of Three
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Dr. Reena Grover isn't just a board-certified pediatric dentist; she's a dedicated advocate for children's health with a gentle touch.
              </p>
              
              <p>
                With specialized residency training from <strong>USC</strong> and <strong>Long Beach Miller Children's Hospital</strong>, Dr. Grover has extensive experience handling everything from routine check-ups to complex trauma cases and special needs care.
              </p>
            </div>

            {/* Personal Interests Grid */}
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100/50 mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Beyond the Dental Chair
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Bay Area Native</span>
                    <span className="text-sm text-slate-600">Lives in Los Altos with her husband and three children.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bike className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Active Lifestyle</span>
                    <span className="text-sm text-slate-600">Enjoys swimming, dancing, biking, and exploring local parks.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Heart for Service</span>
                    <span className="text-sm text-slate-600">Volunteers locally and internationally (including missions to Peru).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Lifelong Learner</span>
                    <span className="text-sm text-slate-600">Double major at UC Berkeley (English & Business) before Dental School.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
