"use client";

import Link from "next/link";
import { Notifications } from "react-push-notification";
import Button from "./components/Button";
import AddNotification from "./components/Notifications/AddNotification";
import PushNotificationSubscribe from "./components/pushNotif/PushNotificationSubscribe";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <h1 className="mb-1 text-6xl font-extrabold text-blue-500">Rayan chat</h1>
      <p className="mb-10 ">coolest chat app on the planet</p>
      <Button as={Link} href="/chat">
        Start chatting
      </Button>
      <PushNotificationSubscribe />
      <Notifications />
      <AddNotification />
    </div>
  );
}
