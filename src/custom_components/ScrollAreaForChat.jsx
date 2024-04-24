"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useChatStore from "@/store/chatStore";

const ScrollAreaForChat = () => {
  const chats = useChatStore((state) => state.receivedMessages);
  const messagesEndRef = useRef();

  //scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <ScrollArea className="h-[70vh] md:h-96 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none text-center underline">
          Chats
        </h4>
        {chats.map((chats, index) => (
          <div key={index}>
            <div className="text-sm">Send : {chats.question}</div>
            <div className="text-sm">Reply : {chats.answer}</div>
            <Separator className="my-2" />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default ScrollAreaForChat;
