package com.ufcg.si1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/api")
public class LoginController {
	@RequestMapping(method = RequestMethod.GET, path = "/login/")
	public String login() {
		return "../webapp/index";
	}
}
