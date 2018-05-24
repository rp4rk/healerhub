const QUICK_READ_LEVELS = {
  LOW: 'Picture Book',
  MEDIUM: 'Normal',
  HIGH: 'Expert',
};

export default (function QuickRead() {
  const state = {
    currentQuickReadLevel: QUICK_READ_LEVELS.MEDIUM,
  };

  return {
    getQuickReadLevel: () => {
      return state.currentQuickReadLevel;
    },
    setQuickReadLevel: level => {
      state.currentQuickReadLevel = level;
    },
    getQuickReadLevels: () =>
      Object.entries(QUICK_READ_LEVELS).map(([key, val]) => val),
  };
})();
