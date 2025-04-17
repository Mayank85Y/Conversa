
import { MessageCircle, Lock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ValueProposition = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-whisper-light/30">
      <div className="whisper-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Connect with Confidence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From casual chats to important conversations, Whisper keeps your messages private and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="border-whisper/20 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-whisper-light flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-whisper-dark" />
                </div>
                <h3 className="text-xl font-semibold">Simple Messaging</h3>
                <p className="text-muted-foreground">
                  Easy-to-use interface that makes staying in touch effortless.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-whisper/20 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-whisper-light flex items-center justify-center">
                  <Lock className="h-6 w-6 text-whisper-dark" />
                </div>
                <h3 className="text-xl font-semibold">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your conversations stay between you and your recipients, always.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-whisper/20 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-whisper-light flex items-center justify-center">
                  <Zap className="h-6 w-6 text-whisper-dark" />
                </div>
                <h3 className="text-xl font-semibold">Fast & Reliable</h3>
                <p className="text-muted-foreground">
                  Messages delivered instantly, even on slower connections.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
