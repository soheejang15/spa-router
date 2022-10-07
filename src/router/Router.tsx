import React, { PropsWithChildren, createContext, useState } from "react";

interface IRoutingContext {
  pathName: string;
  setPathName(pathName: string): void;
}

export const RoutingContext = createContext<IRoutingContext>({
  pathName: window.location.pathname,
  setPathName: () => {}
});

const Router: React.FC<PropsWithChildren> = ({ children }) => {
  const [pathName, setPathName] = useState(window.location.pathname);

  return (
    <RoutingContext.Provider value={{ pathName, setPathName }}>
      {children}
    </RoutingContext.Provider>
  );
};

export default Router;
