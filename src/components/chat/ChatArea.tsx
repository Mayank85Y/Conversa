
import { useEffect, useRef } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface Message {
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
}

interface ChatAreaProps {
  chat: {
    id: string;
    name: string;
    avatar?: string;
    isGroup: boolean;
    participants?: number;
    status?: "online" | "offline" | "typing";
  };
  messages: Message[];
  onSendMessage: (message: string) => void;
  onAttachFile: () => void;
}

export const ChatArea = ({ chat, messages, onSendMessage, onAttachFile }: ChatAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader chat={chat} />
      
      <div className="flex-1 overflow-y-auto p-4 bg-secondary/20">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput onSendMessage={onSendMessage} onAttachFile={onAttachFile} />
    </div>
  );
};
