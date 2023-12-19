import signin from "./images/signin.png";
import signup from "./images/signup.png";
import gradebook from "./images/gradebook.png";
import onboarding from "./images/onboarding.png";
import dashboard from "./images/dashboard.png";
import logo from "./images/logolight.png";

export const projects = [
  {
    id: 1,
    logo: logo,
    title: "Progress App",
    description: [
      "The progress app is a cuting-edge solution that simplifies students performance record keeping. Enables teachers avaoid the manual way of  keeping record of students progress using papers.",
      "The progress app is your one stop service to streamline the students performance tracking, aalowing you to focus on teaching the concepts.",
    ],
    images: {
      shots: [signin, signup, onboarding, gradebook],
      features: [dashboard],
    },
  },
  {
    id: 2,
    title: "Learnly HQ",
    description: [
      "The progress app is a cuting-edge solution for manual performance tracking. helps teacher who find it hard to master excel and outomate the whole process of grade and rank making.",
      "The progress app is your one stop service to streamline the students performance tracking, aalowing you to focus on teaching the concepts.",
    ],
    images: {
      shots: [signin, signup, onboarding, gradebook],
      features: [],
    },
  },
];
