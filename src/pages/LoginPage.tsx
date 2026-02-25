import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="bg-dark-bg min-h-screen text-white flex items-center justify-center">
      <div className="bg-card-bg border border-border-color rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login to MotoElite</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-brand-red"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-brand-red"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-brand-blue hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
