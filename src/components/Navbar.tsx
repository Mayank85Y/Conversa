
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="whisper-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" className="fill-whisper" />
                <path 
                  d="M10,16 Q10,12 14,11 L14,21 Q10,20 10,16 Z M22,16 Q22,12 18,11 L18,21 Q22,20 22,16 Z" 
                  className="fill-white" 
                />
              </svg>
              <span className="text-xl font-bold">Conversa</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-sm hover:text-whisper transition-colors">Features</Link>
            <Link to="/security" className="text-sm hover:text-whisper transition-colors">Security</Link>
            <Link to="/download" className="text-sm hover:text-whisper transition-colors">Download</Link>
            <Button asChild variant="default" size="sm" className="bg-whisper hover:bg-whisper/90">
              <Link to="/chat">Try Conversa Web</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/security" 
                className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link 
                to="/download" 
                className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
              <Button asChild variant="default" className="bg-whisper hover:bg-whisper/90 mt-2">
                <Link to="/chat" onClick={() => setIsMenuOpen(false)}>
                  Try Conversa Web
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
