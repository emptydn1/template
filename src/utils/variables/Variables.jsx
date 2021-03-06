// :root, [data-theme="default"] {
//     // main
//     @include defineColorHSL(--color-primary-darker, 228, 74%, 41%);
//     @include defineColorHSL(--color-primary-dark, 228, 74%, 51%);
//     @include defineColorHSL(--color-primary, 228, 74%, 61%);
//     @include defineColorHSL(--color-primary-light, 228, 74%, 71%);
//     @include defineColorHSL(--color-primary-lighter, 228, 74%, 81%);

//     @include defineColorHSL(--color-accent-darker, 355, 90%, 41%);
//     @include defineColorHSL(--color-accent-dark, 355, 90%, 51%);
//     @include defineColorHSL(--color-accent, 355, 90%, 61%);
//     @include defineColorHSL(--color-accent-light, 355, 90%, 71%);
//     @include defineColorHSL(--color-accent-lighter, 355, 90%, 81%);

//     @include defineColorHSL(--color-black, 240, 8%, 12%);
//     @include defineColorHSL(--color-black-light, 240, 8%, 22%);
//     @include defineColorHSL(--color-black-lighter, 240, 8%, 32%);
//     @include defineColorHSL(--color-white, 0, 0%, 100%);
//     @include defineColorHSL(--color-white-dark, 0, 0%, 90%);
//     @include defineColorHSL(--color-white-darker, 0, 0%, 80%);

//     // feedback
//     @include defineColorHSL(--color-warning-darker, 46, 100%, 41%);
//     @include defineColorHSL(--color-warning-dark, 46, 100%, 51%);
//     @include defineColorHSL(--color-warning, 46, 100%, 61%);
//     @include defineColorHSL(--color-warning-light, 46, 100%, 71%);
//     @include defineColorHSL(--color-warning-lighter, 46, 100%, 81%);

//     @include defineColorHSL(--color-success-darker, 94, 48%, 36%);
//     @include defineColorHSL(--color-success-dark, 94, 48%, 46%);
//     @include defineColorHSL(--color-success, 94, 48%, 56%);
//     @include defineColorHSL(--color-success-light, 94, 48%, 66%);
//     @include defineColorHSL(--color-success-lighter, 94, 48%, 76%);

//     @include defineColorHSL(--color-error-darker, 355, 90%, 41%);
//     @include defineColorHSL(--color-error-dark, 355, 90%, 51%);
//     @include defineColorHSL(--color-error, 355, 90%, 61%);
//     @include defineColorHSL(--color-error-light, 355, 90%, 71%);
//     @include defineColorHSL(--color-error-lighter, 355, 90%, 81%);

//     // color contrasts
//     @include defineColorHSL(--color-bg, 0, 0%, 100%);
//     @include defineColorHSL(--color-contrast-lower, 0, 0%, 95%);
//     @include defineColorHSL(--color-contrast-low, 240, 1%, 83%);
//     @include defineColorHSL(--color-contrast-medium, 240, 1%, 48%);
//     @include defineColorHSL(--color-contrast-high, 240, 4%, 20%);
//     @include defineColorHSL(--color-contrast-higher, 240, 8%, 12%);
//   }

//   [data-theme] {
//     background-color: var(--color-bg);
//     color: var(--color-contrast-high);
//   }

//   @supports(--css: variables) {
//     [data-theme="dark"] {
//       // main
//       @include defineColorHSL(--color-primary-darker, 338, 83%, 43%);
//       @include defineColorHSL(--color-primary-dark, 338, 83%, 53%);
//       @include defineColorHSL(--color-primary, 338, 83%, 63%);
//       @include defineColorHSL(--color-primary-light, 338, 83%, 73%);
//       @include defineColorHSL(--color-primary-lighter, 338, 83%, 83%);

//       @include defineColorHSL(--color-accent-darker, 355, 90%, 41%);
//       @include defineColorHSL(--color-accent-dark, 355, 90%, 51%);
//       @include defineColorHSL(--color-accent, 355, 90%, 61%);
//       @include defineColorHSL(--color-accent-light, 355, 90%, 71%);
//       @include defineColorHSL(--color-accent-lighter, 355, 90%, 81%);

//       @include defineColorHSL(--color-black, 240, 8%, 12%);
//       @include defineColorHSL(--color-black-light, 240, 8%, 22%);
//       @include defineColorHSL(--color-black-lighter, 240, 8%, 32%);
//       @include defineColorHSL(--color-white, 0, 0%, 100%);
//       @include defineColorHSL(--color-white-dark, 0, 0%, 90%);
//       @include defineColorHSL(--color-white-darker, 0, 0%, 80%);

//       // feedback
//       @include defineColorHSL(--color-warning-darker, 46, 100%, 41%);
//       @include defineColorHSL(--color-warning-dark, 46, 100%, 51%);
//       @include defineColorHSL(--color-warning, 46, 100%, 61%);
//       @include defineColorHSL(--color-warning-light, 46, 100%, 71%);
//       @include defineColorHSL(--color-warning-lighter, 46, 100%, 81%);

//       @include defineColorHSL(--color-success-darker, 94, 48%, 36%);
//       @include defineColorHSL(--color-success-dark, 94, 48%, 46%);
//       @include defineColorHSL(--color-success, 94, 48%, 56%);
//       @include defineColorHSL(--color-success-light, 94, 48%, 66%);
//       @include defineColorHSL(--color-success-lighter, 94, 48%, 76%);

//       @include defineColorHSL(--color-error-darker, 355, 90%, 41%);
//       @include defineColorHSL(--color-error-dark, 355, 90%, 51%);
//       @include defineColorHSL(--color-error, 355, 90%, 61%);
//       @include defineColorHSL(--color-error-light, 355, 90%, 71%);
//       @include defineColorHSL(--color-error-lighter, 355, 90%, 81%);

//       // color contrasts
//       @include defineColorHSL(--color-bg, 240, 8%, 12%);
//       @include defineColorHSL(--color-contrast-lower, 240, 6%, 15%);
//       @include defineColorHSL(--color-contrast-low, 252, 4%, 25%);
//       @include defineColorHSL(--color-contrast-medium, 240, 1%, 57%);
//       @include defineColorHSL(--color-contrast-high, 0, 0%, 89%);
//       @include defineColorHSL(--color-contrast-higher, 0, 0%, 100%);
//     }
//   }

// FONT
export const DEFAULT_FONT_SIZE = "1.6rem";

// GRID
export const GRID_WIDTH = "1140px";
export const GUTTER_V = "4rem";
export const GUTTER_V_SMALL = "6rem";
export const GUTTER_H = "6px";
