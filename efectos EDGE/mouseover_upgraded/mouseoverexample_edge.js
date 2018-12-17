/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'link1',
                            type: 'text',
                            rect: ['13', '59', 'auto', 'auto', 'auto', 'auto'],
                            text: "1. Show/Hide()",
                            align: "auto",
                            font: ['\'Comic Sans MS\', cursive', [12, ""], "rgba(255,248,248,1)", "normal", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'link2',
                            type: 'text',
                            rect: ['121', '59', 'auto', 'auto', 'auto', 'auto'],
                            text: "2. Trigger ms",
                            font: ['Comic Sans MS, cursive', [12, "px"], "rgba(255,248,248,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'link3',
                            type: 'text',
                            rect: ['222', '59', 'auto', 'auto', 'auto', 'auto'],
                            text: "3. Trigger Label",
                            align: "auto",
                            font: ['\'Comic Sans MS\', cursive', [12, "px"], "rgba(255,248,248,1)", "normal", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'link4',
                            type: 'text',
                            rect: ['334', '59', 'auto', 'auto', 'auto', 'auto'],
                            text: "4. Trigger css3",
                            align: "auto",
                            font: ['\'Comic Sans MS\', cursive', [12, ""], "rgba(255,248,248,1)", "normal", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'link5',
                            type: 'text',
                            rect: ['449', '59', 'auto', 'auto', 'auto', 'auto'],
                            text: "5. Trigger ms + css3",
                            align: "auto",
                            font: ['\'Comic Sans MS\', cursive', [12, ""], "rgba(255,248,248,1)", "normal", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'link6',
                            type: 'text',
                            rect: ['584', '59', 'auto', 'auto', 'auto', 'auto'],
                            text: "6. Trigger Label + css3",
                            align: "auto",
                            font: ['\'Comic Sans MS\', cursive', [12, ""], "rgba(255,248,248,1)", "normal", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'box',
                            type: 'rect',
                            rect: ['66', '101', '479', '55', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(243,230,67,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'box1',
                            type: 'rect',
                            rect: ['66', '101', '479', '55', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'box2',
                            type: 'rect',
                            rect: ['102', '101', '479', '55', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(248,150,150,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'box3',
                            type: 'rect',
                            rect: ['66', '101', '479', '55', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(65,6,6,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${stage}': {
                            isStage: true,
                            rect: ['null', 'null', '716', '215', 'auto', 'auto'],
                            fill: ["rgba(57,56,56,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1920,
                    autoPlay: true,
                    labels: {
                        "lbl": 1250
                    },
                    data: [
                        [
                            "eid18",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${box2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1750,
                            170,
                            "linear",
                            "${box2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${box2}",
                            'rgba(248,150,150,1.00)',
                            'rgba(248,150,150,1.00)'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            0,
                            "linear",
                            "${box3}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${box1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1000,
                            115,
                            "linear",
                            "${box1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "left",
                            0,
                            0,
                            "linear",
                            "${box}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid27",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${box3}",
                            'rgba(65,6,6,1.00)',
                            'rgba(65,6,6,1.00)'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            0,
                            "linear",
                            "${box}",
                            '101px',
                            '101px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "top",
                            0,
                            0,
                            "linear",
                            "${box1}",
                            '101px',
                            '101px'
                        ],
                        [
                            "eid34",
                            "top",
                            0,
                            0,
                            "linear",
                            "${box3}",
                            '101px',
                            '101px'
                        ],
                        [
                            "eid53",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${box}",
                            'rgba(243,230,67,1.00)',
                            'rgba(243,230,67,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mouseoverexample_edgeActions.js");
})("EDGE-1429821");
