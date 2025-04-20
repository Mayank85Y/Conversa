
import { useState } from "react";
import { ChatList } from "@/components/chat/ChatList";
import { ChatArea } from "@/components/chat/ChatArea";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

// Sample data
const SAMPLE_CHATS = [
  {
    id: "1",
    name: "Sarah Johnson",
    lastMessage: {
      content: "See you tomorrow!",
      timestamp: new Date(Date.now() - 12000000),
      isRead: true,
    },
    unreadCount: 0,
    isGroup: false,
  },
  {
    id: "2",
    name: "Design Team",
    lastMessage: {
      content: "Alex: I've uploaded the new mockups",
      timestamp: new Date(Date.now() - 3600000),
      isRead: false,
    },
    unreadCount: 3,
    isGroup: true,
  },
  {
    id: "3",
    name: "Michael Chen",
    lastMessage: {
      content: "Thanks for the help!",
      timestamp: new Date(Date.now() - 86400000),
      isRead: true,
    },
    unreadCount: 0,
    isGroup: false,
  },
  {
    id: "4",
    name: "Family Group",
    lastMessage: {
      content: "Mom: When are you coming home?",
      timestamp: new Date(Date.now() - 7200000),
      isRead: false,
    },
    unreadCount: 1,
    isGroup: true,
  }
];

const SAMPLE_CHAT_DETAILS = {
  "1": {
    id: "1",
    name: "Sarah Johnson",
    status: "online",
    isGroup: false,
  },
  "2": {
    id: "2",
    name: "Design Team",
    participants: 8,
    isGroup: true,
  },
  "3": {
    id: "3",
    name: "Michael Chen",
    status: "offline",
    isGroup: false,
  },
  "4": {
    id: "4",
    name: "Family Group",
    participants: 6,
    isGroup: true,
  }
};

const SAMPLE_MESSAGES = {
  "1": [
    {
      id: "m1",
      content: "Hey, how's your project going?",
      sender: {
        id: "sarah",
        name: "Sarah Johnson",
      },
      timestamp: new Date(Date.now() - 360000),
      status: "read",
      isMe: false,
    },
    {
      id: "m2",
      content: "It's going well! Just finishing up the last few tasks.",
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(Date.now() - 300000),
      status: "read",
      isMe: true,
    },
    {
      id: "m3",
      content: "Great! Do you have time to meet tomorrow to discuss the next steps?",
      sender: {
        id: "sarah",
        name: "Sarah Johnson",
      },
      timestamp: new Date(Date.now() - 240000),
      status: "read",
      isMe: false,
    },
    {
      id: "m4",
      content: "Yes, I'm free in the afternoon. How about 2pm?",
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(Date.now() - 180000),
      status: "read",
      isMe: true,
    },
    {
      id: "m5",
      content: "Perfect! See you tomorrow at 2pm.",
      sender: {
        id: "sarah",
        name: "Sarah Johnson",
      },
      timestamp: new Date(Date.now() - 120000),
      status: "read",
      isMe: false,
    },
    {
      id: "m6",
      content: "Looking forward to it. See you then!",
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(Date.now() - 60000),
      status: "read",
      isMe: true,
    },
  ],
  "2": [
    {
      id: "m1",
      content: "Hi team, I've finished the user research for the new feature.",
      sender: {
        id: "emily",
        name: "Emily Wong",
      },
      timestamp: new Date(Date.now() - 7200000),
      status: "read",
      isMe: false,
    },
    {
      id: "m2",
      content: "Great work Emily! Can you share the findings?",
      sender: {
        id: "james",
        name: "James Smith",
      },
      timestamp: new Date(Date.now() - 7000000),
      status: "read",
      isMe: false,
    },
    {
      id: "m3",
      content: "I've uploaded the new mockups to the shared folder. Please take a look when you get a chance.",
      sender: {
        id: "alex",
        name: "Alex Rodriguez",
      },
      timestamp: new Date(Date.now() - 3600000),
      status: "read",
      isMe: false,
      attachments: [
        {
          type: "image",
          url: "/image-uploads/3589a961-4bfb-430b-95a2-3de149564761.png",
          name: "design_mockup.png"
        }
      ]
    },
    {
      id: "m4",
      content: "These look fantastic! I especially like the new navigation layout.",
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(Date.now() - 3500000),
      status: "read",
      isMe: true,
    },
  ],
  "3": [
    {
      id: "m1",
      content: "Hey, do you have a minute to help me with something?",
      sender: {
        id: "michael",
        name: "Michael Chen",
      },
      timestamp: new Date(Date.now() - 172800000),
      status: "read",
      isMe: false,
    },
    {
      id: "m2",
      content: "Sure, what do you need help with?",
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(Date.now() - 172700000),
      status: "read",
      isMe: true,
    },
    {
      id: "m3",
      content: "I'm trying to debug this code but I keep getting an error. Can I share my screen with you?",
      sender: {
        id: "michael",
        name: "Michael Chen",
      },
      timestamp: new Date(Date.now() - 172600000),
      status: "read",
      isMe: false,
    },
    {
      id: "m4",
      content: "Of course. Let's hop on a call in 5 minutes?",
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(Date.now() - 172500000),
      status: "read",
      isMe: true,
    },
    {
      id: "m5",
      content: "Thanks for the help! I fixed the issue.",
      sender: {
        id: "michael",
        name: "Michael Chen",
      },
      timestamp: new Date(Date.now() - 86400000),
      status: "read",
      isMe: false,
    },
  ],
  "4": [
    {
      id: "m1",
      content: "Has anyone heard from Dad? He's not answering his phone.",
      sender: {
        id: "emma",
        name: "Emma",
      },
      timestamp: new Date(Date.now() - 14400000),
      status: "read",
      isMe: false,
    },
    {
      id: "m2",
      content: "He mentioned he had a meeting this afternoon. Probably has his phone on silent.",
      sender: {
        id: "john",
        name: "John",
      },
      timestamp: new Date(Date.now() - 14300000),
      status: "read",
      isMe: false,
    },
    {
      id: "m3",
      content: "I just spoke with him. He'll be home around 6pm.",
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(Date.now() - 14200000),
      status: "read",
      isMe: true,
    },
    {
      id: "m4",
      content: "When are you coming home?",
      sender: {
        id: "mom",
        name: "Mom",
      },
      timestamp: new Date(Date.now() - 7200000),
      status: "delivered",
      isMe: false,
    },
  ],
};

const Chat = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>(undefined);
  const [chatMessages, setChatMessages] = useState<Record<string, any[]>>(SAMPLE_MESSAGES);
  const [showChatList, setShowChatList] = useState(true);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    if (isMobile) {
      setShowChatList(false);
    }
  };
  
  const handleSendMessage = (message: string) => {
    if (!selectedChatId) return;
    
    const newMessage = {
      id: uuidv4(),
      content: message,
      sender: {
        id: "me",
        name: "Me",
      },
      timestamp: new Date(),
      status: "sending" as const,
      isMe: true,
    };
    
    // Add message optimistically
    setChatMessages(prev => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
    }));
    
    // Simulate sending delay and status updates
    setTimeout(() => {
      setChatMessages(prev => {
        const updatedMessages = [...prev[selectedChatId]];
        const messageIndex = updatedMessages.findIndex(m => m.id === newMessage.id);
        if (messageIndex >= 0) {
          updatedMessages[messageIndex] = { ...updatedMessages[messageIndex], status: "sent" };
        }
        return { ...prev, [selectedChatId]: updatedMessages };
      });
      
      setTimeout(() => {
        setChatMessages(prev => {
          const updatedMessages = [...prev[selectedChatId]];
          const messageIndex = updatedMessages.findIndex(m => m.id === newMessage.id);
          if (messageIndex >= 0) {
            updatedMessages[messageIndex] = { ...updatedMessages[messageIndex], status: "delivered" };
          }
          return { ...prev, [selectedChatId]: updatedMessages };
        });
        
        // Simulate response in group chats
        if (SAMPLE_CHAT_DETAILS[selectedChatId]?.isGroup && Math.random() > 0.5) {
          setTimeout(() => {
            const names = ["Alex", "Emma", "John", "Sarah", "Michael"];
            const randomName = names[Math.floor(Math.random() * names.length)];
            const responseMessage = {
              id: uuidv4(),
              content: `${randomName}: Thanks for the update!`,
              sender: {
                id: randomName.toLowerCase(),
                name: randomName,
              },
              timestamp: new Date(),
              status: "read" as const,
              isMe: false,
            };
            
            setChatMessages(prev => ({
              ...prev,
              [selectedChatId]: [...prev[selectedChatId], responseMessage],
            }));
          }, 2000 + Math.random() * 3000);
        }
      }, 1000);
    }, 1000);
  };
  
  const handleAttachFile = () => {
    toast({
      title: "File attachment",
      description: "File attachment functionality would be implemented here",
    });
  };
  
  const handleBackToList = () => {
    setShowChatList(true);
  };
  
  return (
    <div className="h-screen flex flex-col">
      <div className="flex h-full overflow-hidden">
        {(!isMobile || showChatList) && (
          <div className={`${isMobile ? 'w-full' : 'w-80'} h-full`}>
            <ChatList
              chats={SAMPLE_CHATS}
              selectedChatId={selectedChatId}
              onSelectChat={handleSelectChat}
            />
          </div>
        )}
        
        {(!isMobile || !showChatList) && selectedChatId ? (
          <div className="flex-1 flex flex-col h-full">
            {isMobile && (
              <div className="p-2 border-b">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleBackToList}
                  className="flex items-center gap-1"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </Button>
              </div>
            )}
            <div className="flex-1">
              <ChatArea
                chat={SAMPLE_CHAT_DETAILS[selectedChatId]}
                messages={chatMessages[selectedChatId] || []}
                onSendMessage={handleSendMessage}
                onAttachFile={handleAttachFile}
              />
            </div>
          </div>
        ) : (
          !isMobile && !selectedChatId && (
            <div className="flex-1 flex items-center justify-center bg-secondary/20">
              <div className="text-center p-4">
                <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">Select a chat to start messaging</h3>
                <p className="text-muted-foreground">
                  Choose an existing conversation or start a new one
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Chat;
