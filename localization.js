let loc= 
{
ja : 
	{
		// '.title' : '2584 - フィボナッチの2048',
		'.game-intro': '数字を組み合わせて、<strong>2584タイル</strong>を目指そう！',
		'.reload-button': 'リロード＆更新',
		'.restart-button': 'ニューゲーム',
		'.keep-playing-button': '続ける',
		'.retry-button' : 'やり直し',
		'.swipe_sensitivity_text': 'スワイプ感度：',
		".swipe_sensitivity_explanation_text":'スワイプに必要なピクセル数。値が低い = 感度が高い',
		".chain_moves_text":'一スワイプで複数の動き',
		".chain_moves_explanation_text":'指を離さず連続でボードを動かせる',
		".vibration_text":'バイブ',
		".vibration_explanation_text":'スマホ・タブレットの振動機能。iPhone・Padは対応不可。',
		".rumble_activated_text":'コントローラー振動',
		".rumble_activated_explanation_text":'コントローラーの振動機能',
		".game_mode_text":'ゲームモード',
		"#game_mode_normal + label":'ノーマル（2048）',
		"#game_mode_fibonacci + label":'フィボナッチ（2584）',
		"#game_mode_stupid + label":'バカ（何でもいい）',
		"#game_mode_tribonacci + label":'トリボナッチ',
		"#game_mode_custom + label":'カスタム列',
		"#game_mode_3 + label":'３の累乗',
		"#game_mode_4 + label":'４の累乗',
		"#game_mode_5 + label":'５の累乗',
		".game_mode_explanation_text":'',
	},
en : 
	{
		".game-intro": "Join the numbers and get to the <strong>2584 tile!</strong>",
		".reload-button": "\n\t\t  <span style=\"\n    line-height: 1em;\n    writing-mode: tb-rl;\n    /* transform: rotate(294deg); */\n\">↻</span>\n\t  <!-- ⟳ -->\n\t  Reload &amp; Update App\n\t  ",
		".restart-button": "New Game",
		".keep-playing-button": "Keep going",
		".retry-button": "Try again",
		".swipe_sensitivity_text": "\n\t\t\t\tSwipe sensitivity: \n\t\t\t\t",
		".swipe_sensitivity_explanation_text": "Number of pixels to swipe to move. Lower value = more sensitive",
		".chain_moves_text": "\n\t\t\t\tMultiple moves per swipe: \n\t\t\t",
		".chain_moves_explanation_text": "\n\t\t<!-- Allow multiple moves with one swipe -->\n\t\tChain moves together without releasing your finger.\n<!-- Ohne Absetzen mehrere Moves hintereinander ausführen -->\n\t\t",
		".vibration_text": "\n\t\t\t\tVibration: \n\t\t\t",
		".vibration_explanation_text": "Vibration for smartphone/tablet",
		".rumble_activated_text": "\n\t\t\t<span>Rumble: </span>\n\t\t\t<input id=\"rumble_activated_checkbox\" type=\"checkbox\">\n\t\t",
		".rumble_activated_explanation_text": "Rumble feature for gamaepads",
		".game_mode_text": "\n\t\t\tGame mode:\n\t\t\t",
		"#game_mode_normal + label": "Normal (2048)",
		"#game_mode_fibonacci + label": "Fibonacci (2584)",
		"#game_mode_stupid + label": "Stupid (Anything goes)",
		"#game_mode_tribonacci + label": "Tribonacci",
		"#game_mode_custom + label": "Custom Sequence",
		"#game_mode_3 + label": "Powers of 3",
		"#game_mode_4 + label": "Powers of 4",
		"#game_mode_5 + label": "Powers of 5",
		".game_mode_explanation_text": "\n\t\t\t<strong>Normal: </strong>\n\t\t\tSame numbers add up, i.e. 1 + 1 = 2, 2 + 2 = 4, 4 + 4 = 8, 8 + 8 =16, ...\n\t\t\t<br>\n\t\t\t<strong>Fibonacci: </strong>\n\t\t\tConsecutive Fibonacci numbers add up, i.e. 1 + 1 =2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, ...\n\t\t\t<br>\n\t\t\t<strong>Tribonacci: </strong>\n\t\t\t<!-- The tribonacci sequence is defined by the recusion a~n~ = a~n-1~ + a~n-3~, and therefore goes 1, 1, 1, 2, 3, 4, 6, 9, 13, 19, 28, 41, 60, 88, 129, ... -->\n\t\t\tThe tribonacci sequence is defined by the recusion a<sub>n</sub> =\n\t\t\ta<sub>n-1</sub> + a<sub>n-3</sub>, and therefore goes 1, 1, 1, 2, 3, 4,\n\t\t\t6, 9, 13, 19, 28, 41, 60, 88, 129, …\n\t\t\t<br>\n\t\t\tYou can add up to numbers if they are two places apart in this sequence ((1,3) or the larger number twice to 2.5 times as big as the smaller one).\n\t\t\t\t\tExplicit formula\n<a href=\"./tribonacci.md.html\">here</a>.\n\t\t\t<br>\n\t\t\t<strong>Custom Sequence:</strong>Change the value of the array\n<code>custom_sequence</code> in the devtools console (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> +<kbd>J</kbd>)\n"
	}
}

let default_language = navigator.language.slice(0,2);
function setLanguage(language=default_language){
	for(let selector in loc[language]){
		//loc_en[selector]=document.querySelector(selector).innerHTML
		document.querySelector(selector).innerHTML=loc[language][selector]
	}
}
