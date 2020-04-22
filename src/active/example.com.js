import $ from '@ampify/aQuery';

export default () => {
  console.log('im a plugin!');

  return { cssIgnore: $.cssIgnore() };
};
