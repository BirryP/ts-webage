import { createContext } from "react";

export interface HeaderContextType {
  currentDate: Date;
  setCurrentDate: (currentDate: Date) => void;
}

export const HeaderContext = createContext<HeaderContextType | null>(null);
