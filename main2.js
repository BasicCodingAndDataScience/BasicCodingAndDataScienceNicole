var myConfig = {
    "type":"bar3d",
    "background-color":"#fff",
    "3d-aspect":{
        "true3d":0,
        "y-angle":10,
        "depth":30
    },
    "title":{
       "text":"Aquaculture production per country",
        "height":"40px",
        "font-weight":"bold",
        "text-color":"#ffffff"
    },
    "legend":{
        "layout":"float",
        "background-color":"none",
        "border-color":"none",
        "item":{
            "font-color":"#333"
        },
        "x":"37%",
        "y":"10%",
        "width":"90%",
        "shadow":0
    },
    "plotarea":{
        "margin":"85px 10px 40px 60px",
        "background-color":"#B6AFB5",
        "alpha":0.3
    },
    "scale-y":{
        "background-color":"#fff",
        "border-width":"1px",
        "border-color":"#333",
        "alpha":0.5,
        "format":"$%v",
        "guide":{
            "line-style":"solid",
            "line-color":"#333",
            "alpha":0.2
        },
        "tick":{
            "line-color":"#333",
            "alpha":0.2
        },
        "item":{
            "font-color":"#333",
            "padding-right":"10px"
        }
    },
    "scale-x":{
        "background-color":"#fff",
        "border-width":"1px",
        "border-color":"#333",
        "alpha":0.5,
        "values":["China","Indonesia","India","Vietnam","Philippines","Bangladesh","South Korea", "Norway", "Chile", "Egypt"],
				"guide":{
            "visible":false
        },
        "tick":{
            "line-color":"#333",
            "alpha":0.2
        },
        "item":{
            "font-size":"10px",
            "font-color":"#333"
        }
    },
    "series":[
        {
            "values":[58.8, 14.4, 4.9, 3.4, 2.3, 2.0, 1.6, 1.3, 1.2, 1.1],
            "text":"Metric tons (in millions)",
            "background-color":"#03A9F4 #4FC3F7",
            "border-color":"#03A9F4",
						"decimal": 1,
            "legend-marker":{
                "border-color":"#03A9F4"
            },
            "tooltip":{
                "background-color":"#03A9F4",
                "text":"$%v",
                "font-size":"12px",
                "padding":"6 12",
                "border-color":"none",
                "shadow":0,
                "border-radius":5
            }
        },

    ]
};

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: 500,
	width: 725,
	defaults:{
	  'font-family':'sans-serif'
	}
});
