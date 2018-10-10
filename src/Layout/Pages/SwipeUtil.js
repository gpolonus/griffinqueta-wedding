
/**
 * Helper function for detecting swipes on mobile
 * Returns a function for removing the event handlers from the passed in DOM element
 * copied and edited from https: //stackoverflow.com/questions/15084675/how-to-implement-swipe-gestures-for-mobile-devices
 * @param {Element} el DOM element to bind swipe to
 * @param {Function} func Handler function for when a swipe happens
 */
export const detectSwipe = (el, func) => {
  const swipe_det = {
    sX: 0,
    sY: 0,
    eX: 0,
    eY: 0
  };
  const min_x = 30; //min x swipe for horizontal swipe
  const max_x = 30; //max x difference for vertical swipe
  const min_y = 50; //min y swipe for vertical swipe
  const max_y = 60; //max y difference for horizontal swipe
  let direc = '';
  const touchstartHandler = (e) => {
    const t = e.touches[0];
    swipe_det.sX = t.clientX;
    swipe_det.sY = t.clientY;
  }
  el.addEventListener('touchstart', touchstartHandler, false);

  const touchMoveHandler = (e) => {
    e.preventDefault();
    const t = e.touches[0];
    swipe_det.eX = t.clientX;
    swipe_det.eY = t.clientY;
  }
  el.addEventListener('touchmove', touchMoveHandler, false);

  const touchEndHandler = (e) => {
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
      if (swipe_det.eX > swipe_det.sX) direc = 'right';
      else direc = 'left';
    }
    //vertical detection
    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
      if (swipe_det.eY > swipe_det.sY) direc = 'down';
      else direc = 'up';
    }

    if (direc !== '') {
      if (typeof func === 'function') func(direc);
    }
    direc = '';
    swipe_det.sX = 0;
    swipe_det.sY = 0;
    swipe_det.eX = 0;
    swipe_det.eY = 0;
  }
  el.addEventListener('touchend', touchEndHandler, false);

  return () => {
    el.removeEventListener('touchstart', touchstartHandler, false);
    el.removeEventListener('touchmove', touchMoveHandler, false);
    el.removeEventListener('touchend', touchEndHandler, false);
  }
}
