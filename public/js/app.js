'use strict';

var gui = require('nw.gui');
var Window = gui.Window.get();

function minimize() {
    Window.minimize();
}

function toggleFullscreen() {
    Window.toggleKioskMode();
}

function closeWindow() {
    Window.close();
}

$(document).ready(function() {
	$('#signup,#signin').click(function(event) {
		event.preventDefault();
		$('div.form-auth').toggle('500');
	});
});