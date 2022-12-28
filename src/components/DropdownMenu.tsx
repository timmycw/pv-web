import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event : any) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  let navigate = useNavigate();
  const redirectRoute = (routePath : any) => {
    navigate(routePath);
    setAnchorEl(null);
  };

  return (
    
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        sx={{
          color: "white"
        }}
      >
        About
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={() => redirectRoute("/AboutTeam")}>Our Team</MenuItem>
        <MenuItem onClick={() => redirectRoute("/AboutProjects")}>Projects</MenuItem>
        <MenuItem onClick={() => redirectRoute("/AboutOrganizations")}>Partner Organizations</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu;