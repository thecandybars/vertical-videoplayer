import "./App.css";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        // width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <video
        src="https://maroon-adequate-trout-940.mypinata.cloud/ipfs/bafybeidxmvd4oaupmfqzsa5a5sgjb3nlbebmpi55p7g5ow5mupxgzqvhje"
        controls
        autoPlay
        playsInline
        // onEnded={handleVideoEnd}
        style={{
          height: "100%",
          width: "auto",
          maxHeight: "100vh",
          maxWidth: "100vw",
          // objectFit: "cover",
        }}
      />
    </div>
  );
}
