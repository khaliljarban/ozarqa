
class Ozarqa {
    
    

    constructor(args, data) {

        const defaults = {

            //general 
            showGuide : false,//beta

            //bars
            barShowHorizintalLines: false,
            barHideAxis: false,
            barHideLabel: false,
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

        //keep space for axis if enabled
        this.args.canvas ={
            width : !args.barHideAxis ? this.svg.clientWidth - 60 : this.svg.clientWidth,
            height : !args.barHideAxis ? this.svg.clientHeight  - 60: this.svg.clientHeight ,
        };

        if(this.args.showGuide){
            this.args.canvas.height-= 60;
            //   args.canvas.width+= 60;
        }
    
     


        // Clear the SVG
        this.svg.innerHTML = '';

        this.svg.classList.add("ozarqa");


        if (this.args.chartType === 'lines') {
            const chart = new OzarqaLineChart(this.svg,this.args, this.data);
            chart.draw();
        }else if (this.args.chartType === 'bars') {
            const chart = new OzarqaBarChart(this.svg,this.args, this.data);
            chart.draw();
        } else if (this.args.chartType === 'pie') {

            const chart = new OzarqaPieChart(this.svg,this.args, this.data);
            chart.draw();
        }
      }



 
}


  
 
  

 