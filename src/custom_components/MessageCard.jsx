import userStore from "@/store/userStore";
import React from "react";

const MessageCard = ({ msg, userName }) => {
  const user = userStore((state) => state.user);
  return (
    <div className="text-sm flex justify-start items-center my-2">
      <div className="flex justify-center items-center gap-2 mx-2">
        <div className="rounded-xl shadow-md">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="rounded-full w-12 h-12 mx-auto"
            />
          ) : (
            <div>No Image Available</div>
          )}
        </div>
        <div className="capitalize">
          {user?.name === userName.name ? userName.name : "anonymous"} :
        </div>
      </div>
      <div className="">{msg}</div>
    </div>
  );
};

export default MessageCard;
