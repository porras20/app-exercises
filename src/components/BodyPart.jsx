import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";

export default function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
    
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        borderBottomLeftRadius: '20px',
        justifyContent: 'center',
        cursor: 'pointer',
        width: "170px", 
        height: "180px",
        cursor: 'pointer',
        gap: '47px'
      }
      }
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{  width: '40px', height: '40px'}}
      />
      <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  );
}
