package com.fzu.shhtest.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.fzu.shhtest.dao.CallTheRollDao;
import com.fzu.shhtest.dao.CourseDao;
import com.fzu.shhtest.domain.CallTheRoll;

public class CallTheRollServiceImpl implements CallTheRollService {
	private CallTheRollDao callTheRollDao;

	public void setCallTheRollDao(CallTheRollDao callTheRollDao) {
		this.callTheRollDao = callTheRollDao;
	}

	public int createCallTheRoll(CallTheRoll callTheRoll) {
		// TODO Auto-generated method stub
		return callTheRollDao.createCallTheRoll(callTheRoll);
	}

	
	public boolean deleteCallTheRollByID(String ID) {
		// TODO Auto-generated method stub
		return callTheRollDao.deleteCallTheRollByID(ID);
	}

	
	public boolean updateCallTheRoll(CallTheRoll callTheRoll) {
		// TODO Auto-generated method stub
		return callTheRollDao.updateCallTheRoll(callTheRoll);
	}

	
	public List getAllCallTheRoll() {
		// TODO Auto-generated method stub
		return callTheRollDao.getAllCallTheRoll();
	}

	
	public List getCallTheRollByDate(Date date) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByDate(date);
	}

	
	public List getCallTheRollBetweenDate(Date date1, Date date2) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollBetweenDate(date1, date2);
	}

	
	public List getCallTheRollByID(String ID) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByID(ID);
	}

	
	public List getCallTheRollByCoursename(String cname) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByCoursename(cname);
	}

	
	public List getCallTheRollByIDAndCoursename(String id,String cname) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByIDAndCoursename(id,cname);
	}
	
	public long getAutoidOfCallTheRollByIDAndCoursenameAndDate(String id,String cname,Date calldate) {
		// TODO Auto-generated method stub
		return callTheRollDao.getAutoidOfCallTheRollByIDAndCoursenameAndDate(id,cname,calldate);
	}
	
	public List getCallTheRollByIDAndCoursenameHql(String id,String cname) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByIDAndCoursenameHql(id,cname);
	}
	
	
	
	
	public List getAllCallTheRollHql() {
		// TODO Auto-generated method stub
		return callTheRollDao.getAllCallTheRollHql();
	}

	
	public List getCallTheRollByDateHql(String date) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByDateHql(date);
	}

	
	public List getCallTheRollBetweenDateHql(String date1, String date2) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollBetweenDateHql(date1, date2);
	}

	
	public List getCallTheRollByIDHql(String ID) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByIDHql(ID);
	}

	
	public List getCallTheRollByCoursenameHql(String cname) {
		// TODO Auto-generated method stub
		return callTheRollDao.getCallTheRollByCoursenameHql(cname);
	}
	
	
	public int countCallTheRoll(int callstate,String coursename,String ID){
		return callTheRollDao.countCallTheRoll(callstate,coursename,ID);
	}
	
	
	public Map<String, Map<String, Object>>  countAllCallTheRoll(String coursename,String ID){
		return callTheRollDao.countAllCallTheRoll(coursename,ID);
	}	
	

	
	public List getCallTheRollBetweenDateAndCoursename(String date1,String date2,String coursename){
		return callTheRollDao.getCallTheRollBetweenDateAndCoursename(date1, date2, coursename);
	}
}
