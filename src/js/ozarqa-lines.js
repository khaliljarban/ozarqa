
class OzarqaLinesChart {
    constructor(svg,args, data) {

        

        this.container = args.helpers.container;
       
        this.svg =svg;
        
        this.data = data;
        this.args = args; 
 
        
    }

  
    draw() {


        this.maxAllValueX  = 0  ;
        this.maxAllValueY  = 0  ;
  
        this.data.forEach(element => {
            const dataItem = element.data;
            const dataValuesX = dataItem.map(function (item) {
                return item.x;
            });
            const dataValuesY = dataItem.map(function (item) {
                return item.y;
            });
         
  
  
            
            const maxValueX = Math.max(...dataValuesX);
            if(maxValueX>this.maxAllValueX){
              this.maxAllValueX = maxValueX;
            }
  
            const maxValueY = Math.max(...dataValuesY);
            if(maxValueY>this.maxAllValueY){
              this.maxAllValueY = maxValueY;
            }
       
  
        });
  
        this.maxAllValueX+=5;
        this.maxAllValueY+=5;
  
                 
        // Calculate the coordinates and dimensions
        this.width = this.args.canvas.width;
        this.height = this.args.canvas.height;
        this.xScale = this.width / this.maxAllValueX;
        this.yScale = this.height / this.maxAllValueY;
        
  
        
          //horizintal lines
          if(this.args.showHorizintalLines){
            for (let i = 0; i <= this.maxAllValueY; i += Math.round(this.maxAllValueY / this.args.axisScaleUnit)) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('transform', 'translate(30 30)');
                line.setAttribute('x1', 0);
                line.setAttribute('y1',this.height - i * this.yScale);
                line.setAttribute('x2', this.width);
                line.setAttribute('y2', this.height - i * this.yScale);
                line.setAttribute('stroke', this.args.horizintalLinesColors);
                line.setAttribute('stroke-width', i===0 ? '0' : '1');
                this.svg.appendChild(line);
            }
          }
  
  
        this.data.forEach(element => {
  
            const dataItem = element.data;
  
  
            
  
              //visualization group
              let vGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
              vGroup.classList.add("ozarqaVisualization");
              vGroup.setAttribute('transform', 'translate(30 30)');
              vGroup.setAttribute('width', this.width);
              vGroup.setAttribute('height', this.height);
              this.svg.appendChild(vGroup);
  

              console.log('dataItem',dataItem);
                
                // Create the line path data
                const pathData = dataItem
                    .map((value, index) => `${ value.x * this.xScale},${this.height  - value.y *this.yScale }`)
                    .join(' ');
            
                // Draw the line
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
                path.setAttribute('points', pathData);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke',element.color);
                path.setAttribute('stroke-width', '2');
                vGroup.appendChild(path);
   
      });
  
   
  
  
        if(!this.args.hideAxis){
  
      
  
          this.svg.classList.add("ozarqaAxisEnabled");
  
  
          const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          group.classList.add("ozarqaAxis");
          group.setAttribute('transform', 'translate(30 30)');
          this.svg.appendChild(group);
  
  
          
  
  
                  
          // Draw the x-axis
          const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          xAxis.setAttribute('x1', 0);
          xAxis.setAttribute('y1', this.height);
          xAxis.setAttribute('x2', this.width);
          xAxis.setAttribute('y2', this.height);
          xAxis.setAttribute('stroke', '#787878');
          xAxis.setAttribute('stroke-width', '1');
          group.appendChild(xAxis);
  
          // Draw the y-axis
          const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          yAxis.setAttribute('x1', 0);
          yAxis.setAttribute('y1', 0);
          yAxis.setAttribute('x2', 0);
          yAxis.setAttribute('y2', this.height);
          yAxis.setAttribute('stroke', '#787878');
          yAxis.setAttribute('stroke-width', '1');
          group.appendChild(yAxis);
  
          // Add labels to x-axis
          
          for (let i = 0; i < this.maxAllValueX; i += Math.round(this.maxAllValueX / this.args.axisScaleUnit)) {
              const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              label.setAttribute('x', i * this.xScale);
              label.setAttribute('y', this.height + 15);
              label.setAttribute('text-anchor', 'middle');
              label.setAttribute('fill', '#787878');
              label.textContent = i.toString();
              group.appendChild(label);
          }
   
          // Add labels to y-axis
          for (let i = 0; i <= this.maxAllValueY; i += Math.round(this.maxAllValueY / this.args.axisScaleUnit)) {
              const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              label.setAttribute('x', -5);
              label.setAttribute('y', this.height - i * this.yScale);
              label.setAttribute('text-anchor', 'end');
              label.setAttribute('alignment-baseline', 'middle');
              label.setAttribute('fill', '#787878');
              label.textContent = i.toString();
              group.appendChild(label);
          }
      
      }

        return;

        let maxAllValue=0;
        let maxAllValueX=0;
  
        this.data.forEach(element => {
            const dataItem = element.data;
            const dataValues = element.data.map(function (item) {
                return item.value;
            });
        

                const maxValue = Math.max(...dataValues);

                if(maxValue>maxAllValue){
                    maxAllValue = maxValue;
                }
                if(dataValues.length>maxAllValueX){
                    maxAllValueX = dataValues.length;
                }
                
 
                
                // Calculate the coordinates and dimensions
                let width = this.args.canvas.width;
                let height = this.args.canvas.height;
                const xScale = width / (dataItem.length - 1);
                const yScale = height / maxValue;
 

                //visualization group
                const vGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                vGroup.classList.add("ozarqaVisualization");
                vGroup.setAttribute('transform', 'translate(30 30)');
                vGroup.setAttribute('width', width);
                vGroup.setAttribute('height', height);
            
                this.svg.appendChild(vGroup);


            
                // Create the line path data
                const pathData = dataItem
                    .map((value, index) => `${index * xScale},${height - value.value * yScale}`)
                    .join(' ');
            
                // Draw the line
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
                path.setAttribute('points', pathData);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke',element.color);
                path.setAttribute('stroke-width', '2');
                vGroup.appendChild(path);

        


        
                
 

 
        });

        let width = this.args.canvas.width;
        let height = this.args.canvas.height;
        const yScale = height / maxAllValue;
        const xScale = width / maxAllValueX;


        //horizintal lines
        if(this.args.showHorizintalLines){
            for (let i = 0; i <= maxAllValue; i += Math.round(maxAllValue / this.args.axisScaleUnit)) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('transform', 'translate(30 30)');
                line.setAttribute('x1', 0);
                line.setAttribute('y1',height - i * yScale);
                line.setAttribute('x2', width);
                line.setAttribute('y2', height - i * yScale);
                line.setAttribute('stroke', this.args.horizintalLinesColors);
                line.setAttribute('stroke-width', i===0 ? '0' : '1');
                this.svg.appendChild(line);
            }
        }
        
        if(!this.args.hideAxis){

    

            this.svg.classList.add("ozarqaAxisEnabled");


            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add("ozarqaAxis");
            group.setAttribute('transform', 'translate(30 30)');
            this.svg.appendChild(group);

    
            


                    
            // Draw the x-axis
            const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            xAxis.setAttribute('x1', 0);
            xAxis.setAttribute('y1', height);
            xAxis.setAttribute('x2', width);
            xAxis.setAttribute('y2', height);
            xAxis.setAttribute('stroke', '#787878');
            xAxis.setAttribute('stroke-width', '1');
            group.appendChild(xAxis);

            // Draw the y-axis
            const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            yAxis.setAttribute('x1', 0);
            yAxis.setAttribute('y1', 0);
            yAxis.setAttribute('x2', 0);
            yAxis.setAttribute('y2', height);
            yAxis.setAttribute('stroke', '#787878');
            yAxis.setAttribute('stroke-width', '1');
            group.appendChild(yAxis);

            // Add labels to x-axis
            
            for (let i = 0; i < maxAllValueX; i += Math.round(maxAllValueX / this.args.axisScaleUnit)) {
            
                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('x', i * xScale);
                label.setAttribute('y', height + 15);
                label.setAttribute('text-anchor', 'middle');
                label.setAttribute('fill', '#787878');
                label.textContent = i.toString();
                group.appendChild(label);
            }

            // Add labels to y-axis
            for (let i = 0; i <= maxAllValue; i += Math.round(maxAllValue / this.args.axisScaleUnit)) {
                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('x', -5);
                label.setAttribute('y', height - i * yScale);
                label.setAttribute('text-anchor', 'end');
                label.setAttribute('alignment-baseline', 'middle');
                label.setAttribute('fill', '#787878');
                label.textContent = i.toString();
                group.appendChild(label);
            }
        
        }

    } 
}
