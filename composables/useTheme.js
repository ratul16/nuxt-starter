// composables/useTheme.js

import { useDark, useToggle, usePreferredDark } from '@vueuse/core';

export const useTheme = () => {
  // Automatically detects the user's OS-level preference for dark mode
  // const preferredDark = usePreferredDark();

  // useDark manages the dark mode state
  const isDark = useDark({
    storageKey: 'theme',        // Key for localStorage to store the theme preference
    valueDark: 'p-dark',        // Class applied when dark mode is active
    valueLight: '',             // Class applied when light mode is active
  });

  // isDark.value = preferredDark

  // Toggle function to switch between dark and light mode
  const toggleTheme = useToggle(isDark);

  return {
    isDark,
    toggleTheme,
  };
};
