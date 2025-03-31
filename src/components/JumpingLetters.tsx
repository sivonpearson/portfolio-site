import React from "react";
// import "../styles/globals.css";

type Props = {
  text: string;
};

const JumpingLetters: React.FC<Props> = ({ text }: Props) => {
  return (
    <div
      className="flex justify-center text-center items-center h-fit space-x-2"
      style={{
        backgroundColor: "var(--darkvibrant)",
        color: "var(--lightvibrant)",
      }}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="animate-bounce-wave inline-block"
          style={
            {
              animationDelay: `${index * 0.1}s`,
              "--amplitude": "10px",
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default JumpingLetters;
