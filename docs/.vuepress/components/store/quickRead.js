import store from "store2";

const QUICK_READ_LEVELS = {
  LOW: 'Picture Book',
  MEDIUM: 'Normal',
  HIGH: 'Expert',
};

const QUICK_READ_STORAGE_KEY = 'HEALERHUB/QUICK_READ_LEVEL';

export default (function QuickRead() {
  const state = {
    currentQuickReadLevel: store.get(QUICK_READ_STORAGE_KEY) || QUICK_READ_LEVELS.MEDIUM,
  };

  return {
    getState: () => state,
    isReadableWithLevels: (minimumLevel, level) => {
      const levels = Object.entries(QUICK_READ_LEVELS).map(([key, val]) => val.toLowerCase());

      return levels.indexOf(minimumLevel.toLowerCase()) <= levels.indexOf(level.toLowerCase());
    },
    isReadableWithLevel: function(level) { 
      return this.isReadableWithLevels(level, state.currentQuickReadLevel);
    },
    getQuickReadLevel: () => {
      return state.currentQuickReadLevel;
    },
    setQuickReadLevel: level => {
      state.currentQuickReadLevel = level;
      store.set(QUICK_READ_STORAGE_KEY, level, true);
    },
    getQuickReadLevels: () =>
      Object.entries(QUICK_READ_LEVELS).map(([key, val]) => val),
  };
})();
