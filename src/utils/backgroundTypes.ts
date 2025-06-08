export const backgroundVariants: Record<string, unknown> = {
  fire: {
    background: "radial-gradient(circle, rgba(255,0,0,0.3), transparent)",
    scale: [1, 1.2, 1],
  },
  water: {
    background: "radial-gradient(circle, rgba(0,191,255,0.3), transparent)",
    rotate: [0, 360],
  },
  grass: {
    background: "radial-gradient(circle, rgba(34,139,34,0.3), transparent)",
    y: [0, 20, 0],
  },
  electric: {
    background: "radial-gradient(circle, rgba(255,255,0,0.3), transparent)",
    scale: [1, 1.1, 1],
  },
};
