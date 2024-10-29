"use client";

import { registerServiceWorker } from "@/utils/serviceWorker";
import React, { useEffect } from "react";
import { StreamChat } from "stream-chat";
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

const ChatPage = () => {
  const userId = "222222";
  const chatClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_KEY!
  );

  chatClient.connectUser(
    {
      id: userId,
      name: "ali nazari",
    },
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjIyMjIyIn0.H2x763wzn88J3_hwF0gX_PSfkmDHJCmSwuevVM5fxKc"
  );

  useEffect(() => {
    async function setUpServiceWorker() {
      try {
        await registerServiceWorker();
      } catch (error) {
        console.log(error);
      }
    }

    setUpServiceWorker();
  }, []);

  const channel = chatClient.channel("messaging", "channel_1", {
    name: "channel1 #1",
    members: [userId],
  });

  return (
    <div>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default ChatPage;
