import React from "react";
import "./Header.css";
// import SearchIcon from '@material-ui/icons/Search';
import SearchBox from "../partials/SearchBox";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../../data/DataLayer";
import StripeCheckout from "react-stripe-checkout";

function Header({ spotify }) {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        {/* <SearchIcon /> */}
        <SearchBox />
        {/* <input
                    placeholder='Search for Artists, Songs or Podcasts'
                    type="text"/> */}
      </div>

      <div className="header__right">
        <StripeCheckout stripeKey="" token="" name="Payment">
          <button className="pre">Premium</button>{" "}
        </StripeCheckout>

        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
