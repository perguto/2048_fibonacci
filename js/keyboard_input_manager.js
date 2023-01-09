let touch_active=1
swipe_sensitivity??=30

function KeyboardInputManager() {
  this.events = {};

  if (window.navigator.msPointerEnabled) {
    //Internet Explorer 10 style
    this.eventTouchstart    = "MSPointerDown";
    this.eventTouchmove     = "MSPointerMove";
    this.eventTouchend      = "MSPointerUp";
  } else {
    this.eventTouchstart    = "touchstart";
    this.eventTouchmove     = "touchmove";
    this.eventTouchend      = "touchend";
  }

  this.listen();
}

KeyboardInputManager.prototype.on = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

KeyboardInputManager.prototype.emit = function (event, data) {
  var callbacks = this.events[event];
  if (callbacks) {
    callbacks.forEach(function (callback) {
      callback(data);
    });
  }
};

KeyboardInputManager.prototype.listen = function () {
  var self = this;

  var map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    75: 0, // Vim up
    76: 1, // Vim right
    74: 2, // Vim down
    72: 3, // Vim left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3  // A
  };

	let gamepad_map = {
		0:2,			// 'button_1': 0,
		1:1,            // 'button_2': 1,
		2:3,            // 'button_3': 2,
		3:0,            // 'button_4': 3,
		4:0,            // 'shoulder_top_left': 4,
		5:1,            // 'shoulder_top_right': 5,
		6:2,            // 'shoulder_bottom_left': 6,
		7:3,            // 'shoulder_bottom_right': 7,
		8:0,            // 'select': 8,
		9:1,            // 'start': 9,
		10:2,           // 'stick_button_left': 10,
		11:3,           // 'stick_button_right': 11,
		12:0, //d_pad_up 
		13:2, //d_pad_down
		14:3, //d_pad_left
		15:1, //d_pad_right
		16:0, //home
		17:1,
		18:2,
		19:3,
		20:0,
		21:1,
		22:2,
		23:3,
		24:0,
		25:1,
	}

	// Respond to gamepad buttons
	document.addEventListener('press',event => {
		console.log(event.button)
		let mapped = gamepad_map[event.button]
		if(mapped !== undefined){
			self.emit("move",mapped)
		}
	})

	let axis_map = {
		'0+':1,
		'0-':3,
		'1+':2,
		'1-':0,
		'2+':1,
		'2-':3,
		'3+':2,
		'3-':0,
	}
	// Respond to gamepad buttons
	document.addEventListener('axis_tilt',event => {
		// debugger
		console.log(event.axis,event.sign)
		let mapped = axis_map[''+event.axis+(event.sign>0?'+':'-')]
		if(mapped !== undefined){
			self.emit("move",mapped)
		}
	})

	// Respond to direction keys
	document.addEventListener("keydown", function (event) {
		var modifiers = event.altKey || event.ctrlKey || event.metaKey ||
			event.shiftKey;
		var mapped    = map[event.which];

		if (!modifiers) {
			if (mapped !== undefined) {
				event.preventDefault();
				self.emit("move", mapped);
			}
		}

		// R key restarts the game
		if (!modifiers && event.which === 82) {
			self.restart.call(self, event);
		}
	});

	// Respond to button presses
	this.bindButtonPress(".retry-button", this.restart);
	this.bindButtonPress(".restart-button", this.restart);
	this.bindButtonPress(".keep-playing-button", this.keepPlaying);

	// Respond to swipe events
	var touchStartClientX, touchStartClientY;
	var gameContainer = document.getElementsByClassName("game-container")[0];

	gameContainer.addEventListener(this.eventTouchstart, function (event) {
		touch_active=1
		if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
			event.targetTouches.length > 1) {
			return; // Ignore if touching with more than 1 finger
		}

		if (window.navigator.msPointerEnabled) {
			touchStartClientX = event.pageX;
			touchStartClientY = event.pageY;
		} else {
			touchStartClientX = event.touches[0].clientX;
			touchStartClientY = event.touches[0].clientY;
		}

		event.preventDefault();
	});

	// gameContainer.addEventListener(this.eventTouchmove, function (event) {
	//   event.preventDefault();
	// });

	gameContainer.addEventListener(this.eventTouchmove, function (event) {
		if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
			event.targetTouches.length > 1) {
			return; // Ignore if still touching with one or more fingers
		}

		var touchEndClientX, touchEndClientY;

		if (window.navigator.msPointerEnabled) {
			touchEndClientX = event.pageX;
			touchEndClientY = event.pageY;
		} else {
			touchEndClientX = event.changedTouches[0].clientX;
			touchEndClientY = event.changedTouches[0].clientY;
		}

		var dx = touchEndClientX - touchStartClientX;
		var absDx = Math.abs(dx);

		var dy = touchEndClientY - touchStartClientY;
		var absDy = Math.abs(dy);

		// debugger
		if ((chain_moves || touch_active )&& Math.max(absDx, absDy) > swipe_sensitivity) {
			// (right : left) : (down : up)
			touch_active=0
			touchStartClientX = touchEndClientX
			touchStartClientY = touchEndClientY
			self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
		}
	});

	// gameContainer.addEventListener(this.eventTouchend, function (event) {
	//   if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
	//       event.targetTouches.length > 0) {
	//     return; // Ignore if still touching with one or more fingers
	//   }

	//   var touchEndClientX, touchEndClientY;

	//   if (window.navigator.msPointerEnabled) {
	//     touchEndClientX = event.pageX;
	//     touchEndClientY = event.pageY;
	//   } else {
	//     touchEndClientX = event.changedTouches[0].clientX;
	//     touchEndClientY = event.changedTouches[0].clientY;
	//   }

	//   var dx = touchEndClientX - touchStartClientX;
	//   var absDx = Math.abs(dx);

	//   var dy = touchEndClientY - touchStartClientY;
	//   var absDy = Math.abs(dy);

	//   if (Math.max(absDx, absDy) > 10) {
	//     // (right : left) : (down : up)
	//     self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
	//   }
	// });

};


KeyboardInputManager.prototype.restart = function (event) {
	event.preventDefault();
	this.emit("restart");
};

KeyboardInputManager.prototype.keepPlaying = function (event) {
	event.preventDefault();
	this.emit("keepPlaying");
};

KeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {
	var button = document.querySelector(selector);
	button.addEventListener("click", fn.bind(this));
	button.addEventListener(this.eventTouchend, fn.bind(this));
};
