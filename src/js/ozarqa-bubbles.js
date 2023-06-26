
class OzarqaBubblesChart {
  constructor(svg,args, data) {

      

      this.container = args.helpers.container;
     
      this.svg =svg;
      
      this.data = data;
      this.args = args; 
 
      
  }


  draw() {

      this.maxAllValueX  = 0  ;
      this.maxAllValueY  = 0  ;
      this.maxAllValue  = 0  ;

      this.data.forEach(element => {
          const dataItem = element.data;
          const dataValuesX = dataItem.map(function (item) {
              return item.x;
          });
          const dataValuesY = dataItem.map(function (item) {
              return item.y;
          });
          const dataValues = dataItem.map(function (item) {
              return item.value;
          });


          
          const maxValueX = Math.max(...dataValuesX);
          if(maxValueX>this.maxAllValueX){
            this.maxAllValueX = maxValueX;
          }

          const maxValueY = Math.max(...dataValuesY);
          if(maxValueY>this.maxAllValueY){
            this.maxAllValueY = maxValueY;
          }
          const maxValue = Math.max(...dataValues);
          if(maxValue>this.maxAllValue){
            this.maxAllValue = maxValue;
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


          // Draw the bubbles
          dataItem.forEach((item) => {

            const radius = item.value / this.maxAllValue * 50;
            const center  = radius / 2;
         

              const x = item.x ;
              const y = item.y ;
               

               

              // Draw the bubble
              const bubble = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              bubble.setAttribute('cx',( x * this.xScale)  );
              bubble.setAttribute('cy', (this.height  - y *this.yScale ) );
              bubble.setAttribute('opacity', 0.6);
              bubble.setAttribute('r', radius);
              bubble.setAttribute('data-x', x);
              bubble.setAttribute('data-y', y);
              bubble.setAttribute('data-value', item.value);
              bubble.setAttribute('fill', element.color);
              vGroup.appendChild(bubble);

           
          });

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
      


 


      
    
  

  } 
}
