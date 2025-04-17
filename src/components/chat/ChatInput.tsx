
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Smile } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onAttachFile: () => void;
}

export const ChatInput = ({ onSendMessage, onAttachFile }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4 bg-background">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={onAttachFile}
          className="text-muted-foreground hover:text-foreground"
        >
          <Paperclip size={20} />
        </Button>
        
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
        />
        
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="text-muted-foreground hover:text-foreground"
        >
          <Smile size={20} />
        </Button>
        
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim()}
          className="bg-whisper hover:bg-whisper/90 text-white"
        >
          <Send size={18} />
        </Button>
      </div>
    </form>
  );
};
