function Timeline (config) {

  config = $.extend({
    baseUrl: "",
    lowResFolder: "",
    hiResFolder: "",
    easing: function (i) { return i; },
    elem: undefined,
    elemGauge: undefined,
    frameRateFactor: 1,
    lastFrame: 0,
    points: []
  }, config);

  var baseUrl = config.baseUrl;
  var lowResFolder = config.lowResFolder;
  var hiResFolder = config.hiResFolder;
  var easing = config.easing;
  var elem = config.elem;
  var elemGauge = config.elemGauge;
  var frameRateFactor = config.frameRateFactor;
  var points = config.points;
  var currentFrame = 0;
  var startFrame;
  var lastFrame = config.lastFrame;
  var previousFrame;
  var targetFrame = 0;
  var isPaused = true;
  var tick = 0;
  var dir;


  var setToNext = setTo(1);
  var setToPrev = setTo(0);

  // Initial state
  jumpToFrame(0);
  // setToNext();

  function closest (f) {
    var a = _.map(points, function (o) { return {frame: o.frame, gap: o.frame - f }; });
    return [
      _.chain(a).filter(function (o) { return o.gap < 0; }).max("gap").value().frame || 0,
      // _.chain(a).filter(function (o) { return o.gap > 0; }).min("gap").value().frame || _.chain(a).sortBy("frame").last().value().frame
      _.chain(a).filter(function (o) { return o.gap > 0; }).min("gap").value().frame || lastFrame
    ];
  }

  function getCurrentFrame () {
    return currentFrame;
  }

  function getLastFrame () {
    return lastFrame;
  }

  function getDir () {
    return dir;
  }

  function jumpToFrame (f) {
    f = parseInt(f, 10);
    if (isNaN(f)) return;
    f = (f > lastFrame ? lastFrame : (f < 0 ? 0 : f));
    currentFrame = f;
    setToDir(dir);
    elem.src = baseUrl + lowResFolder + f + ".jpg";
    elemGauge.style.width = (currentFrame / lastFrame * 100) + "%";
  }

  function normalizer (a, b) {
    if (isNaN(a) || isNaN(b) || a == b) return;
    return {
      normalize: function (c) {
        var n = (c - a) / (b - a);
        return n < 0 || n > 1 ? undefined : n;
      },
      denormalize: function (c) {
        return (c * (b - a)) + a;
      }
    };
  }

  function pause () {
    isPaused = true;
  }

  function play () {
    isPaused = false;
    if (currentFrame === targetFrame) return;

    (function loop () { // Main loop
      if (currentFrame === targetFrame) { // Target reached
        $(elem).trigger("targetEnter");
        pause();
      }
      if (isPaused === true) return;  
      tick = tick + 1;
      previousFrame = currentFrame;
      currentFrame = Math.round(fnNorm.denormalize(easing(Math.abs(fnNorm.normalize(startFrame + (tick * frameRateFactor) * dir))))); 
      if (previousFrame !== currentFrame) {
        elem.src = baseUrl + lowResFolder + currentFrame + ".jpg";
        // elem.innerHTML = currentFrame; // DEBUG
        elemGauge.style.width = (currentFrame / lastFrame * 100) + "%"
      }
      window.requestAnimationFrame(loop);

    })();
  }

  function setTargetFrame (f) {
    f = parseInt(f, 10);
    if (isNaN(f) || f === currentFrame || f === targetFrame) return;
    targetFrame = (f > lastFrame ? lastFrame : (f < 0 ? 0 : f));
    startFrame = currentFrame;
    //tick = 0;
    dir = targetFrame > currentFrame ? 1 : -1;
    fnNorm = normalizer(currentFrame, targetFrame);
    tick = 0;
    play(); // TEST: auto play after setting target
  }

  function setTo (n) {
    return function () {
      var newTargetFrame = closest(currentFrame)[n];
      if (newTargetFrame !== targetFrame) setTargetFrame(newTargetFrame);
    };
  }

  function setToDir (d) {
    if (d === 1) { setToNext(); return; }
    if (d === -1) setToPrev();
  }

  function togglePlayPause () {
    if (isPaused === true) {
      return play();
    } else {
      return pause();
    }
  }

  function reverseOrNoop (d) {
    if (d !== dir) this.setToDir(d);
  }

  return {
    setToDir: setToDir,
    setToPrev: setToPrev,
    setToNext: setToNext,
    getCurrentFrame: getCurrentFrame,
    getLastFrame: getLastFrame,
    getDir: getDir,
    jumpToFrame: jumpToFrame,
    pause: pause,
    play: play,
    togglePlayPause: togglePlayPause,
    reverseOrNoop: reverseOrNoop
  };
}

  