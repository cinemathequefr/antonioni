// requestAnimationFrame polyfill (https://gist.github.com/timhall/4078614)
(function(){var lastTime=0,vendors=['ms','moz','webkit','o'],hasPerformance=!!(window.performance&&window.performance.now);for(var x=0,max=vendors.length;x<max&&!window.requestAnimationFrame;x+=1){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(id){clearTimeout(id);};}if(!hasPerformance){var rAF=window.requestAnimationFrame,startTime=+new Date;window.requestAnimationFrame=function(callback,element){var wrapped=function(timestamp){var performanceTimestamp=(timestamp<1e12)?timestamp:timestamp-startTime;return callback(performanceTimestamp);};rAF(wrapped,element);}}})();

// Function.bind polyfill (see: http://www.smashingmagazine.com/2014/01/23/understanding-javascript-function-prototype-bind/)
if(!Function.prototype.bind){Function.prototype.bind=function(oThis){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply(this instanceof fNOP&&oThis?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)));};fNOP.prototype=this.prototype;fBound.prototype=new fNOP();return fBound;};}


/**
 * coverDimensions
 * Returns the computed dimensions and offset of an element
 * @param (Int) w1: width of element to be fitted
 * @param (Int) h1: height of element to be fitted
 * @param (Int) w2: container width
 * @param (Int) h2: container height
 * @return (Array) [width, height, CSS string] of fitted element
 */
function coverDimensions (w1, h1, w2, h2) {
  var ratio, w3, h3, marginTop, marginLeft;
  w1 = parseInt(w1, 10);
  h1 = parseInt(h1, 10); 
  w2 = parseInt(w2, 10);
  h2 = parseInt(h2, 10); 
  ratio = Math.max(w2 / w1, h2 / h1);
  w3 = w1 * ratio;
  h3 = h1 * ratio;
  marginTop = (h2 - h3) / 2; // Margins offset the element to keep it centered
  marginLeft = (w2 - w3) / 2;
  return {
    width: w3,
    height: h3,
    css: { width: w3 + "px", height: h3 + "px", marginTop: marginTop + "px", marginLeft: marginLeft + "px" }
  }
}


