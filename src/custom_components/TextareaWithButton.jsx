"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import useChatStore from "@/store/chatStore";

const TextareaWithButton = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (messageText.trim() === "") {
      toast.error("Field is empty. Please fill it", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await axios.get(
        "https://nlpappserver.onrender.com/chatBot",
        {
          params: { question: messageText },
        }
      );
      const answer = response?.data?.answer || "";
      addMessage({ question: messageText, answer });
      setMessageText("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Send message"
        />
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

export default TextareaWithButton;
