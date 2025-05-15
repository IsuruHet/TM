import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";
import api from "../api";

const Navbar = () => {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await api.post(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, null, {
        withCredentials: true,
      });
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Task Manager</h1>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <span className="hidden sm:inline">{user.displayName}</span>
            <img
              src={user.photos?.[0]?.value}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </>
        )}

        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/tasks" className="hover:underline">
          Tasks
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
