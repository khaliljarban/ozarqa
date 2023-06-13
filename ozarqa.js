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


  
 
  

 