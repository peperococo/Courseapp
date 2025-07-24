package com.ictak.Teacher.Service;

import com.ictak.Teacher.Entity.TeacherEntity;
import com.ictak.Teacher.Repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepo teacherRepo;

    public TeacherEntity postDetail(TeacherEntity teacherEntity)
    {
        return teacherRepo.save(teacherEntity);
    }

    public List<TeacherEntity> getAllDetail()
    {
        return teacherRepo.findAll();
    }

    public TeacherEntity fetchDetailbyID(int id)
    {
        return teacherRepo.findById(id).orElse(null);
    }

    public String deleteId(int id)
    {
        if(teacherRepo.existsById(id))
        {
            teacherRepo.deleteById(id);
            return "deleted";
        }
        else
        {
            return "id not present";
        }
    }
    public TeacherEntity updateDetails(TeacherEntity teacherEntity)
    {
        TeacherEntity up =teacherRepo.findById(teacherEntity.getCourseId()).orElse(null);
        if (up!=null)
        {
            up.setCourseId(teacherEntity.getCourseId());
            up.setDesc(teacherEntity.getDesc());
            up.setCourseTitle(teacherEntity.getCourseTitle());
            up.setIcon(teacherEntity.getIcon());
            up.setFee(teacherEntity.getFee());
            up.setDuration(teacherEntity.getDuration());
            teacherRepo.save(up);
            return up;
        }
        return null;
    }
}
