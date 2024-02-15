import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses(likedCourses.filter((id) => id !== course.id));

      toast.warning("Removed from liked courses");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses([...likedCourses, course.id]);
      }
      toast.success("Added to liked courses");
    }
  }
  return (
    <div className="card-innerTop">
      <div className="img-card">
        <img className="img" src={course.image.url} alt="" />
        <div className="btn-like">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="top-pcard">
        <p className="title-para">{course.title}</p>
        <p className="description-para">
          {course.description.length
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
