export default function NotFoundPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <p
        style={{
          fontSize: "54px",
        }}
      >
        Ooops... Not found
      </p>
      <a
        href="/dice-game"
        style={{
          fontSize: "18px",
          color: "white",
        }}
      >
        ᐸ Go back
      </a>
    </div>
  );
}
