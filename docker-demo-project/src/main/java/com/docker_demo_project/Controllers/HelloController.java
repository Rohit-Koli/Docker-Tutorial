package com.docker_demo_project.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/hello")
	public String helloDocker() {
		return "Welcome.jsp";
	}
}
