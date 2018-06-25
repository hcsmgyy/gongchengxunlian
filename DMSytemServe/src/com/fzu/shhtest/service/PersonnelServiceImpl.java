package com.fzu.shhtest.service;

import java.util.List;

import com.fzu.shhtest.dao.PersonnelDao;
import com.fzu.shhtest.domain.Personnel;

public class PersonnelServiceImpl implements PersonnelService {
	private PersonnelDao personnelDao;

	public void setPersonnelDao(PersonnelDao personnelDao) {
		this.personnelDao = personnelDao;
	}

	
	public int createPersonnel(Personnel personnel) {
		// TODO Auto-generated method stub
		return personnelDao.createPersonnel(personnel);
	}

	
	public boolean deletePersonnelByName(String sname) {
		// TODO Auto-generated method stub
		return personnelDao.deletePersonnelByName(sname);
	}

	public boolean deletePersonnelByID(String id) {
		// TODO Auto-generated method stub
		return personnelDao.deletePersonnelByID(id);
	}

	
	public boolean updatePersonnel(Personnel personnel) {
		// TODO Auto-generated method stub
		return personnelDao.updatePersonnel(personnel);
	}

	
	public List getAllPersonnel() {
		// TODO Auto-generated method stub
		return personnelDao.getAllPersonnel();
	}

	
	public List getAllPersonnelHql() {
		// TODO Auto-generated method stub
		return personnelDao.getAllPersonnelHql();
	}

	
	public Personnel getPersonnelByName(String pname) {
		// TODO Auto-generated method stub
		return personnelDao.getPersonnelByName(pname);
	}
	
	
	public List getPersonnelByNameHql(String pname) {
		// TODO Auto-generated method stub
		return personnelDao.getPersonnelByNameHql(pname);
	}

	
	public Personnel getPersonnelByID(String ID) {
		// TODO Auto-generated method stub
		return personnelDao.getPersonnelByID(ID);
	}
	
	
	public List getPersonnelByIDHql(String ID) {
		// TODO Auto-generated method stub
		return personnelDao.getPersonnelByIDHql(ID);
	}

}
