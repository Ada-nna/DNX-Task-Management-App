import { useState } from "react";
import General from "./General";
import Notification from "./Notification";

const Settings = () => {
  const [isActiveTab, setIsActiveTab] = useState<"general" | "notification">(
    "general"
  );

  return (
    <div className="px-4">
      <div className="flex items-center gap-8 border-b border-[#F5F5F7]">
        <button
          className={`${
            isActiveTab === "general"
              ? "border-b-2 border-[#546FFF] font-medium"
              : "text-[#8E92BC]"
          } p-[14px]`}
          onClick={() => setIsActiveTab("general")}
        >
          General
        </button>

        <button
          onClick={() => setIsActiveTab("notification")}
          className={`${
            isActiveTab === "notification"
              ? "border-b-2 border-[#546FFF] font-medium"
              : "text-[#8E92BC]"
          } p-[14px]`}
        >
          Notification
        </button>
      </div>

      <div className="mt-6">
        {isActiveTab === "general" && <General />}
        {isActiveTab === "notification" && <Notification />}
      </div>
    </div>
  );
};

export default Settings;
