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
  duration: number,
  delay: number
): animationVariants {
  switch (animationType) {
    case "fadeInBottom":
      return fadeInBottom(duration, delay);
    case "fadeInTop":
      return fadeInTop(duration, delay);
    case "fadeInLeft":
      return fadeInLeft(duration, delay);
    case "fadeInRight":
      return fadeInRight(duration, delay);
  }
}

function fadeInBottom(duration: number, delay: number): animationVariants {
  return {
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
    notInView: {
      opacity: 0,
      y: 100,
    },
  };
}

function fadeInTop(duration: number, delay: number): animationVariants {
  return {
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
    notInView: {
      opacity: 0,
      y: -100,
    },
  };
}

function fadeInLeft(duration: number, delay: number): animationVariants {
  return {
    inView: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
    notInView: {
      opacity: 0,
      x: -100,
    },
  };
}

function fadeInRight(duration: number, delay: number): animationVariants {
  return {
    inView: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
    notInView: {
      opacity: 0,
      x: 100,
    },
  };
}

function fadeIn(duration: number, delay: number): animationVariants {
  return {
    inView: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
      },
    },
    notInView: {
      opacity: 0,
    },
  };
}
