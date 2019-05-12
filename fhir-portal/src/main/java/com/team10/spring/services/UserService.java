package com.team10.spring.services;

import com.team10.spring.dto.ForgotPasswordForm;
import com.team10.spring.dto.ResetPasswordForm;
import com.team10.spring.entities.User;
import com.team10.spring.dto.SignupForm;
import com.team10.spring.dto.UserEditForm;
import com.team10.spring.dto.UserEditEmailForm;
import com.team10.spring.dto.UserEditPasswordForm;
import org.springframework.validation.BindingResult;

public interface UserService {
	
	public abstract void signup(SignupForm signupForm, boolean skip);

	public abstract void verify(String verificationCode);

	public abstract void forgotPassword(ForgotPasswordForm forgotPasswordForm);

	public abstract void resetPassword(String forgotPasswordCode,
                                       ResetPasswordForm resetPasswordForm, BindingResult result);

	public abstract User findOne(long userId);

	public abstract void update(long userId, UserEditForm userEditForm);

	public abstract void updatePassword(long userId, UserEditPasswordForm userEditPasswordForm);

	public abstract void updateEmail(long userId, UserEditEmailForm userEditEmailForm);

}
