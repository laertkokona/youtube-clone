import { Chip, Radio, RadioGroup } from "@mui/material";
import React, { useRef } from "react";
import "./Chips.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDraggable } from "react-use-draggable-scroll";

const Chips = () => {
  const [selected, setSelected] = React.useState("All");
  const ref = useRef();
  const { events } = useDraggable(ref);

  const chips = [
    "All",
    "Music",
    "Mixes",
    "Lo-fi",
    "Chill-out music",
    "Beats",
    "One Piece",
    "Anime",
    "Gaming",
    "Computer programming",
    "DJ mix",
    "Eminem",
    "Playlists",
    "200s",
    "The Hot 100",
    "Freestyle Rap",
    "Instrumentals",
    "Sketchy comedy",
    "Podcasts",
    "Disses",
    "Background music",
    "Recently uploaded",
    "Watched",
    "New to you"
  ];

  return (
    <div className="chips">
      {/* <RadioGroup row className="radio-chips"> */}
      <div className="chips-container" {...events} ref={ref}>
        {chips.map((chip) => {
          const checked = selected === chip;
          return (
            <Chip
              className="chip"
              key={chip}
              label={chip}
              onClick={() => {
                setSelected(chip);
              }}
              sx={
                selected === chip
                  ? {
                      checked: "1px solid lightgrey",
                      backgroundColor: "black",
                      color: "lightgrey",
                    }
                  : { border: "1px solid lightgrey" }
              }
            />
          );
        })}
      </div>

      {/* </RadioGroup> */}
    </div>
  );
};

export default Chips;
