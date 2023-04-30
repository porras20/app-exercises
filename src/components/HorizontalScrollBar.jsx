import { Box, Typography } from "@mui/material";
import "react-horizontal-scrolling-menu/dist/styles.css";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

export default function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
  return (
    <Box sx={{
      display: "flex",
      flexWrap: 'wrap',
      margin: '0 auto',
    }}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item}
          title={item.id || item}
          m=" 10px 20px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </Box>
  );
}
