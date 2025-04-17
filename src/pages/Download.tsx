
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="whisper-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight">Download Conversa</h1>
            <p className="text-lg text-muted-foreground">
              Get Conversa on your device for the best messaging experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-4">Mobile Apps</h2>
                <p className="mb-6">Get the full messaging experience on your phone.</p>
                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" /> Download for iOS
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" /> Download for Android
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-4">Desktop Apps</h2>
                <p className="mb-6">Use Conversa on your computer for easier typing.</p>
                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" /> Download for Windows
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" /> Download for Mac
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" /> Download for Linux
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft size={16} /> Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;
