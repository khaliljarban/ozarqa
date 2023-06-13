# Ozarqa

Ozarqa is created by khalil jarban. a Jisr azarqa citizen.

Ozarqa is is an open source JavaScript library that provides a simple and customizable way to create interactive data visualizations on the web. It supports bar charts and pie charts and more, allowing developers to present data in an engaging and meaningful way.

the diffrent between Ozarqa and other libraries, that it render the chart using victors (SVG). this should make the chart very responsive


## Features

- Easy-to-use API for creating bar charts and pie charts.
- Supports customization options such as colors, labels, and spacing.
- Responsive design, adapts to different screen sizes.
- Built with SVG for flexibility and compatibility.


## Usage
To use MyDataVisualization library, follow these steps:

1. Include the library in your HTML file:
```html
<script src="ozarqa-bars.js"></script>
<script src="ozarqa-pie.js"></script>
<script src="ozarqa.js"></script>
```

2. Create an SVG container to hold the chart:
```html
<svg   id="mySvg"></svg>
```

3. Instantiate the Chart class and provide the SVG container ID and data:
```javascript
      // Usage example
  const args = {
    svgId :  'mySvg', 
    chartType :  'bars', // 'bars' or 'pie'
    barSpacing :  5, // 'bars' or 'pie'
  };
  const data = [
    {
        color : '#000000',
        labelColor : 'white',
        value : 20,
        label : "Sun"
    },
    {
        color : 'blue',
        labelColor : 'white',
        value : 50,
        label : "Mon"
    },
    {
        color : 'green',
        labelColor : 'white',
        value : 63,
        label : "Tue"
    },
    {
        color : 'red',
        labelColor : 'white',
        value : 90,
        label : "Wed"
    }
];  
  const chart = new Ozarqa(args, data);
```


## License
This project is licensed under the MIT License.

Feel free to customize the content according to your library's specific features, installation instructions, and licensing details.


