$(document).ready(function () {
	function getQueryVariable(a, b) {
		if (a.indexOf('?') != -1) {
			var a = a.substring(a.indexOf('?') + 1, a.length)
		}
		if (a.indexOf('#') != -1) {
			var a = a.substring(0, a.indexOf('#'))
		}
		var c = a.split("&");
		for (var i = 0; i < c.length; i++) {
			var d = c[i].split("=");
			if (d[0] == b) {
				return d[1]
			}
		}
		return false
	}
	function getLink() {
		if ($('#hh').val() == "hh") {
			var h = "0"
		} else {
			var h = parseInt($('#hh').val(), 10)
		}
		if ($('#mm').val() == "mm") {
			var a = "0"
		} else {
			var a = parseInt($('#mm').val(), 10)
		}
		if ($('#ss').val() == "ss") {
			var b = "0"
		} else {
			var b = parseInt($('#ss').val(), 10)
		}
		var c = getQueryVariable($("#startURL").val(), 'v');
		if (c == false || c == undefined) {
			$('#newURL').val('');
			$('#newURL').attr("disabled", "disabled");
			$('#newURL, #newURLlabel').addClass("inactive");
			$("#one p.error").show();
			$("#startURL").addClass("error");
			return false
		}
		$('#newURL').removeAttr("disabled");
		$('#newURL, #newURLlabel').removeClass("inactive");
		h = parseInt(h, 10);
		a = parseInt(Math.floor(b / 60), 10) + parseInt(a, 10);
		b = parseInt(b, 10);
		$("#newURL").val("http://www.youtube.com/watch?v=" + c + "&t=" + h + "h" + a + "m" + b + "s")
	}
	function previewLink() {
		if ($('#hh').val() == "hh") {
			var h = "0"
		} else {
			var h = parseInt($('#hh').val(), 10)
		}
		if ($('#mm').val() == "mm") {
			var a = "0"
		} else {
			var a = parseInt($('#mm').val(), 10)
		}
		if ($('#ss').val() == "ss") {
			var b = "0"
		} else {
			var b = parseInt($('#ss').val(), 10)
		}
		var c = getQueryVariable($("#startURL").val(), 'v');
		if (c == false || c == undefined) {
			$('#newURL').val('');
			$('#newURL').attr("disabled", "disabled");
			$('#newURL, #newURLlabel').addClass("inactive");
			$("#one p.error").show();
			$("#startURL").addClass("error");
			return false
		}
		$('#newURL').removeAttr("disabled");
		$('#newURL, #newURLlabel').removeClass("inactive");
		h = parseInt(h, 10);
		a = parseInt(Math.floor(b / 60), 10) + parseInt(a, 10);
		b = parseInt(b, 10);
		$("#newURL").val("http://www.youtube.com/watch?v=" + c + "&t=" + h + "h" + a + "m" + b + "s")
	}
	function previewLink() {
		if ($('#hh').val() == "hh") {
			var h = "0"
		} else {
			var h = parseInt($('#hh').val(), 10)
		}
		if ($('#mm').val() == "mm") {
			var a = "0"
		} else {
			var a = parseInt($('#mm').val(), 10)
		}
		if ($('#ss').val() == "ss") {
			var b = "0"
		} else {
			var b = parseInt($('#ss').val(), 10)
		}
		var c = getQueryVariable($("#startURL").val(), 'v');
		if (c == false || c == undefined) {
			$('#newURL').val('');
			$('#newURL').attr("disabled", "disabled");
			$('#newURL, #newURLlabel').addClass("inactive");
			$("#one p.error").show();
			$("#startURL").addClass("error");
			return false
		}
		h = parseInt(h, 10);
		a = parseInt(Math.floor(b / 60), 10) + parseInt(a, 10);
		b = parseInt(b, 10);
		$(this).attr("href", "http://www.youtube.com/watch?v=" + c + "&t=" + h + "h" + a + "m" + b + "s")
		if ($('#mm').val() == "mm") {
			var a = "0"
		} else {
			var a = parseInt($('#mm').val(), 10)
		}
		if ($('#ss').val() == "ss") {
			var b = "0"
		} else {
			var b = parseInt($('#ss').val(), 10)
		}
		var c = getQueryVariable($("#startURL").val(), 'v');
		if (c == false || c == undefined) {
			$('#newURL').val('');
			$('#newURL').attr("disabled", "disabled");
			$('#newURL, #newURLlabel').addClass("inactive");
			$("#one p.error").show();
			$("#startURL").addClass("error");
			return false
		}
		h = parseInt(h, 10);
		a = parseInt(Math.floor(b / 60), 10) + parseInt(a, 10);
		b = parseInt(b, 10);
		$(this).attr("href", "http://www.youtube.com/watch?v=" + c + "&t=" + h + "h" + a + "m" + b + "s")
	}
	$("#getLink").click(getLink);
	$("#previewLink").click(previewLink);
	$("#startURL").keypress(function () {
		$("#one p.error").hide();
		$(this).removeClass("error")
	});
	$('#hh, #mm, #ss').focus(function () {
		if ($(this).val() == "mm" || $(this).val() == "ss") {
			$(this).val('')
		}
	});
	$('#hh, #mm, #ss').keypress(function (e) {
		if (e.which > 31 && (e.which < 48 || e.which > 57)) {
			return false
		}
	});
	$('#hh').blur(function () {
		if ($(this).val().length == 0) {
			$(this).val('hh')
		}
	});
	$('#mm').blur(function () {
		if ($(this).val().length == 0) {
			$(this).val('mm')
		}
	});
	$('#ss').blur(function () {
		if ($(this).val().length == 0) {
			$(this).val('ss')
		}
	})
});
