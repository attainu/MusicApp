import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./partials/SidebarOption";
import Player from "../Player";
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../data/DataLayer";
import GeoLocation from "../../weather/GeoLocation";
import StripeCheckout from "react-stripe-checkout";

function Sidebar({ spotify }) {
  const [{ playlists }] = useDataLayerValue();

  // Stripe
  const { product, setProduct } = useState({
    name: "Monthly Subscription",
    price: 219,
    productBy: "Spotify",
  });

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} Component={Player} />
      {/* <SidebarOption title="Search" Icon={SearchIcon} /> */}
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        return (
          <SidebarOption
            spotify={spotify}
            title={playlist.name}
            id={playlist.id}
            key={playlist.id}
          />
        );
      })}

      <GeoLocation />
      <StripeCheckout stripeKey="" token="" name="Payment">
        <button className="Premium">Go Premium</button>{" "}
      </StripeCheckout>
    </div>
  );
}

export default Sidebar;
