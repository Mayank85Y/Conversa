import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Smile } from "lucide-react";
import { useRef, useState } from "react";
import clsx from "clsx";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onAttachFile: (file: File) => void; // updated to accept File
}

export const ChatInput = ({ onSendMessage, onAttachFile }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFile(file);
      onAttachFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setAttachedFile(file);
      onAttachFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <form
      onSubmit={handleSubmit}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={clsx(
        "border-t p-4 bg-background transition-all",
        isDragging && "border-blue-400 bg-blue-50"
      )}
    >
      <div className="flex items-center gap-2 relative">
        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Attach Button */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => fileInputRef.current?.click()}
          className="text-muted-foreground hover:text-foreground"
        >
          <Paperclip size={20} />
        </Button>

        {/* Message Input */}
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
        />

        {/* Emoji Button */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="text-muted-foreground hover:text-foreground"
        >
          <Smile size={20} />
        </Button>

        {/* Send Button */}
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim()}
          className="bg-whisper hover:bg-whisper/90 text-white"
        >
          <Send size={18} />
        </Button>
      </div>

      {/* Optional File Preview */}
      {attachedFile && (
        <div className="text-sm text-muted-foreground mt-1 ml-1">
          Attached: {attachedFile.name}
        </div>
      )}
    </form>
  );
};
