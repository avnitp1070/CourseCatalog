import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  function getCourses() {
    if (category === "All") {
      let output = [];
      Object.values(courses).forEach((array) => {
        array.forEach((c) => {
          output.push(c);
        });
      });
      return output;
    } else {
      return courses[category];
    }
  }

  // function getCourses() {
  //     return Object.values(courses).flat();
  // }

  return (
    <div className="inner-cards">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};
export default Cards;
