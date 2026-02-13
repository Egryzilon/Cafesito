import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.trim().length > 2) {
      localStorage.setItem('trainer_current', user);
      navigate('/pokedex');
    } else {
      alert('El nombre del entrenador debe tener al menos 3 letras');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400">
        <div className="bg-red-500 h-3"></div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-yellow-400 rounded-full p-3 mb-4">
              <svg 
                className="w-12 h-12 text-red-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Sistema de Gestión de Pokémons
            </h1>
            <p className="text-gray-600 text-lg">
              Identifícate, Entrenador
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label 
                htmlFor="trainer-name" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre del Entrenador
              </label>
              <input
                id="trainer-name"
                type="text"
                placeholder="Tu nombre (ejemplo: Ash)"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400 text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Comenzar a capturar pokémons
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              ¡Tu aventura Pokémon está por comenzar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;