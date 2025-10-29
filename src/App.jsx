import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const styles = {
  textfield: {
    fontSize: "12px",
    "& .MuiInputBase-root": { p: 0 },
    "& .MuiInputBase-input": {
      p: 0.5,
      color: "white",
      backgroundColor: "gray",
    },
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "Goldenrod",
  },
  label: {
    marginTop: "8px",
    fontSize: "12px",
  },
  caption: {
    marginTop: "8px",
    fontSize: "10px",
  },
};

function App() {
  const [videoState, setVideoState] = useState("play");
  const [openContact, setOpenContact] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoState === "play") {
      videoRef.current.play();
    }
    if (videoState === "pause") {
      videoRef.current.pause();
    }
  }, [videoState]);
  const dialogPause = (
    <Dialog open={videoState === "pause"} container={containerRef.current}>
      <Stack
        sx={{
          width: "100%",
          maxWidth: "450px",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <Button onClick={() => setVideoState("play")}>PLAY</Button>
        <Button
          onClick={() => {
            setOpenContact(true);
            setVideoState("idle");
          }}
        >
          Contact us
        </Button>
      </Stack>
    </Dialog>
  );
  const dialogContact = (
    <Dialog
      open={openContact}
      container={containerRef.current}
      onClose={() => {
        setOpenContact(false);
        setVideoState("play");
      }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          backdropFilter: "blur(8px)",
        },
      }}
    >
      <Box p={2} sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}>
        <Stack
          gap={1}
          sx={{
            width: "100%",
            maxWidth: "450px",
            height: "100vh",
            textAlign: "left",
          }}
        >
          <Typography sx={styles.title}>Contact us</Typography>
          <Typography sx={styles.label}>Name*</Typography>
          <TextField
            type="text"
            name="entry.2016981911"
            required
            sx={styles.textfield}
          />
          <Typography sx={styles.label}>E-mail*</Typography>
          <TextField
            type="text"
            name="entry.1641794978"
            required
            sx={styles.textfield}
          />
          <Typography sx={styles.label}>Phone number</Typography>
          <TextField
            type="text"
            name="entry.1099332325"
            sx={styles.textfield}
          />
          <Typography sx={styles.label}>Organization</Typography>
          <TextField
            type="text"
            name="entry.1261567087"
            sx={styles.textfield}
          />
          <Typography sx={styles.label}>Message*</Typography>
          <TextField
            multiline
            maxRows={5}
            type="text"
            name="entry.1803492138"
            rows={5}
            required
            maxlength="500"
            style={{ resize: "none" }}
            sx={styles.textfield}
          />
          <Typography sx={styles.caption}>* Required field</Typography>
          <button type="submit" class="button-send">
            Send
          </button>
        </Stack>
      </Box>
    </Dialog>
  );

  return (
    <Box
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        maxWidth: "450px",
        margin: "0 auto",
        color: "white",
        overflow: "hidden",
        border: "1px solid red",
      }}
    >
      {dialogPause}
      {dialogContact}
      <video
        ref={videoRef}
        src="https://green-immediate-albatross-200.mypinata.cloud/ipfs/bafybeidhyj7gp2ouzre5iukjn3o6erya72kxkjle62zdhalb7fyp4mlzya"
        height="100%"
        width="auto"
        controls
        autoPlay
        onPause={() => setVideoState("pause")}
        // onended="videoEnded()"
        // onpause="videoPaused()"
        // onplay="videoPlayed()"
      />
    </Box>
  );
}

export default App;
