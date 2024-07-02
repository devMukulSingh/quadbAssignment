import  { ReactNode } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  const modal = document.getElementById("modal");
  if (modal) return createPortal(children, modal);
};

export default Portal;
