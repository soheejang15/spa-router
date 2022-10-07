import { Link } from "../router";

export default function Root() {
  return (
    <div>
      <h1>Root</h1>
      <Link to="/about">about</Link>
    </div>
  );
}
