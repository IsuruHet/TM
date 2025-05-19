import HeroImage from "../assets/images/hero-task.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center gap-2">
      <img src={HeroImage} alt="hero-task" width={264} height={264} />
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Task Manager
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your smart companion for tracking tasks, organizing projects, and
          boosting productivity — all in one place.
        </p>

        <Link
          to="/login"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default Home;
