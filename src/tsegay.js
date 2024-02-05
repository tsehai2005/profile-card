import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="tsegay.jpg" alt="Tsegay Hailemariam" />;
}
function Intro() {
  return (
    <div>
      <h1>Tsegay Hailemariam</h1>
      <p>
        Dynamic and highly skilled Information Technology professional with a
        strong foundation in full-stack development, application software
        programming, and front-end development.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill Skill="React" emoji="💪" color="#777" textcolor="#fff" />
      <Skill Skill="CSS + HTML" emoji="💪" color="red" textcolor="#fff" />
      <Skill Skill="JavaScript" emoji="💪" color="yellow" textcolor="#000" />
      <Skill Skill="Flutter" emoji="❤️" color="skyblue" textcolor="#000" />
    </div>
  );
}
function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: props.textcolor }}
    >
      <span>
        {props.Skill} {props.emoji}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
