class Ozarqa {
    
    constructor(args, data) {

        this.svg = document.getElementById(args.svgId);

         this.args = args;
         this.data = data;

                 //resize
        this.resizeObserver = new ResizeObserver(this.run.bind(this));
        this.resizeObserver.observe(this.svg);
   
         this.run();

         
 


        window.addEventListener('resize',this.run.bind(this));
 
    }

   


    run() {
        if (this.args.chartType === 'bars') {
            const chart = new OzarqaBarChart(this.svg,this.args, this.data);
            chart.draw();
        } else if (this.args.chartType === 'pie') {

            const chart = new OzarqaPieChart(this.svg,this.args, this.data);
            chart.draw();
        }
      }



 
}


  
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
  

 