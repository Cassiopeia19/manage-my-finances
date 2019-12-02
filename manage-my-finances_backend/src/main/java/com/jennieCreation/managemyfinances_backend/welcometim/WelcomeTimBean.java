package com.jennieCreation.managemyfinances_backend.welcometim;

public class WelcomeTimBean {

	private String message;

	public WelcomeTimBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("WelcomeTimBean [message=%s]", message);
	}

}
