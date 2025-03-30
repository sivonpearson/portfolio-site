// function pickRGB(color1: Color, color2: Color, weight: number) {
//   const w2 = weight;
//   const w1 = 1 - w2;

//   const rgb = [
//     Math.round(color1[0] * w1 + color2[0] * w2),
//     Math.round(color1[1] * w1 + color2[1] * w2),
//     Math.round(color1[2] * w1 + color2[2] * w2),
//   ];

//   return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
// }

import { Color } from "./Color";

function pickFromGradient(gradient: [number, Color][], current_pos: number) {
  // Find the two closest gradient stops
  for (let i = 0; i < gradient.length - 1; i++) {
    const [stop1, color1] = gradient[i];
    const [stop2, color2] = gradient[i + 1];

    if (current_pos < stop2) {
      // Linear interpolation (simplified for single-color transition)
      const ratio = (current_pos - stop1) / (stop2 - stop1);
      return color1.mix(color2, 1 - ratio);
    }
  }

  return gradient[gradient.length - 1][1]; // Fallback
}

export const setColorTheme = (
  gradient: [number, Color][],
  scrollPercent: number
) => {
  let chosenColor = pickFromGradient(gradient, scrollPercent);

  // set main color
  // document.documentElement.style.setProperty("--primary", chosenColor.hex());

  // let mutedColor = chosenColor;
  // mutedColor.adjustBrightness(0.5);

  // document.documentElement.style.setProperty("--muted", mutedColor.hex());
};
