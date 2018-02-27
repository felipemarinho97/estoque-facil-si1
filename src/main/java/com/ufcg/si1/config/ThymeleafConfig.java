/*package com.ufcg.si1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

@Configuration
public class ThymeleafConfig {
	*//**
	 * <p>emailTemplateResolver.</p>
	 *
	 * @return a {@link org.thymeleaf.templateresolver.ClassLoaderTemplateResolver} object.
	 *//*
	@Bean
	public ClassLoaderTemplateResolver templateResolver() {
		ClassLoaderTemplateResolver tres = new ClassLoaderTemplateResolver();
		tres.setPrefix("file:src/main/resources/");
		tres.setSuffix(".html");
		tres.setCacheable(false);
		tres.setTemplateMode("HTML5");
		tres.setCharacterEncoding("UTF-8");
		tres.setOrder(0);
		

		return tres;
	}
}
*/