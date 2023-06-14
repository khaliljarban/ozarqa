   
   import { Ozarqa } from './ozarqa.js';


   // Usage example
   const args = {
    svgSelector :  '.mySvg', //required, in case of class or tag selector the char while apply to first element only
    chartType :  'lines', // required, 'bars' | 'pie' | 'lines'
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
        value : 30,
        label : "Tue"
    },
    {
        color : 'red',
        labelColor : 'white',
        value : 45,
        label : "Wed"
    }
];  
  const chart = new Ozarqa(args, data);