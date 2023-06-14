   
   import { Ozarqa } from './ozarqa.js';


   // Usage example
   const args = {
    svgSelector :  '.mySvg', //required, in case of class or tag selector the char while apply to first element only
    chartType :  'bars', // required, 'bars' or 'pie'
    barSpacing :  5, //optional, default 0
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