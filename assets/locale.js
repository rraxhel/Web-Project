document.write('<script src="./assets/jquery-3.6.1.js"></script>');
document.write('<script src="./assets/LocaleSwitch.js"></script>');
document.write('<script src="./assets/script.js"></script>');

function Chinese_Locale() {
	document.title = "記憶力翻牌小遊戲";
	for (var i = 0; i < 8; i++) {
		$('#LocaleReq' + String(i)).jqmultilang('zh-tw');
	}
	if (mathedCard === cardNum) {
		end.innerHTML = "已過關";
	}
}
