import userStore from "@/store/userStore";
import React from "react";

const MessageCard = ({ msg, userName }) => {
  const user = userStore((state) => state.user);
  return (
    <div className="text-sm flex justify-start items-center my-2">
      <div className="flex justify-center items-center gap-2 mx-2">
        <div className="rounded-xl shadow-md">
          {user.image && user?.name === userName.name ? (
            <img
              src={user.image}
              alt={user.name}
              className="rounded-full w-12 h-12 mx-auto"
            />
          ) : (
            <img
              src="https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg"
              alt={user.name}
              className="rounded-full w-12 h-12 mx-auto"
            />
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
