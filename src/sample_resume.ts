import type { Resume } from "./resume.interface";
let resume: Resume = {
  "name": "Firstname Lastname",
  "jobtitle": "Software Engineer",
  "email": "myawesomeemail@example.com",
  "phone": "+91 9999999999",
  "website": "https://example.com",
  "image": "not implemented",
  "location": "Delhi, India",
  "objective": "My objective is to tell my objective to you guys who wants to listen my objective. Please change this sentence to something better.",
  "social": [
    { "network": "linkedin", username: "linkedin", "url": "https://www.linkedin.com/" },
    { "network": "x-twitter", username: "twitter", "url": "https://www.twitter.com/" },
    { "network": "github", username: "github", "url": "https://github.com/" },
  ],
  "summary": [
    "Software Developer with 7 years of experience in frontend",
    "I design web app using latest technologies",
  ],
  "work": [{
    "position": "Senior Developer",
    "company": "Organization 3",
    "daterange": "Jan 2022 - Jun 2023",
    "summary": [
      "Use efficient algorithms to solve problems.",
      "Design and implement algorithms.",
      "Enhance existing algorithms.",
    ],
  }, {
    "position": "Developer",
    "company": "Organization 2",
    "daterange": "Jan 2020 - Jan 2022",
    "summary": [
      "Design and implement algorithms.",
      "Enhance existing algorithms.",
      "Use efficient algorithms to solve problems.",
    ],
  }, {
    "position": "Senior Software Engineer",
    "company": "Organization 1",
    "daterange": "Jan 2019 - Jan 2020",
    "summary": [
      "Design and implement algorithms.",
      "Enhance existing algorithms.",
      "Use efficient algorithms to solve problems.",
    ],
  }],
  "skillscategories": [{
    "name": "Programming Languages",
    "skills": ["Rust", "C", "C++", "TypeScript", "JavaScript"],
  }, {
    "name": "Framework and Libraries",
    "skills": ["Angular", "React", "Bootstrap", "TailwindCSS"],
  }, {
    "name": "Databases",
    "skills": ["MySQL/MariaDB", "MongoDB"],
  }, {
    "name": "Technologies",
    "skills": ["SQL", "HTML/CSS", "MQTT", "HTTP", "QUIC/HTTP3", "WebAssembly"],
  }, {
    "name": "Language",
    "skills": ["Hindi (native)", "English (Fluent)"]
  }, {
    "name": "Soft Skills",
    "skills": ["Problem Solving", "Critical Thinking"]
  }, {
    "name": "Hobbies",
    "skills": ["Going to mountains"]
  }],
  "education": [{
    "institution": "XYZ University",
    "degree": "First PHD",
    "course": "Math with Computer Science",
    "daterange": "2014 - 2015",
    "score": "unused",
  }, {
    "institution": "XYZ University",
    "degree": "Second PHD",
    "course": "whatever",
    "score": "44%",
    "daterange": "2015 - 2023",
  }],
  "showfact": true,
};

export default resume;