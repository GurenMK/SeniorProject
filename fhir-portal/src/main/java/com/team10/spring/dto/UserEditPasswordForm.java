package com.team10.spring.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.team10.spring.entities.User;

public class UserEditPasswordForm {

	@NotNull
    @Size(min = 1, max = User.PASSWORD_MAX, message="{nameSizeError}")
	private String password_new = "";
    @NotNull
    @Size(min = 1, max = User.PASSWORD_MAX, message="{nameSizeError}")
    private String password_verify = "";
	

	public String getPassword_new() {
		return password_new;
	}

	public void setPassword_new(String password_new) {
		this.password_new = password_new;
	}

	public String getPassword_verify() {
		return password_verify;
	}

	public void setPassword_verify(String password_verify) {
		this.password_verify = password_verify;
	}
}
