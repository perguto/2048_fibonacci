// Wait till the browser is ready to render the game (avoids glitches)
var spiel;
globalThis.requestAnimationFrame(function () {
  spiel = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
