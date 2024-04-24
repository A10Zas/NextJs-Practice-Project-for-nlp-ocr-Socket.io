"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import socket from "@/providers/socket";
// import transformers from "@/providers/transformers";
import useGroupChatStore from "@/store/groupChatStore";
import { useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MessageCard from "@/custom_components/MessageCard";

function GroupChatScrollArea() {
  const messages = useGroupChatStore((state) => state.messages);
  const language = useGroupChatStore((state) => state.language);
  const setLanguage = useGroupChatStore((state) => state.setLanguage);
  const messagesEndRef = useRef();

  console.log("message", messages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    socket.on("receiveMessage", async (message) => {
      // Translate message if needed
      // const translatedMessage = await transformers[language](message);
      useGroupChatStore.setState((state) => ({
        messages: [...state.messages, message],
      }));
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, [language]);

  return (
    <ScrollArea className="h-[70vh] md:h-96  w-full rounded-md border">
      <div className="p-4">
        <div className="flex gap-4 justify-between">
          <div className="text-sm font-semibold flex justify-center underline">
            Friends Group
          </div>
          {/* <div>
            <Select
              onValueChange={(lang) => {
                setLanguage(lang);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>
        {messages.map((msg, index) => (
          <MessageCard key={index} msg={msg.message} userName={msg.user} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}

export default GroupChatScrollArea;
