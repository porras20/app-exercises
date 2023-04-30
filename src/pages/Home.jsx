import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState(["all"]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}
