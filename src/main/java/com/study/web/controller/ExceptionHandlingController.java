package com.study.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/error")
@Controller
public class ExceptionHandlingController {

	@ExceptionHandler(Exception.class)
	public ModelAndView error() {
		ModelAndView mv = new ModelAndView("index");
		
		return mv;
	}
}
