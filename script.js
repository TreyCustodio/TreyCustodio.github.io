/**
 * This is my first JavaScript file.
 * Author - Trey Custodio
 */

/**
 * Animated Class that represents a glowing object
 */
class Animated {
  constructor(element, nFrames, fps) {
    //  Animation data
    this.nFrames = nFrames;
    this.fps = fps;
    this.frame = 0;
    this.animation_timer = 0.0;
    this.element = element


    //  RGB info
    this.r = 210;
    this.g = 222;
    this.b = 255;
    this.delta = 6;
    this.rgb_string = "rgb(0,0,0)";
    this.max = 255
    this.min = 50

    //  States
    this.brightening = false
    this.background_set = true
    this.update_r = true
    this.update_g = true
    this.update_b = true

  }

  set_rgb(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }

  set_background_color(rgb_string) {
    this.element.style.backgroundColor = rgb_string;
  }

  update(delta) {
    

    //  Increment animation timer
    this.animation_timer += delta;

    //  Update the animation once every 1/fps sezconds
    if (this.animation_timer >= 1/this.fps){
      

      //  Reset animation timer
      this.animation_timer = 0.0;
      
      if (!update_color) {
        if (!this.background_set) {
          //  Increment the frame
          this.frame++;
          this.frame %= this.nFrames;

          if (this.frame == 0){
            this.set_background_color("rgb(210, 222, 255)");
            this.background_set = true;
          }
        }
        return
      }

      //  Update the color
      if (this.brightening) {
        if (this.update_b) {
          this.b += this.delta;
          if (this.b >= this.max) {
            this.b = this.max;
            this.brightening = false;
          }
        }

        if (this.update_r) {
          this.r += this.delta;
          if (this.r >= this.max) {
            this.r = this.max;
            this.brightening = false;
          }
        }

        if (this.update_g) {
          this.g += this.delta;
          if (this.g >= this.max) {
            this.g = this.max;
            this.brightening = false;
          }
        }
      }

      else {
        if (this.update_b) {
          this.b -= this.delta;
          if (this.b <= this.min) {
            this.b = this.min;
            this.brightening = true;
          }
        }

        if (this.update_r) {
          this.r -= this.delta;
          if (this.r <= this.min) {
            this.r = this.min;
            this.brightening = true;
          }
        }

        if (this.update_g) {
          this.g -= this.delta;
          if (this.g <= this.min) {
            this.g = this.min;
            this.brightening = true;
          }
        }
      }
      
      //  Set the background color
      this.rgb_string = "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
      this.set_background_color(this.rgb_string)
    }
  }
}


  /**
 * Animation Elements
 */




/**
 * Scrolling elements
 */
let update_color = false
const beat_container = document.getElementById("beat_container")
const beat_section = document.getElementById('beat_page');
const socials_section = document.getElementById('socials_page');

const to_beat = document.getElementById('to_beat');
const to_socials = document.getElementById('to_socials');

const color = new Animated(beat_container, 64, 60);
// const audio = document.querySelector('audio');

const o2 = document.getElementById('02');
const o4 = document.getElementById('04');
const o5 = document.getElementById('05');
const o7 = document.getElementById('07');
const o12 = document.getElementById('12');





/**
 * Wait for the 'go-to' button to be clicked.
 * Here, 'event' refers to the event object provided by the browser during the event.
 */
to_beat.addEventListener("click", function(event) {
  scroll_to(beat_section);
});

to_socials.addEventListener("click", function(event) {
  scroll_to(socials_section);
});

/**
 * Audio event listeners
 */
o2.addEventListener("play", function(event) {
  update_color = true;
  color.brightening = false;
  color.update_r = false;
  color.update_g = false;
  color.update_b = true;
  color.min = 127;
  color.max = 147;
  color.delta = 2;

  color.set_rgb(216, 112, 147);
  color.set_background_color("rgb(216,112,147)");
});

o2.addEventListener("pause", function(event) {
  reset(216, 112, 147);
});

o4.addEventListener("play", function(event) {
  update_color = true;
  color.brightening = false;
  color.update_r = false;
  color.update_g = true;
  color.update_b = false;
  color.min = 180;
  color.max = 255;
  color.delta = 6;

  color.set_rgb(173, 255, 47);
  color.set_background_color("rgb(173, 255, 47)");
});

o4.addEventListener("pause", function(event) {
  reset(173, 255, 47);
});

o5.addEventListener("play", function(event) {
  update_color = true;
  color.brightening = false;
  color.update_r = false;
  color.update_g = true;
  color.update_b = false;
  color.min = 180;
  color.max = 255;
  color.delta = 6;

  color.set_rgb(0, 204, 2);
  color.set_background_color("rgb(0, 204, 2)");
});

o5.addEventListener("pause", function(event) {
  reset(0, 204, 2);
});

o7.addEventListener("play", function(event) {
  update_color = true;
  color.brightening = false;
  color.update_r = false;
  color.update_g = true;
  color.update_b = false;
  color.min = 180;
  color.max = 255;
  color.delta = 3;

  color.set_rgb(128, 206, 255);
  color.set_background_color("rgb(128, 206, 255)");
});

o7.addEventListener("pause", function(event) {
  reset(128, 206, 255);

});

o12.addEventListener("play", function(event) {
  update_color = true;
  color.brightening = false;
  color.update_r = true;
  color.update_b = false;
  color.update_g = false;
  color.min = 180;
  color.max = 255;
  color.delta = 6;

  color.set_rgb(215, 0, 0);
  color.set_background_color("rgb(215, 0, 0)");
});

o12.addEventListener("pause", function(event) {
  reset(210, 0, 0);
});

function reset(r, g, b) {
  update_color = false;
  color.update_r = false;
  color.update_b = false;
  color.update_g = false;
  color.background_set = false;
  color.frame = 0;

  color.set_rgb(r, g, b);
  rgb_string = "rgb(" + r + ", " + g + ", " + b + ")";
  color.set_background_color(rgb_string);
}

/**
 * Scroll to the desired section
 */
function scroll_to(element){
  element.scrollIntoView({ behavior: 'smooth' });
}



/**
 * Driver Code
 */
function main() {
  // Get the time in between the last frame and the current frame
  let last_time = performance.now();
  setInterval(() => {
    const now = performance.now();
    const deltaSec = (now - last_time) / 1000;
    last_time = now;
    color.update(deltaSec);
  }, 16);

  return
}

main()