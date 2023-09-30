export type animationVariants = {
  inView: {};
  notInView: {};
};

export type animationType =
  | "fadeInBottom"
  | "fadeInTop"
  | "fadeInLeft"
  | "fadeInRight";

export function getAnimationVariants(
  animationType: animationType,
): animationVariants {
  switch (animationType) {
    case "fadeInBottom":
      return fadeInBottom();
    case "fadeInTop":
      return fadeInTop();
    case "fadeInLeft":
      return fadeInLeft();
    case "fadeInRight":
      return fadeInRight();
  }
}

function fadeInBottom(): animationVariants {
  return {
    inView: {
      opacity: 1,
      y: 0,
    },
    notInView: {
      opacity: 0,
      y: 100,
    },
  };
}

function fadeInTop(): animationVariants {
  return {
    inView: {
      opacity: 1,
      y: 0,
    },
    notInView: {
      opacity: 0,
      y: -100,
    },
  };
}

function fadeInLeft(): animationVariants {
  return {
    inView: {
      opacity: 1,
      x: 0,
    },
    notInView: {
      opacity: 0,
      x: -100,
    },
  };
}

function fadeInRight(): animationVariants {
  return {
    inView: {
      opacity: 1,
      x: 0,
    },
    notInView: {
      opacity: 0,
      x: 100,
    },
  };
}
