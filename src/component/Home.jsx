import {  useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();
  console.log(props)
  return (
    <div>
      <h1>Home</h1>
      {/* <Link to="/Form">Form</Link> */}
      <input
        type="button"
        value="Form"
        onClick={() => navigate("/Form", { replace: true })}
        // onClick={() => navigate(-1)}
      />
    </div>
  );
}
