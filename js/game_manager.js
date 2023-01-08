var phi=(5**.5+1)/2;
let max = Math.max
let min = Math.min
let unordered_ratio_between = (a,b,m,M) => ((a*m) <= b )&& (b <= (a*M))
let ordered_ratio_between = (a,b,m,M) => unordered_ratio_between(Math.min(a,b),Math.max(a,b),m,M)
var fib = n => Math.round(phi**n/5**.5);
// let tribcache=Array(100)
let tribcache=[1,1,1]
function trib(){}
trib = n => n<3?1n:tribcache[n]??(tribcache[n]=trib(n-1)+trib(n-3))
//0 : normal, 1 : fibonacci
update_title()
//var mergeable = (a,b) => 
//	(GAMEMODE == 0)?
//	a==b	//ordinary 2048
//:
////	(a==b&&b==2)||a!=b&&a<=2*b&&b<=2*a; //fibonacci like
//	(a==b&&b==1)||a!=b&&a<=2*b&&b<=2*a; //proper fibonacci with modified 1 and 2 start tiles
let custom_sequence = 
[1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912]
	// [2**i for i in range(30)]
var mergeable = (a,b) => 

{
	[a,b]=[Math.min(a,b),Math.max(a,b)]
	let n
	switch (game_mode){
		case 'fibonacci':
			return (a==b&&b==1)||a!=b&&a<=2*b&&b<=2*a; //proper fibonacci with modified 1 and 2 start tiles
		case 'normal':
			return a==b	//ordinary 2048
		case 'double_fibonacci':
			return (a==b&&b==2)||a!=b&&a<=2*b&&b<=2*a; //fibonacci like
		case 'stupid':
			return true
		case 'stuck':
			return false
		case 'tribonacci':
			return (a==1&&b==a)||(a==1&&b==3)||ordered_ratio_between(a,b,2,2.5)
		case 'custom_sequence':
			return custom_sequence.includes(a+b)
		case 'powers_of_3':
			n=3
			// return ((a%2)==1)&&(b==a||b==2*a)
		case 'powers_of_4':
			n=4
			// return (a + b <= 4) || (a%4==0 && b%4 == 0 && mergeable(a/4,b/4))
		case 'powers_of_5':
			n=5
			// return (a + b <= 5) || (a%5==0 && b%5 == 0 && mergeable(a/5,b/5))
			
	}
	return (a + b <= n) || (a%n==0 && b%n == 0 && mergeable(a/n,b/n))
}

function GameManager(size, InputManager, Actuator, StorageManager) {
	this.size           = size; // Size of the grid
	this.inputManager   = new InputManager;
	this.storageManager = new StorageManager;
	this.actuator       = new Actuator;

	this.startTiles     = 2;

	this.inputManager.on("move", this.move.bind(this));
	this.inputManager.on("restart", this.restart.bind(this));
	this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

	this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
	this.storageManager.clearGameState();
	this.actuator.continueGame(); // Clear the game won/lost message
	this.setup();
};

// Keep playing after winning (allows going over 2048)
GameManager.prototype.keepPlaying = function () {
	this.keepPlaying = true;
	this.actuator.continueGame(); // Clear the game won/lost message
};

// Return true if the game is lost, or has won and the user hasn't kept playing
GameManager.prototype.isGameTerminated = function () {
	return this.over || (this.won && !this.keepPlaying);
};

// Set up the game
GameManager.prototype.setup = function () {
	var previousState = this.storageManager.getGameState();

	// Reload the game from a previous game if present
	if (previousState) {
		this.grid        = new Grid(previousState.grid.size,
			previousState.grid.cells); // Reload grid
		this.score       = previousState.score;
		this.over        = previousState.over;
		this.won         = previousState.won;
		this.keepPlaying = previousState.keepPlaying;
	} else {
		this.grid        = new Grid(this.size);
		this.score       = 0;
		this.over        = false;
		this.won         = false;
		this.keepPlaying = false;

		// Add the initial tiles
		this.addStartTiles();
	}

	// Update the actuator
	this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
	for (var i = 0; i < this.startTiles; i++) {
		this.addRandomTile();
	}
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
	if (this.grid.cellsAvailable()) {
		var value = Math.random() < 0.9 ? 1 : 2;//MODIFIED from 2 : 4
		var tile = new Tile(this.grid.randomAvailableCell(), value);

		this.grid.insertTile(tile);
	}
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
	if (this.storageManager.getBestScore() < this.score) {
		this.storageManager.setBestScore(this.score);
	}

	// Clear the state when the game is over (game over only, not win)
	if (this.over) {
		this.storageManager.clearGameState();
	} else {
		this.storageManager.setGameState(this.serialize());
	}

	this.actuator.actuate(this.grid, {
		score:      this.score,
		over:       this.over,
		won:        this.won,
		bestScore:  this.storageManager.getBestScore(),
		terminated: this.isGameTerminated()
	});

};

// Represent the current game as an object
GameManager.prototype.serialize = function () {
	return {
		grid:        this.grid.serialize(),
		score:       this.score,
		over:        this.over,
		won:         this.won,
		keepPlaying: this.keepPlaying
	};
};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
	this.grid.eachCell(function (x, y, tile) {
		if (tile) {
			tile.mergedFrom = null;
			tile.savePosition();
		}
	});
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
	this.grid.cells[tile.x][tile.y] = null;
	this.grid.cells[cell.x][cell.y] = tile;
	tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
	// 0: up, 1: right, 2: down, 3: left
	var self = this;

	if (this.isGameTerminated()) return; // Don't do anything if the game's over

	var cell, tile;

	var vector     = this.getVector(direction);
	var traversals = this.buildTraversals(vector);
	var moved      = false;

	// Save the current tile positions and remove merger information
	this.prepareTiles();

	// Traverse the grid in the right direction and move tiles
	traversals.x.forEach(function (x) {
		traversals.y.forEach(function (y) {
			cell = { x: x, y: y };
			tile = self.grid.cellContent(cell);

			if (tile) {
				var positions = self.findFarthestPosition(cell, vector);
				var next      = self.grid.cellContent(positions.next);

				// Only one merger per row traversal?
				if (next && mergeable(next.value, tile.value) && !next.mergedFrom) {
					var merged = new Tile(positions.next, tile.value +next.value);
					merged.mergedFrom = [tile, next];

					self.grid.insertTile(merged);
					self.grid.removeTile(tile);

					// Converge the two tiles' positions
					tile.updatePosition(positions.next);

					// Update the score
					self.score += merged.value;

					// The mighty 2048 tile
					if (merged.value === 2048) self.won = true;
				} else {
					self.moveTile(tile, positions.farthest);
				}

				if (!self.positionsEqual(cell, tile)) {
					moved = true; // The tile moved from its original cell!
				}
			}
		});
	});

	if (moved) {
		this.addRandomTile();

		if (!this.movesAvailable()) {
			this.over = true; // Game over!
		}

		this.actuate();
	}
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
	// Vectors representing tile movement
	var map = {
		0: { x: 0,  y: -1 }, // Up
		1: { x: 1,  y: 0 },  // Right
		2: { x: 0,  y: 1 },  // Down
		3: { x: -1, y: 0 }   // Left
	};

	return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
	var traversals = { x: [], y: [] };

	for (var pos = 0; pos < this.size; pos++) {
		traversals.x.push(pos);
		traversals.y.push(pos);
	}

	// Always traverse from the farthest cell in the chosen direction
	if (vector.x === 1) traversals.x = traversals.x.reverse();
	if (vector.y === 1) traversals.y = traversals.y.reverse();

	return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
	var previous;

	// Progress towards the vector direction until an obstacle is found
	do {
		previous = cell;
		cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
	} while (this.grid.withinBounds(cell) &&
		this.grid.cellAvailable(cell));

	return {
		farthest: previous,
		next: cell // Used to check if a merge is required
	};
};

GameManager.prototype.movesAvailable = function () {
	return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
	var self = this;

	var tile;

	for (var x = 0; x < this.size; x++) {
		for (var y = 0; y < this.size; y++) {
			tile = this.grid.cellContent({ x: x, y: y });

			if (tile) {
				for (var direction = 0; direction < 4; direction++) {
					var vector = self.getVector(direction);
					var cell   = { x: x + vector.x, y: y + vector.y };

					var other  = self.grid.cellContent(cell);

					if (other && mergeable(other.value ,tile.value)) {
						return true; // These two tiles can be merged
					}
				}
			}
		}
	}

	return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
	return first.x === second.x && first.y === second.y;
};
