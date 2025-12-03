import { useState } from 'react';

export const ClickCounterGame = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="rounded-lg border border-cyan-500/30 bg-slate-800/40 p-4 backdrop-blur-sm">
      <h3 className="mb-2 text-sm font-semibold text-cyan-300">
        Click Counter
      </h3>
      <p className="mb-4 text-xs text-slate-400">
        A tiny example game component placeholder.
      </p>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </div>
  );
};

export default ClickCounterGame;
