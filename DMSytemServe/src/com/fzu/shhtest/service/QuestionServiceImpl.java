package com.fzu.shhtest.service;

import java.util.Date;
import java.util.List;

import com.fzu.shhtest.dao.QuestionDao;
import com.fzu.shhtest.domain.Question;

public class QuestionServiceImpl implements QuestionService {
	private QuestionDao questionDao;
	public void setQuestionDao(QuestionDao questionDao) {
		this.questionDao = questionDao;
	}

	
	public int createQuestion(Question question) {
		// TODO Auto-generated method stub
		return questionDao.createQuestion(question);
	}

	
	public boolean deleteQuestionByCourseName(String cname) {
		// TODO Auto-generated method stub
		return questionDao.deleteQuestionByCourseName(cname);
	}
	/*
	
	public boolean updateQuestionByCourseName(Question question) {
		// TODO Auto-generated method stub
		return questionDao.updateQuestionByCourseName(question);
	}
	*/
	
	public List getAllQuestion() {
		// TODO Auto-generated method stub
		return questionDao.getAllQuestion();
	}

	
	public List getQuestionByCourseName(String cname) {
		// TODO Auto-generated method stub
		return questionDao.getQuestionByCourseName(cname);
	}

	
	public List getQuestionByID(String ID) {
		// TODO Auto-generated method stub
		return questionDao.getQuestionByID(ID);
	}

	
	public List getQuestionByCoursenameAndID(String cname,String ID) {
		// TODO Auto-generated method stub
		return questionDao.getQuestionByCoursenameAndID(cname,ID);
	}

	
	public List getQuestionByCoursenameAndIDAndDate(String cname,String ID,Date date) {
		// TODO Auto-generated method stub
		return questionDao.getQuestionByCoursenameAndIDAndDate(cname,ID,date);
	}

	

	
	public boolean deleteQuestionByCoursenameAndID(String cname, String ID) {
		// TODO Auto-generated method stub
		return questionDao.deleteQuestionByCoursenameAndID(cname, ID);
	}

	
	public boolean deleteQuestionByCoursenameAndIDAndDate(String cname,
			String ID, Date date) {
		// TODO Auto-generated method stub
		return questionDao.deleteQuestionByCoursenameAndIDAndDate(cname, ID, date);
	}
	
	/*
	
	public boolean deleteQuestionByID(String ID) {
		// TODO Auto-generated method stub
		return questionDao.deleteQuestionByID(ID);
	}
	
	public boolean updateQuestionByID(String ID) {
		// TODO Auto-generated method stub
		return questionDao.updateQuestionByID(ID);
	}

	
	public boolean updateQuestionByCoursenameAndID(String cname, String ID) {
		// TODO Auto-generated method stub
		return questionDao.updateQuestionByCoursenameAndID(cname, ID);
	}
	*/
	
	
	public boolean updateQuestionByCoursenameAndIDAndDate(String cname,
			String ID, Date date) {
		// TODO Auto-generated method stub
		return questionDao.updateQuestionByCoursenameAndIDAndDate(cname, ID, date);
	}
}
