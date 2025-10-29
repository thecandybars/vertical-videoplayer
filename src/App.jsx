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
  submitButton: {
    borderRadius: "100px",
    backgroundColor: "Goldenrod",
    color: "black",
    textTransform: "none",
    fontSize: "14px",
    marginTop: "36px",
    width: "100%",
    "&:hover": {
      backgroundColor: "darkgoldenrod",
    },
  },
  closeButton: {
    borderRadius: "100px",
    width: "100%",
    border: "1px solid Goldenrod",
    backgroundColor: "#333",
    color: "white",
    textTransform: "none",
    fontSize: "14px",
    marginTop: "36px",
    "&:hover": {
      backgroundColor: "SlateGray",
    },
  },
};

function App() {
  const [videoState, setVideoState] = useState("play");
  const [openContact, setOpenContact] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSeaPEWmeCuLBPxyybH6kx7yC3_4ZhbqKZHqQKe75vS5Axx8eg/formResponse",
      {
        method: "POST",
        mode: "no-cors", // required to bypass CORS block
        body: data,
      }
    )
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => console.error("Error submitting form", err));
  };

  const dialogPause = (
    <Dialog open={videoState === "pause"} container={containerRef.current}>
      <Stack
        sx={{
          width: "100%",
          maxWidth: "450px",
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
          p: 0,
        },
      }}
    >
      <Box
        px={5}
        py={2}
        sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}
      >
        {!submitted && (
          <Box component="form" onSubmit={handleSubmit}>
            <Stack
              gap={0.5}
              sx={{
                width: "100%",
                maxWidth: "450px",
                // height: "90vh",
                textAlign: "left",
              }}
            >
              <Stack gap={2}>
                <Box component="img" src="/cnmh-blanco.svg" height="50px" />
                <Typography sx={styles.title}>Contact us</Typography>
              </Stack>
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
                type="text"
                name="entry.1803492138"
                rows={5}
                required
                maxLength="500"
                style={{ resize: "none" }}
                sx={styles.textfield}
              />
              <Typography sx={styles.caption}>* Required field</Typography>
              <Button
                variant="contained"
                type="submit"
                sx={styles.submitButton}
              >
                Send
              </Button>
            </Stack>
          </Box>
        )}
        {submitted && (
          <Box>
            <Box component="img" src="/mapa-col.svg" />
            <Typography sx={styles.title}>Thank you!</Typography>
            <Typography sx={{ marginTop: "8px", fontSize: "12px" }}>
              Your message has been sent successfully.
            </Typography>
            <Button
              variant="contained"
              sx={styles.closeButton}
              onClick={() => setOpenContact(false)}
            >
              Close
            </Button>
          </Box>
        )}
      </Box>
    </Dialog>
  );

  return (
    <Box
      ref={containerRef}
      style={{
        width: "100%",
        height: "100dvh",
        backgroundColor: "black",
        // maxWidth: "450px",
        margin: "0 auto",
        color: "white",
        overflow: "hidden",
        // border: "1px solid red",
      }}
    >
      {dialogPause}
      {dialogContact}
      <video
        ref={videoRef}
        src="https://green-immediate-albatross-200.mypinata.cloud/ipfs/bafybeidhyj7gp2ouzre5iukjn3o6erya72kxkjle62zdhalb7fyp4mlzya"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          maxHeight: "100dvh",
          objectFit: "contain",
        }}
        controls
        playsInline
        autoPlay
        // onPause={() => setVideoState("pause")}
        onEnded={() => setOpenContact(true)}
        // onended="videoEnded()"
        // onpause="videoPaused()"
        // onplay="videoPlayed()"
      />
    </Box>
  );
}

export default App;
