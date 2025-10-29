import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };
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
        // setSubmitted(true);
        form.reset();
      })
      .catch((err) => console.error("Error submitting form", err));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {!videoEnded ? (
        <video
          ref={videoRef}
          src="https://maroon-adequate-trout-940.mypinata.cloud/ipfs/bafybeic3fukutdqk4x6pvcn5kfichrmeh7mnk6nbtmi2uh27hga3hclnza"
          controls
          autoPlay
          // playsInline
          // onEnded={handleVideoEnd}
          style={{
            height: "100%",
            width: "auto",
            maxHeight: "100vh",
            maxWidth: "100vw",
            objectFit: "cover",
          }}
        />
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1.5rem",
            width: "100%",
            maxWidth: "400px",
            background: "#111",
            borderRadius: "12px",
          }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ textAlign: "center", color: "Goldenrod" }}>
            Get in touch
          </h2>

          <input
            type="text"
            name="entry.2016981911"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="entry.1641794978"
            placeholder="Email Address"
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="entry.1099332325"
            placeholder="Phone number"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="entry.1641794978"
            placeholder="Organization"
            style={inputStyle}
          />

          <textarea
            name="entry.1261567087"
            placeholder="Your message"
            rows="4"
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
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
            }}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem",
  border: "1px solid #ccc",
  backgroundColor: "#ddd",
  color: "black",
  borderRadius: "8px",
  fontSize: "1rem",
};

// import { useEffect, useRef, useState } from "react";
// import "./App.css";
// import {
//   Box,
//   Button,
//   Dialog,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import CountryCodeSelect from "./CountryCodeSelect";

// const styles = {
//   textfield: {
//     fontSize: "12px",
//     "& .MuiInputBase-root": { p: 0 },
//     "& .MuiInputBase-input": {
//       p: 0.5,
//       color: "white",
//       backgroundColor: "gray",
//     },
//   },
//   title: {
//     fontSize: "22px",
//     fontWeight: "bold",
//     color: "Goldenrod",
//   },
//   label: {
//     marginTop: "8px",
//     fontSize: "12px",
//   },
//   caption: {
//     marginTop: "8px",
//     fontSize: "10px",
//   },
// submitButton: {
//   borderRadius: "100px",
//   backgroundColor: "Goldenrod",
//   color: "black",
//   textTransform: "none",
//   fontSize: "14px",
//   // marginTop: "36px",
//   width: "100%",
//   "&:hover": {
//     backgroundColor: "darkgoldenrod",
//   },
// },
//   closeButton: {
//     borderRadius: "100px",
//     width: "100%",
//     border: "1px solid Goldenrod",
//     backgroundColor: "#333",
//     color: "white",
//     textTransform: "none",
//     fontSize: "14px",
//     marginTop: "36px",
//     "&:hover": {
//       backgroundColor: "SlateGray",
//     },
//   },
// };

// function App() {
//   const [videoState, setVideoState] = useState("play");
//   const [openContact, setOpenContact] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   useEffect(() => {
//     if (videoState === "play") {
//       videoRef.current.play();
//     }
//     if (videoState === "pause") {
//       videoRef.current.pause();
//     }
//   }, [videoState]);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const data = new FormData(form);
//     fetch(
//       "https://docs.google.com/forms/d/e/1FAIpQLSeaPEWmeCuLBPxyybH6kx7yC3_4ZhbqKZHqQKe75vS5Axx8eg/formResponse",
//       {
//         method: "POST",
//         mode: "no-cors", // required to bypass CORS block
//         body: data,
//       }
//     )
//       .then(() => {
//         setSubmitted(true);
//         form.reset();
//       })
//       .catch((err) => console.error("Error submitting form", err));
//   };

//   const dialogPause = (
//     <Dialog open={videoState === "pause"} container={containerRef.current}>
//       <Stack
//         sx={{
//           width: "100%",
//           maxWidth: "450px",
//           backgroundColor: "white",
//         }}
//       >
//         <Button onClick={() => setVideoState("play")}>PLAY</Button>
//         <Button
//           onClick={() => {
//             setOpenContact(true);
//             setVideoState("idle");
//           }}
//         >
//           Contact us
//         </Button>
//       </Stack>
//     </Dialog>
//   );
//   const pageContact = (
//     <Box
//       px={12}
//       py={2}
//       sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}
//     >
//       {!submitted && (
//         <Box component="form" onSubmit={handleSubmit}>
//           <Stack
//             gap={0.5}
//             justifyContent="space-between"
//             sx={{
//               width: "100%",
//               height: "90vh",
//               maxWidth: "450px",
//               textAlign: "left",
//               overflowY: "auto",
//             }}
//           >
//             <Stack gap={2}>
//               <Box component="img" src="/cnmh-blanco.svg" height="50px" />
//               <Typography sx={styles.title}>Get in touch!</Typography>
//             </Stack>
//             <Stack gap={1}>
//               <Typography sx={styles.label}>Name*</Typography>
//               <TextField
//                 type="text"
//                 name="entry.2016981911"
//                 required
//                 sx={styles.textfield}
//               />
//             </Stack>

//             <Stack gap={1}>
//               <Typography sx={styles.label}>E-mail*</Typography>
//               <TextField
//                 type="text"
//                 name="entry.1641794978"
//                 required
//                 sx={styles.textfield}
//               />
//             </Stack>
//             <Stack gap={1}>
//               <Typography sx={styles.label}>Phone number</Typography>
//               <Box>
//                 {/* <CountryCodeSelect
//                     value="+57"
//                     onChange={(code) => console.log("Selected:", code)}
//                     sx={styles.textfield}
//                   /> */}
//                 <TextField
//                   type="number"
//                   name="entry.1099332325"
//                   sx={styles.textfield}
//                 />
//               </Box>
//             </Stack>
//             <Stack gap={1}>
//               <Typography sx={styles.label}>Organization</Typography>
//               <TextField
//                 type="text"
//                 name="entry.1261567087"
//                 sx={styles.textfield}
//               />
//             </Stack>
//             <Stack gap={1}>
//               <Typography sx={styles.label}>Message*</Typography>
//               <TextField
//                 multiline
//                 type="text"
//                 name="entry.1803492138"
//                 rows={5}
//                 required
//                 maxLength="500"
//                 style={{ resize: "none" }}
//                 sx={styles.textfield}
//               />
//               <Typography sx={styles.caption}>* Required field</Typography>
//             </Stack>
//             <Button variant="contained" type="submit" sx={styles.submitButton}>
//               Send
//             </Button>
//           </Stack>
//         </Box>
//       )}
//       {submitted && (
//         <Box>
//           <Box component="img" src="/mapa-col.svg" />
//           <Typography sx={styles.title}>Thank you!</Typography>
//           <Typography sx={{ marginTop: "8px", fontSize: "12px" }}>
//             Your message has been sent successfully.
//           </Typography>
//           <Button
//             variant="contained"
//             sx={styles.closeButton}
//             onClick={() => setOpenContact(false)}
//           >
//             Close
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
//   // const dialogContact = (
//   //   <Dialog
//   //     open={openContact}
//   //     fullScreen={true}
//   //     container={containerRef.current}
//   //     onClose={() => {
//   //       setOpenContact(false);
//   //       setVideoState("play");
//   //     }}
//   //     PaperProps={{
//   //       sx: {
//   //         backgroundColor: "transparent",
//   //         boxShadow: "none",
//   //         backdropFilter: "blur(8px)",
//   //         p: 0,
//   //       },
//   //     }}
//   //   >
//   //     <Box
//   //       px={12}
//   //       py={2}
//   //       sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}
//   //     >
//   //       {!submitted && (
//   //         <Box component="form" onSubmit={handleSubmit}>
//   //           <Stack
//   //             gap={0.5}
//   //             justifyContent="space-between"
//   //             sx={{
//   //               width: "100%",
//   //               height: "90vh",
//   //               maxWidth: "450px",
//   //               textAlign: "left",
//   //             }}
//   //           >
//   //             <Stack gap={2}>
//   //               <Box component="img" src="/cnmh-blanco.svg" height="50px" />
//   //               <Typography sx={styles.title}>Get in touch!</Typography>
//   //             </Stack>
//   //             <Stack gap={1}>
//   //               <Typography sx={styles.label}>Name*</Typography>
//   //               <TextField
//   //                 type="text"
//   //                 name="entry.2016981911"
//   //                 required
//   //                 sx={styles.textfield}
//   //               />
//   //             </Stack>

//   //             <Stack gap={1}>
//   //               <Typography sx={styles.label}>E-mail*</Typography>
//   //               <TextField
//   //                 type="text"
//   //                 name="entry.1641794978"
//   //                 required
//   //                 sx={styles.textfield}
//   //               />
//   //             </Stack>
//   //             <Stack gap={1}>
//   //               <Typography sx={styles.label}>Phone number</Typography>
//   //               <Box>
//   //                 {/* <CountryCodeSelect
//   //                   value="+57"
//   //                   onChange={(code) => console.log("Selected:", code)}
//   //                   sx={styles.textfield}
//   //                 /> */}
//   //                 <TextField
//   //                   type="number"
//   //                   name="entry.1099332325"
//   //                   sx={styles.textfield}
//   //                 />
//   //               </Box>
//   //             </Stack>
//   //             <Stack gap={1}>
//   //               <Typography sx={styles.label}>Organization</Typography>
//   //               <TextField
//   //                 type="text"
//   //                 name="entry.1261567087"
//   //                 sx={styles.textfield}
//   //               />
//   //             </Stack>
//   //             <Stack gap={1}>
//   //               <Typography sx={styles.label}>Message*</Typography>
//   //               <TextField
//   //                 multiline
//   //                 type="text"
//   //                 name="entry.1803492138"
//   //                 rows={5}
//   //                 required
//   //                 maxLength="500"
//   //                 style={{ resize: "none" }}
//   //                 sx={styles.textfield}
//   //               />
//   //               <Typography sx={styles.caption}>* Required field</Typography>
//   //             </Stack>
//   //             <Button
//   //               variant="contained"
//   //               type="submit"
//   //               sx={styles.submitButton}
//   //             >
//   //               Send
//   //             </Button>
//   //           </Stack>
//   //         </Box>
//   //       )}
//   //       {submitted && (
//   //         <Box>
//   //           <Box component="img" src="/mapa-col.svg" />
//   //           <Typography sx={styles.title}>Thank you!</Typography>
//   //           <Typography sx={{ marginTop: "8px", fontSize: "12px" }}>
//   //             Your message has been sent successfully.
//   //           </Typography>
//   //           <Button
//   //             variant="contained"
//   //             sx={styles.closeButton}
//   //             onClick={() => setOpenContact(false)}
//   //           >
//   //             Close
//   //           </Button>
//   //         </Box>
//   //       )}
//   //     </Box>
//   //   </Dialog>
//   // );

//   return (
//     <Box
//       ref={containerRef}
//       style={{
//         width: "100%",
//         height: "100dvh",
//         backgroundColor: "black",
//         // maxWidth: "450px",
//         margin: "0 auto",
//         color: "white",
//         overflow: "hidden",
//         // border: "1px solid red",
//       }}
//     >
//       {dialogPause}
//       {/* {dialogContact} */}
//       {openContact && pageContact}
//       {!openContact && (
//         <video
//           ref={videoRef}
//           src="https://maroon-adequate-trout-940.mypinata.cloud/ipfs/bafybeid2vnvyrt2fuz2ladohdc5zdtuzkba3vecozevprqmy2lmamqu76m"
//           style={{
//             width: "100%",
//             height: "auto",
//             display: "block",
//             maxHeight: "100dvh",
//             objectFit: "contain",
//           }}
//           controls
//           playsInline
//           autoPlay
//           // onPause={() => setVideoState("pause")}
//           onEnded={() => {
//             setOpenContact(true);
//             // document.exitFullscreen();
//           }}
//         />
//       )}
//     </Box>
//   );
// }

// export default App;
