package com.team10.spring.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.team10.spring.entities.User;

public class UserEditEmailForm {

	@NotNull
    @Size(min = 1, max = User.EMAIL_MAX, message="{nameSizeError}")
    @Pattern(regexp = User.EMAIL_PATTERN)
	private String email_new = "";
    @NotNull
    @Size(min = 1, max = User.EMAIL_MAX, message="{nameSizeError}")
    @Pattern(regexp = User.EMAIL_PATTERN)
    private String email_confirm = "";

	public String getEmail_new() {
		return email_new;
	}

	public void setEmail_new(String email_new) {
		this.email_new = email_new;
	}

	public String getEmail_confirm() {
		return email_confirm;
	}

	public void setEmail_confirm(String email_confirm) {
		this.email_confirm = email_confirm;
	}
}
