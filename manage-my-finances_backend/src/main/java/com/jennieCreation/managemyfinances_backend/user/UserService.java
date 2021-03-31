package com.jennieCreation.managemyfinances_backend.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserService {

	private static List<User> users = new ArrayList<>();
	private static long idCounter = 0;

	public List<User> findAll() {
		return users;
	}
	
	public User save(User user) {
		if(user.getId()==-1 || user.getId()==0) {
			user.setId(++idCounter);
			users.add(user);
		} else {
			deleteById(user.getId());
			users.add(user);
		}
		return user;
	}

	public User deleteById(long id) {
		User user = findById(id);

		if (user == null)
			return null;

		if (users.remove(user)) {
			return user;
		}

		return null;
	}

	public User findById(long id) {
		for (User user : users) {
			if (user.getId() == id) {
				return user;
			}
		}
		return null;
	}
}