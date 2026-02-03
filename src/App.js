import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [noPosition, setNoPosition] = useState({ top: "65%", left: "55%" });
const [accepted, setAccepted] = useState(false);
const audioRef = useRef(null);


const moveNoButton = () => {
const randomTop = Math.floor(Math.random() * 70) + 10;
const randomLeft = Math.floor(Math.random() * 70) + 10;


setNoPosition({
top: `${randomTop}%`,
left: `${randomLeft}%`,
});
};


const handleYes = () => {
setAccepted(true);
audioRef.current?.play();
};

  return (
    <div className="page">
<audio ref={audioRef} src="/song.mp3" />


{/* floating hearts */}
<div className="hearts">
{[...Array(20)].map((_, i) => (
<span key={i} className="heart">❤</span>
))}
</div>


{!accepted ? (
<div className="card">
<h1 className="title">Will you be my girlfriend? 💕</h1>


<img
src="/pic.jpg"
alt="Us"
className="cute-pic"
/>


<button className="yes-btn" onClick={handleYes}>
Yes 💖
</button>


<button
className="no-btn"
style={{ top: noPosition.top, left: noPosition.left }}
onMouseEnter={moveNoButton}
onClick={moveNoButton}
>
No 🙄
</button>
</div>
) : (
  <>
<div className="confetti">
{[...Array(40)].map((_, i) => (
<span key={i} className="confetti-piece">🎉</span>
))}
</div>
<div className="card accepted">
<h1 className="yay">YAYYYY!!! 🥰💘</h1>
<p className="msg">I knew you’d say yes ❤️</p>
<p className="small">Now we’re official 😌</p>
</div>
</>
)}
</div>
  );
}

export default App;
