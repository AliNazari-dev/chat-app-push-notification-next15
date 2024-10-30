import { getReadyServiceWorker } from "@/utils/serviceWorker";

export async function getCurrentPushSubscription(): Promise<PushSubscription | null> {
  const sw = await getReadyServiceWorker();
  return sw.pushManager.getSubscription();
}

export async function registerPushNotifications() {
  if (!("PushManager" in window)) {
    throw Error("Push notifications are not supported by this browser");
  }

  const existingSubscription = await getCurrentPushSubscription();

  if (existingSubscription) {
    throw Error("Existing push subscription found");
  }

  const sw = await getReadyServiceWorker();
  const subscription = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      "BBdLG5gOmEpmYT0CPQPCmUcVi8435kPzBCWSNOK8QYKjM66jXHa_wjT-en90f5EA5jLrzHMA8e5Y5ZmYDP6ho2E",
  });
  await sendPushSubscriptionToServer(subscription);
}

export async function unregisterPushNotifications() {
  const existingSubscription = await getCurrentPushSubscription();

  if (!existingSubscription) {
    throw Error("No existing push subscription found");
  }

  await deletePushSubscriptionFromServer(existingSubscription);

  await existingSubscription.unsubscribe();
}

export async function sendPushSubscriptionToServer(
  subscription: PushSubscription
) {
  console.log("sending sendPushSubscriptionToServer", subscription);
}

export async function deletePushSubscriptionFromServer(
  subscription: PushSubscription
) {
  console.log("deleting deletePushSubscriptionFromServer", subscription);
}
