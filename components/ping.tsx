import { Heart } from "lucide-react";
import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-2">
        <span className="flex size-[12px]">
          <span className="absolute inline-flex h-full w-full animate-ping  opcaity-75">
            <Heart className="h-full w-full text-primary fill-primary" />
          </span>
          <span className="relatice inline-flex size-[12px] ">
            <Heart className="h-full w-full text-primary fill-primary" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
