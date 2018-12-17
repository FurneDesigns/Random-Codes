/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'link1',
                type: 'text',
                rect: ['13', '59','0','0','auto', 'auto'],
                text: "1. Show/Hide()",
                align: "auto",
                font: ['\'Comic Sans MS\', cursive', 12, "rgba(255,248,248,1)", "normal", "none", "normal"]
            },
            {
                id: 'link2',
                type: 'text',
                rect: ['64', '26','0','0','auto', 'auto'],
                text: "2. Trigger ms",
                font: ['Comic Sans MS, cursive', 12, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'link3',
                type: 'text',
                rect: ['222', '39','0','0','auto', 'auto'],
                text: "3. Trigger Label",
                align: "auto",
                font: ['\'Comic Sans MS\', cursive', 12, "rgba(255,248,248,1)", "normal", "none", "normal"]
            },
            {
                id: 'link4',
                type: 'text',
                rect: ['426', '23','0','0','auto', 'auto'],
                text: "4. Trigger css3",
                align: "auto",
                font: ['\'Comic Sans MS\', cursive', 12, "rgba(255,248,248,1)", "normal", "none", "normal"]
            },
            {
                id: 'link5',
                type: 'text',
                rect: ['449', '59','0','0','auto', 'auto'],
                text: "5. Trigger ms + css3",
                align: "auto",
                font: ['\'Comic Sans MS\', cursive', 12, "rgba(255,248,248,1)", "normal", "none", "normal"]
            },
            {
                id: 'link6',
                type: 'text',
                rect: ['584', '59','0','0','auto', 'auto'],
                text: "6. Trigger Label + css3",
                align: "auto",
                font: ['\'Comic Sans MS\', cursive', 12, "rgba(255,248,248,1)", "normal", "none", "normal"]
            },
            {
                id: 'box',
                type: 'rect',
                rect: ['66', '65','479','55','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'box1',
                type: 'rect',
                rect: ['66', '65','479','55','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'box2',
                type: 'rect',
                rect: ['102', '65','479','55','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'box3',
                type: 'rect',
                rect: ['66', '65','479','55','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_box2}": [
                ["color", "background-color", 'rgba(248,150,150,1.00)'],
                ["style", "opacity", '0'],
                ["style", "top", '101px']
            ],
            "${_link3}": [
                ["style", "top", '59px'],
                ["style", "left", '222px'],
                ["style", "font-size", '12px']
            ],
            "${_link1}": [
                ["style", "left", '13px'],
                ["style", "top", '59px']
            ],
            "${_stage}": [
                ["color", "background-color", 'rgba(57,56,56,1)'],
                ["style", "height", '215px'],
                ["style", "width", '716px']
            ],
            "${_box1}": [
                ["style", "top", '101px'],
                ["style", "opacity", '0']
            ],
            "${_link4}": [
                ["style", "left", '334px'],
                ["style", "top", '59px']
            ],
            "${_box3}": [
                ["color", "background-color", 'rgba(65,6,6,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '66px'],
                ["style", "top", '101px']
            ],
            "${_link2}": [
                ["style", "top", '59px'],
                ["color", "color", 'rgba(255,248,248,1.00)'],
                ["style", "font-family", 'Comic Sans MS, cursive'],
                ["style", "left", '121px'],
                ["style", "font-size", '12px']
            ],
            "${_link5}": [
                ["style", "left", '449px'],
                ["style", "top", '59px']
            ],
            "${_link6}": [
                ["style", "top", '59px'],
                ["style", "left", '584px']
            ],
            "${_box}": [
                ["color", "background-color", 'rgba(243,230,67,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '66px'],
                ["style", "top", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1920,
            autoPlay: true,
            labels: {
                "lbl": 1250
            },
            timeline: [
                { id: "eid23", tween: [ "style", "${_box3}", "left", '66px', { fromValue: '66px'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_box1}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "color", "${_box}", "background-color", 'rgba(243,230,67,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,230,67,1.00)'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_box3}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "color", "${_box3}", "background-color", 'rgba(65,6,6,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(65,6,6,1.00)'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "color", "${_box2}", "background-color", 'rgba(248,150,150,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(248,150,150,1.00)'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_box}", "left", '66px', { fromValue: '66px'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_box}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_box}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_box2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
                { id: "eid38", tween: [ "style", "${_box2}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 170 },
                { id: "eid9", tween: [ "style", "${_box1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid20", tween: [ "style", "${_box1}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 115 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1429821");
