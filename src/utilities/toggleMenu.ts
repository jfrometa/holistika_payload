// types/menu.types.ts
interface MenuOptions {
  menuSelector?: string;
  activeClass?: string;
  onOpen?: () => void;
  onClose?: () => void;
  animationDuration?: number;
}

// utils/menu.ts
/**
 * Configuration object for menu functionality
 */
const DEFAULT_OPTIONS: Required<MenuOptions> = {
  menuSelector: '.popup-mobile-menu',
  activeClass: 'active',
  onOpen: () => undefined,
  onClose: () => undefined,
  animationDuration: 300
};

/**
 * Opens the mobile menu with error handling and callback support
 * @param options - Optional configuration for menu behavior
 * @returns boolean indicating success of operation
 */
export const openMenu = (options: MenuOptions = {}): boolean => {
  try {
    const { menuSelector, activeClass, onOpen, animationDuration } = {
      ...DEFAULT_OPTIONS,
      ...options
    };

    const menuElement = document.querySelector<HTMLElement>(menuSelector);

    if (!menuElement) {
      console.warn(`Menu element not found with selector: ${menuSelector}`);
      return false;
    }

    // Prevent multiple clicks during animation
    if (menuElement.classList.contains(activeClass)) {
      return true; // Menu is already open
    }

    // Add active class
    menuElement.classList.add(activeClass);

    // Ensure menu is visible for screen readers
    menuElement.setAttribute('aria-hidden', 'false');
    menuElement.setAttribute('aria-expanded', 'true');

    // Optional: Add transition class if needed
    menuElement.style.transition = `all ${animationDuration}ms ease-in-out`;

    // Execute callback after animation
    setTimeout(() => {
      try {
        onOpen?.();
      } catch (callbackError) {
        console.error('Error in onOpen callback:', callbackError);
      }
    }, animationDuration);

    return true;
  } catch (error) {
    console.error('Error opening menu:', error);
    return false;
  }
};

/**
 * Closes the mobile menu with error handling and callback support
 * @param options - Optional configuration for menu behavior
 * @returns boolean indicating success of operation
 */
export const closeMenu = (options: MenuOptions = {}): boolean => {
  try {
    const { menuSelector, activeClass, onClose, animationDuration } = {
      ...DEFAULT_OPTIONS,
      ...options
    };

    const menuElement = document.querySelector<HTMLElement>(menuSelector);

    if (!menuElement) {
      console.warn(`Menu element not found with selector: ${menuSelector}`);
      return false;
    }

    // Prevent multiple clicks during animation
    if (!menuElement.classList.contains(activeClass)) {
      return true; // Menu is already closed
    }

    // Remove active class
    menuElement.classList.remove(activeClass);

    // Update accessibility attributes
    menuElement.setAttribute('aria-hidden', 'true');
    menuElement.setAttribute('aria-expanded', 'false');

    // Execute callback after animation
    setTimeout(() => {
      try {
        onClose?.();
      } catch (callbackError) {
        console.error('Error in onClose callback:', callbackError);
      }
    }, animationDuration);

    return true;
  } catch (error) {
    console.error('Error closing menu:', error);
    return false;
  }
};

/**
 * Toggles the menu state
 * @param options - Optional configuration for menu behavior
 * @returns boolean indicating success of operation
 */
export const toggleMenu = (options: MenuOptions = {}): boolean => {
  const { menuSelector, activeClass } = {
    ...DEFAULT_OPTIONS,
    ...options
  };

  const menuElement = document.querySelector<HTMLElement>(menuSelector);

  if (!menuElement) {
    console.warn(`Menu element not found with selector: ${menuSelector}`);
    return false;
  }

  return menuElement.classList.contains(activeClass) 
    ? closeMenu(options)
    : openMenu(options);
};

// Example usage:
/*
// Basic usage
const openButton = document.querySelector('.menu-open-button');
const closeButton = document.querySelector('.menu-close-button');

openButton?.addEventListener('click', () => openMenu());
closeButton?.addEventListener('click', () => closeMenu());

// Advanced usage with options
const menuOptions: MenuOptions = {
  menuSelector: '.custom-menu',
  activeClass: 'menu-active',
  onOpen: () => {
    console.log('Menu opened');
    document.body.style.overflow = 'hidden';
  },
  onClose: () => {
    console.log('Menu closed');
    document.body.style.overflow = 'auto';
  },
  animationDuration: 500
};

// Toggle button
const toggleButton = document.querySelector('.menu-toggle');
toggleButton?.addEventListener('click', () => toggleMenu(menuOptions));
*/