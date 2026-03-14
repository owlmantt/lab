import { useParams, useLoaderData, Link } from "react-router-dom";
import type { Course } from "../data"; 

const CourseDetail = () => {
  const { id } = useParams();
  const { course } = useLoaderData() as { course: Course };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <hr />
      <p><small>Route ID parameter: {id}</small></p>
      <Link to="/courses">← Back to Courses</Link>
    </div>
  );
};

export default CourseDetail;