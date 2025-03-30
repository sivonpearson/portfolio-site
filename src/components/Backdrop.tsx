import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Backdrop: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center backdrop-background bg-cover bg-center">
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}
      <div className="relative z-10 w-full max-w-7xl p-4 backdrop-foreground bg-opacity-100 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
