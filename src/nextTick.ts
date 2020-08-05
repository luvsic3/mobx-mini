/* global nextTick */
let nextTick: Function = setTimeout;

if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  // Wrapper timer for hijack timers in jest
  nextTick = (callback: Function) => {
    setTimeout(callback, 0);
  };
}

export default nextTick;
