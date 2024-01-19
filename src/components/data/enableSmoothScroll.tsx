const enableSmoothScroll = () => {
  // Check if the code is running in a browser environment
  if (typeof window !== 'undefined' && 'scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
};

export default enableSmoothScroll;
