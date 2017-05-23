package com.study.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/posts")
	@ResponseBody
	public ModelAndView posts() {
		ModelAndView mv = new ModelAndView("index");
		mv.addObject("test", "test");
		return mv;
	}
	
	@RequestMapping("/about")
	@ResponseBody
	public ModelAndView about() {
		ModelAndView mv = new ModelAndView("index");
		mv.addObject("test", "test");
		return mv;
	}
}
