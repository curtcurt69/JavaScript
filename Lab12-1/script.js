
$(function () {
	$('input').click(function () {
		var ourText = $('p');
		var currFontSize = ourText.css('fontSize');
		var finalNum = parseFloat(currFontSize, 10);
		var stringEnding = currFontSize.slice(-2);
		if (this.id == 'large') {
			finalNum *= 1.2;
		}
		else if (this.id == 'small') {
			finalNum /= 1.2;
		}
		ourText.css('fontSize', finalNum + stringEnding);
	});
});
