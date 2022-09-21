import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import HistoryIcon from "@mui/icons-material/History";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SensorsIcon from '@mui/icons-material/Sensors';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpIcon from '@mui/icons-material/Help';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Divider } from "@mui/material";
import { useAppContext } from "../AppContext";
import { useDraggable } from "react-use-draggable-scroll";

const Sidebar = () => {
  const [option, setOption] = useState("home");
  const ref = useRef();
  const { events } = useDraggable(ref);
  const {
    sidebar: [sidebar, setSidebar],
  } = useAppContext();

  useEffect(() => {}, [option]);

  const links = [
    {
      option: "home",
      label: "Home",
      show: true,
      activeIcon: <HomeIcon />,
      notActiveIcon: <HomeOutlinedIcon />,
      divider: false,
    },
    {
      option: "explore",
      label: "Explore",
      show: true,
      activeIcon: <ExploreIcon />,
      notActiveIcon: <ExploreOutlinedIcon />,
      divider: false,
    },
    {
      option: "shorts",
      label: "Shorts",
      show: true,
      activeIcon: <RepeatOnIcon />,
      notActiveIcon: <RepeatIcon />,
      divider: false,
    },
    {
      option: "subscriptions",
      label: "Subscriptions",
      show: true,
      activeIcon: <SubscriptionsIcon />,
      notActiveIcon: <SubscriptionsOutlinedIcon />,
      divider: true,
    },
    {
      option: "library",
      label: "Library",
      show: true,
      activeIcon: <VideoLibraryIcon />,
      notActiveIcon: <VideoLibraryOutlinedIcon />,
      divider: false,
    },
    {
      option: "history",
      label: "History",
      show: false,
      activeIcon: <HistoryIcon />,
      notActiveIcon: <HistoryIcon />,
      divider: false,
    },
    {
      option: "your-videos",
      label: "Your Videos",
      show: false,
      activeIcon: <SmartDisplayIcon />,
      notActiveIcon: <SmartDisplayOutlinedIcon />,
      divider: false,
    },
    {
      option: "watch-later",
      label: "Watch Later",
      show: false,
      activeIcon: <WatchLaterIcon />,
      notActiveIcon: <WatchLaterOutlinedIcon />,
      divider: false,
    },
    {
      option: "liked-videos",
      label: "Liked Videos",
      show: false,
      activeIcon: <ThumbUpIcon />,
      notActiveIcon: <ThumbUpOutlinedIcon />,
      divider: false,
    },
    {
      option: "playlists",
      label: "Playlists",
      show: false,
      activeIcon: <PlaylistPlayIcon />,
      notActiveIcon: <PlaylistPlayIcon />,
      divider: true,
    },
    {
      option: "gaming",
      label: "Gaming",
      show: false,
      activeIcon: <SportsEsportsIcon />,
      notActiveIcon: <SportsEsportsOutlinedIcon />,
      divider: false,
    },
    {
      option: "live",
      label: "Live",
      show: false,
      activeIcon: <SensorsIcon />,
      notActiveIcon: <SensorsIcon />,
      divider: false,
    },
    {
      option: "fashion",
      label: "Fashion & beauty",
      show: false,
      activeIcon: <CheckroomIcon />,
      notActiveIcon: <CheckroomIcon />,
      divider: false,
    },
    {
      option: "learning",
      label: "Learning",
      show: false,
      activeIcon: <LightbulbIcon />,
      notActiveIcon: <LightbulbOutlinedIcon />,
      divider: false,
    },
    {
      option: "sport",
      label: "Sport",
      show: false,
      activeIcon: <EmojiEventsIcon />,
      notActiveIcon: <EmojiEventsOutlinedIcon />,
      divider: true,
    },
    {
      option: "settings",
      label: "Settings",
      show: false,
      activeIcon: <SettingsIcon />,
      notActiveIcon: <SettingsOutlinedIcon />,
      divider: false,
    },
    {
      option: "report-history",
      label: "Report history",
      show: false,
      activeIcon: <FlagIcon />,
      notActiveIcon: <FlagOutlinedIcon />,
      divider: false,
    },
    {
      option: "help",
      label: "Help",
      show: false,
      activeIcon: <HelpIcon />,
      notActiveIcon: <HelpOutlineIcon />,
      divider: false,
    },
    {
      option: "send-feedback",
      label: "Send feedback",
      show: false,
      activeIcon: <FeedbackIcon />,
      notActiveIcon: <FeedbackOutlinedIcon />,
      divider: false,
    },
  ];

  return (
    <div className={"sidebar" + (sidebar ? " open" : "")} {...events} ref={ref}>
      {links.map((link) => {
        return (
          <>
            <button
              className={"sidebar_button_logo" + (sidebar ? " open" : "") + (link.show ? "" : " notShow")}
              title={link.label}
              onClick={() => setOption(link.option)}
            >
              <div className={"logo" + (sidebar ? " open" : "") + (link.show ? "" : " notShow")}>
                {option === link.option ? link.activeIcon : link.notActiveIcon}
              </div>
              <label
                className={
                  "sidebar_button_logo_label" + (sidebar ? " open" : "") + (link.show ? "" : " notShow")
                }
              >
                {link.label}
              </label>
            </button>
            {link.divider && sidebar && <Divider sx={{paddingTop: '10px'}} variant="middle" />}
          </>
        );
      })}
      {/* <button
        className={"sidebar_button_logo" + (sidebar ? " open" : "")}
        title="Home"
        onClick={() => setOption("home")}
      >
        <div className={"logo" + (sidebar ? " open" : "")}>
          {option === "home" ? <HomeIcon /> : <HomeOutlinedIcon />}
        </div>
        <label
          className={"sidebar_button_logo_label" + (sidebar ? " open" : "")}
        >
          Home
        </label>
      </button>
      <button
        className={"sidebar_button_logo" + (sidebar ? " open" : "")}
        title="Explore"
        onClick={() => setOption("explore")}
      >
        <div className={"logo" + (sidebar ? " open" : "")}>
          {option === "explore" ? <ExploreIcon /> : <ExploreOutlinedIcon />}
        </div>
        <label
          className={"sidebar_button_logo_label" + (sidebar ? " open" : "")}
        >
          Explore
        </label>
      </button>
      <button
        className={"sidebar_button_logo" + (sidebar ? " open" : "")}
        title="Shorts"
        onClick={() => setOption("shorts")}
      >
        <div className={"logo" + (sidebar ? " open" : "")}>
          {option === "shorts" ? <RepeatOnIcon /> : <RepeatIcon />}
        </div>
        <label
          className={"sidebar_button_logo_label" + (sidebar ? " open" : "")}
        >
          Shorts
        </label>
      </button>
      <button
        className={"sidebar_button_logo" + (sidebar ? " open" : "")}
        title="Subscriptions"
        onClick={() => setOption("subscriptions")}
      >
        <div className={"logo" + (sidebar ? " open" : "")}>
          {option === "subscriptions" ? (
            <SubscriptionsIcon />
          ) : (
            <SubscriptionsOutlinedIcon />
          )}
        </div>
        <label
          className={"sidebar_button_logo_label" + (sidebar ? " open" : "")}
        >
          Subscriptions
        </label>
      </button>
      <button
        className={"sidebar_button_logo" + (sidebar ? " open" : "")}
        title="Library"
        onClick={() => setOption("library")}
      >
        <div className={"logo" + (sidebar ? " open" : "")}>
          {option === "library" ? (
            <VideoLibraryIcon />
          ) : (
            <VideoLibraryOutlinedIcon />
          )}
        </div>
        <label
          className={"sidebar_button_logo_label" + (sidebar ? " open" : "")}
        >
          Library
        </label>
      </button> */}
    </div>
  );
};

export default Sidebar;
