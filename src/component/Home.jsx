import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      {/* <Link to="/Form">Form</Link> */}
      <input
        type="button"
        value="Form"
        onClick={() => navigate("/Form", { from: "/Home" })}
      />
    </div>
  );
}
