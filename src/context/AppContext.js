import React, { useContext, useState } from "react";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");
  const [showPreview, setShowPreview] = useState(true);
  const value = { showPreview, setShowPreview, markdown, setMarkdown };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
