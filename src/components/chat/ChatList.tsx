
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Plus, Users, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Chat {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: {
    content: string;
    timestamp: Date;
    isRead: boolean;
  };
  unreadCount: number;
  isGroup: boolean;
}

interface ChatListProps {
  chats: Chat[];
  selectedChatId?: string;
  onSelectChat: (chatId: string) => void;
}

export const ChatList = ({ chats, selectedChatId, onSelectChat }: ChatListProps) => {
  return (
    <div className="flex flex-col h-full border-r">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Chats</h2>
          <Button size="icon" variant="ghost">
            <Plus size={18} />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search chats..."
            className="pl-9"
          />
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1">
        {chats.map((chat) => (
          <button
            key={chat.id}
            className={cn(
              "flex items-center gap-3 w-full p-4 hover:bg-secondary text-left transition-colors",
              selectedChatId === chat.id ? "bg-secondary" : ""
            )}
            onClick={() => onSelectChat(chat.id)}
          >
            <Avatar>
              <AvatarImage src={chat.avatar} />
              <AvatarFallback>
                {chat.isGroup ? (
                  <Users size={16} />
                ) : (
                  chat.name.charAt(0)
                )}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <span className="font-medium truncate">{chat.name}</span>
                <span className="text-xs text-muted-foreground flex-shrink-0">
                  {chat.lastMessage.timestamp.toLocaleDateString([], {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-muted-foreground truncate">
                  {chat.lastMessage.content}
                </span>
                {chat.unreadCount > 0 && (
                  <span className="bg-whisper text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center p-1">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="p-4 border-t mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link to="/profile" className="flex items-center gap-2">
            <User size={16} />
            <span>My Profile</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
