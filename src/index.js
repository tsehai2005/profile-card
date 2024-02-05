import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS", level: "Advanced", color: "#2662EA" },
  { skill: "Javascript", level: "Advanced", color: "#C3DCAF" },
  { skill: "React", level: "Intermediate", color: "#E84F33" },
  { skill: "Web Design", level: "Advanced", color: "#60DAFB" },
  { skill: "Git and GitHub", level: "Intermediate", color: "#EFD81D" },
];

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
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Intermediate" && "👍"}
        {level === "Advanced" && "💪"}
        {level === "Beginner" && "😊"}
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
