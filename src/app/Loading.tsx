import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          color: "white",
          "& .preloader": {
            animation: "loader 2s linear infinite",
          },
        }}
      >
        <Image
          src="/assets/images/loading-logo.png"
          alt="loading-logoSvg"
          className="preloader"
          width={315}
          height={200}
        />
      </Box>
    </>
  );
}
