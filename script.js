/**
 * This is my first JavaScript file.
 * This file includes instructions for animating elements.
 */

const animationElement = document.getElementById('animation');
const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');

const totalFrames = 7;                // Number of frames
const fps = 1;                      // Frames per second
const frameDuration = 1000 / fps;    // Duration per frame in milliseconds
const fadeDuration = 300; 

let currentFrame = 0;
let nextFrame = 1;
let showingFrame1 = true;
let path = "sprites/shrek_idle/shrek_"

function updateFrame() {
  /** Update the animation by-frame */

  //  Fade frame 2 in
  if (showingFrame1) {
    frame2.src = `sprites/shrek_idle/shrek_${nextFrame}.jpg`;
    frame2.style.opacity = 1;  // fade in next frame
    frame1.style.opacity = 0;  // fade out current frame
  }

  //  Fade frame 1 in
  else {
    frame1.src = `sprites/shrek_idle/shrek_${nextFrame}.jpg`;
    frame1.style.opacity = 1;
    frame2.style.opacity = 0;
  }

  //  Set the current and next frames
  currentFrame = nextFrame;
  nextFrame = (nextFrame + 1) % totalFrames;
  showingFrame1 = !showingFrame1;

    // setTimeout(() => {
    //   currentFrame = (currentFrame + 1) % totalFrames;
    //   animationElement.src = `sprites/shrek_idle/shrek_${currentFrame}.jpg`;
    //   animationElement.style.opacity = 1;
    // }, fadeDuration);
}

// Start animation loop
setInterval(updateFrame, frameDuration);
