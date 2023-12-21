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
      "The progress app is a cuting-edge software application that enables teacher to keep record of student progress efficiently. It is designed to help teacher leave the manually work of calculating average, generate grades and student's position in the class performance",
      "The progress app is your one stop service to streamline the students performance tracking, aalowing you to focus on teaching the concepts.",
    ],
    images: {
      shots: [signin, signup, onboarding, gradebook],
      featureImg: [dashboard],
      featureText: [""],
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
      featureImg: [],
      featureText: [""],
    },
  },
];
