import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ClearIcon from "@mui/icons-material/Clear";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SensorsIcon from "@mui/icons-material/Sensors";
import { useAppContext } from "../AppContext";

const Header = () => {
  const [search, setSearch] = useState("");
  const [settings, setSettings] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifications, setNotifications] = React.useState(false)
  const {
    sidebar: [sidebar, setSidebar],
  } = useAppContext();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSettings(false)
  };

  console.log({ search, anchorEl });

  return (
    <div className="header">
      <div className="header_left" onClick={() => setSidebar(!sidebar)}>
        <IconButton title="Menu">
          <MenuIcon />
        </IconButton>
        <img
          title="YouTube"
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube Logo"
        />
      </div>
      <div className="header_search">
        <InputBase
          placeholder="Search"
          sx={{ flex: 1, paddingLeft: "10px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="false"
          endAdornment={
            search ? (
              <InputAdornment position="end">
                <IconButton title="Clear" onClick={() => setSearch("")}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ) : null
          }
        />
        <button className="search_logo" title="Search">
          {/* <IconButton title="Search"> */}
          <SearchIcon />
          {/* </IconButton> */}
        </button>
      </div>
      <Box className="header_icons">
        <Tooltip title="Create">
          <IconButton
            onClick={handleClick}
            aria-controls="account-menu"
            aria-haspopup="true"
            // aria-expanded="true"
          >
            {Boolean(anchorEl) ? <VideoCallIcon /> : <VideoCallOutlinedIcon />}
          </IconButton>
        </Tooltip>
        <IconButton title="Apps">
          <AppsIcon />
        </IconButton>
        <IconButton title="Notifications" onClick={() => setNotifications(!notifications)}>
          {notifications ? <NotificationsIcon /> : <NotificationsOutlinedIcon />}
        </IconButton>
        <Avatar title="Account" src="/luigi.jpg" sx={{ marginX: "8px" }} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{padding: 0, margin: 0}}
      >
        <MenuItem onClick={() => setSettings(!settings)}>
          <ListItemIcon>
            {settings ? <SmartDisplayIcon fontSize="small" /> : <SmartDisplayOutlinedIcon fontSize="small" />}
          </ListItemIcon>
          Upload Video
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SensorsIcon fontSize="small" />
          </ListItemIcon>
          Go live
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
