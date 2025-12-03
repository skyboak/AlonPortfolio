import  { FighterTypeMeta } from "../fighterTypes";

function MoveCard({ move }) {
    if (!move) {
        return (
            <div className="w-32 h-28 sm:w-40 sm:h-32 bg-gray-900 border-2 border-gray-600 rounded-lg p-2 sm:p-3 flex items-center justify-center">
                <span className="text-gray-500 text-xs sm:text-sm">No Move</span>
            </div>
        );
    }

    const meta = FighterTypeMeta[move.type] || { name: 'Unknown', badge: 'bg-gray-700 text-gray-200', border: 'border-gray-500' };

    return (
        <div className={`w-32 h-28 sm:w-40 sm:h-32 bg-gray-900 border-2 ${meta.border} rounded-lg p-2 sm:p-3 flex flex-col justify-between shadow-lg`}>            
            <div className="flex justify-between items-center mb-1 sm:mb-2">
                <span className="font-bold text-cyan-300 text-sm sm:text-base truncate" title={move.name}>{move.name}</span>
                <span className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold whitespace-nowrap ${meta.badge}`}>{meta.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 text-[10px] sm:text-xs text-gray-200">
                <div>
                    <span className="font-semibold">
                        {move.baseStaminaCost < 0 ? "Stamina Gain" : "Stamina"}
                    </span>
                    : {move.baseStaminaCost < 0 ? -move.baseStaminaCost : move.baseStaminaCost}
                </div>
                {move.baseDamage > 0 && (
                    <div>
                        <span className="font-semibold">Damage</span>: {move.baseDamage}
                    </div>
                )}
                <div>
                    <span className="font-semibold">Momentum</span>: {move.baseMomentum}
                </div>
                {move.baseHeal > 0 && (
                    <div>
                        <span className="font-semibold">Heal</span>: {move.baseHeal}
                    </div>
                )}
            </div>
        </div>
    );
} 
export default MoveCard;