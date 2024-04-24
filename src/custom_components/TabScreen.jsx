"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatScreen from "@/custom_components/ChatScreen";
import GroupChatScreen from "@/custom_components/GroupChatScreen";
import {
  LogOut,
  MessageCircleMore,
  MessageSquareText,
  ScanEye,
} from "lucide-react";
import OcrImageScreen from "@/custom_components/OcrImageScreen";
import { signOut } from "next-auth/react";
import userStore from "@/store/userStore";

const TabScreen = ({ session }) => {
  const setUser = userStore((state) => state.setUser);
  if (session) {
    setUser(session?.user);
  }
  return (
    <Tabs defaultValue="chatBot" className="w-full">
      <TabsContent value="chatBot">
        <ChatScreen />
      </TabsContent>
      <TabsContent value="GroupChatScreen">
        <GroupChatScreen />
      </TabsContent>
      <TabsContent value="OcrImageProcess">
        <OcrImageScreen />
      </TabsContent>
      <TabsContent value="logout"></TabsContent>
      <div className="flex justify-center">
        <TabsList className="grid w-[400px] grid-cols-4 fixed bottom-0 my-4">
          <TabsTrigger value="chatBot">
            <MessageSquareText size={20} />
          </TabsTrigger>
          <TabsTrigger value="GroupChatScreen">
            <MessageCircleMore size={20} />
          </TabsTrigger>
          <TabsTrigger value="OcrImageProcess">
            <ScanEye size={20} />
          </TabsTrigger>
          <TabsTrigger value="logout">
            <LogOut onClick={signOut} size={20} />
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
};

export default TabScreen;
