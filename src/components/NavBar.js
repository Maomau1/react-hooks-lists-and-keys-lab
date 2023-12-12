import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksComp = links.map((link) =>{
    const hreff = `#${link}`;
    return(
      <a key={link} href={hreff}>{link}</a>
    )
  }
  )
  return <nav>{linksComp}</nav>;
}

export default NavBar;
