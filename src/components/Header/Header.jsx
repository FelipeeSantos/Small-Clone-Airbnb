import React from "react";
import { Headerr, SearchInput } from "./styles.js"
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Headerr>
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="Logo AirBnb Clone"
          />
        </Link>

        <SearchInput>
          <input type="text"/>
          <SearchIcon />
        </SearchInput>

        <div>
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>

      </Headerr>
    </>
  );
};

export default Header;
