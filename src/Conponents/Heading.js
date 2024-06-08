import React from "react";
import { Typography } from "@mui/material";
import "./Heading.css";

const Heading = () => {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        color="primary"
        marginTop={5}
        fontWeight={600}
        className="text1"
        sx={{
          fontSize: {
            xs: "35px",
            sm: "38px",
            md: "42px",
            lg: "45px",
            xl: "50px",
          },
        }}
      >
        Material Table
      </Typography>
      <Typography
        variant="h5"
        align="center"
        fontWeight={500}
        className="text2"
      >
        Employee Details
      </Typography>
    </div>
  );
};

export default Heading;
