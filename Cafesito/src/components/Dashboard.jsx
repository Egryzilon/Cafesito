import Pokedex from '../pages/Pokedex';
import MapBox from './Map'; // FIXED: default import instead of named import

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* SIDEBAR */}
      <div className="w-64 bg-[#5D2E2E] p-6 border-r border-red-500">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        
        <nav>
          <ul className="space-y-3">
            <li>
              <a href="#" className="block p-3 hover:bg-[#7D4E4E] rounded-lg transition-colors">
                <span className="font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 hover:bg-[#7D4E4E] rounded-lg transition-colors">
                <span className="font-medium">Pokemones</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 hover:bg-[#7D4E4E] rounded-lg transition-colors">
                <span className="font-medium">Mapa</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 hover:bg-[#7D4E4E] rounded-lg transition-colors">
                <span className="font-medium">Configuración</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-8 left-6">
          <a href="#" className="text-red-400 hover:text-red-300 transition-colors font-medium">
            Salir
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">
        {/* WELCOME HEADER */}
        <div className="border-2 border-red-500 rounded-lg p-4 mb-8 bg-gray-800/50">
          <h1 className="text-2xl font-bold text-center text-red-400">
            Bienvenido Entrenador Mario
          </h1>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="border-2 border-white rounded-xl p-6 bg-gray-800/50 text-center">
            <div className="text-5xl font-bold text-red-400 mb-2">30</div>
            <div className="text-lg font-medium">capturados</div>
          </div>
          <div className="border-2 border-white rounded-xl p-6 bg-gray-800/50 text-center">
            <div className="text-5xl font-bold text-red-400 mb-2">10</div>
            <div className="text-lg font-medium">liberados</div>
          </div>
          <div className="border-2 border-white rounded-xl p-6 bg-gray-800/50 text-center">
            <div className="text-5xl font-bold text-red-400 mb-2">5</div>
            <div className="text-lg font-medium">categorías</div>
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="grid grid-cols-2 gap-6 h-[60vh]">
          {/* POKEMON SEARCHER - USING ACTUAL COMPONENT */}
          <div className="border-4 border-green-500 rounded-xl p-6 bg-gray-800/50 flex flex-col">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Buscador de Pokemon</h2>
            <div className="flex-1 overflow-auto">
              <Pokedex />
            </div>
          </div>
          
          {/* MAP - USING ACTUAL COMPONENT */}
          <div className="border-4 border-blue-500 rounded-xl p-6 bg-gray-800/50 flex flex-col">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Mapa</h2>
            <div className="flex-1">
              <MapBox />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Dashboard;