package com.ufcg.si1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/#!")
public class LoginController {
	@RequestMapping(method = RequestMethod.GET, path = "/login/")
	public String login() {
		return "app/components/login/login-view";
	}
	@RequestMapping(method = RequestMethod.GET, path = "/")
	public String home() {
//		return "app/components/search-product/search-product-view.html";
		return "index";
	}
}
