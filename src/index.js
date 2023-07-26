import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './header';
import Student from './Student';
const root = ReactDOM.createRoot(document.getElementById('root'));


function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;
  return (
    <div>
      In this course, we will learn {whatWeWillLearn} by building TaskOPedia!{" "}
        <br />
        Total Lecture - {lectureCount}
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
     {/*  <div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder="Henok"></input>
      </div> */}
    </div>
  );
}

function Footer() {
  return <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>;
}
root.render(
  <div className="container">
    <Header />
    <MainBody />
    <div className="row">Students Enrolled</div>
    <Student
      experience={11}
      name="Henok Gebrehiwot"
      headshot="https://api.lorem.space/image/face?w=150&h=153"
    />
    <Student
      experience={5}
      name="Angel Patrice"
      headshot="https://api.lorem.space/image/face?w=150&h=151"
    />
    <Student
      experience={7}
      name="Rene Parker"
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
    <Footer />
  </div>
);


