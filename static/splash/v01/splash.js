(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: "#000000",
	manifest: []
};

// stage content:
(lib.fullscreenpromohtml5test4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whiteflash("synched",0);
	this.instance.setTransform(320,480,1,1,0,0,0,320,480);
	this.instance.alpha = 0.898;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({alpha:0},5).wait(214));

	// Layer 2
	this.instance_1 = new lib.SLASHSTRAIGHT("synched",0,false);
	this.instance_1.setTransform(288.3,548,1.036,1.036,-135,0,0,0.7,-0.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({_off:true},6).wait(221));

	// Layer 3
	this.instance_2 = new lib.SLASHSTRAIGHT("synched",0,false);
	this.instance_2.setTransform(321.4,425.2,0.654,0.654,45,0,0,0.7,-0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},6).wait(226));

	// Crystal
	this.instance_3 = new lib.Crystal("synched",0,false);
	this.instance_3.setTransform(317,423,2.06,0.863,0,0,0,137,-33.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).to({scaleX:2.64,scaleY:2.77,y:422.8},2).wait(228));

	// Casters
	this.instance_4 = new lib.Casters();
	this.instance_4.setTransform(314,543.9,2.278,0.728,0,0,0,297.7,-33.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({scaleX:3.16,scaleY:3.16,x:314.1,y:543.8},2).wait(223));

	// Layer 4
	this.instance_5 = new lib.Symbol32("synched",0);
	this.instance_5.setTransform(721.4,385.7,1,1,0,0,0,600.9,3990.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// symbols:
(lib.whiteflash = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/BLAMAAAiV/MBj+AAAMAAACV/g");
	this.shape.setTransform(320,480);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.slash5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("A21V3QB0hlC6jsQDIj+BphlQDSjJDdisQDaipC9htIALAWQhuC0izC1Qh/CBjEChIgVATQiKB8hvBPIgwAhIhuBXQjmC6iVCSgAEMkEQgEgEAAgXQBahlCaijIDrj5IA+g3QFCkdFEkEIAFgCQAEABACAQQi0DEjFDoIhmB6IhdBRQioCRjqC+QjECfgGAGQgPgDgDgDg");
	this.shape.setTransform(146.2,140.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,292.5,280.8);


(lib.slash4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("A64YLQD0lmCHiZQAMAFgVBnIgUBkQIQn8MargQBbhVCkiKIEZjtQFYknCejLQCWi+GgmJQDQjECyifQkRE0luGIQrdMQnWGnQhHBBnLHJQnRHNhOBHQAwgSFljPQi/DRpIGrQkpDXksDOQgPgHDrlXgAAzgVQgQALgQANIgHAIQALgGASgMQAVgPAJgKQgGAAgOALg");
	this.shape.setTransform(194.2,189.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,388.5,379.4);


(lib.slash3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxuKpIjuHNIUT0HIkcF0MAlxgi9QrzMGlYFbQjqDtirDLQiECchoCVQiEBMkPDlQkDDajKDKQiiChjjDvIjDDPIJWklI35RcQFpqJI0qpg");
	this.shape.setTransform(206.1,201.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,412.1,402.4);


(lib.slash2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A09HIIh7JKIUC0ZIjqGqMAmggiKQrbMflQFkQjmDyiYDgQh1CshQCvQieAwkfDTQkSDKjIDNQifCkjZD6QhsB9hOBcILkiKI6tOYQDUstHvrzg");
	this.shape.setTransform(204.9,202.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,409.8,405);


(lib.slash1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlgA8IAsC/IMnsnQhjB+iDCfQkFE8iaCiQAKACDkhnQBzg0Bxg0IsyIrg");
	this.shape.setTransform(50,55.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,111.5);


(lib.glowbacking = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9999CC","rgba(102,0,102,0.486)","rgba(102,0,102,0)"],[0,0.514,1],0,0,0,0,0,451.9).s().p("EhcbAyNUgmSgUyAAAgdbUAAAgdaAmSgUyUAmTgU0A2IAAAUA2JAAAAmTAU0UAmSAUyAAAAdaUAAAAdbgmSAUyUgmTAU0g2JAAAUg2IAAAgmTgU0g");
	this.shape.setTransform(836.7,454.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1673.4,909);


(lib.GemYellow_02 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCB00","#E79800","#AF7300"],[0.408,0.765,1],-10,-1.6,10.5,-1.6).s().p("AhtA2IADgEICGiQIBTAkIgBAAIi3CZg");
	this.shape.setTransform(57.4,87.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E79800","#6B4600","#9C6700"],[0.18,1,1],-8.5,2.1,4.2,0.2).s().p("AhhgMIDDgrIhcBtIAAABIgxABg");
	this.shape_1.setTransform(58.6,67.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB7903").s().p("AAqApIAZgfIAeAEIAkApgAiEAAIAKgaIAugcIgdBVg");
	this.shape_2.setTransform(36.5,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3A923").s().p("AhgADIAcgFIAaAdIhYATgABHgtIAwAaIAMAYIgZAgg");
	this.shape_3.setTransform(30.1,91.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E79800","#6B4600","#9C6700"],[0.18,1,1],-0.2,9.4,0.1,-3.4).s().p("AgthjIBbBrIAAABIgHAzIhMAog");
	this.shape_4.setTransform(2.2,71.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F09D08").s().p("AkVBEIAAgBIBOgoIACADIg7A3gADTg8IANgXIAAgBIA2BGIgCADg");
	this.shape_5.setTransform(26.2,74.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFCB00","#E79800","#AF7300"],[0.408,0.765,1],-2.9,9.6,0.7,-10.6).s().p("AAiByIh1idIAyhLIAAABIB1DPIguAdg");
	this.shape_6.setTransform(20.3,76.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF1B4").s().p("ABpBhIgLgaIB1ihIACgDIA0gBIAAAuIh+CSIgEAEgAkGgvIgCgDIAIgzIAuAIIB7CVIADAEIgKAcIgcAHg");
	this.shape_7.setTransform(32.7,82.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AEGAHIAAgsIAAgBIBchvIAADCIhSgkIiICSgAjVgkIgugIIgBAAIhdhuIDCAjIgzBKIB4Ceg");
	this.shape_8.setTransform(33,77);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDC56").s().p("AkKAHIA8g1ICLCOIgiArgABlAuIBli4IBAAxIh1Chg");
	this.shape_9.setTransform(27.2,82.6);

	// Layer 13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BB7903").s().p("AhRgaIA1gcIBuAUIijBZg");
	this.shape_10.setTransform(42.1,91.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3A923").s().p("AhRgiIBtgUIA2AcIAABRg");
	this.shape_11.setTransform(25.6,91.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAE58E").s().p("AgsDhIgamTIAAgIIBNhCIBABLIgJGBIgCARIg1Acg");
	this.shape_12.setTransform(33.1,63.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F09D08").s().p("AhYgZIAAgBICxArIAAAIIimACg");
	this.shape_13.setTransform(17,43);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#E79800","#6B4600","#9C6700"],[0.18,1,1],-6.2,17.1,11.5,-1.6).s().p("AiACGIEAk4IAAEiIhPBDg");
	this.shape_14.setTransform(21,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhJFwIAJmBIhAhLIAAkkIEBE5IiwAtIAAAAIgbGbg");
	this.shape_15.setTransform(46.8,47.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFCB00","#E79800","#AF7300"],[0.408,0.765,1],-17.7,9.4,15,-16.1).s().p("AhlDbIABgRIAAARIAambIAAAAICwgtIhdHbg");
	this.shape_16.setTransform(49.4,64.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFDC56").s().p("AhgjRICngCIAaGTIhuAUg");
	this.shape_17.setTransform(18.8,66.7);

	// Layer 14
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABFG6IgFgOIg8AhIhDglIgEAMIhnAYIjBigIgGjnICPAZIgrjaIAAgFIAEgGIENlKIEXFUIgxDgICIgYIgGDnIjBCgg");
	this.shape_18.setTransform(33.4,52.1);

	// Layer 15
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.651)").s().p("AA0HkIgxAcIg5giIh9AdIjZi1IgIklICGAaIgni6IE4mBIE9GCIgqC9IB/gWIgHEjIjbC1g");
	this.shape_19.setTransform(33.4,50.4);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-0.9,81.1,102.7);


(lib.GemRed_03 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9393").s().p("AgwgcIBggSIgXBdIgYAAg");
	this.shape.setTransform(61.9,71.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF5151").s().p("AhcAzIB9iRIA8A4IiXCFg");
	this.shape_1.setTransform(64.1,91.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#790505").s().p("AgpAFIAYgdIAZAHIAiAqg");
	this.shape_2.setTransform(53.9,98.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C91F1F").s().p("AiPAAIAtAbIALAdIgZAfgABBhTIADgDIBMAqIAAAAIgTARg");
	this.shape_3.setTransform(60.9,90.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC9C9").s().p("AhIBeIgLgcIADgDIBvibIArgIIAKA0IgEADIh9CSg");
	this.shape_4.setTransform(59.4,86.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF8585","#E23232","#4E0000"],[0.38,0.678,1],3.1,9.9,-1.1,-10.8).s().p("AhNBcIBojVIAAAAIAzBNIhrCjIgDADg");
	this.shape_5.setTransform(54.3,80.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D21E1E","#4E0000"],[0.282,1],0.8,9.6,0.1,-3.5).s().p("AggA9IgJg0IAAgBIBThuIAADNg");
	this.shape_6.setTransform(71.1,75.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKgZIAVAAIAYhgIAAAAIBVgRIhVBxIAAABIgpAIIhxCag");
	this.shape_7.setTransform(63.3,78.8);

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9393").s().p("AgwgtIBhATIgwBIIgWAAg");
	this.shape_8.setTransform(21.3,71.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#790505").s().p("AgIgRIAZgHIAZAdIhTAUg");
	this.shape_9.setTransform(30.5,97.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF5151").s().p("AheglIA6g3ICCCOIggArg");
	this.shape_10.setTransform(20.1,90.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C91F1F").s().p("ABbA2IAJgbIAsgbIgcBVgAiPgrIAAAAIBJgpIAEADIg6A3g");
	this.shape_11.setTransform(23.1,89.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC9C9").s().p("AhRgsIgEgDIAIgzIAsAIIB0CWIACAEIgJAcIgbAGg");
	this.shape_12.setTransform(24.6,85.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#D21E1E","#4E0000"],[0.282,1],-0.2,9.4,0.1,-3.4).s().p("AgrhkIBXBsIgIA0IhHApg");
	this.shape_13.setTransform(12.3,75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AB8CFIh2iWIgqgIIhZhuIBVAQIABAAIAbBdIAVAAIABAAIB0Cig");
	this.shape_14.setTransform(20.5,78.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF8585","#E23232","#4E0000"],[0.38,0.678,1],-2.7,9.6,0.7,-10.6).s().p("AAhBzIADADIhziiIAAAAIAwhKIAAABIBvDPIgsAdg");
	this.shape_15.setTransform(29.5,80.3);

	// Layer 8
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA/giIgah6IAkB6IiRDAg");
	this.shape_16.setTransform(57,51.2);

	// Layer 16
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIgiIAjh6IgZB6ICHDAg");
	this.shape_17.setTransform(27,51.4);

	// Layer 19
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA1g1IAEgxIAOA6IiNCTg");
	this.shape_18.setTransform(61.7,86.9);

	// Layer 21
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASh9Ig3h+IBLBvIgaGHg");
	this.shape_19.setTransform(46.1,64.4);

	// Layer 22
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C91F1F").s().p("AhJAJIgBgHICVggIh6A9g");
	this.shape_20.setTransform(12.1,51);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF5151").s().p("AArBgIi3iIIB8g/ICdDPg");
	this.shape_21.setTransform(21.4,58.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9393").s().p("AhPhdICfAzIgrCIg");
	this.shape_22.setTransform(16.6,36);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FF8585","#E23232","#4E0000"],[0.38,0.678,1],2.1,12.6,-17.5,1.3).s().p("AhOgWIAHgZIAqiKIBsFyg");
	this.shape_23.setTransform(27.6,50.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ahch0IBFAWIBzC7IgHAYg");
	this.shape_24.setTransform(11.1,36.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#D21E1E","#4E0000"],[0.282,1],-13.2,6.7,-4.3,-9.1).s().p("AhYiEIAAgCICxDqIiVAig");
	this.shape_25.setTransform(10.7,37.8);

	// Layer 23
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF5151").s().p("AiIBmIgBAAIABgBICXjKIB7BFIisCGg");
	this.shape_26.setTransform(62.8,57.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C91F1F").s().p("AhKghICVAnIgCAHIgaAVg");
	this.shape_27.setTransform(71.8,50.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhcBaIB1i4IBEgUIiyDlg");
	this.shape_28.setTransform(72.9,35.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FF8585","#E23232","#4E0000"],[0.38,0.678,1],-2.4,12.8,17.2,2.2).s().p("AAbi3IApCMIAIAZIiXDKg");
	this.shape_29.setTransform(56.7,49.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9393").s().p("AhPguICfgtIh1C3g");
	this.shape_30.setTransform(67.4,35.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#D21E1E","#4E0000"],[0.282,1],13.1,7,4.3,-9.3).s().p("AhYBeICxjkIAAACIgdELg");
	this.shape_31.setTransform(73.3,38);

	// Layer 24
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FF8585","#E23232","#4E0000"],[0.38,0.678,1],65.5,42.2,76.7,0.4).s().p("AhAEVIAZmGIABgBIBni2IgVJRg");
	this.shape_32.setTransform(53.8,61.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C91F1F").s().p("AhPgbIAzgeIBrAUIieBfg");
	this.shape_33.setTransform(50.3,95.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#790505").s().p("AhPglIBrgUIA0AeIAABVg");
	this.shape_34.setTransform(34.2,95.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF5151").s().p("Ag/koIBnC2IAYGHIhrAUg");
	this.shape_35.setTransform(30.6,61.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9F9F").s().p("AgzDtIgXmHIBKhvIASAaIA5BVIgZGHIgyAdg");
	this.shape_36.setTransform(42.2,65.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#D21E1E","#4E0000"],[0.282,1],-11.5,6.7,11.6,-6.6).s().p("AhZAaICzjpIAAEwIhMBvg");
	this.shape_37.setTransform(33.2,29.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FFFFFF","#C69400"],[0.408,1],49.2,17,67.1,-1.8).s().p("AgkCMIAAkxIBJBiIg3Dpg");
	this.shape_38.setTransform(46,25.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9393").s().p("AhQBKIA5jpIBoCKIhnC0IgBABg");
	this.shape_39.setTransform(52.2,34.3);

	// Layer 25
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("ABDHIIgGgSIg9AlIhDgqIgFAQIhfAYIi4ikIgEjoIB3AYIiSh6IAAAAIggkpIDsBLICyjrICvDkIDwhDIgiEgIivCKICQgYIgGDnIi3Cjg");
	this.shape_40.setTransform(42.3,54.7);

	// Layer 26
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.651)").s().p("AAvHxIgvAcIg4gjIh4AeIjQi5IgGklIAZAFIgzgrIgklrIEGBTIC+j6IC8D1IEJhMIgpFlIhNA7IAygHIgIEjIjPC4g");
	this.shape_41.setTransform(42.3,53.9);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,1.1,90.7,105.6);


(lib.GemGreen_01 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipFeIAvlkIAAgBIAAmsICBCWIgBAAIhzEDIEXg+IkVBTIgCAXIgLGYIAAAKg");
	this.shape.setTransform(44.7,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#88E922","#5CAD19","#354F00"],[0.408,0.765,1],-10.5,10.5,10.6,-10.6).s().p("AiUCDIEplYIAAGrg");
	this.shape_1.setTransform(17.4,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#95F545").s().p("AkPAnID1gMIAAABIh7DegABmj5ICqDDIgGACIkXA7g");
	this.shape_2.setTransform(35.1,42.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#88E922","#5CAD19","#354F00"],[0.408,0.765,1],-15.4,9.9,14.4,9.9).s().p("AiOgxIACgYIEVhTIAGgCIi2E9g");
	this.shape_3.setTransform(48,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#63A60C").s().p("Ag8AsIAAgBIB5jcIgvFjg");
	this.shape_4.setTransform(26.2,63.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9AFF56").s().p("AgsjLIBlDQIhxDHg");
	this.shape_5.setTransform(38.3,68.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81D01A").s().p("AiUguIEpBRIjzAMg");
	this.shape_6.setTransform(17.4,42);

	// Layer 7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ak8haIE8lvIE9FvIk9Ikg");
	this.shape_7.setTransform(32.3,46.4);

	// Layer 8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.651)").s().p("Al2hiIF2m0IF2G0Il2J4g");
	this.shape_8.setTransform(32.7,46.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.8,-6.9,75,107);


(lib.Crystal = function() {
	this.initialize();

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBMQgCgCACgEQACgEAEgEIAIgFQAEgCABACQACACgBAEQgCAEgEAEQgEAEgEACIgDABIgDgCgADMA4QgDgDACgFQADgGAFgGQAGgFAGgCQAFgCADACQADADgDAFQgCAGgGAFQgFAGgGACIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAisA4QgDgDACgFQADgGAFgGQAGgFAGgCQAFgCADACQADADgDAFQgCAGgGAFQgFAGgGACIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgABAA3QgDgDADgHQACgGAGgGQAGgGAHgCQAGgDADADQADADgDAGQgCAHgGAFQgHAHgGACIgFABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAGeA2QgDgBgBgGQgBgGACgIQACgHAEgFQAEgFADABQAEABABAGQABAGgCAIQgCAHgEAFQgEAEgDAAIgBAAgAgtAvQgCgCACgEQABgEAEgEQAEgEAEgBQAEgCACACQACACgCAEQgBAEgEAEQgEAEgEABIgDABIgDgBgAlkAtQgCgDACgFQACgGAGgGQAFgFAGgCQAGgCADACQACADgCAFQgCAGgGAGQgGAFgFACIgFABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAomAAQgCgCADgEQACgEAFgEQAFgFAFgBQAFgBABACQACACgCAEQgCAFgFAEQgFAEgFAAIgEAAIgDAAgAIWgDQgEgBgBgHQgCgIADgJQACgJAFgGQAFgGAEABQAFABAAAIQACAHgDAJQgCAKgFAFQgEAGgEAAIgBgBgAoHgSQgFgGAHgMQAGgNAOgLQAOgLANgEQAOgEAFAGQAFAGgHAMQgGAMgOAMQgOALgOAEIgIACQgHAAgDgEg");
	this.shape.setTransform(129.2,-46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.4,4.2,2.2,-3.8).s().p("AgLA4IAAAAIgFgJIgBAAIgCAJIgmAAIAAgBIAHgZIAEgSIAIghIABgCIgBgEIgGgPIAAAAIgBgGIAPgCIABAAQAMgCANAAIACAAIACgCIACgCQALAaAOAaIAJAQIAWAtIhFgBgAgcglQgEAFgCAIQgCAHABAGQABAGADABQAEABAEgFQAEgFACgHQACgIgBgFQgBgHgEgBIAAAAQgEAAgDAEg");
	this.shape_1.setTransform(173.9,-40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-4.2,4.3,4.3,-4.2).s().p("AgQBhIgTgBQgHgWgFgXIgFgWQgJgvACgsQAQgPATgJIAAAAIAAAAQARgIASgDQATA/APBCIAEATIALAwIhMgCgAgwhAQgFAGgCAJQgDAKACAHQABAIAEABQAEABAFgGQAFgGACgJQADgJgCgHQAAgIgFgBIgCAAQgDAAgEAEg");
	this.shape_2.setTransform(187.9,-43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2,7.5,2,-7.4).s().p("AgEAzIhAAAIgGAAQgDgKACgMQADgKAGgKIAJgNQAMgQARgMQAPgMAQgEQAQgEASAFQAKAEAJAHQAIAHAIAIIACANIACANIAAAEIABARIAAABIgBAJIgIgCQgIgCgKgBQgNgCgKAFQgLAEgFANIgPAAgAgmgDIgIADQgEAEgBAEQgCAEACACQACACAEgBQAEgCAEgEQAEgEABgEQACgCgCgCIgDgBIgDABgAgGgjQgGACgGAGQgGAGgDAGQgCAHADADQACACAHgCQAGgCAGgHQAFgFABgHQADgGgDgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgFABg");
	this.shape_3.setTransform(138.5,-39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-1.7,6.4,1.7,-6.4).s().p("AAUA1IgxgBIAAgPIAAgLIgLABIgbADIgQACIABgWIAAgHQACgPAGgQQAUgNAZgGIgBAAQAagHAYACQAYACAWALQAIARAFATIAAgBIADAOIADAPIgPAAIgZAAIgLAAIABALIABARIgQAAgAg4geQgGACgGAFQgGAGgCAGQgCAFADADQACACAGgCQAGgCAFgGQAGgFACgGQADgFgDgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgEABg");
	this.shape_4.setTransform(157.4,-39.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-5,1.8,3.3,-6.5).s().p("AhXAkIAIgZQAKgYAPgYQAIgFAJgDIABgBQAJgEAKgCIAUgDQAKgBAKABIAAAAQAJACAIAEQAHADAHAHIAAAAQAJAHAHAJIANAUIAFAIIADAGIABADIACAFIAAADIAAAMQAAAKgDAKIgCAAIgpAAIgPAAIAAgEIAAgCQgDgMgIgFIgBgBQgIgFgKgBQgGgBgIAAIgIABIgBAHIgGAYIgoABIgbABIAGgVgAgqgpQgGACgFAGQgGAGgCAFQgCAGACACQADADAGgCQAFgCAGgGQAGgFACgGQACgGgCgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgFABg");
	this.shape_5.setTransform(99.7,-39.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-5.1,4.6,-1.9,-7.2).s().p("AhFAzIgDgIQgHgRgEgRIgBgEQgEgNAAgRQASgJASgGQAPgGAQgEQACAUAFAVIAEASIAJAgIABAKIg7AAIgKAAgAg/ggQgGACgGAFQgFAGgDAGQgCAFADADQACACAGgCQAGgBAFgHQAGgEACgHQADgFgDgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEABgAAQAqIALghIAFgPIAAAAQAGgUADgUIAXADQAMAEAMAFQABARgEARIgDAJQgEAPgIAQIgEAKIg1ABgAA4ghQgEABgEAFQgEADgBAFQgCADACACQACACAEgCQAEgBAEgEQAEgEABgEQACgEgCgCIgCgBIgEABg");
	this.shape_6.setTransform(120.2,-39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-7.6,9.4,12.6,-10.8).s().p("Ah1BOIADgOIAAgBIABgFQAFgUAMgTIAHgKIAAgBQAQgXAXgVIAAAAQAWgWAYgQQAVgTAagJQASgHAQAAIAKABIAAAAQASADAMAOQAEAVgCAWQgCAVgEAVQgPgCgRACQgWAEgVAJQgWALgPATQgGAJgFAMQgEAMgCAOQgDAMgBALIgEAAIheADQgBgQACgQgAgaghQgEABgFAFQgFAEgDAEQgCAEACADQACACAEgCQAFgBAFgEQAFgEADgFQACgEgCgCQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgDABgAAjhYQgOAEgOALQgMALgGANQgHAMAGAGQAFAGALgEQAOgEANgLQAPgMAGgMQAHgMgFgGQgDgEgHAAIgJACg");
	this.shape_7.setTransform(78.6,-44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],129.9,1.5,129.9,-24.8).s().p("AgfA5IgIgjIgDgQIAQAEQAMACALgEIAAAAQALgEAFgOIABgBIAAgBQABgJgDgGIBAgBIABACIABAIIgBANIAAgBQgEANgHANQgKAMgLAJQgTAOgWAEIgMACQgMAAgLgEgAjJAOIABgsIBCABIgGAoIAAgBIgJApIgcAGIgYADIAAgugADGA7QgIgugEgqIBAgCQAAApgEArQgMAEgNABIAAAAIgOABIgJAAgAJRA6QgagBgagNQgVgsgSgrIBYgGIAHAkIACAKIAKgDQAZgHAYgKIAAAAQAOgHANgIIAAAXIgCAkQgRARgVAKQgWAKgbAAIgDAAgAFMAuQgNgHgLgJQgFgeABgbIAAgFQAAgBABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIApgDIAAACIgBAKIAAALIAKAAIASAAIATgBIAPAAIgGgOIgDgIIBAgDQAKAfADAeQgMALgOAIIABAAIgYANIgBgGIAAgBIgGgUIgCgIIgJACIgZADIAAgBIgZABIgKAAIAAAKIAAARIAAADIgQgHgAm9AvQgMgCgKgFQgEgoACgrQBEAEBDADIABACIARAVIAMANIgXAWIgTAWIgUgdIgdgiIgNgQIgFAVIgFAiIAAgBIgFAdQgLAAgLgBgApmAiQgOgIgMgNQgNgNgIgNIAAABQgPgYgIgYIBpAJIAEAFIABAAQAPAQAXAEIAAAAQALACALgCIgLAVIgZAnQgRAIgPAAQgSAAgOgIg");
	this.shape_8.setTransform(136.3,-23);

	// Layer 10
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AFsDKIAAgLIgBgLIABAEIAAASgAHcBbQgLgjgQghIgUgmIgLgXQgQgegMgcIgIACQgDABgEACQgNAAgNACIgZAEIgBgGIAagFIAagCIAHgDIAIgDQAMAeAQAeIAOAdIARAgQAQAhALAiQAMAlAEAnIgBAAQgEgjgLgigAjNCUIABgwIAAAAIgBA3IAAgHgAgTCNIgSgFIgBAAIgLgFIgCgIIANAGIABAAQAIADAKACQAKACAIgDQAHgDADgKIABAGQgEALgHADQgFACgGAAIgHgBgAkuB3IgRgUIAEgCIANAQIARAVIgDADIgOgSgAJGgPIgFgWQgQhIgVhEQgaADgWAKQgXALgRASIgBAUIABgbQARgRAXgLQAWgLAagDQAVBEAQBJIAGAcIAdCEQAZgHAWgKQAWgKAUgOIAAAGQgUAOgWALQgWAJgZAIIgeiLgAEsBqQABgfAGgdQAGgcAHgZIACgIIAJgnIABACIgIAlIgEAPQgHAZgGAcQgGAdgBAeIgBAIIABgOgABcBtQgHgPgKgNIgTgZIgHgMQgDgGABgIIACAHIAHAMIATAZQAKANAHAPQACAHAAAHIAAACIgCgJgAFpBzIAAgHIASAAIAQAAIADAGIgTABIgSAAgAnZBXQADgtANgqIAFgPQAMgiATgeQAKgHALgDQAKgFALgCIAXgEQAMgBALACQAKABAJAFQAJAEAIAIQAJAHAIAKQAHAKAHALIAFALIAEAJIACAHIAAABIABADIAAAHIgBgEIgCgGIAAgBIgEgJIgFgLQgHgMgHgJQgIgKgJgIQgIgHgJgFQgJgEgKgCQgLgBgMAAIgXAEQgLADgKAEQgLAEgKAGQgSAcgLAeIgHATQgNAsgDAtIgBAPIABgVgAoRBnQgTgDgNgOQgOgOgEgTQgDgLABgLQAAAIACAHQAEAUAOAOQANAOATADQATACAXgKIgFAJQgPAGgOAAIgIgBgAl/BBQAKgDALgHQAMgGAIgKQAGgIABgKIAAABQABANgIALQgIAKgMAGQgLAHgLADIABgHgAEFAHIABAAIACArIgDgrgAq7gFIACgKIABgFQAIgfATgbQARgaAYgWQAXgWAXgRQAZgTAbgKQAUgHARAAIAMABQAXADAPAUQADASAAATQAAgQgDgPQgPgTgXgEIgMgBQgRABgUAHQgbAJgZAUQgXAQgXAXQgYAVgRAbQgSAagIAeIgBACIgDAOIgBARQAAgMABgLgAibgPIgFgXQgFgYgDgaQgVAFgWAHQgVAIgUALIgBAEIABgLQAUgLAVgIQAWgHAVgFQADAZAFAaIAHAdIAGAVIAIgVIAIgbQAHgYADgXQARAAARAEQAQADAQAIIAAAQIAAgKQgQgGgQgEQgRgEgRgBQgDAYgHAZIgGATIgKAbIgIgbgAg6gFIAEgKQAHgPAKgNQANgSARgNQAPgMAUgGQATgEAVAHQAMADAKAIIASASIABACIADAQIACAPIAAAMIAAAGIAAgGIAAgGIgCgPIgDgPIgBgCIgSgRQgKgJgMgEQgVgGgTAEQgUAFgPANQgRAMgNATQgIAKgFALIgIAPIAAAFIAAgKgAB5gPIACgQQACgUAGgSQAYgPAbgIQAbgGAbACQAcACAaAOQAKATAFAUIAEAaIADAQIgBAAIgDgQIgDgSQgFgWgKgTQgagNgcgCQgbgCgbAGQgbAIgYAOQgGATgCAUIgBAJIgBAUIAAgUg");
	this.shape_9.setTransform(135.7,-37.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFF00","#FF9900"],[0,1],59.1,-16.8,58.4,13.1).s().p("AAXDBQgdAAgegQQgdg8gVg8QgRgtgJgrIgEgUQgIgpAAgnIABgUQARgRAXgLQAWgKAagDQAVBEAPBIIAEAVIAfCLQAYgHAXgKQAWgKAUgOIgBARIAAAYIgCArQgSAUgaALQgYALgdAAIgCAAg");
	this.shape_10.setTransform(193.4,-35.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFF00","#FF9900"],[0,1],113.7,-14,113.7,11.9).s().p("AgqCUIgBgDIgJglIgHgjIABAAIALAGIACAAIASAFQAJABAJgCQAJgDABgLIAAgGQgBgFAAgEQgEgHgFgFIgVgWQgKgLgJgKQgJgMgFgNQgFgLABgNIABgFIAHgSQAGgLAHgKQANgSASgMQAPgNATgFQAUgEAVAGQALAEAKAIIATASIAAACIADAPIACAPIABAFIAAAGIAAAMIgCAXIgFgCIgHgCIgGgCIgTgEQgKgBgIAEQgIADgCALQgBAHADAHIAGALIATAYQAKANAHAPIACAJIABAEIgCANQgEARgJAOQgKAOgNAKQgUAPgZAFIgOACQgQAAgPgHgAjWCUIAAgyIACg3IgBAAIgQgoIgQgmQgIgTgEgTIAAgBQgEgSAAgSIAAgEQAUgLAWgIQAVgIAWgEQACAZAGAZIAFAWIAIAeIAKgeIAGgTQAHgYADgYQARABAQAEQARADAPAHIABAKQAAARgEARIgCAIQgFASgIASIgWAqIgWAtQgDAXgEAXIgKAvQgRAFgSADQgSADgSABIAAgHgAC6CYQgQhogDheIgcADIgbAEIAAgHIAAgEIABgXIABgIQACgUAHgTQAXgPAbgHQAbgHAcACQAcACAZAOQAKATAGAVIADASIACATIABAHIgZgBIgZAAIAAAAIADArIgBBrIgCArQgQAFgRACIgRABIgRgBgAFECKQgOgIgOgLQgFgcAAgcIAAgIQACgeAGgbQAFgcAIgbIAEgQIAIgkIgBgDIgFgNQgDgJAAgIIAAAAIAagEQANgCANAAQADgDAEAAIAHgDQANAdAPAeIALAWIAUApQAQAgALAiQAMAhAEAkIAAAGQgOANgRALQgRAKgTAIIgEgTIgFgTIgaADIgaABIAAAGIAAALIAAALIAAACIAAAAIABAEQgQgEgQgJgAFjAWIgCAdIgBAGIATAAIASAAIgDgGIgMgdQgHgRgIgNIgEAegAl5BpIgcgjIgGAjIgGAkQgQABgQgCQgQgCgNgIQgEgZAAgaIAAgcIABgPQADgrANgsIAHgWQALgdARgcQAKgGALgEQALgFALgCIAXgEQALgBALACQAKACAKAEQAJAFAHAHQAJAIAIAKQAIAJAGALIAGALIADAJIABABIACAGIAAAFIAAAFIAAAEIAAADQABAUgJASQgKAPgOAOQgNANgQAJIgDACIAQAVIAOASIAEADIgdAeIgdAfIgagngAl7gyIgHAhIgGAZIgBAHQALgDAMgHQAMgFAIgKQAHgKAAgNIgBgBQgCgHgFgEQgGgEgHgBIgKAAIgFAAg");
	this.shape_11.setTransform(136.6,-31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.502)").s().p("AgxAnIgBgBIgBgBIAEACgAA0glIAAgBIAAABg");
	this.shape_12.setTransform(138.1,-30);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFF00","#FF9900"],[0,1],185.7,-17.9,186.5,14.9).s().p("AgGDCQgTAAgQgJQgRgKgMgOQgNgOgKgPQgVgkgKglQgFgUAAgVIACgRIADgNIAAgDQAIgdASgaQASgbAXgVQAXgXAYgQQAXgUAagJQAUgIASAAIAMABQAXADAPAUQACAPABAQIgBARQgCAagGAaQgSgEgVADQgUADgUAKQgUAKgNASQgGAHgDAIQgFANgBANQgEALAAAKQAAALACAKQAFAUALAOQAOAOASADQASADAUgIIAEgCIgXArIgaArQgVAMgQAAIgCgBg");
	this.shape_13.setTransform(78.6,-37.2);

	// Layer 12
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjbDmQgIgEgEgHQgEgHAAgIIAAg5IAAgBIABgxIgNgfQgJALgKALIAAgBIgKAKIAOAQQAIAJgBALQAAAMgJAIIgcAdIgbAfQgHAHgJACQgJADgJgEQgJgEgGgIIgKgQIgBABQgBALgIAHQgIAIgLAAQgTABgSgCIgBAAQgXgEgSgLQgFgDgEgGQgEgGgBgGIgBgLIgKARQgEAIgIAEQgdAPgagBQgbAAgWgNQgWgMgQgTIABABQgPgQgKgQIgBgCQgYgogLgpIAAgBQgIghAEggIAAgBIAEgTIABgCIABgDQAJghAUgdIAAAAQATgdAagYIAAgBQAZgXAZgSIgBABQAdgXAfgLIgBABQAagKAWAAIARACIgBgBQAjAFAXAdQAEAGACAHQAEAbgBAdIgBABIgBAJIABgBIgBABQANgFANgEIABAAQANgDAOgBQAOgBAPACIACAAQANADANAGIABAAQAMAHALAJIAAABIANAMQAVgLAWgIQAXgJAYgFQAIgBAIACQAJAEAFAGIACADIACgCQAJgHALAAQAUABAUAEIgBAAQATAFATAIQAHADAEAGIAIgGIgBABQAWgRAYgGQAbgGAcAIIADABQAQAGANALIABAAIAGAFIAAAAQAcgRAfgIQAggIAgACQAgADAdAOQAHgJAKgCQAPgDAPgCIgBAAIAWgCIAKgDIACgBQALgEALAFQALAEAFALIAEAJQgBgTACgTQAAgLAIgIQAVgVAcgNQAagMAfgEQALgBAJAFQAJAHADAKQAWBFAQBJIAFAVIAAABIAYBqIAMgFIAAAAQATgJASgMQAJgHAMABQALACAIAIQAHAJAAALIgBArIgBApQgBAMgHAIQgXAYgfAOQggAPgkgBQgmAAgkgTQgJgFgEgJIgGgMQgOAMgPAKIgBAAQgTAMgVAIQgIAEgJgCQgIgBgHgGQgGgGgCgJIgCgFQAAAIgFAGQgFAJgJADQgKAEgJgDQgTgFgTgLQgOgHgNgKIAAAAQgBAJgFAHQgGAHgIADQgUAHgUACQgUADgVgEQgJgBgHgHQgHgHgCgKQgOhYgEhTIgNACQgGAGgIACQgKADgJgEIgFgCIgCgBIgCgBIgDgBIgCAAIgBgBIANARIgBAAQAMAQAJASIAAABQAFAMAAANIAAACQgBAKgCAIIABgBQgFAYgNASIAAgBQgMATgRAMIAAABQgaATgfAHIgBAAQgLACgIAAQgWAAgVgJQgGgDgFgFQgEgEgCgGIgBgDIgBgDIgJglIAAgBIgHgjQgDgLAGgKQAGgKALgEQALgDAKAEIgEgEIAAAAQgMgMgKgOIgBgBIgDAFIAAAAIgUAoIgGAqIgLAwQgCAIgFAGQgGAGgHACQgTAGgUADQgTAEgUABIgBAAQgIAAgGgEgAgXBlIgEgBIABAAIABABIACAAgAoNBBQALACANgGQAFglAKgiIAAAAQAEgMAFgMIAAgBIAGgQIgMABQgQACgPAIIAAAAQgOAHgIAMIgCABIgEAIIgBABQgEAJgBAIIgBAEQgEAOADANIAAABQACALAIAIIAAAAQAGAHAJABgABMAXIAAgBIAAABIAAAAg");
	this.shape_14.setTransform(135.7,-36.3);

	// Layer 11
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AjlD4QgMgHgHgMQgHgLAAgOIAAgfIgXAXIgaAdQgLANgPAEQgQAEgPgGQgJgEgHgHQgMAKgQABQgWABgUgCIgBAAQgbgEgVgOQgGgDgEgFIgHAFQgjATgfgCQgfgBgbgPIAAAAQgYgNgSgUQgQgRgLgSIgBgCQgZgrgMgrIgBgCQgIgkAEglIABAAQABgMADgKIABgDIABgDQAJgjAWggQAVggAcgZQAZgYAZgTIABAAQAfgYAggLIABAAQAdgLAZAAIATACIABAAQAqAGAcAjQAHAKACAMQAEAUAAAVIABAAQAOgDAPgCQARgBAQACIADABQAQADAQAHIAAAAQAPAIANALIAFAFQAFgEAHgDIATgIIAAAAQAZgJAZgFQAOgDANAFQAHACAFAEQAJgEALAAQAWABAVAFIgCgBQANADAMAFQAKAEAHAIQAagTAagHQAggHAiAKIAEABQARAHAOAKQAZgNAbgHQAjgJAkACQAdACAbALQAHgEAJgDQAPgDAPgCIABAAIAUgCIAIgCIABgBQAPgFAPAEQADgPALgLQAXgXAfgPQAdgOAjgEQASgCAPAKQAPAKAFARQAWBGARBJIAFAWIAAAAIASBSQAMgGALgIQAQgLATACQATADAMAOQANAOAAATIgBArIgBAqQgBATgNAOQgZAbgjAQQgjAQgqgBQgpAAgpgVQgKgFgGgIIgNAIIgBABQgVAMgWAJQgNAGgOgDQgMgCgJgHQgGAEgHADQgQAGgPgFQgWgGgUgLIgBAAIgJgFQgIAKgOAFQgUAHgVACQgYAEgZgEQgQgCgMgMQgLgLgDgRIgIg4QgGATgLAPIAAAAQgOAVgTAOIAAABQgeAWgjAHIgBAAQgNADgKAAQgaAAgZgLQgKgEgHgIQgIgIgDgKIgBgDIgCgEIgBgHIgBAEQgDANgJAKQgKAKgNAEQgUAFgUAEQgVADgVACIgDAAQgMAAgLgGgACAA/IAAAAIAAAAgAoJAuIACgBQAFgfAJgdIAAgBIACgHIgCABIAAAAQgJAFgGAHIgCADIgCACIgBADQgCAEgBAGIgCAHQgCAJABAIIAAABQACAGAEAEIgBAAIAFADg");
	this.shape_15.setTransform(135.7,-36.3);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(60.6,-61.7,150.3,50.9);


(lib.Casters = function() {
	this.initialize();

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkSA1IgCgBQgCgCACgEQACgFAEgEQAEgEAEgBQAEgCACACIAAAAQACACgCAEQgBAEgEAEQgFAEgEACIgDABIgBAAgAhLApIgCgCQAAgDABgEQADgGAGgHQAGgGAHgCQAGgDADADQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBAFQgDAHgGAGQgGAGgHADIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgACYAoIgCgBQgCgDACgHQADgGAGgGQAGgHAHgCQAGgDADADQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIgCAEQgCAHgGAGQgHAGgGADIgGABIgCAAgAmlAhQgDgDADgGQACgGAHgHIAIgGIAFgCQAGgDADADIAAABQADACgDAGQgCAHgGAGQgHAGgGADIgFABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAFnAhQgDgDADgHQACgHAHgHQAHgHAHgCQAGgBAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABABABIgCAFQgDAHgGAHQgHAHgHACIgGACQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAJNAiIgBAAQgCgCAAgEQABgFACgFQADgFAEgCIADgCIADAAQACACAAAEQgBAFgDAFQgDAFgDACIgFACIAAAAgAj6AdIgBgCQgBgDACgEQACgGAGgHQAGgGAHgBQAGgCADACQACABAAAEIgBADQgDAHgGAGQgHAGgGADIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAqTAWQgCgBACgEQACgEAEgDIAJgFQAEgBABACQACACgCADQgCAEgEADQgFAEgEABIgDAAIgCgBgAJoAPQgGgEABgLIADgJQACgIAFgJQAIgNAKgIQAKgHAGADQAFADABAIIAAAFQgCANgIAOQgIAMgKAHQgHAFgFAAIgFgBgAp5AHQgEgFAEgGIABgDQAFgKAMgKQAMgJALgDQAMgEAEAFQACACAAADQAAAFgEAGQgFAKgMAKQgLAHgMADIgIACQgFAAgCgDg");
	this.shape.setTransform(293.5,-48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.5,6.2,1.4,-8.4).s().p("ABhA9Ig3gBIgCgGIgBgEQgGgJgHgFIgGgDQgKgFgKgBQgKgCgJABIAAAAQgDAAgDACQgEACgBAEIgBACIAAADIAAABIACATIgMAAIhBgBIgBgTIAAgBIAAgCQgBghAHgeQADADAHgDQAHgCAHgHQAGgHADgHIACgFIADgBIABAAQAMgDANgBQALgBANACIgBgBQAMACAJAFIAJAEQAGADAFAFIACABIABAAIAUAQIAAAAIADADQAMAJALAMIADACIAAAAIAHAIIABAAIAHAKIADAFIABABIACAEIAEAMIAAACQADAJABAIIgLAAg");
	this.shape_1.setTransform(339.7,-42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-5.4,9.4,5.4,-9.3).s().p("AgPBUIg0gBQgNgKgJgMIAAAAIgCgCIgCgCQgJgMgEgQQAAgSAGgQQACABADgDQAEgCADgFQADgFAAgFQABgEgDgCIgDAAQAFgJAHgIIADgDIgDAKQgBAMAHAEQAGADAKgHQALgHAIgOQAHgOACgNIAAgFQATgGAVADIABAAQARADAPAIIAAAAQAQAIAOAJIAKASIAJASIAAAAQAGANAFAMIADAJIgJgBQgNgCgPABQgSAAgLAHQgSAJADAXIAAACIABAEQADAKAIAIIAKALIhAgCg");
	this.shape_2.setTransform(362.6,-44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-3.6,6.3,3.7,-6.3).s().p("AgSA6IgQAAIAAgOIAAgBIgBgFIgBgCQgCgDgDgBQgDgDgFABIgeADIgBAAIgRACQABgPACgOIAAgBQADgMAEgNIABADQADADAHgDQAHgCAGgGQAGgHADgGIABgFQALgFAMgDQAegIAdADQAcACAaAMQAIATADAUQADAOABARIgQgBIgdAAQgHAAgCAEQgDADgBAEIAAADIAAARIg6AAg");
	this.shape_3.setTransform(294.6,-42.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-3.7,6.5,3.8,-6.4).s().p("AgTA6IhCAAIAAgMIAAgIQABgeAGgbQADABAFgCQAGgCAHgGQAGgGACgHIACgFIAPgFIAAAAQAZgIAZACQAXACAXAMQAIATAGAUQAEAOADAQIghAAQgYABgZADIgBAAQgCAAgEAEIAAAAIgCAEIgBAFIABAPIgNAAg");
	this.shape_4.setTransform(316.7,-42.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.8,3.9,2.6,-5.5).s().p("AgzAlIAAgBIABgBIAAgBIAdg2IAAAAQACgEgBgDIgBgRIAAgCIgBgGIAUgDIgIAGQgHAHgCAGQgDAGADADQADADAHgCQAHgDAEgGQAGgGADgHQACgGgDgDIATgBQADAAACgBIAAAAIABgBIACAAQAFAaAHAcIALAqIAGAXIgIAAIhAABIgqABIgRAAIAOgYg");
	this.shape_5.setTransform(253.3,-42.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-3.6,6.5,4.1,-6.8).s().p("AhVA+QgDgJABgKIABgDQAGgVANgSIAEgFIAFgBQAEgBAEgEQAEgEACgEQABgFgBgCIgBAAIAFgEIABACQADADAHgDQAGgCAHgHQAGgGACgGIABgEIAJgEQATgHAWAEQALACAKAHIACABIAAAAIAQAMIADAOIADAQQABAJAAAMIgBAKIgIgBQgKgBgMAAIgBAAQgOABgMAGQgIADgFAIQgEAGgCAIIAAADIAAAEIgtAAIgrABIgJAAg");
	this.shape_6.setTransform(272.4,-42.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-8.8,8.9,8.9,-8.8).s().p("AhwA0QAGgKAHgKIABgCQARgXAXgSIAJgIIATgPIAVgPIACgCQgEAJAEAEQAEAFAJgDQAMgDALgKQAMgKAFgKQAEgGAAgEQAVgGATADIABAAQASACANANQAEAUgCAWQgCATgEARQgQgCgRADIgBAAQgYADgXALIgRAJQgLAIgIAJIgBACIAAACQgKALgFAOIgiABIhKACQAEgRAHgPgAgSgoIgJAFQgEAEgCADQgCAEACACQABACAEgCQAEgBAFgDQAEgEACgDQACgEgCgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_7.setTransform(230.9,-44);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],96.2,2.9,96.2,-19.1).s().p("AKxBBIgWgCIgMgUIgBABIgOgYIgBAAIgKgRQAJABAMAAQAQABAMgFIABAAIACAAQAPgIACgWIAAAAIAAgCIAAgCQgDgJgHgIIBZgIIACABQAEAFACAGIADAPIAAAEQACAQgFANQgGAQgKAMIgBABQgTAUgcAKIgCABQgOAEgQAAgAq2A5IgFgCQgQgIgMgMQgOgMgJgNQgYgegKghIAAAAIgDgLIBlAJIACAEIAGAXIAEAAQAFAIAIAHIACACIABAAQAHAGAKAEQAKADAMACQAJACAKgBIAAAAIgIANIgZAlIgIAEQgOAEgLAAQgPgBgNgFgAg0A8QgFgrgCgpIBEABQgDAlgGAoQgMAEgOABIgUABIgGAAgAktA6IgKgiIgFgPIATACIAAAAQANAAAMgFIADgBQAOgFAGgRIAAgBIAAgDIAAgHIBHACQgBAPgLAPQgLANgNALQgVASgZAIIAAAAQgPAFgOAAIgMgBgAobAxIgCgBQgJgGgJgIQACgfAKgbIAAgBIAAgBIAGgRIArADIgDAKQgCAEACAFIAAgBQABADADADIAAAAIAAAAQADADAEAAIAWAAIAVAAQAEAAACgCIACAAIABgBIACgEIABgBIAAgBIABgGIgCgIIBLAEQAAAagFAbQgSALgTAKIgBABIgaALIAAgBIAAgVQAAgFgDgCIgFgEQgEgCgEABIgcADIgBAAIgdACQgEAAgEACIgBACIgBAAIAAAAIgCAFIgFARIAAABIgBAFIgRgIgAC2A4QgVgDgTgLQgMgigIggIBDgBIACAgIAAABIACAFIABABIAFAEIABAAIAGABIAAAAQAWgDAXgGIABAAIAXgHIgDAKIABAAIgHAaQgSAKgVAEQgPAEgPAAIgPgBgAGLAxQgPgCgOgGQgRgkgLgiQBKgDBLgFIACAEIABAAIAaAWIATAOIgQAWIgOAVIgRgRIAAAAIgQgOIgtglIAAAAQgDgCgEgBQgFgBgDADQgDABgCADQgCAEABAFIAAAAIAEAaIACAKIAEAYIgVgBg");
	this.shape_8.setTransform(297.3,-23.8);

	// Layer 10
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFF00","#FF9900"],[0,1],67.9,-16.3,67.9,10.6).s().p("AgxCkIgFg7IgEiYIAAgBIgBgCIgCgCIgDAAIgfADIAAAAIgbAEIAAgGIAAgCQABgRADgQIAAAAQAEgWAIgUQAbgQAfgHQAggJAdADQAfACAdAPQAKAUADAXQAEATAAATIABAFIgZgBIgdAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIAAAAIgBACIAAABIgBBHIgBAeQgEA0gHA2QgSAFgPACIgVABIgOgBgAoUCYIAAAAQgNgIgLgLIAAgFQACgfAKgeQAKghAQgfQAOgbAPgdIACgDIAAgBIAeg6IAAgCIAAgEIgCgOIAAgBIAAgFIAAgBIAAgBIABgHQAOgDAPgCQAPgCAQAAIACgBQAEgCAEAAIAAAAIAFgCQAGAfAHAfIAMAvIAFAYQAJAiACAmIAAAOIAAAOQgBAZgEAaQgUANgVALIAAAAIgnARIAAgGIAAgIIAAAAIAAgGIAAgPIgBgCIgCgCIgDAAIgdADIgfACIgDABIgBACIgEASIgEAOQgOgFgNgHgAnEgIIgCACQgJAQgGATIAAAAQgHARgFATIgBACIAAACIABADIACABIAXAAIAUgBIADAAIABgCIABgDIgBgDIgGgjIgHgiIgCgCIgDgCIgCABgAkoChIAAgBIgBAAIgLgmIAAABIgIgdIACAAIAEACIACAAIABAAIAWACQALAAALgFIABAAQALgFAFgNIAAgCIAAgEQgBgIgFgGIAAgBQgFgHgHgFIgYgUIgYgVIAAAAQgLgKgGgNQgFgMAAgOIAAgEIABgBQAHgWAOgVQAPgWATgQQASgQAXgIQAVgIAYAEIAAAAQANADAMAHIAAAAQAKAHAKAJIABABIAEAQIACAQIABATIAAABIAAAFIAAAUIgBAAIgIgCIgIgBQgKgBgMAAQgNAAgKAGIgFADQgHAGgDALIAAAAIAAABQAAAJAFAIIAAAAIAIANIAAAAIAXAWQALAMAJAOIACAKIAAACQgBAHgBAHIABAAQgEASgKAQIAAgBQgKAQgNAMQgXATgbAJQgPAFgQAAQgJAAgKgCgADACgQgYgEgVgMQgRgwgKgwIAAAAQgIglgBghIAAgWIAAgGIAAgDQABgnAJgmQAWgOAagIQAagIAcADQAbABAZAPQAKAUAHAXQAFARADATIABAGQgWgBgWABQgYABgXACIgDACIgBACIgBABIACAXIACAXIABACIABAAIADABIBEgHIAAATIAAAFIgBAdIghAIIgkAGQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBACIAAACIACAlIABACIACABIACABQAWgEAXgGIABAAIAhgLIACAAIgFAZIgIAeQgUALgYAGQgOADgQAAIgSgBgAHdB1IABAAIgtgnIgDgBIgDABIgBACIgBACIAHAnIgBAAIAFAcIABAGQgQAAgPgCQgTgCgQgIQgXgxgOgyQgOgvgCgvIAAgBIAAgCIAAgKQAAgnALgkQAIgGAKgEIABAAQAKgFAMgDIAAAAIAagEQAMgBANACQAMACAMAFQAMAFALAIIABAAQANAJANALIAAAAQALAKAMANIALAMIAHAKIAGAIIgBgBIACAFIAEAOIAAAAQAEALABALQAAAIgBAIQgFARgLAPIgBAAQgLAPgQAKIgBACIAAABIgBACIACADIAaAWIAWASIADACIgVAdIgTAdQgUgUgVgSgAGfg3IgCABIgBABIgBABIAAAAIAAACIAEAlIAFAkIAAACIADACIADgBQAMgEALgHIABAAQALgIAHgKQADgIAAgKQgBgFgCgGIAAgBQgHgLgJgEQgGgDgHgCIgFgBIgPgBIgEAAg");
	this.shape_9.setTransform(296.2,-33.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFF00","#FF9900"],[0,1],66.8,-12.7,66.8,12.8).s().p("AKWC5IgBgCQgPgWgNgWIgUgiIAEACIAFABIABAAIABAAQAMACAPAAQAPABALgGIABAAQALgGACgRIAAgBIAAgBQgEgLgJgIQgJgIgKgFIglgYQgUgMgRgMQgSgMgNgQIgEgGQgIgNgEgPIAAgEQABgYAKgWQAIgYATgTQAQgSAYgIQAYgJAdAEQASAEARAIQAQAIAQALIABABIAKASIAJATQAHANAEAPIAEAOIABADIACAFIgBAAIgLgCIgKgBQgMgCgPAAQgOABgLAGQgKAGgBAMIAAAGIAAABIADAGQADAGAFAGIAOAOIABAAIAkAaQAUAOAPARQAGAHACAHIADAQIABAFIAAAFQABAPgFAOQgHASgLAOQgVAWgeAKQgQAGgTAAQgOAAgOgDgAqZC6QgUgBgQgIIAAAAQgRgIgOgNQgOgNgJgNQgZgigLgiQgHgUABgVIAAgHQAAgKADgHQAEgQAHgPQAGgNAJgMIAAAAQASgZAYgWQAYgVAagRQARgNATgIIATgIQAbgJAZADIAAAAQAXADAQARQACAOABAPIgBASQgCAXgGAXQgSgDgUADQgYADgVAKQgMAGgJAHIgHAGIgJAJQgQASgCAYQgEAKAAAKQgBALAEALIAAAAQAFAUAQAOIAAAAQAGAGAIAEQAKAFANACQAPADAQgFIAEgBIgSAeIgaAnIgOAGQgNAEgMAAg");
	this.shape_10.setTransform(297.2,-35.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("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");
	this.shape_11.setTransform(297.1,-36.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.502)").s().p("AAAAAIAAABIAAAAIAAgBg");
	this.shape_12.setTransform(320.1,-26.3);

	// Layer 12
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AKTDWQgLgBgHgJQgRgUgmg/QgGgLADgMQADgMALgGQALgGAMADIASADIABAAIAOABIg4gjQgSgKgOgKIgBADQgJAagQARIAbAVQAJAHACAMQACALgHAKIgoA6QgFAIgIADQgIAEgJgCQgJgCgGgGIgegcQACAJgEAJQgFAJgIAEQgJAFgKgBIhEgKQgHgBgGgEQgGgFgDgHIgPghQgJApg7ASQhAAUg+gfQgTgDgOg8IgLg3IAAgBIgIg1IAAgDIgBgVIgSAAQgCAzgNCJQgBAMgJAIQgIAHgMAAIgYACIAAAAIgqACQgKAAgJgGQgIgGgDgLQgIgdgChPIgBhTQgTACgNAAQgJAAgIgCQgGgEgEgGIgegDIgHABIAWAZIAAABQAjArgBASIAAABQACAWgKAWIgCADIgIAOIgBABQgXAmgrAVIAAgBQgiARgdgBQgKAAgKgCIgCAAQgTgFAAgFQgFgFgDgHIgGgVQgMAJgbAOIgBAAQgaAMgTAIQgJADgKgCQgKgDgGgIQgGgIAAgKIAAgFIgOABIgGAQQgEALgLAFQgKAFgLgDQgagIgVgPIgBAAQgKgIgGgGQgSAbgJACQhPAnhKhSQg8hEABhJQgCgtA3hIIAAABQBIhdB0gTIAAAAQAcgFAZAOIAAAAQAiASABAsQAJgWAogHIAAAAIA1gGQALgCAJAHQAJAGADALIANA2QAYglAwgYIAAABQBZgtA5BBIAEAGQAjgmBhAAQArAAAUAQIAAgBQAOAIAJANIAFgDQAvgdAzgEQA4gEAiAYQAHAFADAHIADgEQAFgFAFgDQBEgeAqAIIAAAAQAyAHAxAyQAOguAngbIgBAAQAqgeAvAAQAygBApAmIAAAAQAtAnAMBFQABAJgEAJQgEAJgJAEQgIAFgKgBQgjgFgJAAIgBAAQAOAOAfAWQA+ApgDA6QAAA4gyAmIgBAAQgmAdgwAAQgQAAgQgDgADlBbIABAAIgCgDIABADgAlCBTIAAAAIAHACQAHACAMAAIAFAAQgJgJgXgTIABAYgAp5gGQgPATAAAaQAAAOAKAOQARATAggHIAEgBQAOguAegzIAAAAIAJgRIgFABIgGAAIgHgBIABAAIgFgBQg1AAgaAfg");
	this.shape_13.setTransform(297.2,-35.3);

	// Layer 11
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.502)").s().p("AqhDtQhAABg6hNQgug/gGg0QgIhCA2hPQBIhsCbgWQApgGAdAfIABAAQAMANAHAPQAfgQA5AAQAjAAAJAYIABADIAJAeQA2g0BGgHQAagCAcAMIAAABQAUAJAPAPQAUgPAngHQAigHAoAAQAWAAATAEIABAAQAfAIASASQARgIAdgJIAAAAQAtgOAUABQAiAAAbAJIgBAAQATAGAMAJQAOgIAYgHQAmgNAUABIAxAGIACAAQAoALAbAYQAQgaAXgUIAAgBQAugnA8AAQAzgBA1ArIAAgBQBBA0gBBNQAAAUgOAOQgMANgRACIAfAXIACACQAjAhAAAuQAAAygkAsQgtA4hRAAQg4AAgWglIgBgCQgMgagOgWQgLAYgQATIAAAAQgbAjgNgEQgLABgXgNIAAAAIgPgLQgEAGgFAEIAAAAQgPANgNgBQhXAAgUgZIgBAAQgEgFgEgHQgNAMgWALIABAAQgqAWghAAQhpAAgThFQgGgRgFgsQgHBSgQAWQgPAYgfAEIAAAAIg5ABQgyAEgHhXQgDgjgBhdQgMABgNgDIADAEIAAAAQAbAogFAZIAAAAQgGArgXAfIAAAAQglAzhOARIgBAAQgqAFgYgMIAAgBQgTgIgIgSIgbANIAAAAQgwAXgEgCQgZAAgPgRQgOAUgXgCQgiAAgbgSIgCgCIgJgIQgNAOgQAHIAAAAQgXALghAAIgEAAgApfA9IADgEIAohJIgVAEQgqAMgBAnQAAAKAIAHIAAgBQAGAFAHABg");
	this.shape_14.setTransform(297.1,-35.3);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(212.2,-59,169.9,47.6);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GemRed_03();
	this.instance.setTransform(24.4,188.2,1,1,0,0,0,42.3,53.9);

	this.instance_1 = new lib.GemYellow_02();
	this.instance_1.setTransform(22.7,48.6,1,1,0,0,0,33.4,50.4);

	this.instance_2 = new lib.GemGreen_01();
	this.instance_2.setTransform(23.6,-92.1,1,1,0,0,0,32.6,46.6);

	this.instance_3 = new lib.GemRed_03();
	this.instance_3.setTransform(24.4,610.3,1,1,0,0,0,42.3,53.9);

	this.instance_4 = new lib.GemYellow_02();
	this.instance_4.setTransform(22.7,470.7,1,1,0,0,0,33.4,50.4);

	this.instance_5 = new lib.GemGreen_01();
	this.instance_5.setTransform(23.6,330,1,1,0,0,0,32.6,46.6);

	this.instance_6 = new lib.GemRed_03();
	this.instance_6.setTransform(24.4,2310.6,1,1,0,0,0,42.3,53.9);

	this.instance_7 = new lib.GemYellow_02();
	this.instance_7.setTransform(22.7,2171,1,1,0,0,0,33.4,50.4);

	this.instance_8 = new lib.GemGreen_01();
	this.instance_8.setTransform(23.6,2030.2,1,1,0,0,0,32.6,46.6);

	this.instance_9 = new lib.GemRed_03();
	this.instance_9.setTransform(24.4,1885.6,1,1,0,0,0,42.3,53.9);

	this.instance_10 = new lib.GemYellow_02();
	this.instance_10.setTransform(22.7,1746,1,1,0,0,0,33.4,50.4);

	this.instance_11 = new lib.GemGreen_01();
	this.instance_11.setTransform(23.6,1617.3,1,1,0,0,0,32.6,46.6);

	this.instance_12 = new lib.GemRed_03();
	this.instance_12.setTransform(24.4,1041.6,1,1,0,0,0,42.3,53.9);

	this.instance_13 = new lib.GemYellow_02();
	this.instance_13.setTransform(22.7,902,1,1,0,0,0,33.4,50.4);

	this.instance_14 = new lib.GemGreen_01();
	this.instance_14.setTransform(23.6,761.2,1,1,0,0,0,32.6,46.6);

	this.instance_15 = new lib.GemRed_03();
	this.instance_15.setTransform(24.4,1463.5,1,1,0,0,0,42.3,53.9);

	this.instance_16 = new lib.GemYellow_02();
	this.instance_16.setTransform(22.7,1323.9,1,1,0,0,0,33.4,50.4);

	this.instance_17 = new lib.GemGreen_01();
	this.instance_17.setTransform(23.6,1183.2,1,1,0,0,0,32.6,46.6);

	this.addChild(this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-145.6,90.7,2509);


(lib.SLASHSTRAIGHT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slash1();
	this.instance.setTransform(209.7,-196.7,1,1,0,0,0,50,55.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,20);

	this.instance_1 = new lib.slash2();
	this.instance_1.setTransform(54.4,-48,1,1,0,0,0,204.9,202.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,20);

	this.instance_2 = new lib.slash3();
	this.instance_2.setTransform(8.5,-7,1,1,0,0,0,206.1,201.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,20);

	this.instance_3 = new lib.slash4();
	this.instance_3.setTransform(-32.8,30.8,1,1,0,0,0,194.2,189.7);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,20);

	this.instance_4 = new lib.slash5();
	this.instance_4.setTransform(-112.2,110.4,1,1,0,0,0,146.2,140.3);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.7,-262.5,124,135);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 31
	this.instance = new lib.Symbol31("synched",0);
	this.instance.setTransform(386.4,5812.9,1.824,1.824,0,0,0,55.2,1179.7);
	this.instance.filters = [new cjs.ColorFilter(0.31, 0.31, 0.31, 1, 35.19, 0, 35.19, 0)];
	this.instance.cache(-23,-148,95,2513);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2352.9},399).wait(1));

	// Symbol 31
	this.instance_1 = new lib.Symbol31("synched",0);
	this.instance_1.setTransform(144.7,2352,1.824,1.824,0,0,0,55.2,1179.7);
	this.instance_1.filters = [new cjs.ColorFilter(0.31, 0.31, 0.31, 1, 35.19, 0, 35.19, 0)];
	this.instance_1.cache(-23,-148,95,2513);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:5816},399).wait(1));

	// Layer 2
	this.instance_2 = new lib.glowbacking("synched",0);
	this.instance_2.setTransform(210.8,4087.3,1,1,89.3,0,0,836.6,454.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(400));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.9,-65.7,909.3,8037.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;