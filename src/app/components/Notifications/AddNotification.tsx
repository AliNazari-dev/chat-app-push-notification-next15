"use client";
import addNotification from "react-push-notification";

const AddNotification = () => {
  const buttonClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
      native: true,
      silent: true,
    });
  };

  return (
    <div className="page">
      <button onClick={buttonClick} className="button">
        Hello world.
      </button>
    </div>
  );
};

export default AddNotification;
