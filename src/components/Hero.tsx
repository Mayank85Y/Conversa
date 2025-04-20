
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [hover, setHover] = useState(false);
  
  return (
    <section className="py-16 md:py-24">
      <div className="whisper-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Simple, secure, reliable messaging
            </h1>
            <p className="text-lg text-muted-foreground">
              With Conversa, you can connect with friends, share moments, and keep your conversations private.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/chat" className="flex items-center gap-2">
                  Try Conversa Web <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                <Link to="/download" className="flex items-center gap-2">
                  <Download size={16} /> Download App
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div 
              className="relative transition-transform duration-300 ease-in-out"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ transform: hover ? 'translateY(-10px)' : 'translateY(0)' }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-60 rounded-full"></div>
              <div className="relative bg-white rounded-xl border p-4 shadow-sm overflow-hidden">
                <img 
                  src="/image-uploads/75f42cc3-ae83-44e3-823c-342b033ffc4a.png" 
                  alt="People using Conversa messaging app" 
                  className="w-full max-w-md rounded-lg transition-all duration-500"
                  style={{ transform: hover ? 'scale(1.03)' : 'scale(1)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
