import { create } from 'zustand';

interface ThemeStore {
  dark: boolean;
  toggle: () => void;
  set: (dark: boolean) => void;
}

const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyTheme = (dark: boolean) => {
  const root = document.documentElement;
  if (dark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};

export const useThemeStore = create<ThemeStore>((set) => {
  const initial = getInitialTheme();
  applyTheme(initial);

  return {
    dark: initial,
    toggle: () =>
      set((state) => {
        const next = !state.dark;
        applyTheme(next);
        return { dark: next };
      }),
    set: (dark: boolean) => {
      applyTheme(dark);
      set({ dark });
    },
  };
});
