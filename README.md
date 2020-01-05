### manage-my-finances
A customized app that will improve the management of my husband's finances

This app is still "in progress".

All rights reserved ©2019 manage-my-finances.net.   

All rights reserved ©2019 jennieCreation.

Several Udemy courses were utilized to assist me in the creation of this app. Here is the list of those courses:
1) Go Java Full Stack with Spring Boot and React (an in28minutes course)
2) React Tutorial and Projects Course
3) Learn AWS - Deploy Java Spring Boot to AWS Elastic Beanstalk (an in28minutes course)

Content (within quotations defining what each dependency has to offer my app) explaining the dependencies added via Spring Initializer 
was cited directly from their website:  https://start.spring.io/.

### React.js (frontend) runs on localhost:4200
**The frontend includes the following:**
1) Bootstrap 4.1.0 formatting of the header & footer
2) A **welcome** for the user who likes space & the like.
3) A table of **accounts & their current balances** {autopopulation is "in progress"}
3) A **budget calculator** that will assist the user in budgeting his expenses.
4) A **transactions** section that will allow the user to:
   a. enter a new transaction
   b. toggle recent transactions (past 30 days) or all transactions {in progress}
   c. click on a transaction card to view the notes & have access to updating or deleting the transaction {in progress}
5) **API** to handle the account data services {transactions & reports services in progress}
4 **Authentication** for the login, where other tabs besides 'login' are not available.  Even if someone were to know what the url for a certain tab, they would be directed to the login.
6) A reports form that allows the user to choose what he would like to have included within the report, which will produce a report with the option to print. {in progress}


### JAVA backend runs on localhost:8181
**The backend makes use of the following (those that are not listed within the dependencies added during app creation):**

a) various annotations

b) JWT(aka JSON web token; resource for assistance: https://jwt.io/) to secure access to TALEND API. This began by adding this dependency within the pox.xml file:
            
                <dependency>
                      <groupId>org.springframework.boot</groupId>
                      <artifactId>spring-boot-starter-security</artifactId>
                    </dependency>
 
This dependency generates a login once a user types in any url that relates to this app. Without the username & password to access localhost:8181 for this app's-related content, no one can actually access any of this app's content. This is also known as 'form-based authentication' by Spring security.

c) JPA

d) Hibernate

e) Spring Boot

f) Beans

Java (backend) was initialized via Spring Initializer with Spring Boot snapshot. Metadata: group(package) is com.jennieCreation.manage_my_finances; the artifact(class name) is manage_my_finances. The dependencies added were:

1) Spring Web Starter. . .the description of which states, "Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container".

2) Spring Boot DevTools. . .the description of which states, "Provides fast application restarts, LiveReload, and configurations for enhanced development experience".

3) Spring Data JPA. . .the description of which states, "Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate".

4) H2 Database. . .the description of which states, "Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports embedded and server modes, as well as browser-based console application".


This app currently reads/writes to a H2 database; mySQL is desired in the near future.




