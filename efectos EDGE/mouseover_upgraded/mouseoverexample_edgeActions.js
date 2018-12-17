/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
//Edge symbol: 'stage'
(function(symbolName) {

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(e) {


this.stop();
// Hide an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
});
//Edge binding end



Symbol.bindElementAction(compId, symbolName, "${link2}", "mouseover", function(sym, e) {
// play the timeline from the given position (ms or label)
this.play(.500);

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link2}", "mouseout", function(sym, e) {
// play the timeline from the given position (ms or label)
this.play(0);

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link3}", "mouseover", function(sym, e) {
// play the timeline from the current position
this.play("lbl");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link3}", "mouseout", function(sym, e) {
// play the timeline from the current position
this.play(0);

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link4}", "mouseover", function(sym, e) {
$(this.lookupSelector("box3")).fadeTo("slow",1);

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link4}", "mouseout", function(sym, e) {
$(this.lookupSelector("box3")).fadeTo("slow",0);
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link5}", "mouseover", function(sym, e) {
this.play(.500);


});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link5}", "mouseout", function(sym, e) {
$(this.lookupSelector("box1")).fadeTo("slow",0);
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link6}", "mouseover", function(sym, e) {
// play the timeline from the given position (ms or label)
this.play("lbl");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link6}", "mouseout", function(sym, e) {
//$(this.lookupSelector("box2")).fadeTo("slow",0);
// stop the timeline at the current position
//this.stop("lbl").fadeTo("slow",0);

// stop the timeline at the given position (ms or label)
//this.stop(1.750).fadeTo("slow",0);
// Hide an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("box2")).fadeTo("slow",0);
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link1}", "mouseover", function(sym, e) {
// Show an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("box")).show();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${link1}", "mouseout", function(sym, e) {
// Hide an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("box")).hide();
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
var title=$("title").text();
$("body").prepend("<div class='future'><h1>" + title + "</h1></div>");

$(this.lookupSelector("box")).hide();


});
//Edge binding end

})("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1429821");