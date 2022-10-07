import { useContext, useState } from "react";
import { RoutingContext } from "./Router";

export default function useRouter() {
  // const { history } = window;

  // const [pathName, setPathName] = useState(window.location.pathname);

  // useEffect(() => {
  //   setPathName(window.location.pathname);
  // }, [window.location.pathname]);
  const { setPathName } = useContext(RoutingContext);

  const push = (url: string) => {
    window.history.pushState(null, "", url);
    setPathName(window.location.pathname);
  };

  return { push };
}
