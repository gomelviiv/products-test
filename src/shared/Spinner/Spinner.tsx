import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import { memo } from "react";

interface Props {
  size?: number;
}

const Spinner: FC<Props> = ({ size = 100 }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress color="inherit" size={size} />
    </Box>
  );
};

export default memo(Spinner);
