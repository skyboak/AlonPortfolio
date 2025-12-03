import Player from "../logic/player";

// Define fighter type image paths from public folder
const LuchadorImg = '/assets/gauntletMatch/assets/Luchador.png';
const DirtyPlayerImg = '/assets/gauntletMatch/assets/DirtyPlayer.png';
const PowerhouseImg = '/assets/gauntletMatch/assets/Powerhouse.png';
const ShowmanImg = '/assets/gauntletMatch/assets/Showman.png';
const TechnicianImg = '/assets/gauntletMatch/assets/Technician.png';
const BrawlerImg = '/assets/gauntletMatch/assets/Brawler.png';

// Each preset wrestler specializes in a single style (value 8); attach corresponding image.
// Note: Player constructor signature -> (name, luchador, dirty, powerhouse, showman, technician, brawler, health=100, stamina=100, momentum=0, img=null)
const wrestlers = [
    new Player("Luchador Legend", 8, 0, 0, 0, 0, 0, 100, 100, 0, LuchadorImg),      // Max Luchador
    new Player("Dirty Master", 0, 8, 0, 0, 0, 0, 100, 100, 0, DirtyPlayerImg),       // Max Dirty
    new Player("Powerhouse Pro", 0, 0, 8, 0, 0, 0, 100, 100, 0, PowerhouseImg),      // Max Powerhouse
    new Player("Showman Star", 0, 0, 0, 8, 0, 0, 100, 100, 0, ShowmanImg),           // Max Showman
    new Player("Technician Ace", 0, 0, 0, 0, 8, 0, 100, 100, 0, TechnicianImg),      // Max Technician
    new Player("Brawler Beast", 0, 0, 0, 0, 0, 8, 100, 100, 0, BrawlerImg),          // Max Brawler
];

export default wrestlers;