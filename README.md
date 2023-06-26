# Ozarqa 


Ozarqa is a JavaScript library that provides a simple and customizable way to create interactive data visualizations on the web. It supports bar, lines and pie charts, allowing developers to present data in an engaging and meaningful way.

The diffrence between Ozarqa and others library, Ozarqa render tha chart as SVG. this make it more accessbile, SEO friendly and exportable.

## Features

- Easy-to-use API for creating bar charts and pie charts.
- Supports customization options such as colors, labels, and spacing.
- Responsive design, adapts to different screen sizes.
- Built with SVG for flexibility and compatibility.
- JS bubbles chart
- JS bar chart
- JS line chart
- JS pie chart

## Installation

Load the required stylesheet and JS:

```html
<link rel="stylesheet" href="dist/style.css" />
```

```html
<script src="dist/ozarqa.js"></script>
```


### Usage
Create empty DIV

```html
<div id="mySvg1"></div>
```


Call the library
```javascript
  document.addEventListener('DOMContentLoaded', function () {
        const args = {
            //general
            selector :  '#mySvg1', //required, in case of class or tag selector the char while apply to first element only
            chartType :  'bars', // required, 'bars' | 'pie' | 'lines'
            showGuide : true,//beta
            hideAxis : false, //optional, default false
            showHorizintalLines : true, //optional, default false
            horizintalLinesColors : '#e8e8e8', //optional, default false

            //bars settings
            barSpacing :  5, //optional, default 0
            barHideLabel : false, //optional, default false
        };
        const data = [
            {
                color : '#000000',
                guideTextColor : 'white',
                labelColor : 'white',
                value : 1,
                hoverText : "Sun 1",
                hoverTextColor : "#fff",
                label : "Sun"
            },
            {
                color : 'blue',
                guideTextColor : 'white',
                labelColor : 'white',
                hoverText : "Sun 5",
                value : 5,
                label : "Mon"
            },
            {
                color : 'green',
                guideTextColor : 'white',
                labelColor : 'white',
                hoverText : "Sun 3",
                value : 3,
                label : "Tue"
            },
            {
                color : 'red',
                guideTextColor : 'white',
                labelColor : 'white',
                hoverText : "Sun 6",
                value : 6,
                label : "Wed"
            },
            {
                color : 'brown',
                guideTextColor : 'white',
                labelColor : 'white',
                hoverText : "Sun 7",
                value : 7,
                label : "Thu"
            },
            {
                color : 'yellow',
                labelColor : 'white',
                hoverText : "Sun 4.5",
                value : 4.5,
                label : "Fri"
            },
            {
                color : 'black',
                guideTextColor : 'white',
                labelColor : 'white',
                hoverText : "Sun 2",
                hoverTextColor : "#fff",
                value : 2,
                label : "Sat"
            }
        ];  
        new Ozarqa(args, data);

  });
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md).



## Roadmap

Please make sure to check out our [Roadmap Discussion](https://github.com/khaliljarban/ozarqa/issues).



## License

The code and the documentation are released under the [MIT License](LICENSE).