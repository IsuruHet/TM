const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded text-center space-y-4">
        <h2 className="text-2xl font-bold">Welcome to Task Manager</h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
