class Ozarqa {
    
    

    constructor(args, data) {

        const defaults = {
            barSpacing: 0
        };

        //append args to defaults
        args = { ...defaults,  ...args };

        //verify args paramets
        if(typeof args.svgSelector=='undefined'){
            console.warn('Missing svgId parameter.');
            return;
        }
        if(typeof args.chartType=='undefined'){
            console.warn('Missing chartType parameter.');
            return;
        }

        //verify data array
        if(typeof data=='undefined'){
            console.warn('Missing data parameter.');
            return;
        }
         
        if(typeof data.length===0){
            console.warn('data empty.');
            return;
        }


         

        //deal with css selector
        const selector = args.svgSelector.slice(0,1);
        const selectorName = args.svgSelector.substring(1);
        switch(selector){
            case '#':
                this.svg = document.getElementById(selectorName);
            break;
            case '.':
                this.svg = document.getElementsByClassName(selectorName);
            break;
            default:
                this.svg = document.querySelectorAll(args.svgId);
            break;
        }
        if(typeof this.svg[0]!=='undefined'){
            this.svg= this.svg[0];
        }
         
        

         

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


  
 
  

 