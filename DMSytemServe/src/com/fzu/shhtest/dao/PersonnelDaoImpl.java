package com.fzu.shhtest.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.fzu.shhtest.domain.Personnel;
import com.sun.org.apache.regexp.internal.recompile;

public class PersonnelDaoImpl implements PersonnelDao {
	private SessionFactory sessionFactory;
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	private Session getSession() {
		if (sessionFactory == null)
			return null;
		return sessionFactory.getCurrentSession();
	}

	
	public int createPersonnel(Personnel personnel) {
		Session session = getSession();
		session.save(personnel);
		return 0;
	}

	
	public boolean deletePersonnelByName(String sname) {
		Personnel personnel = getPersonnelByID(sname);
		Session session = getSession();
		session.delete(personnel);
		return false;
	}
	
	
	public boolean deletePersonnelByID(String id) {
		Personnel personnel = getPersonnelByID(id);
		if(personnel != null){
			System.out.println("aaa");
			Session session = getSession();
			session.delete(personnel);
//			Query query = session.createQuery("delete from Personnel where ID=id");
			return true;
		}
		else {
			return false;
		}
	}

	
	public boolean updatePersonnel(Personnel personnel) {
		Session session = getSession();
		try {
			session.update(personnel);
		} catch (IllegalStateException e) {
			System.out.println(e.toString());
		}
		return false;
	}

	
	public List getAllPersonnel() {
		Session session = getSession();
		List list = session.createQuery("from Personnel").list();
		return list;
	}

	
	public Personnel getPersonnelByName(String pname) {
		Session session = getSession();
		Query query = session.createQuery("from Personnel where Pname=?");
		query.setString(0, pname);
		List<Personnel> list = (List<Personnel>) query.list();
		if (list.size() > 0)
			return list.get(0);
		else
			return null;
	}

	
	
	public List getPersonnelByNameHql(String pname) {
		Session session = getSession();
		String hqlString = "SELECT ID,Ppassword,Pname,dm.dname AS major,dr.dname AS role ,pclass FROM personnel p,ddmajor dm ,ddrole dr WHERE p.major=dm.major AND p.role=dr.role AND p.Pname=\'";
		hqlString = hqlString+pname+"\'";
		Query query = session.createSQLQuery(hqlString);
		List list = query.list();
		return list;
	}

	
	
	public Personnel getPersonnelByID(String ID) {
		Session session = getSession();
		Query query = session.createQuery("from Personnel where ID=?");
//		Query query = session.createQuery("SELECT ID,Ppassword,Pname,dm.dname AS major,dr.dname AS role ,pclass FROM personnel p,ddmajor dm ,ddrole dr WHERE p.major=dm.major AND p.role=dr.role AND p.ID = ?");
		query.setString(0, ID);
		List<Personnel> list = (List<Personnel>) query.list();
		if (list.size() > 0)
			return list.get(0);
		else
			return null;
	}
	
	
	
	public List getPersonnelByIDHql(String ID) {
		Session session = getSession();
		String hqlString = "SELECT ID,Ppassword,Pname,dm.dname AS major,dr.dname AS role ,pclass FROM personnel p,ddmajor dm ,ddrole dr WHERE p.major=dm.major AND p.role=dr.role AND ID=";
		hqlString = hqlString+ID;
		Query query = session.createSQLQuery(hqlString);
		System.out.println(query.list());
		List list = query.list();
		return list;
	}

	
	public List getAllPersonnelHql() {
		Session session = getSession();
		String hqlString = "SELECT ID,Ppassword,Pname,dm.dname AS major,dr.dname AS role ,pclass FROM personnel p,ddmajor dm ,ddrole dr WHERE p.major=dm.major AND p.role=dr.role;";
		Query query = session.createSQLQuery(hqlString);
		List list = query.list();
		return list;
	}
}
