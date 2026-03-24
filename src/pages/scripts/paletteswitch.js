const PALETTES = ['orangegreen', 'blackwhite', 'pinkblack']; //Update this to add more palettes

const getActivePalette = () => PALETTES.find(p => localStorage.getItem(p) === 'active') ?? null;

const enablePalette = (name) => {
    document.body.classList.add(name);
    localStorage.setItem(name, 'active');
};

const disablePalette = (name) => {
    document.body.classList.remove(name);
    localStorage.removeItem(name);
};

const disableAll = () => PALETTES.forEach(disablePalette);

// Restore active palette on load
const activePalette = getActivePalette();
if (activePalette) enablePalette(activePalette);

// Cycle to the next palette on click
document.getElementById('theme-switch').addEventListener('click', () => {
    const active = getActivePalette();
    const currentIndex = PALETTES.indexOf(active);
    const nextIndex = (currentIndex + 1) % (PALETTES.length + 1); // +1 for the "none" state

    disableAll();

    if (nextIndex < PALETTES.length) {
        enablePalette(PALETTES[nextIndex]);
    }
    // If nextIndex === PALETTES.length, we've wrapped to "no palette active" which is the coffee color scheme
});