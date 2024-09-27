import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteStudent, listStudents } from "../services/StudentService";

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllStudents();
  }, []);

  function getAllStudents() {
    listStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function addNewStudent() {
    navigator("/add-student");
  }

  function updateStudent(id) {
    navigator(`/edit-student/${id}`);
  }

  function removeStudent(id) {
    console.log(id);
    deleteStudent(id)
      .then(() => {
        getAllStudents();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">List of Students</h2>
      <button className="btn btn-primary my-3" onClick={addNewStudent()}>
        Add Student
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Student Id </th>
            <th>Student First Name</th>
            <th>Student Last Name</th>
            <th>Student Email Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateStudent(student.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
