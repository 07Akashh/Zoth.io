/** Curves and budgets from the installed Emil Kowalski animation skills. */
export const motionEaseOut = [0.23, 1, 0.32, 1] as const;
export const panelEnterSeconds = 0.2;
export const panelExitSeconds = 0.15;

export function menuPanelMotion(keyboard: boolean, reduced: boolean) {
  const still = keyboard || reduced;
  return {
    closed: (instant: boolean) => ({
      opacity: 0,
      transform: still ? "none" : "translate3d(0,-4px,0) scale(0.97)",
      transition: {
        duration: instant ? 0 : 0.15,
        ease: motionEaseOut,
        staggerChildren: still ? 0 : 0.02,
        staggerDirection: -1,
      },
    }),
    open: {
      opacity: 1,
      transform: still ? "none" : "translate3d(0,0,0) scale(1)",
      transition: {
        duration: keyboard ? 0 : 0.18,
        ease: motionEaseOut,
        staggerChildren: still ? 0 : 0.035,
      },
    },
  };
}

export function menuItemMotion(keyboard: boolean, reduced: boolean) {
  const still = keyboard || reduced;
  return {
    closed: (instant: boolean) => ({
      opacity: 0,
      transform: still ? "none" : "translate3d(0,-4px,0)",
      transition: { duration: instant ? 0 : 0.09, ease: motionEaseOut },
    }),
    open: {
      opacity: 1,
      transform: still ? "none" : "translate3d(0,0,0)",
      transition: { duration: keyboard ? 0 : 0.14, ease: motionEaseOut },
    },
  };
}
