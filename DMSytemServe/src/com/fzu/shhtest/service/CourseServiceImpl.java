package com.fzu.shhtest.service;

import java.util.List;

import com.fzu.shhtest.dao.CourseDao;
import com.fzu.shhtest.dao.PersonnelDao;
import com.fzu.shhtest.domain.Course;
import com.fzu.shhtest.domain.Personnel;

public class CourseServiceImpl implements CourseService {
	private CourseDao courseDao;

	public void setCourseDao(CourseDao courseDao) {
		this.courseDao = courseDao;
	}

	
	public int createCourse(Course course) {
		// TODO Auto-generated method stub
		return courseDao.createCourse(course);
	}

	
	public boolean deleteCourseByName(String cname) {
		// TODO Auto-generated method stub
		return courseDao.deleteCourseByName(cname);
	}

	
	public boolean updateCourse(Course course) {
		// TODO Auto-generated method stub
		return courseDao.updateCourse(course);
	}

	
	public List getAllCourse() {
		// TODO Auto-generated method stub
		return courseDao.getAllCourse();
	}

	
	public Course getCourseByName(String cname) {
		// TODO Auto-generated method stub
		return courseDao.getCourseByName(cname);
	}
	
	

	
	public List getAllCourseHql() {
		// TODO Auto-generated method stub
		return courseDao.getAllCourseHql();
	}

	
	public List getCourseByNameHql(String cname) {
		// TODO Auto-generated method stub
		return courseDao.getCourseByNameHql(cname);
	}
	
	
	public List getCourseByIDHql(String id) {
		// TODO Auto-generated method stub
		return courseDao.getCourseByIDHql(id);
	}	
}
