// Avatar - Displaying Employee Name 
sap.ui.define([ 'sap/ui/core/Control' ], function(Control) {
	return Control.extend("phil.Avatar.control.avatar", {	
		metadata : {
			properties : {
				"name" : {
					type : "string",
				},			
				"size" : {
					type : "sap.ui.core.CSSSize",
					defaultValue : "100px"
				},
				"defaultColor" : {
					type : "string",
					defaultValue : "#008575" 
				},
				"defaultFontSize" : {
					type : "string",
					defaultValue : "xx-large"
				}
			}
		},

		// UI Renderer - the part creating the HTML:
		renderer : function(oRenderer, oControl) {
			// static function, so use the given "oControl" instance instead of "this" in the renderer function
			oRenderer.write("<div");
			oRenderer.writeControlData(oControl); // writes the Control ID and enables event handling - important!			
			oRenderer.addStyle("width", oControl.getSize()); // write the Control property size; the Control has validated it to be a CSS size
			oRenderer.addStyle("height", oControl.getSize());
			oRenderer.addStyle("border-radius", "100%");
			oRenderer.addStyle("text-align", "center");  // Center text
			oRenderer.addStyle("vertical-align", "middle");
			oRenderer.addStyle("line-height", oControl.getSize());
			oRenderer.addStyle("font-family", "Arial,Helvetica,sans-serif;")
			oRenderer.addStyle("background-color", oControl.getDefaultColor());
			oRenderer.addStyle("color", "white");
			oRenderer.addStyle("font-size", oControl.getDefaultFontSize());
			oRenderer.writeStyles();
			// oRenderer.addClass("sapMTitle"); // add a CSS class for styles common to Control instances
			oRenderer.writeClasses(); // this call writes the above class plus enables support for Square.addStyleClass(...)
			oRenderer.write(">");
			oRenderer.writeEscaped(oControl.getInitials()); // write another Control property, with protection against cross-site-scripting
			oRenderer.write("</div>");
		},

		// Read Provided Name to publish User Avatar
		getInitials : function() {
			var name = this.getName();
			if (!name)
				return "";
			var parts = name.split(" ", 2);
			var result = parts.map(function(p) {
				return p.charAt(0).toLocaleUpperCase();
			}).join("");
			return result;
		},

		// Event Handler, for future build
		onclick : function(evt) {
			// is called when the Control's area is clicked - no event registration required
			/*
			 * alert("Control clicked! Text of the Control is:\n" +
			 * this.getText());
			 */
		}
	});
});