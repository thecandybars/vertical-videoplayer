import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        maxWidth: "450px",
        margin: "0 auto",
        color: "white",
      }}
    >
      <h1>title</h1>
      <video
        src="https://green-immediate-albatross-200.mypinata.cloud/ipfs/bafybeidhyj7gp2ouzre5iukjn3o6erya72kxkjle62zdhalb7fyp4mlzya"
        height="100%"
        width="auto"
        controls
        autoplay
        // onended="videoEnded()"
        // onpause="videoPaused()"
        // onplay="videoPlayed()"
      ></video>
    </div>
  );
}

export default App;
