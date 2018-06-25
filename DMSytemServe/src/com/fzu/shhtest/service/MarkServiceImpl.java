package com.fzu.shhtest.service;

import java.util.List;

import com.fzu.shhtest.dao.CallTheRollDao;
import com.fzu.shhtest.dao.MarkDao;
import com.fzu.shhtest.domain.Mark;

public class MarkServiceImpl implements MarkService {
	private MarkDao markDao;

	public void setMarkDao(MarkDao markDao) {
		this.markDao = markDao;
	}

	
	public int createMark(Mark mark) {
		// TODO Auto-generated method stub
		return markDao.createMark(mark);
	}

	
	public boolean deleteMarkByName(String cname) {
		// TODO Auto-generated method stub
		return markDao.deleteMarkByName(cname);
	}

	
	public boolean updateMark(Mark mark) {
		// TODO Auto-generated method stub
		return markDao.updateMark(mark);
	}

	
	public List getAllMark() {
		// TODO Auto-generated method stub
		return markDao.getAllMark();
	}

	
	public List getMarkByName(String cname) {
		// TODO Auto-generated method stub
		return markDao.getMarkByName(cname);
	}

	
	public List getMarkByID(String ID) {
		// TODO Auto-generated method stub
		return markDao.getMarkByID(ID);
	}

	
	public Mark getMarkByNameAndID(String cname, String ID) {
		// TODO Auto-generated method stub
		return markDao.getMarkByNameAndID(cname, ID);
	}
}
