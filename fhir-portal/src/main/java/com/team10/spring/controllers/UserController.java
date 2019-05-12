package com.team10.spring.controllers;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.team10.spring.dto.UserEditForm;
import com.team10.spring.dto.UserEditPasswordForm;
import com.team10.spring.dto.UserEditEmailForm;
import com.team10.spring.entities.User;
import com.team10.spring.services.UserService;
import com.team10.spring.util.MyUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/users")
public class UserController {
	
	private UserService userService;
	
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping("/{verificationCode}/verify")
	public String verify(@PathVariable("verificationCode") String verificationCode,
			RedirectAttributes redirectAttributes,
			HttpServletRequest request) throws ServletException {
		
		userService.verify(verificationCode);
		MyUtil.flash(redirectAttributes, "success", "verificationSuccess");
		request.logout();
		
		return "redirect:/";

	}
	
    @RequestMapping(value = "/{userId}")
    public String getById(@PathVariable("userId") long userId, Model model) {
    	model.addAttribute(userService.findOne(userId));
	  	return "user";
    }
    
    @RequestMapping(value = "/{userId}/edit")
    public String edit(@PathVariable("userId") long userId, Model model) {
    	
		User user = userService.findOne(userId);
		UserEditForm form = new UserEditForm();
		form.setName(user.getName());
		form.setRoles(user.getRoles());
    	model.addAttribute(form);
    	
		return "user-edit";

    }
    
	@RequestMapping(value = "/{userId}/edit", method = RequestMethod.POST)
	public String edit(@PathVariable("userId") long userId,
			@ModelAttribute("userEditForm") @Valid UserEditForm userEditForm,
			BindingResult result, RedirectAttributes redirectAttributes,
			HttpServletRequest request) throws ServletException {

		if (result.hasErrors())
			return "user-edit";

		userService.update(userId, userEditForm);
		MyUtil.flash(redirectAttributes, "success", "editSuccessful");
		request.logout();

		return "redirect:/";
	}

	@RequestMapping(value = "/{userId}/change-password")
    public String changePassword(@PathVariable("userId") long userId, Model model) {
    	
		UserEditPasswordForm form = new UserEditPasswordForm();
		model.addAttribute(form);
    	
		return "user-change-password";
    }
    
	@RequestMapping(value = "/{userId}/change-password", method = RequestMethod.POST)
	public String changePassword(@PathVariable("userId") long userId,
			@ModelAttribute("userEditPasswordForm") @Valid UserEditPasswordForm userEditPasswordForm,
			BindingResult result, RedirectAttributes redirectAttributes,
			HttpServletRequest request) throws ServletException {

		if (result.hasErrors())
			return "user-change-password";
		
		if (userEditPasswordForm.getPassword_new().equals(userEditPasswordForm.getPassword_verify()))	{
			userService.updatePassword(userId, userEditPasswordForm);
			MyUtil.flash(redirectAttributes, "success", "editSuccessful");
			request.logout();
		}
		
		else {
			MyUtil.flash(redirectAttributes, "danger", "editPasswordMatch");
		}

		return "redirect:/";
	}

	@RequestMapping(value = "/{userId}/change-email")
    public String editEmail(@PathVariable("userId") long userId, Model model) {

		UserEditEmailForm form = new UserEditEmailForm();
		model.addAttribute(form);
    	
		return "user-change-email";

    }
    
	@RequestMapping(value = "/{userId}/change-email", method = RequestMethod.POST)
	public String editEmail(@PathVariable("userId") long userId,
			@ModelAttribute("userEditEmailForm") @Valid UserEditEmailForm userEditEmailForm,
			BindingResult result, RedirectAttributes redirectAttributes,
			HttpServletRequest request) throws ServletException {
				System.out.println("2nd edit: "+userEditEmailForm.getEmail_new());
				System.out.println("2nd edit: "+userEditEmailForm.getEmail_confirm());
				System.out.println("result: "+result.toString());
		if (result.hasErrors()) 
			return "user-change-email";

		if (userEditEmailForm.getEmail_new().equals(userEditEmailForm.getEmail_confirm()))	{
			userService.updateEmail(userId, userEditEmailForm);
			MyUtil.flash(redirectAttributes, "success", "editSuccessful");
			request.logout();
		} 
		else {
			MyUtil.flash(redirectAttributes, "danger", "editEmailMatch");
		}

		return "redirect:/";
	}
	
}
