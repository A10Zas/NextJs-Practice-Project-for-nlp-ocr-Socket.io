"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import socket from "@/providers/socket";
import useGroupChatStore from "@/store/groupChatStore";
import userStore from "@/store/userStore";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

function GroupChatInputButton() {
  const [sendMessage, setSendMessage] = useState("");
  const language = useGroupChatStore((state) => state.language);
  const user = userStore((state) => state.user);
  const name = user?.name;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sendMessage.trim() === "") return;

    // Send message to server
    socket.emit("sendMessage", { message: sendMessage, user: { name } });
    setSendMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
          placeholder="Send message"
        />
        <Button variant="ghost" type="submit">
          <SendHorizontal />
        </Button>
      </div>
    </form>
  );
}

export default GroupChatInputButton;
