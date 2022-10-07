import useRouter from "./useRouter";
import { RoutingContext } from "./Router";
import { useContext } from "react";

interface RouterProps {
  path: string;
  component: React.ReactElement;
}

const Route: React.FC<RouterProps> = ({ component, path }) => {
  const { pathName } = useContext(RoutingContext);

  return <>{pathName === path && component}</>;
};

export default Route;
