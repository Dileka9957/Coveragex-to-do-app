-----Backend Springboot Application with PostgreSQL Database-----

1 Create postgreSQL database -> db name - coveragex-taskapp

2 Open the backend project with an IDE

3 Install node modules -> npm install

4 Build the project ( For Gradle ) -> ./gradlew clean bootJar

5 Build the image -> docker build -t springboot-app .

6 Run the container -> docker run -p 8080:8080 springboot-app


-----Frontend React Application-----

1 Open the frontend project with an IDE

2 Install node modules -> npm install

3 Build the project -> npm run build

4 Build the image -> docker build -t vite-react-app .

5 Run the container -> docker run -p 5173:80 vite-react-app
 
* The application should then be accessible at http://localhost:5173 in your browser.
