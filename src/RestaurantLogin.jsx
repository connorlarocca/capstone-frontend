import axios from "axios";
import { useState } from "react";
import { LogoutLink } from "./LogoutLink.jsx";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function RestaurantLogin() {
  const [errors, setErrors] = useState([]);
  const [isRestaurantSignupVisible, setIsRestaurantSignupVisible] =
    useState(false);

  const handleRestaurantSignupShow = () => {
    setIsRestaurantSignupVisible = true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/restaurant_sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="text-center">
      <h1 className="text-center">Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
        <li className="nav-item">
          <a onClick={handleRestaurantSignupShow} href="/restaurant_signup">
            Don't have an account? Signup!
          </a>
        </li>
      </form>
    </div>
  );
}
