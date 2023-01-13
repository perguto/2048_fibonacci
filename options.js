//window.onbeforeunload = e => {
//	e.preventDefault()
//	//return e.returnValue="NOOO!" // custom messages now deactivated
//}

// try{localStorage}catch(e){let localStorage={};}//not working

	// let GAMETABLE = {
	// 	'normal':0,
	// 	'fibonacci':1,
	// }
	// let GAMEMODE = GAMETABLE[game_mode];

	game_mode = localStorage.game_mode // ??'fibonacci'
	document.querySelector('input[type="radio"][name="game_mode"][value="'+game_mode+'"]').checked=true

	let game_mode_buttons = document.querySelectorAll('input[type="radio"][name="game_mode"]')
	function update_game_mode() {
		//debugger
		game_mode = document.querySelector('input[type="radio"][name="game_mode"]:checked').value
		//GAMEMODE = (game_mode=='fibonacci')?1:0
		localStorage.game_mode=game_mode
		update_title()
	}




	for (let game_mode_button of game_mode_buttons){
		game_mode_button.addEventListener('change',
			update_game_mode
		)

	}

	chain_moves = Boolean(localStorage?.chain_moves // ?? 0
	)
	let chain_moves_checkbox = document.querySelector('#chain_moves_checkbox')
	chain_moves_checkbox.checked =chain_moves
	chain_moves_checkbox.onchange = () => {
		chain_moves =chain_moves_checkbox.checked
		localStorage.chain_moves = chain_moves
	}

	let rumble_activated = Boolean(localStorage?.rumble_activated ?? 0)
	let rumble_activated_checkbox = document.querySelector('#rumble_activated_checkbox')
	rumble_activated_checkbox.checked =rumble_activated
	rumble_activated_checkbox.onchange = () => {
		rumble_activated =rumble_activated_checkbox.checked
		localStorage.rumble_activated = rumble_activated
	}

	let vibration = Boolean(localStorage?.vibration ?? 0)
	let vibration_checkbox = document.querySelector('#vibration_checkbox')
	vibration_checkbox.checked =vibration
	vibration_checkbox.onchange = () => {
		vibration =vibration_checkbox.checked
		localStorage.vibration = vibration
	}

	//let default_sens = 30
	let sensitivity_slider = document.querySelector('#sensitivity_slider')
	let swipe_sensitivity_value_display = document.querySelector('#swipe_sensitivity_value_display')
	let exponent = 2
	let sens_max = 200
	let sens_min = 1
	let scale_sens = value => sens_min+value**exponent * (sens_max - sens_min )
	let inv_scale_sens = sens => ((sens - sens_min)/(sens_max - sens_min))**(1/exponent)

	//let default_sens_slider = inv_scale_sens(default_sens)

	let swipe_sensitivity = +(localStorage?.swipe_sensitivity 
		// ?? default_sens
	)
	sensitivity_slider.value=+(localStorage?.sensitivity_slider_value ?? inv_scale_sens(swipe_sensitivity))
	swipe_sensitivity_value_display.innerText=swipe_sensitivity.toPrecision(3).padStart(4,' ')

	sensitivity_slider.oninput = () => {
		swipe_sensitivity = scale_sens( +sensitivity_slider.value) // <input> value is always string
		swipe_sensitivity_value_display.innerText=swipe_sensitivity.toPrecision(3).padStart(4,' ')
	}

	sensitivity_slider.onchange = () => {
		//debugger
		localStorage.swipe_sensitivity=swipe_sensitivity
		localStorage.sensitivity_slider_value=sensitivity_slider.value
	}

