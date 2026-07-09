import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container mt-5 text-center">
      <h1>🌍 AI Travel Planner</h1>

      <p className="lead">
        Plan Smarter. Travel Better.
      </p>

      <div
        className="card p-4 mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <h3>Create Account</h3>

        <input
          type="text"
          placeholder="Enter Name"
          className="form-control my-2"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control my-2"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control my-2"
        />

        <button className="btn btn-success w-100 mt-3">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;