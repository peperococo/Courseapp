package com.ictak.Teacher.Repository;

import com.ictak.Teacher.Entity.TeacherEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepo extends JpaRepository<TeacherEntity,Integer> {
}
