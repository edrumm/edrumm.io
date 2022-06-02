package com.edrumm.edrumm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EdrummApplication {

	@GetMapping("/")
	public String displayTest() {
		return "edrumm.io - Website coming 2022!";
	}

	public static void main(String[] args) {
		SpringApplication.run(EdrummApplication.class, args);
	}
}
