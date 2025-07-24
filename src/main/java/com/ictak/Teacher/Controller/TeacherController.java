package com.ictak.Teacher.Controller;

import com.ictak.Teacher.Entity.TeacherEntity;
import com.ictak.Teacher.Service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5175")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @PostMapping("/addCourse")
    public TeacherEntity putDetails(@RequestBody TeacherEntity teacherEntity)
    {
        return teacherService.postDetail(teacherEntity);
    }

    @GetMapping("/getCourse")
    public List<TeacherEntity> fetchDetails()
    {
        return teacherService.getAllDetail();
    }

    @GetMapping("/courses/{id}")
    public TeacherEntity fetchDetail(@PathVariable int id)
    {
        return teacherService.fetchDetailbyID(id);
    }
    @DeleteMapping("/course/{id}")
    public String delete(@PathVariable int id)
    {
        return teacherService.deleteId(id);
    }
    @PutMapping("/update")
    public TeacherEntity updateCourseDetails(@RequestBody TeacherEntity teacherEntity)
    {
        return teacherService.updateDetails(teacherEntity);
    }
}
