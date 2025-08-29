import { IconBrandGithub, IconBrandTelegram, IconBrandLinkedin } from "@tabler/icons-react";
const Info = {
    name: "Bogdan Veremienko",
    stack: ["Software Engineer", "Java Developer", "Full Stack Developer", "Freelancer"],
    bio: "Hi there! I'm a motivated and detail-oriented Java enthusiast with hands-on experience working on small-scale projects and a solid foundation in Java programming through dedicated coursework. I'm on a mission to transform my passion for coding into impactful solutions that make a difference."
}



const ProjectInfo = [
    {
        title: "JobPortal",
        desc: "JobPortal is a comprehensive full-stack job board platform that bridges the gap between job seekers and employers through an intuitive, feature-rich interface built with Spring Boot backend and React frontend. The application's core utility lies in streamlining the entire recruitment process, offering job seekers an easy way to discover and apply for opportunities while providing employers with powerful tools to post listings and manage applications efficiently. One of its most innovative features is the AI-powered job description generator.",
        image: "/Portfolio/JobPortal.png",
        live: true,
        technologies: ["Spring Boot", "MongoDB", "Kafka", "Redis", "Docker", "Spring AI"],
        link: "http://www.jobportal.blog",
        github: "https://github.com/novitskiiy/jobportal"
    },
    {
        title: "BookHub",
        desc: "BookHub is a modern, RESTful API for an online bookstore built with Spring Boot. It provides comprehensive functionality for managing books, users, orders, and shopping carts with secure authentication and role-based access control.",
        image: "/Portfolio/BookHub.png",
        live: true,
        technologies: ["Spring Framework", "MySQL", "JWT", "JPA", "Liquibase"],
        link: "https://obminbook.netlify.app",
        github: "https://github.com/novitskiiy/BookHub"
    }
]


const SkillInfo = [
    {
        title: "Backend",
        skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "Spring Cloud", "Hibernate", "RESTful APIs"]
    },
    {
        title: "Databases & Caching",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Liquibase"]
    },
    {
        title: "DevOps & Cloud",
        skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "GitLab CI-CD", "Maven", "Gradle", "Nginx"]
    },
    {
        title: "Testing & Messaging",
        skills: ["JUnit 5", "Mockito", "SonarQube", "Apache Kafka", "RabbitMQ"]
    },
    {
        title: "Frontend",
        skills: ["React JS", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
    },
    {
        title: "Tools & Others",
        skills: ["Git", "IntelliJ IDEA", "VS Code", "Postman", "Swagger"]
    }
]
const socialLinks = [
    { link: "https://github.com/novitskiiy", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/bogdanveremienko/", icon: IconBrandLinkedin },
    { link: "https://t.me/novitskiiy", icon: IconBrandTelegram }
];


const ExperienceInfo = [
    {
        role: "Intern Java",
        company: "SoftServe",
        date: "Feb 2024 - Apr 2025",
        desc: "During my internship at SoftServe, I contributed to the development of the GreenCity project — a social platform aimed at promoting eco-friendly habits. Working in an Agile team of 8, I actively participated in sprint planning, daily stand-ups, and code reviews, which gave me practical experience in collaborative software development and problem-solving. On the technical side, I gained strong hands-on experience with Java and Spring Framework (Spring Boot, Spring Data JPA), developing and maintaining RESTful APIs. I worked with PostgreSQL for database design and management, using Liquibase for version control of database changes. To ensure high code quality, I applied Checkstyle and SonarQube for continuous inspection and refactoring. I also wrote unit tests with JUnit and Mockito, which improved the stability and reliability of the codebase. This experience not only strengthened my technical skills but also taught me the importance of writing clean, maintainable, and testable code, following SOLID principles and best practices. I developed a solid understanding of version control with Git and gained confidence in working within a professional development workflow.",
        skills: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "JUnit", "RESTful APIs", "PostgreSQL", "MySQL", "Git", "Maven", "Liquibase", "OOP", "SOLID principles", "Agile"]
    }
]
const Slugs = [
    "java",
    "spring",
    "springboot",
    "hibernate",
    "postgresql",
    "mysql",
    "mongodb",
    "redis",
    "elasticsearch",
    "docker",
    "kubernetes",
    "amazonaws",
    "jenkins",
    "gitlab",
    "maven",
    "gradle",
    "nginx",
    "apachekafka",
    "rabbitmq",
    "junit",
    "mockito",
    "sonarqube",
    "react",
    "typescript",
    "javascript",
    "html5",
    "css3",
    "tailwindcss",
    "git",
    "intellijidea",
    "visualstudiocode",
    "postman",
    "swagger",
    "jira",
    "confluence"
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };