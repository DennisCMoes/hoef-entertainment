export default function StylingTesting() {
  let cards = document.querySelectorAll(".card");

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <p>TESTING</p>

      <div className="container">
        <div className="card" style={{ "--clr": "#0f0" } as React.CSSProperties}></div>
        <div className="card" style={{ "--clr": "#ff0" } as React.CSSProperties}></div>
      </div>
    </div>
  )
}
