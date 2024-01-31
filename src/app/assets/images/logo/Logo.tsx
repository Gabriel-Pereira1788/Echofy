import React from 'react';

import {ClipPath, Defs, G, Path, Svg} from 'react-native-svg';

import {ImageCommonType} from '@components';

export function Logo({width, height, mode}: ImageCommonType) {
  if (mode === 'dark') {
    return (
      <Svg
        width={width ? width : '257'}
        height={height ? height : '121'}
        viewBox="0 0 192.75 90.749999"
        preserveAspectRatio="xMidYMid meet">
        <Defs>
          <G />
          <ClipPath id="85db9a56a7">
            <Path
              d="M 0.363281 15.144531 L 64.6875 15.144531 L 64.6875 62.261719 L 0.363281 62.261719 Z M 0.363281 15.144531 "
              clip-rule="nonzero"
            />
          </ClipPath>
          <ClipPath id="14380606cc">
            <Path
              d="M 30 18.734375 L 35 18.734375 L 35 48.652344 L 30 48.652344 Z M 30 18.734375 "
              clip-rule="nonzero"
            />
          </ClipPath>
          <ClipPath id="ecf1602118">
            <Path
              d="M 19.347656 29 L 24 29 L 24 39 L 19.347656 39 Z M 19.347656 29 "
              clip-rule="nonzero"
            />
          </ClipPath>
        </Defs>
        <G clip-path="url(#85db9a56a7)">
          <Path
            fill="#ffffff"
            d="M 62.855469 57.207031 C 62.855469 58.128906 62.09375 58.878906 61.117188 58.878906 L 32.652344 60.058594 L 4.140625 58.878906 C 3.207031 58.878906 2.445312 58.128906 2.445312 57.207031 L 2.445312 22.214844 C 2.445312 21.289062 3.207031 20.539062 4.140625 20.539062 L 5.386719 20.539062 L 5.386719 55.988281 C 5.457031 56.722656 6.035156 56.984375 6.480469 57.027344 C 6.574219 57.039062 16.007812 56.546875 23.332031 56.519531 C 29.316406 56.519531 32.515625 57.773438 32.648438 57.773438 C 32.785156 57.773438 35.984375 56.519531 42.160156 56.519531 C 49.292969 56.546875 58.726562 57.03125 58.820312 57.027344 C 59.511719 57.019531 59.894531 56.507812 59.914062 55.988281 L 59.914062 20.539062 L 61.160156 20.539062 C 62.09375 20.539062 62.855469 21.289062 62.855469 22.214844 Z M 29.882812 54.964844 C 28.277344 54.683594 26.050781 54.433594 23.132812 54.433594 C 19.144531 54.453125 14.484375 54.605469 11.078125 54.742188 C 14.429688 53.71875 19.179688 52.53125 23.183594 52.511719 C 26.285156 52.511719 28.476562 53.773438 29.882812 54.964844 Z M 7.46875 21.191406 C 9.753906 20.269531 17.71875 17.230469 23.121094 17.230469 C 28.386719 17.289062 30.917969 19.597656 31.609375 20.351562 L 31.609375 53.695312 C 29.933594 52.171875 27.140625 50.429688 23.128906 50.429688 C 17.386719 50.457031 10.421875 52.679688 7.46875 53.726562 Z M 54.230469 54.742188 C 50.800781 54.605469 46.074219 54.449219 41.96875 54.433594 C 39.167969 54.433594 37.007812 54.675781 35.433594 54.957031 C 36.84375 53.765625 39.046875 52.511719 42.164062 52.511719 C 46.144531 52.53125 50.882812 53.71875 54.230469 54.742188 Z M 33.691406 20.351562 C 34.390625 19.589844 36.941406 17.289062 42.320312 17.230469 C 47.601562 17.230469 55.546875 20.269531 57.832031 21.191406 L 57.832031 53.726562 C 54.875 52.679688 47.90625 50.457031 42.113281 50.429688 C 38.140625 50.429688 35.363281 52.167969 33.691406 53.691406 Z M 61.160156 18.457031 L 56.539062 18.457031 C 53.023438 17.15625 46.84375 15.148438 42.15625 15.148438 C 36.953125 15.207031 33.996094 17.230469 32.667969 18.457031 L 32.628906 18.457031 C 31.289062 17.234375 28.300781 15.207031 22.980469 15.148438 C 18.410156 15.148438 12.257812 17.15625 8.757812 18.457031 L 4.140625 18.457031 C 2.058594 18.457031 0.363281 20.144531 0.363281 22.214844 L 0.363281 57.207031 C 0.363281 59.277344 2.058594 60.960938 4.097656 60.960938 C 4.097656 60.960938 32.609375 62.140625 32.609375 62.140625 C 32.621094 62.140625 32.636719 62.140625 32.652344 62.140625 C 32.664062 62.140625 32.679688 62.140625 32.695312 62.140625 L 61.160156 60.960938 C 63.242188 60.960938 64.9375 59.277344 64.9375 57.207031 L 64.9375 22.214844 C 64.9375 20.140625 63.242188 18.457031 61.160156 18.457031 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </G>
        <G clip-path="url(#14380606cc)">
          <Path
            fill="#ffffff"
            d="M 32.640625 48.789062 C 31.570312 48.789062 30.703125 47.921875 30.703125 46.851562 L 30.703125 20.734375 C 30.703125 19.664062 31.570312 18.796875 32.640625 18.796875 C 33.714844 18.796875 34.578125 19.664062 34.578125 20.734375 L 34.578125 46.851562 C 34.578125 47.921875 33.714844 48.789062 32.640625 48.789062 Z M 32.640625 48.789062 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </G>
        <Path
          fill="#ffffff"
          d="M 38.332031 44.007812 C 37.257812 44.007812 36.394531 43.140625 36.394531 42.070312 L 36.394531 25.515625 C 36.394531 24.445312 37.257812 23.578125 38.332031 23.578125 C 39.402344 23.578125 40.269531 24.445312 40.269531 25.515625 L 40.269531 42.070312 C 40.269531 43.121094 39.402344 44.007812 38.332031 44.007812 Z M 38.332031 44.007812 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
        <Path
          fill="#ffffff"
          d="M 44.019531 38.523438 C 42.949219 38.523438 42.082031 37.65625 42.082031 36.585938 L 42.082031 31 C 42.082031 29.929688 42.949219 29.0625 44.019531 29.0625 C 45.089844 29.0625 45.957031 29.929688 45.957031 31 L 45.957031 36.605469 C 45.957031 37.65625 45.070312 38.523438 44.019531 38.523438 Z M 44.019531 38.523438 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
        <Path
          fill="#ffffff"
          d="M 26.972656 44.007812 C 25.902344 44.007812 25.035156 43.140625 25.035156 42.070312 L 25.035156 25.515625 C 25.035156 24.445312 25.902344 23.578125 26.972656 23.578125 C 28.046875 23.578125 28.910156 24.445312 28.910156 25.515625 L 28.910156 42.070312 C 28.890625 43.121094 28.023438 44.007812 26.972656 44.007812 Z M 26.972656 44.007812 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
        <G clip-path="url(#ecf1602118)">
          <Path
            fill="#ffffff"
            d="M 21.285156 38.523438 C 20.210938 38.523438 19.347656 37.65625 19.347656 36.585938 L 19.347656 30.980469 C 19.347656 29.90625 20.210938 29.042969 21.285156 29.042969 C 22.355469 29.042969 23.222656 29.90625 23.222656 30.980469 L 23.222656 36.585938 C 23.222656 37.65625 22.335938 38.523438 21.285156 38.523438 Z M 21.285156 38.523438 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </G>
        <G fill="#ffffff" fill-opacity="1">
          <G transform="translate(74.81372, 53.869382)">
            <G>
              <Path d="M 6.976562 -24.628906 L 17.890625 -24.628906 L 17.890625 -27.585938 L 3.152344 -27.585938 L 3.152344 0 L 17.890625 0 L 17.890625 -2.957031 L 6.976562 -2.957031 L 6.976562 -12.730469 L 17.101562 -12.730469 L 17.101562 -15.605469 L 6.976562 -15.605469 Z M 6.976562 -24.628906 " />
            </G>
          </G>
        </G>
        <G fill="#ffffff" fill-opacity="1">
          <G transform="translate(94.596033, 53.869382)">
            <G>
              <Path d="M 10.089844 0.277344 C 14.777344 0.277344 17.929688 -2.957031 17.929688 -7.761719 L 14.265625 -7.761719 C 14.265625 -4.570312 12.570312 -2.441406 10.089844 -2.441406 C 7.410156 -2.441406 5.636719 -5.515625 5.636719 -10.207031 C 5.636719 -14.503906 7.371094 -17.417969 10.050781 -17.417969 C 12.570312 -17.417969 14.265625 -15.410156 14.265625 -12.335938 L 17.929688 -12.335938 C 17.929688 -16.984375 14.777344 -20.097656 10.089844 -20.097656 C 5.203125 -20.097656 1.96875 -16.039062 1.96875 -9.96875 C 1.96875 -3.824219 5.203125 0.277344 10.089844 0.277344 Z M 10.089844 0.277344 " />
            </G>
          </G>
        </G>
        <G fill="#ffffff" fill-opacity="1">
          <G transform="translate(114.299531, 53.869382)">
            <G>
              <Path d="M 18.089844 0 L 18.089844 -14.148438 C 18.089844 -17.734375 15.804688 -20.097656 12.414062 -20.097656 C 9.8125 -20.097656 7.210938 -18.640625 6.503906 -16.867188 L 6.226562 -16.867188 L 6.226562 -28.375 L 2.5625 -28.375 L 2.5625 0 L 6.226562 0 L 6.226562 -15.328125 C 6.226562 -15.328125 7.921875 -17.417969 10.484375 -17.417969 C 12.847656 -17.417969 14.421875 -15.84375 14.421875 -13.4375 L 14.421875 0 Z M 18.089844 0 " />
            </G>
          </G>
        </G>
        <G fill="#ffffff" fill-opacity="1">
          <G transform="translate(134.633543, 53.869382)">
            <G>
              <Path d="M 9.96875 0.277344 C 14.777344 0.277344 18.011719 -4.175781 18.011719 -9.929688 C 18.011719 -15.644531 14.777344 -20.136719 9.96875 -20.136719 C 5.164062 -20.136719 1.96875 -15.683594 1.96875 -10.128906 C 1.96875 -3.785156 5.125 0.277344 9.96875 0.277344 Z M 9.96875 -2.441406 C 7.449219 -2.441406 5.636719 -5.320312 5.636719 -10.167969 C 5.636719 -14.109375 7.371094 -17.417969 9.96875 -17.417969 C 12.609375 -17.417969 14.34375 -14.070312 14.34375 -10.011719 C 14.34375 -5.832031 12.609375 -2.441406 9.96875 -2.441406 Z M 9.96875 -2.441406 " />
            </G>
          </G>
        </G>
        <G fill="#ffffff" fill-opacity="1">
          <G transform="translate(154.591405, 54.735243)">
            <G>
              <Path d="M 4.886719 -12.789062 L 6.425781 -12.789062 L 6.425781 -14.167969 L 4.199219 -14.167969 C 2.859375 -14.167969 1.992188 -13.34375 1.992188 -11.960938 L 1.992188 -9.835938 L 0.316406 -9.835938 L 0.316406 -8.453125 L 1.992188 -8.453125 L 1.992188 0 L 3.84375 0 L 3.84375 -8.453125 L 6.425781 -8.453125 L 6.425781 -9.835938 L 3.84375 -9.835938 L 3.84375 -11.546875 C 3.84375 -12.355469 4.199219 -12.789062 4.886719 -12.789062 Z M 4.886719 -12.789062 " />
            </G>
          </G>
        </G>
        <G fill="#ffffff" fill-opacity="1">
          <G transform="translate(161.489021, 54.735243)">
            <G>
              <Path d="M 8.691406 -9.972656 L 6.78125 -9.972656 L 4.613281 -1.4375 L 4.238281 -1.4375 L 2.128906 -9.972656 L 0.214844 -9.972656 L 2.976562 -0.175781 L 4.097656 -0.175781 L 3.804688 0.886719 C 3.429688 1.695312 2.070312 1.832031 1.0625 1.457031 L 1.0625 2.816406 C 2.148438 3.269531 4.789062 3.488281 5.457031 1.320312 Z M 8.691406 -9.972656 " />
            </G>
          </G>
        </G>
        <G fill="#f77a55" fill-opacity="1">
          <G transform="translate(169.430262, 55.648726)">
            <G>
              <Path d="M 3.480469 0.28125 C 4.867188 0.28125 6 -0.847656 6 -2.292969 C 6 -3.679688 4.867188 -4.8125 3.480469 -4.8125 C 2.039062 -4.8125 0.90625 -3.679688 0.90625 -2.292969 C 0.90625 -0.847656 2.039062 0.28125 3.480469 0.28125 Z M 3.480469 0.28125 " />
            </G>
          </G>
        </G>
      </Svg>
    );
  }
  return (
    <Svg
      width={width ? width : '257'}
      height={height ? height : '121'}
      viewBox="0 0 192.75 90.749999"
      preserveAspectRatio="xMidYMid meet">
      <Defs>
        <G />
        <ClipPath id="5b363c6408">
          <Path
            d="M 0.363281 15.144531 L 64.6875 15.144531 L 64.6875 62.261719 L 0.363281 62.261719 Z M 0.363281 15.144531 "
            clip-rule="nonzero"
          />
        </ClipPath>
        <ClipPath id="1382d1f489">
          <Path
            d="M 30 18.734375 L 35 18.734375 L 35 48.652344 L 30 48.652344 Z M 30 18.734375 "
            clip-rule="nonzero"
          />
        </ClipPath>
        <ClipPath id="892dbbbbaa">
          <Path
            d="M 19.347656 29 L 24 29 L 24 39 L 19.347656 39 Z M 19.347656 29 "
            clip-rule="nonzero"
          />
        </ClipPath>
      </Defs>
      <G clip-path="url(#5b363c6408)">
        <Path
          fill="#4838d1"
          d="M 62.855469 57.207031 C 62.855469 58.128906 62.09375 58.878906 61.117188 58.878906 L 32.652344 60.058594 L 4.140625 58.878906 C 3.207031 58.878906 2.445312 58.128906 2.445312 57.207031 L 2.445312 22.214844 C 2.445312 21.289062 3.207031 20.539062 4.140625 20.539062 L 5.386719 20.539062 L 5.386719 55.988281 C 5.457031 56.722656 6.035156 56.984375 6.480469 57.027344 C 6.574219 57.039062 16.007812 56.546875 23.332031 56.519531 C 29.316406 56.519531 32.515625 57.773438 32.648438 57.773438 C 32.785156 57.773438 35.984375 56.519531 42.160156 56.519531 C 49.292969 56.546875 58.726562 57.03125 58.820312 57.027344 C 59.511719 57.019531 59.894531 56.507812 59.914062 55.988281 L 59.914062 20.539062 L 61.160156 20.539062 C 62.09375 20.539062 62.855469 21.289062 62.855469 22.214844 Z M 29.882812 54.964844 C 28.277344 54.683594 26.050781 54.433594 23.132812 54.433594 C 19.144531 54.453125 14.484375 54.605469 11.078125 54.742188 C 14.429688 53.71875 19.179688 52.53125 23.183594 52.511719 C 26.285156 52.511719 28.476562 53.773438 29.882812 54.964844 Z M 7.46875 21.191406 C 9.753906 20.269531 17.71875 17.230469 23.121094 17.230469 C 28.386719 17.289062 30.917969 19.597656 31.609375 20.351562 L 31.609375 53.695312 C 29.933594 52.171875 27.140625 50.429688 23.128906 50.429688 C 17.386719 50.457031 10.421875 52.679688 7.46875 53.726562 Z M 54.230469 54.742188 C 50.800781 54.605469 46.074219 54.449219 41.96875 54.433594 C 39.167969 54.433594 37.007812 54.675781 35.433594 54.957031 C 36.84375 53.765625 39.046875 52.511719 42.164062 52.511719 C 46.144531 52.53125 50.882812 53.71875 54.230469 54.742188 Z M 33.691406 20.351562 C 34.390625 19.589844 36.941406 17.289062 42.320312 17.230469 C 47.601562 17.230469 55.546875 20.269531 57.832031 21.191406 L 57.832031 53.726562 C 54.875 52.679688 47.90625 50.457031 42.113281 50.429688 C 38.140625 50.429688 35.363281 52.167969 33.691406 53.691406 Z M 61.160156 18.457031 L 56.539062 18.457031 C 53.023438 17.15625 46.84375 15.148438 42.15625 15.148438 C 36.953125 15.207031 33.996094 17.230469 32.667969 18.457031 L 32.628906 18.457031 C 31.289062 17.234375 28.300781 15.207031 22.980469 15.148438 C 18.410156 15.148438 12.257812 17.15625 8.757812 18.457031 L 4.140625 18.457031 C 2.058594 18.457031 0.363281 20.144531 0.363281 22.214844 L 0.363281 57.207031 C 0.363281 59.277344 2.058594 60.960938 4.097656 60.960938 C 4.097656 60.960938 32.609375 62.140625 32.609375 62.140625 C 32.621094 62.140625 32.636719 62.140625 32.652344 62.140625 C 32.664062 62.140625 32.679688 62.140625 32.695312 62.140625 L 61.160156 60.960938 C 63.242188 60.960938 64.9375 59.277344 64.9375 57.207031 L 64.9375 22.214844 C 64.9375 20.140625 63.242188 18.457031 61.160156 18.457031 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </G>
      <G clip-path="url(#1382d1f489)">
        <Path
          fill="#4838d1"
          d="M 32.640625 48.789062 C 31.570312 48.789062 30.703125 47.921875 30.703125 46.851562 L 30.703125 20.734375 C 30.703125 19.664062 31.570312 18.796875 32.640625 18.796875 C 33.714844 18.796875 34.578125 19.664062 34.578125 20.734375 L 34.578125 46.851562 C 34.578125 47.921875 33.714844 48.789062 32.640625 48.789062 Z M 32.640625 48.789062 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </G>
      <Path
        fill="#4838d1"
        d="M 38.332031 44.007812 C 37.257812 44.007812 36.394531 43.140625 36.394531 42.070312 L 36.394531 25.515625 C 36.394531 24.445312 37.257812 23.578125 38.332031 23.578125 C 39.402344 23.578125 40.269531 24.445312 40.269531 25.515625 L 40.269531 42.070312 C 40.269531 43.121094 39.402344 44.007812 38.332031 44.007812 Z M 38.332031 44.007812 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <Path
        fill="#4838d1"
        d="M 44.019531 38.523438 C 42.949219 38.523438 42.082031 37.65625 42.082031 36.585938 L 42.082031 31 C 42.082031 29.929688 42.949219 29.0625 44.019531 29.0625 C 45.089844 29.0625 45.957031 29.929688 45.957031 31 L 45.957031 36.605469 C 45.957031 37.65625 45.070312 38.523438 44.019531 38.523438 Z M 44.019531 38.523438 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <Path
        fill="#4838d1"
        d="M 26.972656 44.007812 C 25.902344 44.007812 25.035156 43.140625 25.035156 42.070312 L 25.035156 25.515625 C 25.035156 24.445312 25.902344 23.578125 26.972656 23.578125 C 28.046875 23.578125 28.910156 24.445312 28.910156 25.515625 L 28.910156 42.070312 C 28.890625 43.121094 28.023438 44.007812 26.972656 44.007812 Z M 26.972656 44.007812 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <G clip-path="url(#892dbbbbaa)">
        <Path
          fill="#4838d1"
          d="M 21.285156 38.523438 C 20.210938 38.523438 19.347656 37.65625 19.347656 36.585938 L 19.347656 30.980469 C 19.347656 29.90625 20.210938 29.042969 21.285156 29.042969 C 22.355469 29.042969 23.222656 29.90625 23.222656 30.980469 L 23.222656 36.585938 C 23.222656 37.65625 22.335938 38.523438 21.285156 38.523438 Z M 21.285156 38.523438 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </G>
      <G fill="#4838d1" fill-opacity="1">
        <G transform="translate(74.81372, 53.869382)">
          <G>
            <Path d="M 6.976562 -24.628906 L 17.890625 -24.628906 L 17.890625 -27.585938 L 3.152344 -27.585938 L 3.152344 0 L 17.890625 0 L 17.890625 -2.957031 L 6.976562 -2.957031 L 6.976562 -12.730469 L 17.101562 -12.730469 L 17.101562 -15.605469 L 6.976562 -15.605469 Z M 6.976562 -24.628906 " />
          </G>
        </G>
      </G>
      <G fill="#4838d1" fill-opacity="1">
        <G transform="translate(94.596033, 53.869382)">
          <G>
            <Path d="M 10.089844 0.277344 C 14.777344 0.277344 17.929688 -2.957031 17.929688 -7.761719 L 14.265625 -7.761719 C 14.265625 -4.570312 12.570312 -2.441406 10.089844 -2.441406 C 7.410156 -2.441406 5.636719 -5.515625 5.636719 -10.207031 C 5.636719 -14.503906 7.371094 -17.417969 10.050781 -17.417969 C 12.570312 -17.417969 14.265625 -15.410156 14.265625 -12.335938 L 17.929688 -12.335938 C 17.929688 -16.984375 14.777344 -20.097656 10.089844 -20.097656 C 5.203125 -20.097656 1.96875 -16.039062 1.96875 -9.96875 C 1.96875 -3.824219 5.203125 0.277344 10.089844 0.277344 Z M 10.089844 0.277344 " />
          </G>
        </G>
      </G>
      <G fill="#4838d1" fill-opacity="1">
        <G transform="translate(114.299531, 53.869382)">
          <G>
            <Path d="M 18.089844 0 L 18.089844 -14.148438 C 18.089844 -17.734375 15.804688 -20.097656 12.414062 -20.097656 C 9.8125 -20.097656 7.210938 -18.640625 6.503906 -16.867188 L 6.226562 -16.867188 L 6.226562 -28.375 L 2.5625 -28.375 L 2.5625 0 L 6.226562 0 L 6.226562 -15.328125 C 6.226562 -15.328125 7.921875 -17.417969 10.484375 -17.417969 C 12.847656 -17.417969 14.421875 -15.84375 14.421875 -13.4375 L 14.421875 0 Z M 18.089844 0 " />
          </G>
        </G>
      </G>
      <G fill="#4838d1" fill-opacity="1">
        <G transform="translate(134.633543, 53.869382)">
          <G>
            <Path d="M 9.96875 0.277344 C 14.777344 0.277344 18.011719 -4.175781 18.011719 -9.929688 C 18.011719 -15.644531 14.777344 -20.136719 9.96875 -20.136719 C 5.164062 -20.136719 1.96875 -15.683594 1.96875 -10.128906 C 1.96875 -3.785156 5.125 0.277344 9.96875 0.277344 Z M 9.96875 -2.441406 C 7.449219 -2.441406 5.636719 -5.320312 5.636719 -10.167969 C 5.636719 -14.109375 7.371094 -17.417969 9.96875 -17.417969 C 12.609375 -17.417969 14.34375 -14.070312 14.34375 -10.011719 C 14.34375 -5.832031 12.609375 -2.441406 9.96875 -2.441406 Z M 9.96875 -2.441406 " />
          </G>
        </G>
      </G>
      <G fill="#4838d1" fill-opacity="1">
        <G transform="translate(154.591405, 54.735243)">
          <G>
            <Path d="M 4.886719 -12.789062 L 6.425781 -12.789062 L 6.425781 -14.167969 L 4.199219 -14.167969 C 2.859375 -14.167969 1.992188 -13.34375 1.992188 -11.960938 L 1.992188 -9.835938 L 0.316406 -9.835938 L 0.316406 -8.453125 L 1.992188 -8.453125 L 1.992188 0 L 3.84375 0 L 3.84375 -8.453125 L 6.425781 -8.453125 L 6.425781 -9.835938 L 3.84375 -9.835938 L 3.84375 -11.546875 C 3.84375 -12.355469 4.199219 -12.789062 4.886719 -12.789062 Z M 4.886719 -12.789062 " />
          </G>
        </G>
      </G>
      <G fill="#4838d1" fill-opacity="1">
        <G transform="translate(161.489021, 54.735243)">
          <G>
            <Path d="M 8.691406 -9.972656 L 6.78125 -9.972656 L 4.613281 -1.4375 L 4.238281 -1.4375 L 2.128906 -9.972656 L 0.214844 -9.972656 L 2.976562 -0.175781 L 4.097656 -0.175781 L 3.804688 0.886719 C 3.429688 1.695312 2.070312 1.832031 1.0625 1.457031 L 1.0625 2.816406 C 2.148438 3.269531 4.789062 3.488281 5.457031 1.320312 Z M 8.691406 -9.972656 " />
          </G>
        </G>
      </G>
      <G fill="#f77a55" fill-opacity="1">
        <G transform="translate(169.430262, 55.648726)">
          <G>
            <Path d="M 3.480469 0.28125 C 4.867188 0.28125 6 -0.847656 6 -2.292969 C 6 -3.679688 4.867188 -4.8125 3.480469 -4.8125 C 2.039062 -4.8125 0.90625 -3.679688 0.90625 -2.292969 C 0.90625 -0.847656 2.039062 0.28125 3.480469 0.28125 Z M 3.480469 0.28125 " />
          </G>
        </G>
      </G>
    </Svg>
  );
}
