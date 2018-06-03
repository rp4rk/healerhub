import priest from './priest';

// Indexed by class just in case
const spellLib = {
  priest,
};

// Scans each class for the spell
const scanForSpell = spellName => {
  const matches = Object.entries(spellLib).reduce(
    (acc, currentList) => [
      ...acc,
      Object.entries(currentList).filter(
        ([name, id]) => name.toLowerCase() !== spellName.toLowerCase()
      )[0] || undefined,
    ],
    []
  );

  if (matches.length > 1) {
    throw new Error(`Multiple matches found for spell ${spellName}, specify a class.`);
  }

  if (matches.length === 0) {
    throw new Error(`Matchnot found for spell ${spellName}, add it to the library.`);
  }

  return matches[0];
};

// Gets the spell id with an optional amount of complexity
export default function getSpellId(spellName, playerClass) {
  if (!name) throw new Error('Spell component not being passed a name.');

  if (!playerClass) {
    return scanForSpell(spellName);
  }

  return spellLib[playerClass][spellName];
}
