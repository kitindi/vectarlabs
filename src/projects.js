import signin from "./images/signin.png";
import signup from "./images/signup.png";
import gradebook from "./images/gradebook.png";
import onboarding from "./images/onboarding.png";
import dashboard from "./images/dashboard.png";
import logo from "./images/logolight.png";
import aboutus from "./images/aboutuss.png";
import homepage from "./images/homepage.png";
import booking from "./images/booking.png";
import teachers from "./images/teachers.png";
import packages from "./images/packages.png";

export const projects = [
  {
    id: 1,
    logo: logo,
    title: "",
    description: [
      "The progress app is a cuting-edge software application that enables teacher to keep record of student progress efficiently. It is designed to help teacher leave the manually work of calculating average, generate grades and student's position in the class performance",
    ],
    images: {
      shots: [signin, signup, onboarding, gradebook],
      featureImg: [dashboard],
      featureText: [
        {
          title: "Gradebook Management",
          content:
            "Ability to input, calculate, and track grades for assignments and exams",
        },
        {
          title: "Calendar and Scheduling",
          content:
            "Integration with a calendar for scheduling classes, meetings, and deadlines.Reminders for upcoming events, classes, and task",
        },
        {
          title: "Student Performance Analytics",
          content:
            "Data visualization tools to track and analyze student performance.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Learnly HQ",
    description: [
      "The website that gives the opportunity to students who are looking for expert subject teacher trainings. It is a single martket place where expert teachers and students meet and schedule learning sessions easily and affordably",
    ],
    images: {
      shots: [homepage, aboutus, teachers, packages],
      featureImg: [booking],
      featureText: [
        {
          title: "Learning schemes",
          content:
            "Ability to choose home school services for students and session tracks",
        },
        {
          title: "Calendar and Scheduling",
          content:
            "Integration with a calendar for scheduling classes, meetings,",
        },
      ],
    },
  },
];
