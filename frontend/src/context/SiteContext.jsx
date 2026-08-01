import { createContext, useContext } from "react";

export const SiteContext = createContext({
  openBooking: () => {},
  scrollTo: () => {},
});

export const useSite = () => useContext(SiteContext);
