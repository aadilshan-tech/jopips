export function TradingChart() {
  return (
    <div className="relative rounded-2xl bg-[#1a2332] p-6 border border-white/10 shadow-2xl">
      {/* Chart Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">XAUUSD</span>
            <span className="text-emerald-400 text-sm">+2.34%</span>
          </div>
          <div className="text-2xl font-bold text-white mt-1">2,048.50</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">24H Volume</div>
          <div className="text-sm text-white font-semibold">$4.2B</div>
        </div>
      </div>

      {/* Chart Canvas - SVG representation */}
      <div className="relative h-64 bg-[#0f1620] rounded-lg overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="400" height="200" fill="url(#grid)" />
          
          {/* Gradient for area chart */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Area path */}
          <path
            d="M 0 120 L 20 110 L 40 115 L 60 100 L 80 95 L 100 105 L 120 90 L 140 85 L 160 95 L 180 80 L 200 70 L 220 75 L 240 65 L 260 60 L 280 70 L 300 55 L 320 50 L 340 45 L 360 40 L 380 35 L 400 30 L 400 200 L 0 200 Z"
            fill="url(#chartGradient)"
          />
          
          {/* Line path */}
          <path
            d="M 0 120 L 20 110 L 40 115 L 60 100 L 80 95 L 100 105 L 120 90 L 140 85 L 160 95 L 180 80 L 200 70 L 220 75 L 240 65 L 260 60 L 280 70 L 300 55 L 320 50 L 340 45 L 360 40 L 380 35 L 400 30"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          
          {/* Candlesticks overlay */}
          <g opacity="0.6">
            <line x1="50" y1="100" x2="50" y2="120" stroke="#10b981" strokeWidth="2"/>
            <line x1="100" y1="105" x2="100" y2="95" stroke="#10b981" strokeWidth="2"/>
            <line x1="150" y1="85" x2="150" y2="100" stroke="#ef4444" strokeWidth="2"/>
            <line x1="200" y1="70" x2="200" y2="85" stroke="#10b981" strokeWidth="2"/>
            <line x1="250" y1="60" x2="250" y2="70" stroke="#10b981" strokeWidth="2"/>
            <line x1="300" y1="55" x2="300" y2="75" stroke="#ef4444" strokeWidth="2"/>
            <line x1="350" y1="40" x2="350" y2="50" stroke="#10b981" strokeWidth="2"/>
          </g>
        </svg>

        {/* Signal marker */}
        <div className="absolute top-12 right-12 bg-emerald-500/20 border border-emerald-500 rounded-lg px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-emerald-400 font-semibold">BUY SIGNAL</span>
          </div>
          <div className="text-xs text-white mt-1">Entry: 2,045.20</div>
        </div>
      </div>

      {/* Chart Footer - Timeframe */}
      <div className="mt-4 flex gap-2">
        {['1H', '4H', '1D', '1W'].map((timeframe, index) => (
          <button
            key={timeframe}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              index === 2
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {timeframe}
          </button>
        ))}
      </div>
    </div>
  );
}
