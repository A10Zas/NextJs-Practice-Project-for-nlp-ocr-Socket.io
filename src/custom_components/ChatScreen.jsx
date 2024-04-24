"use client";

import { useEffect } from "react";
import ScrollAreaForChat from "./ScrollAreaForChat";
import TextareaWithButton from "./TextareaWithButton";
import useChatStore from "@/store/chatStore";

const ChatScreen = () => {
  const addMessage = useChatStore((state) => state.addMessage);

  const handleReceiveMessage = (messageHistory) => {
    messageHistory.forEach((message) => {
      addMessage(message);
    });
  };

  useEffect(() => {
    // Cleanup effect
    return () => {
      // Optionally clear messages on unmount
      // useChatStore.setState({ receivedMessages: [] });
    };
  }, []);

  return (
    <div className="h-full w-full md:w-full md:px-4 flex flex-col items-center">
      <div className="text-center text-xl py-2">Chat Bot</div>
      <div className="text-center text-md ">
        Built With
        <span className="px-2 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Node-Nlp
        </span>
      </div>
      <div className="mt-5 mb-5 w-full h-full">
        <ScrollAreaForChat />
      </div>
      <div className="w-full">
        <TextareaWithButton onSendMessage={handleReceiveMessage} />
      </div>
    </div>
  );
};

export default ChatScreen;
