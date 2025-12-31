import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Dr. Reena Grover</span>
          </Link>
          <nav className="flex items-center gap-2">
            <Link 
              to="/" 
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                location.pathname === "/" 
                  ? "bg-blue-50 text-primary" 
                  : "text-muted-foreground hover:text-primary hover:bg-blue-50/50"
              )}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                location.pathname === "/blog" 
                  ? "bg-blue-50 text-primary" 
                  : "text-muted-foreground hover:text-primary hover:bg-blue-50/50"
              )}
            >
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg mb-1">Dr. Reena Grover, D.D.S.</p>
              <p className="text-sm text-muted-foreground">Board-Certified Pediatric Dentist</p>
              <p className="text-sm text-muted-foreground">Diplomate, American Board of Pediatric Dentistry</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Dr. Reena Grover. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}