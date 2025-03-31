import React from "react";
import BubbleBackground from "./BubbleBackground";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Backdrop: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <BubbleBackground />
      {/* So that the whole screen is scrollable */}
      <div className="absolute top-0 w-screen h-screen flex items-center justify-center overflow-y-auto">
        <div className="absolute top-0 z-10 w-full max-w-7xl p-4 bg-black bg-opacity-10 rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
