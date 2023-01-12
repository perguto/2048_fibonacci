let loc_ja = {
	// '.title' : '2584 - フィボナッチの2048',
	'.game-intro': '数字を組み合わせて、<strong>2584タイル</strong>を目指そう！',
	'.reload-button': 'リロード＆更新',
	'.restart-button': 'ニューゲーム',
	'.keep-playing-button': '続ける',
	'.retry-button' : 'やり直し',
	'.swipe_sensitivity_text': 'スワイプ感度：',
"expanded swipe_sensitivity_explanation_text":'スワイプに必要なピクセル数。値が低い = 感度が高い',
"chain_moves_text":'一スワイプで複数の動き',
"expanded chain_moves_explanation_text":'指を離さず連続でボードを動かせる',
	"vibration_text":'バイブ',
	"expanded vibration_explanation_text":'スマホ・タブレットの振動機能',
	"rumble_activated_text":'コントローラー振動',
	"rumble_activated_explanation_text":'コントローラーの振動機能',
}

for(let selector in loc_ja){
	document.querySelector(selector).innerHTML=loc_ja[selector]
}
