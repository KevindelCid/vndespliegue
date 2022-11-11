import { FC, PropsWithChildren } from "react";




const DarkLatout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default DarkLatout;
