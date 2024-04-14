import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { Box } from "@radix-ui/themes";

import Skeleton from "react-loading-skeleton";

const EditLoadingComponent = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2.5rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default EditLoadingComponent;
