"use cient";
import React, { useEffect, useState } from "react";
import {
  getCurrentPushSubscription,
  registerPushNotifications,
  unregisterPushNotifications,
} from "../Notifications/pushService";

const PushNotificationSubscribe = () => {
  const [hasActiveNotification, setHasActiveNotification] = useState<boolean>();

  useEffect(() => {
    async function getActivePushSubscription() {
      const subscription = await getCurrentPushSubscription();
      setHasActiveNotification(!!subscription);
    }
    getActivePushSubscription();
  }, []);

  async function setPushNotificationEnabled(enabled: boolean) {
    try {
      if (enabled) {
        await registerPushNotifications();
      } else {
        await unregisterPushNotifications();
      }
      setHasActiveNotification(enabled);
    } catch (error) {
      if (enabled && Notification.permission === "denied") {
        alert("please enable push notification in your browser setting");
      } else {
        alert("please try again");
      }
    }
  }

  if (hasActiveNotification === undefined) return null;

  return (
    <div>
      {hasActiveNotification ? (
        <p
          className="bg-red-500"
          onClick={() => setPushNotificationEnabled(false)}
        >
          disable push notification{" "}
        </p>
      ) : (
        <p
          className="bg-green-500"
          onClick={() => setPushNotificationEnabled(true)}
        >
          Enable push notification
        </p>
      )}
    </div>
  );
};

export default PushNotificationSubscribe;
