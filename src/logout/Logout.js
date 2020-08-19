import React from "react";
import { logoutUrl } from "../spotify";

function Logout() {
  return (
    <div>
        <a href={ logoutUrl }>Logout</a>
    </div>
  )
}

export default Logout;
