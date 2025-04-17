
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, CheckCheck, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: {
      id: string;
      name: string;
      avatar?: string;
    };
    timestamp: Date;
    status: "sending" | "sent" | "delivered" | "read";
    isMe: boolean;
    attachments?: {
      type: "image" | "file";
      url: string;
      name?: string;
    }[];
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  // Format time as HH:MM
  const formattedTime = message.timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Message status icon
  const StatusIcon = () => {
    switch (message.status) {
      case "sending":
        return <div className="h-3 w-3 rounded-full border-2 border-muted-foreground/30 animate-pulse" />;
      case "sent":
        return <Check size={14} className="text-muted-foreground/70" />;
      case "delivered":
        return <CheckCheck size={14} className="text-muted-foreground/70" />;
      case "read":
        return <CheckCheck size={14} className="text-whisper" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "flex gap-2 max-w-[80%] animate-fade-in",
        message.isMe ? "ml-auto flex-row-reverse" : "mr-auto"
      )}
    >
      {!message.isMe && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={message.sender.avatar} />
          <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}

      <div className="flex flex-col">
        {!message.isMe && (
          <span className="text-xs text-muted-foreground ml-1 mb-1">
            {message.sender.name}
          </span>
        )}

        <div
          className={cn(
            "rounded-lg px-3 py-2 shadow-sm",
            message.isMe
              ? "bg-whisper/10 text-foreground rounded-tr-none"
              : "bg-white border border-border rounded-tl-none"
          )}
        >
          {message.attachments?.map((attachment, index) => (
            <div key={index} className="mb-2">
              {attachment.type === "image" ? (
                <div className="rounded-md overflow-hidden mb-2">
                  <img
                    src={attachment.url}
                    alt="attachment"
                    className="w-full h-auto max-h-48 object-cover"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 p-2 rounded-md bg-background">
                  <ImageIcon size={16} />
                  <span className="text-sm truncate">{attachment.name}</span>
                </div>
              )}
            </div>
          ))}

          <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>

          <div className="flex justify-end items-center gap-1 mt-1">
            <span className="text-[10px] text-muted-foreground">
              {formattedTime}
            </span>
            {message.isMe && <StatusIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};
