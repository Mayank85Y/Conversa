
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  PhoneCall, 
  Video, 
  MoreVertical,
  Users
} from "lucide-react";

interface ChatHeaderProps {
  chat: {
    id: string;
    name: string;
    avatar?: string;
    isGroup: boolean;
    participants?: number;
    status?: "online" | "offline" | "typing";
  };
}

export const ChatHeader = ({ chat }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={chat.avatar} />
          <AvatarFallback>
            {chat.isGroup ? <Users size={16} /> : chat.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h3 className="font-medium">{chat.name}</h3>
          <p className="text-xs text-muted-foreground">
            {chat.isGroup 
              ? `${chat.participants} participants` 
              : chat.status === "online" 
                ? "Online" 
                : chat.status === "typing" 
                  ? "Typing..." 
                  : "Offline"}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        <Button size="icon" variant="ghost">
          <Search size={18} />
        </Button>
        <Button size="icon" variant="ghost">
          <PhoneCall size={18} />
        </Button>
        <Button size="icon" variant="ghost">
          <Video size={18} />
        </Button>
        <Button size="icon" variant="ghost">
          <MoreVertical size={18} />
        </Button>
      </div>
    </div>
  );
};
