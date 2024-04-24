import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <Link to={"/"}>
        <button className="btn btn-outline btn-error">Go to home</button>
      </Link>
    </div>
  );
}
export default ErrorPage;
