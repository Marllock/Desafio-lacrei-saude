const React = require('react');

const NextImage = ({ src, alt, width, height, ...props }) => {
  const finalSrc = typeof src === 'object' && src?.src ? src.src : src;
  return React.createElement('img', { src: finalSrc, alt, width, height, ...props });
};

module.exports = NextImage;
