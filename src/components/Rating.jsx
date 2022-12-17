import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating({ defaultValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Stack spacing={1}>
      <Rating name='half-rating-read' value={value} precision={0.5} readOnly />
    </Stack>
  );
}
