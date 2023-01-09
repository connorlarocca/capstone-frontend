import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { About } from "./About";
import { UserSignup } from "./UserSignup";
import { UserLogin } from "./UserLogin";
import { RestaurantSignup } from "./RestaurantSignup";
import { RestaurantLogin } from "./RestaurantLogin";
import { RestaurantsNew } from "./RestaurantsNew";
import { RandomRestaurantsShow } from "./RandomRestaurantsShow";
import { LogoutLink } from "./LogoutLink";
import { FavoritesIndex } from "./FavoritesIndex";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/new" element={<RestaurantsNew />} />
        <Route path="/user_signup" element={<UserSignup />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/restaurant_signup" element={<RestaurantSignup />} />
        <Route path="/restaurant_login" element={<RestaurantLogin />} />
        <Route path="/random" element={<RandomRestaurantsShow />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/favorites" element={<FavoritesIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
