import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container mt-5 text-center">
      <h1>🌍 AI Travel Planner</h1>
      <p className="lead">
        Plan Smarter. Travel Better.
      </p>

      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3>Login</h3>

        <input
          type="email"
          className="form-control my-2"
          placeholder="Enter Email"
        />

        <input
          type="password"
          className="form-control my-2"
          placeholder="Enter Password"
        />
        <button className="btn btn-primary w-100 mt-3">
          Login
        </button>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
   
      </div>
    </div>
  );
}

export default Login;