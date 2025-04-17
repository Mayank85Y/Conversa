
import React from 'react';

export const ChatIllustration: React.FC = () => (
  <svg 
    width="300" 
    height="240" 
    viewBox="0 0 300 240" 
    className="mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="stroke-foreground stroke-[1.5] fill-none">
      {/* Person sitting */}
      <path d="M150,180 Q135,170 135,150 L135,120 Q135,110 145,110 L180,110 Q190,110 190,120 L190,150 Q190,170 175,180 Z" />
      {/* Head */}
      <circle cx="160" cy="95" r="20" />
      {/* Eyes */}
      <path d="M155,90 C155,90 155,95 155,95" />
      <path d="M165,90 C165,90 165,95 165,95" />
      {/* Smile */}
      <path d="M152,100 Q160,105 168,100" />
      {/* Phone */}
      <rect x="145" y="140" width="30" height="20" rx="2" />
      {/* Legs */}
      <path d="M150,180 L140,210" />
      <path d="M175,180 L185,210" />
      {/* Chair */}
      <path d="M120,180 L200,180" />
      <path d="M120,180 L120,220" />
      <path d="M200,180 L200,220" />
      <path d="M115,220 L205,220" />
    </g>
    {/* Yellow lamp */}
    <g>
      <path d="M160,30 L160,60" className="stroke-foreground stroke-[1.5]" />
      <path d="M140,60 Q160,40 180,60" className="stroke-foreground stroke-[1.5]" />
      <path d="M140,60 L180,60" className="stroke-foreground stroke-[1.5]" />
      <path d="M140,60 L140,80 L180,80 L180,60" fill="#FFC107" className="stroke-foreground stroke-[1.5]" />
    </g>
  </svg>
);

export const GroupChatIllustration: React.FC = () => (
  <svg 
    width="300" 
    height="240" 
    viewBox="0 0 300 240" 
    className="mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="stroke-foreground stroke-[1.5] fill-none">
      {/* First person */}
      <circle cx="120" cy="100" r="15" />
      <path d="M110,120 Q120,110 130,120" />
      <path d="M120,115 L120,160" />
      <path d="M120,130 L100,150" />
      <path d="M120,130 L140,150" />
      
      {/* Second person */}
      <circle cx="180" cy="100" r="15" />
      <path d="M170,120 Q180,110 190,120" />
      <path d="M180,115 L180,160" />
      <path d="M180,130 L160,150" />
      <path d="M180,130 L200,150" />
      
      {/* Chat bubbles */}
      <path d="M120,80 Q120,70 130,70 L150,70 Q160,70 160,80 L160,90 Q160,100 150,100 L130,100 Q120,100 120,90 Z" />
      <path d="M180,80 Q180,70 190,70 L210,70 Q220,70 220,80 L220,90 Q220,100 210,100 L190,100 Q180,100 180,90 Z" />
    </g>
    
    {/* Message dots */}
    <g className="fill-whisper">
      <circle cx="135" cy="85" r="3" />
      <circle cx="145" cy="85" r="3" />
      <circle cx="155" cy="85" r="3" />
      
      <circle cx="195" cy="85" r="3" />
      <circle cx="205" cy="85" r="3" />
      <circle cx="215" cy="85" r="3" />
    </g>
  </svg>
);

export const MediaSharingIllustration: React.FC = () => (
  <svg 
    width="300" 
    height="240" 
    viewBox="0 0 300 240" 
    className="mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="stroke-foreground stroke-[1.5] fill-none">
      {/* Phone */}
      <rect x="115" y="70" width="70" height="120" rx="10" />
      <rect x="125" y="90" width="50" height="70" rx="5" className="fill-[#F0F4F8]" />
      
      {/* Image */}
      <circle cx="140" cy="110" r="5" className="fill-[#FFC107]" />
      <path d="M125,150 L140,130 L155,145 L165,125 L175,150" />
      
      {/* Send button */}
      <circle cx="150" cy="175" r="10" className="fill-whisper" />
      <path d="M145,175 L155,175 M150,170 L150,180" className="stroke-white stroke-[1.5]" />
      
      {/* Share arrows */}
      <path d="M100,120 L115,120" />
      <path d="M185,120 L200,120" />
      <path d="M100,120 L105,115" />
      <path d="M100,120 L105,125" />
      <path d="M200,120 L195,115" />
      <path d="M200,120 L195,125" />
    </g>
  </svg>
);

export const SecureIllustration: React.FC = () => (
  <svg 
    width="300" 
    height="240" 
    viewBox="0 0 300 240" 
    className="mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="stroke-foreground stroke-[1.5] fill-none">
      {/* Shield */}
      <path d="M150,60 L120,80 L120,130 Q120,160 150,180 Q180,160 180,130 L180,80 Z" />
      
      {/* Lock */}
      <rect x="135" y="110" width="30" height="25" rx="5" className="fill-whisper" />
      <path d="M143,110 L143,95 Q143,85 150,85 Q157,85 157,95 L157,110" />
      
      {/* Keyhole */}
      <circle cx="150" cy="120" r="5" className="fill-white" />
      <path d="M150,125 L150,130" className="stroke-white" />
    </g>
  </svg>
);
