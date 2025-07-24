package com.ictak.Teacher.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Teacher")
@NoArgsConstructor
@AllArgsConstructor
public class TeacherEntity {

    @Id
    @GeneratedValue
    @Column(name="CourseId")
    private int CourseId;

    @Column(name = "CourseTitle")
    private String CourseTitle;

    @Column(name = "Icon")
    private String Icon;

    @Column(name = "Description")
    private String Description;

    @Column(name = "Duration")
    private float Duration;

    @Column(name = "Fee")
    private int Fee;

    public int getCourseId() {
        return CourseId;
    }

    public void setCourseId(int courseId) {
        CourseId = courseId;
    }

    public String getCourseTitle() {
        return CourseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        CourseTitle = courseTitle;
    }

    public String getIcon() {
        return Icon;
    }

    public void setIcon(String icon) {
        Icon = icon;
    }

    public String getDesc() {
        return Description;
    }

    public void setDesc(String desc) {
        Description = desc;
    }

    public float getDuration() {
        return Duration;
    }

    public void setDuration(float duration) {
        Duration = duration;
    }

    public int getFee() {
        return Fee;
    }

    public void setFee(int fee) {
        Fee = fee;
    }
}
