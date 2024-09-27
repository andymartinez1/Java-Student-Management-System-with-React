package com.andymartinez1.sms.service;

import com.andymartinez1.sms.dto.StudentDTO;

import java.util.List;

public interface StudentService {
    List<StudentDTO> getAllStudents();

    StudentDTO createStudent(StudentDTO studentDTO);

    StudentDTO getStudentById(Long studentId);

    StudentDTO updateStudent(Long studentId, StudentDTO updatedStudent);

    void deleteStudent(Long studentId);
}
