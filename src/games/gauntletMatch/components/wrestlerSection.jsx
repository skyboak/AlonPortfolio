import FighterCard from './fighterCard';
import MoveCard from './moveCard';
import Bar from './bar';

function WrestlerSection({ fighter }) {
  if (!fighter) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center sm:items-stretch gap-2 sm:gap-3 w-full">
      <div className="flex justify-center sm:justify-start">
        <FighterCard fighter={fighter} />
      </div>
      <div className="w-full max-w-xs sm:max-w-sm">
        <Bar label="Health" value={fighter.health ?? 100} max={fighter.getMaxHealth ? fighter.getMaxHealth() : 100} color="red" />
        <Bar label="Stamina" value={fighter.stamina ?? 100} max={fighter.getMaxStamina ? fighter.getMaxStamina() : 100} color="yellow" />
        <Bar label="Momentum" value={fighter.momentum ?? 0} max={100} color="blue" />
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
        {(fighter.hand || []).map((move, idx) => (
          <MoveCard key={`move-${idx}`} move={move} />
        ))}
      </div>
    </div>
  );
}

export default WrestlerSection;
