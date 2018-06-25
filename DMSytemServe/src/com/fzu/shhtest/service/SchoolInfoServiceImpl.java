package com.fzu.shhtest.service;

import com.fzu.shhtest.dao.SchoolInfoDao;
import com.fzu.shhtest.domain.SchoolInfo;

public class SchoolInfoServiceImpl implements SchoolInfoService {
	private SchoolInfoDao schoolInfoDao;	
	public void setSchoolInfoDao(SchoolInfoDao schoolInfoDao) {
		this.schoolInfoDao = schoolInfoDao;
	}

	
	public int createSchoolInfo(SchoolInfo schoolInfo) {
		// TODO Auto-generated method stub
		return schoolInfoDao.createSchoolInfo(schoolInfo);
	}

	
	public boolean deleteSchoolInfo() {
		// TODO Auto-generated method stub
		return schoolInfoDao.deleteSchoolInfo();
	}

	
	public boolean updateSchoolInfo(SchoolInfo schoolInfo) {
		// TODO Auto-generated method stub
		return schoolInfoDao.updateSchoolInfo(schoolInfo);
	}

	
	public SchoolInfo getSchoolInfo() {
		// TODO Auto-generated method stub
		return schoolInfoDao.getSchoolInfo();
	}
}
