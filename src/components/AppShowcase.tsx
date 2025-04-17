
import { MessageCircle, Image, Smile, Paperclip, Send } from "lucide-react";
import { useState } from "react";

export const AppShowcase = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const toggleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleImageHover = (index: number) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="whisper-container relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Experience Conversa in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, intuitive messaging for everyone. Connect with friends and family instantly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          {/* Left side images */}
          <div className="flex flex-col space-y-12 md:w-1/4">
            {/* Left top image */}
            <div 
              className="relative transition-all duration-500 hover:scale-105 rounded-lg overflow-hidden shadow-md cursor-pointer transform"
              onMouseEnter={() => handleImageHover(0)}
              onMouseLeave={handleImageLeave}
              style={{ 
                transform: hoveredImage === 0 ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <img 
                src="/image-uploads/57b9edbe-bff8-4cd3-b019-ccee55f5a880.png" 
                alt="Friends gathering around a table" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700"
                style={{ transform: hoveredImage === 0 ? 'scale(1.05)' : 'scale(1)' }}
              />
            </div>
            
            {/* Left bottom image */}
            <div 
              className="relative transition-all duration-500 hover:scale-105 rounded-lg overflow-hidden shadow-md cursor-pointer ml-12"
              onMouseEnter={() => handleImageHover(1)}
              onMouseLeave={handleImageLeave}
              style={{ 
                transform: hoveredImage === 1 ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <img 
                src="/image-uploads/3e89fa08-c115-4935-8b5b-5d132890e6a6.png" 
                alt="Couple messaging each other" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700"
                style={{ transform: hoveredImage === 1 ? 'scale(1.05)' : 'scale(1)' }}
              />
            </div>
          </div>

          {/* Center phone showcase */}
          <div className="md:w-2/4 flex justify-center z-10">
            <div 
              className="relative max-w-xs mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer" 
              onClick={toggleAnimation}
            >
              {/* Phone frame */}
              <div className={`relative w-[280px] h-[580px] bg-whisper-dark rounded-[40px] p-4 shadow-xl border-[8px] border-whisper-dark ${isAnimating ? 'animate-pulse-light' : ''}`}>
                {/* App header */}
                <div className="bg-whisper rounded-t-lg p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-lg">Conversa</h3>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-white" />
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
                
                {/* Chat area */}
                <div className="bg-white h-[460px] overflow-hidden">
                  {/* Message bubbles */}
                  <div className="p-3 space-y-3">
                    <div className={`ml-auto max-w-[70%] bg-whisper/20 p-2 rounded-lg rounded-tr-none ${isAnimating ? 'animate-slide-in' : ''}`}>
                      <p className="text-sm">Hi there! How are you doing?</p>
                      <p className="text-[10px] text-right text-muted-foreground">10:23 AM</p>
                    </div>
                    
                    <div className={`max-w-[70%] bg-whisper-light p-2 rounded-lg rounded-tl-none ${isAnimating ? 'animate-slide-in' : ''}`} style={{animationDelay: "0.1s"}}>
                      <p className="text-sm">I'm good! Just checking out this new Conversa app.</p>
                      <p className="text-[10px] text-right text-muted-foreground">10:24 AM</p>
                    </div>
                    
                    <div className={`ml-auto max-w-[70%] bg-whisper/20 p-2 rounded-lg rounded-tr-none ${isAnimating ? 'animate-slide-in' : ''}`} style={{animationDelay: "0.2s"}}>
                      <p className="text-sm">It's pretty nice! The interface is clean and simple.</p>
                      <p className="text-[10px] text-right text-muted-foreground">10:25 AM</p>
                    </div>
                    
                    <div className={`max-w-[70%] bg-whisper-light p-2 rounded-lg rounded-tl-none ${isAnimating ? 'animate-slide-in' : ''}`} style={{animationDelay: "0.3s"}}>
                      <p className="text-sm">Absolutely! And it's secure too!</p>
                      <p className="text-[10px] text-right text-muted-foreground">10:26 AM</p>
                    </div>
                  </div>
                </div>
                
                {/* Input area */}
                <div className="bg-white rounded-b-lg p-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <button className="text-whisper hover:scale-110 transition-transform">
                        <Smile className="h-5 w-5" />
                      </button>
                      <button className="text-whisper hover:scale-110 transition-transform">
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <button className="text-whisper hover:scale-110 transition-transform">
                        <Image className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex-1 bg-whisper/10 rounded-full px-3 py-1 text-sm">
                      Type a message...
                    </div>
                    <button className="bg-whisper rounded-full p-1 hover:bg-whisper-dark transition-colors">
                      <Send className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-whisper-light/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-whisper/40 rounded-full blur-xl"></div>
              <div className="absolute top-1/4 -right-16 w-8 h-8 bg-whisper rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 -left-12 w-6 h-6 bg-whisper-dark rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
            </div>
          </div>

          {/* Right side images */}
          <div className="flex flex-col space-y-12 md:w-1/4">
            {/* Right top image */}
            <div 
              className="relative transition-all duration-500 hover:scale-105 rounded-lg overflow-hidden shadow-md cursor-pointer mr-12"
              onMouseEnter={() => handleImageHover(2)}
              onMouseLeave={handleImageLeave}
              style={{ 
                transform: hoveredImage === 2 ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <img 
                src="/image-uploads/c0692fc1-0341-43fe-82c3-81700038efbb.png" 
                alt="Couple using phones at a table" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700"
                style={{ transform: hoveredImage === 2 ? 'scale(1.05)' : 'scale(1)' }}
              />
            </div>
            
            {/* Right bottom image */}
            <div 
              className="relative transition-all duration-500 hover:scale-105 rounded-lg overflow-hidden shadow-md cursor-pointer"
              onMouseEnter={() => handleImageHover(3)}
              onMouseLeave={handleImageLeave}
              style={{ 
                transform: hoveredImage === 3 ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <img 
                src="/image-uploads/8cec00e7-a0c7-48af-a8dd-d78ec67c3882.png" 
                alt="Group of friends" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700"
                style={{ transform: hoveredImage === 3 ? 'scale(1.05)' : 'scale(1)' }}
              />
            </div>
          </div>
        </div>
        
        {/* Decorative icons */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="absolute -top-4 left-1/4 text-whisper opacity-20 animate-bounce">
            <MessageCircle className="h-10 w-10" />
          </div>
          <div className="absolute top-10 right-1/3 text-whisper-dark opacity-10 animate-pulse">
            <Send className="h-16 w-16 rotate-45" />
          </div>
          <div className="absolute -bottom-8 right-1/4 text-whisper opacity-15 animate-bounce" style={{animationDelay: "0.5s"}}>
            <Image className="h-12 w-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
