
export function debounce(func, wait = 15, immediate = true) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;

    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function getScreenBreakpoint(){
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1800){
      return 'big-desk';
    } else if (screenWidth < 1800 && screenWidth >= 1200) {
      return 'desk';
    } else if (screenWidth < 1200 && screenWidth >= 900) {
      return 'tab-land';
    } else if ( screenWidth < 900 && screenWidth >= 600) {
      return 'tab-port';
    } else if ( screenWidth < 600 ) {
      return 'phone';
    }
  }
