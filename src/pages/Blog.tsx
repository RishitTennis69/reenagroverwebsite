import { Link } from "react-router-dom"
import { Card } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { ArrowRight } from "lucide-react"

export default function Blog() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6">Resources</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Pediatric Dentistry 101</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guidance on pediatric dental care and practical tips for parents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link to="/blog/how-to-brush" className="group">
            <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1609840113564-ab4aba4956c4?auto=format&fit=crop&q=80&w=1080"
                  alt="Child brushing teeth"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                  <span>Dental Tips</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">How to get your kid to brush</h3>
                <p className="text-muted-foreground mb-6">Practical strategies to turn brushing time from a battle into a fun daily routine.</p>
                <div className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/blog/first-visit" className="group">
            <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1619236233405-bb5d430f0620?auto=format&fit=crop&q=80&w=1080"
                  alt="Child at dentist"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                  <span>New Patients</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">First Dental Visit Guide</h3>
                <p className="text-muted-foreground mb-6">What to expect during your child's first appointment and how to prepare them.</p>
                <div className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
