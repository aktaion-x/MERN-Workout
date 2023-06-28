import './About.css';

const About = () => {
  return (
    <div className="About">
      <div className="header">
        <h1>Welcome to WorkoutApp!</h1>
        <p>
          WorkoutApp is a full-stack web application designed to help users create and manage their workout routines effectively. Built using the MERN stack (MongoDB, Express, React, and Node.js), along with React Router for seamless navigation and JWT for secure user authentication, WorkoutApp
          provides a user-friendly interface for fitness enthusiasts to track their workouts with ease.
        </p>
      </div>
      <div className="features">
        <h2>Key Features: </h2>
        <ul>
          <li>
            Create Custom Workouts: With WorkoutApp, you have the flexibility to design your own workout routines. Specify a title for your workout, and add exercises along with their corresponding sets and reps. Whether you're into weightlifting, cardio, or a combination of both, WorkoutApp adapts
            to your fitness goals.
          </li>
          <li>Track Progress: Keep a record of your workout progress to monitor your performance over time. WorkoutApp allows you to view and update your completed sets and reps, making it easy to track your improvement and stay motivated on your fitness journey.</li>
          <li>
            Personalized Dashboard: Upon logging in, WorkoutApp provides a personalized dashboard that displays your recent workouts, allowing you to quickly access and modify them as needed. The intuitive interface ensures a seamless user experience, whether you're a beginner or an experienced
            fitness enthusiast.
          </li>
          <li>
            Secure User Authentication: WorkoutApp prioritizes the security and privacy of its users. By implementing JSON Web Tokens (JWT) for authentication, we ensure that only authorized individuals can access and modify their workout data. Your personal information is kept confidential, and you
            can focus on achieving your fitness goals without any worries.
          </li>
        </ul>
      </div>
      <div className="more">
        <p>
          WorkoutApp leverages the power of React to create dynamic and interactive user interfaces, while React Router enables smooth navigation between different pages within the application. The server-side functionality is built using Express and Node.js, providing a robust backend
          infrastructure to handle API requests and interact with the MongoDB database through Mongoose.
        </p>
        <p>
          Whether you're a fitness enthusiast looking to optimize your workouts or a web developer keen on exploring the MERN stack, WorkoutApp offers an immersive learning experience. Through this project, I aimed to strengthen my skills in building modern web applications while addressing
          real-world fitness tracking needs.
        </p>
        <p className="conclusion">
          I hope you find WorkoutApp engaging and useful for your fitness journey. Feel free to explore the application and get in touch with me if you have any questions or feedback. <span>Happy exercising!</span>
        </p>
      </div>
    </div>
  );
};

export default About;
