
$(document).ready(function($){

	var customElements = " #panel, .tfoot, .upper, .thead, .postbit_buttons > a:link";
	var customText = ".post_block h3, .post_block h3 a, .trow1 a:link, .trow2 a:link, #logo ul.top_links a:link, #panel .lower a:link, .navigation a:link";

	$('#colorpicker').ColorPicker({
		color: '#0000ff',
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
			$(el).css("backgroundColor", "#" + hex);
			$(customElements).css("background-color", "#" + hex);
			$(customText).css("color", "#" + hex);
			$.cookie('customcolor',hex,{ expires: 365, path: '/'});
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},

		onChange: function (hsb, hex, rgb) {
			currentHex = hex;
			$(customElements).css("background-color", "#" + hex);
			$(customText).css("color", "#" + hex);
			$.cookie('customcolor',hex,{ expires: 365, path: '/'});
		}
	})
	
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	})

	if ( ($.cookie('customcolor') != null))	{
		$(customElements).css("background-color", "#" + $.cookie('customcolor'));
		$(customText).css("color", "#" + $.cookie('customcolor'));
		$("#colorpicker").val($.cookie('customcolor'));
	}
	else{
		$(customElements).css("background-color","#0066A2");
		$(customText).css("color","#0066A2");
	}

});