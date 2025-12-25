import { createContext, useContext, useState } from "react";

const QueueContext = createContext();

export const QueueProvider = ({ children }) => {
  const [isQueueOpen, setIsQueueOpen] = useState(false);

  return (
    <QueueContext.Provider value={{ isQueueOpen, setIsQueueOpen }}>
      {children}
    </QueueContext.Provider>
  );
};

export const useQueueContext = () => useContext(QueueContext);
