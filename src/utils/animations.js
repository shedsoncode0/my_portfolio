import { gsap } from 'gsap';
import { Bounce, Power3, Power4 } from 'gsap/all';
import state from '../store';

const tl = gsap.timeline();

const boomboxBounce = (boombox) => {
  gsap.fromTo(
    boombox.position,
    {
      y: 10,
      duration: 1,
    },
    {
      y: 0,
      duration: 3,
      ease: Bounce.easeOut,
    }
  );
};

const boomboxZoomAnimation = (boombox, camera) => {
  tl.to(camera.position, {
    y: 0,
    duration: 3,
  });
  tl.to(boombox.position, {
    y: -0.5,
    duration: 2,
    ease: Power3.easeIn,
  });
  tl.to(boombox.position, {
    x: 0.8,
    duration: 2,
    ease: Power4.easeInOut,
  });
  tl.to(camera.position, {
    z: -0.2,
    duration: 4,
    ease: Power3.easeInOut,
  });
};

const boomboxCameraBounceZoomAnimation = (camera) => {
  tl.to(camera.position, {
    // Timeline 1
    z: 10,
    duration: 2,
    ease: Power3.easeIn,
  });
  tl.to(camera.position, {
    // Timeline 2
    z: 6,
    duration: 1,
    ease: Power3.easeInOut,
  });
  tl.to(camera.position, {
    // Timeline 3
    y: 3,
    x: 3,
    duration: 2,
    ease: Power3.easeInOut,
    onComplete: () => {
      state.startBoomboxAnimation = true;
    },
  });
};

export {
  boomboxBounce,
  boomboxZoomAnimation,
  boomboxCameraBounceZoomAnimation,
};
