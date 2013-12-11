


// Class for a Sugar Web activity icon
enyo.kind({
	name: "Sugar.ActivityIcon",
	kind: enyo.Control,
	published: { activity: null, size: constant.iconSizeStandard, x: 0, y: 0, colorized: false },
	classes: "web-activity",
	components: [
		{ name: "icon", classes: "web-activity-icon"}
	],
	
	// Constructor
	create: function() {
		this.inherited(arguments);
		this.iconChanged();
		this.sizeChanged();
		this.xChanged();
		this.yChanged();
	},

	// Render
	rendered: function() {
		this.inherited(arguments);
		if (this.colorized)
			iconLib.colorize(this.$.icon.hasNode(), preferences.getColor());
	},
	
	// Property changed
	xChanged: function() {
		if (this.x != -1) this.applyStyle("margin-left", this.x+"px");
	},
	
	yChanged: function() {
		if (this.y != -1) this.applyStyle("margin-top", this.y+"px");
	},
	
	iconChanged: function() {
		if (this.activity != null)
			this.$.icon.applyStyle("background-image", "url(" + this.activity.directory+"/"+this.activity.icon + ")");
	},
	
	sizeChanged: function() {
		this.$.icon.applyStyle("width", this.size+"px");
		this.$.icon.applyStyle("height", this.size+"px");
		this.$.icon.applyStyle("background-size", this.size+"px "+this.size+"px");
	},
	
	activityChanged: function() {
		this.iconChanged();
	}
});