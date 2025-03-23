import "./App.css";
import React from "react";
import EmpDetail from "./component/EmpDetail";
import Counter from "./component/Counter";
import Comment from "./component/Comment";

const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "IT",
    salary: 70000,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    position: "UI/UX Designer",
    department: "Design",
    salary: 65000,
  },
  {
    id: 3,
    name: "Robert Brown",
    age: 35,
    position: "Project Manager",
    department: "Management",
    salary: 90000,
  },
  {
    id: 4,
    name: "Emily Johnson",
    age: 25,
    position: "Frontend Developer",
    department: "IT",
    salary: 75000,
  },
  {
    id: 5,
    name: "Michael Lee",
    age: 40,
    position: "HR Manager",
    department: "Human Resources",
    salary: 85000,
  },
];

// console.log(employees);

function App() {
  return <Comment />;
}

export default App;
