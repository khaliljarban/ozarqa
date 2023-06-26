
class Ozarqa {
    
    

    constructor(args, data) {

        const defaults = {

            //general 
            showGuide : false,//beta

            //bars
            barShowHorizintalLines: false,
            horizintalLinesColors : '#ccc',
            barHideAxis: false,
            barHideLabel: false,
            axisScaleUnit: 5,
            barSpacing: 0
        };

        //append args to defaults
        args = { ...defaults,  ...args };

        //verify args paramets
        if(typeof args.selector=='undefined'){
            console.warn('Missing selector parameter.');
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
        const selector = args.selector.slice(0,1);
        const selectorName = args.selector.substring(1);

         
        switch(selector){
            case '#':
                this.container = document.getElementById(selectorName);
                this.svg = document.getElementById(selectorName);
            break;
            case '.':
                this.container = document.getElementsByClassName(selectorName);
            break;
            default:
                this.container = document.querySelectorAll(args.svgId);
            break;
        }
        if(typeof this.container[0]!=='undefined'){
            this.container= this.container[0];
        }

      
 
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
         
        svg.setAttribute('id', 'ozarqa-'+selectorName);
 
        this.container.innerHTML='';
        this.container.appendChild(svg);
        this.container.classList.add("ozarqa-container");
        this.container.classList.add("ozarqa-container-"+args.chartType);

        this.container.setAttribute('data-id', 'ozarqa-'+selectorName);

        this.container.classList.add("ozarqa-selector-"+selectorName);
     
         
        args.helpers={};
        args.helpers['container'] = this.container;


        this.svg = document.getElementById('ozarqa-'+selectorName);

 
               
        this.args = args;
        this.data = data;

  
        //resize
        this.resizeObserver = new ResizeObserver(this.run.bind(this));
        this.resizeObserver.observe(this.svg);
     
            this.run();
   
    
        window.addEventListener('resize',this.run.bind(this));
 


        if(this.args.showGuide){
            //guide group
        
   //this.container
  
          const box = document.createElement("div");
          box.setAttribute('class', 'ozarqa-guide');
          this.container.appendChild(box);



  
 
            // Draw the guides 
            for (let i = 0; i < this.data.length; i++) {

                const guideItem = this.data[i];
                

                const boxItem = document.createElement("div");
                boxItem.setAttribute('class', 'ozarqa-guide-item');
                boxItem.style.backgroundColor =guideItem.color;
                boxItem.style.color =guideItem.guideTextColor;
                boxItem.innerHTML=guideItem.label;
                box.appendChild(boxItem);

 
            }
  
          }
  


    }

   


    run() {

        //keep space for axis if enabled
        this.args.canvas ={
            width : !args.barHideAxis ? this.svg.clientWidth - 60 : this.svg.clientWidth,
            height : !args.barHideAxis ? this.svg.clientHeight  - 60: this.svg.clientHeight ,
        };
 
    
     


        // Clear the SVG
        this.svg.innerHTML = '';

        this.svg.classList.add("ozarqa");

        this.svg.classList.add("ozarqa_"+this.args.chartType);


        switch(this.args.chartType){
            case 'lines':
                const line = new OzarqaLinesChart(this.svg,this.args, this.data);
                line.draw();
            break;
            case 'bars':
                const bars = new OzarqaBarsChart(this.svg,this.args, this.data);
                bars.draw();
            break;
            case 'bubbles':
                const bubbles = new OzarqaBubblesChart(this.svg,this.args, this.data);
                bubbles.draw();
            break;
            case 'pie':

      

            this.args.canvas ={
                width : !args.barHideAxis ? this.svg.clientWidth : this.svg.clientWidth,
                height : !args.barHideAxis ? this.svg.clientWidth : this.svg.clientWidth ,
            };
            this.svg.setAttribute('height', this.args.canvas.width);
 


                const pie = new OzarqaPieChart(this.svg,this.args, this.data);
                pie.draw();
            break;
        }

        
      }



 
}


  
 
  

 