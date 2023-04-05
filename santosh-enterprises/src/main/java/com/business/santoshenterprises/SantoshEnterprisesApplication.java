package com.business.santoshenterprises;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SantoshEnterprisesApplication {

	private static final Logger logger = LoggerFactory.getLogger(SantoshEnterprisesApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SantoshEnterprisesApplication.class, args);

		logger.warn("Warn Logger implementation");
		logger.info("Info Logger implementation");
		logger.error("Error Logger implementation");
		logger.debug("Debug Logger implementation");
		logger.trace("Trace Logger implementation");
	}

}
