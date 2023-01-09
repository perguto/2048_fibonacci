// window.addEventListener('gamepadconnected',e => {
// })
// gamepad = navigator.getGamepads()[0]
// gamepad.on('press','button_1',console.log)
// gamepad.on('press','button_2',console.log)
// gamepad.on('press','button_3',console.log)
// gamepad.on('press','button_4',console.log)
// gamepad.on('press','button_5',console.log)
// gamepad.on('press','button_6',console.log)
// gamepad.on('press','button_7',console.log)
// gamepad.on('press','button_8',console.log)
// gamepad.on('press','button_9',console.log)
// gamepad.on('press','button_10',console.log)
// gamepad.on('press','button_11',console.log)
// gamepad.on('press','button_12',console.log)
// gamepad.on('press','button_13',console.log)
// gamepad.on('press','button_14',console.log)
// gamepad.on('press','button_15',console.log)
// gamepad.on('press','button_16',console.log)
// gamepad.on('press','button_17',console.log)
// gamepad.on('press','button_18',console.log)
// gamepad.on('press','button_19',console.log)
// gamepad.on('press','button_20',console.log)
// gamepad.on('press','button_21',console.log)
// gamepad.on('press','button_22',console.log)
// })

setInterval(handleGamepads,10)

let deadzone = 0.6
let resetzone = 0.2
let axis_active =[[],[],[],[]]

//let lastPressed =[]
let gamepads = navigator.getGamepads()
let last_gamepads = gamepads
function handleGamepads(){
	gamepads = navigator.getGamepads()
	for(let i=0;i<4;i++){
		if(gamepads[i]){
			for(let j=0;j< gamepads[i]?.buttons.length??0;j++){
				if(
					gamepads[i].buttons[j].touched 
					&& 
					!(last_gamepads[i]?.buttons[j].touched??false) 
				){
					// debugger
					let e = new Event('press')
					e.button=j
					document.dispatchEvent(e)
				}
			}
			for(let j=0;j<gamepads[i]?.axes.length;j++){
				// debugger
				if(Math.abs(gamepads[i]?.axes[j])>deadzone && (axis_active[i][j]??false)){
					// debugger
					axis_active[i][j]=false
					let e= new Event('axis_tilt')
					e.axis=j
					e.sign= Math.sign(gamepads[i].axes[j])
					document.dispatchEvent(e)
				} else 
					if(Math.abs(gamepads[i]?.axes[j])<deadzone && !(axis_active[i][j]??false)){
						axis_active[i][j]=true
					}
			}
		}
	}
	last_gamepads = gamepads
}
