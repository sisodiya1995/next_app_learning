"use client";
import { useState, useEffect } from "react";

// Define the possible types for the notification
type NotificationType = "info" | "success" | "warning" | "error";

interface NotificationProps {
  message: string;
  type?: NotificationType;
  duration?: number;
}

export default function Notification({
  message,
  type = "info",
  duration = 3000,
}: NotificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration]);

  if (!visible) return null;

  // Tailwind styles based on notification type
  const typeStyles: Record<NotificationType, string> = {
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${typeStyles[type]}`}
    >
      <div className="flex items-center">
        <span className="mr-2">{message}</span>
        <button
          onClick={() => setVisible(false)}
          className="text-white hover:text-gray-200 focus:outline-none ml-4"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
