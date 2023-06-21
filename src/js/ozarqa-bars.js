
class OzarqaBarChart {
    constructor(svg,args, data) {
       
        this.svg =svg;
        
       this.container = args.helpers.container;
  

        this.data = data;
        this.args = args;

        this.dataValues = this.data.map(function (item) {
            return item.value;
        });



 
        
    }

 

  
    draw() {
 
        
        const maxValue = Math.max(...this.dataValues);
    
        // Calculate the coordinates and dimensions
        let width = this.args.canvas.width;
        let height = this.args.canvas.height;
        let xScale = (width - this.args.barSpacing * (this.data.length - 1)) / this.data.length;
        let yScale = height / maxValue;



        //horizintal lines
        if(this.args.barShowHorizintalLines){
            // Add labels to y-axis
            for (let i = 1; i <= maxValue; i += Math.round(maxValue / 5)) {
              const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
              line.setAttribute('transform', 'translate(30 30)');
              line.setAttribute('x1', 0);
              line.setAttribute('y1',height - i * yScale);
              line.setAttribute('x2', width);
              line.setAttribute('y2', height - i * yScale);
              line.setAttribute('stroke', 'black');
              line.setAttribute('stroke-width', '1');
              this.svg.appendChild(line);
            }
        }


        
        //visualization group
        const vGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        vGroup.classList.add("ozarqaVisualization");
        vGroup.setAttribute('transform', 'translate(30 30)');
        vGroup.setAttribute('width', width);
        vGroup.setAttribute('height', height);
     
        this.svg.appendChild(vGroup);

   
        // Draw the bars and labels
        for (let i = 0; i < this.data.length; i++) {

            // Create a group for slices and labels
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add("ozarqaItemGroup");
            vGroup.appendChild(group);


            
            const value = this.data[i].value;
            const barHeight = value * yScale;
         
            const barWidth = xScale;
            const x = i * (barWidth + this.args.barSpacing);
            const y = height - barHeight;
      
            // Draw the bar
            const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bar.setAttribute('x', x);
            bar.setAttribute('y', y);
            bar.setAttribute('width', barWidth);
            bar.setAttribute('height', barHeight);
            bar.setAttribute('fill', this.data[i].color);
        //   this.svg.appendChild(bar);

            group.appendChild(bar);
      
            // hoverText
            if(typeof this.data[i].hoverText!='undefined'){
              const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              label.classList.add("ozarqaHoverText");
              label.setAttribute('x', x + barWidth / 2);
              label.setAttribute('y', y + barHeight / 2);
              if(typeof this.data[i].hoverTextColor!='undefined'){
                label.setAttribute('fill', this.data[i].hoverTextColor);
              }
              label.setAttribute('text-anchor', 'middle');
              label.textContent = this.data[i].hoverText;
              group.appendChild(label);
            }

            // Add label
            if(!this.args.barHideLabel){
              const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              label.setAttribute('x', x + barWidth / 2);
              label.setAttribute('y', y - 5);
              label.setAttribute('text-anchor', 'middle');
              label.textContent = value.toString();
              group.appendChild(label);
            }
        }
 

      


        if(!this.args.hideAxis){
          this.svg.classList.add("ozarqaAxisEnabled");


          const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          group.classList.add("ozarqaAxis");
          group.setAttribute('transform', 'translate(30 30)');
          this.svg.appendChild(group);

          const barWidth = xScale;

            // Draw the x-axis
            const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            xAxis.setAttribute('x1', 0);
            xAxis.setAttribute('y1', height);
            xAxis.setAttribute('x2', width);
            xAxis.setAttribute('y2', height);
            xAxis.setAttribute('stroke', 'black');
            xAxis.setAttribute('stroke-width', '1');
            group.appendChild(xAxis);
        
            // Draw the y-axis
            const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            yAxis.setAttribute('x1', 0);
            yAxis.setAttribute('y1', 0);
            yAxis.setAttribute('x2', 0);
            yAxis.setAttribute('y2', height);
            yAxis.setAttribute('stroke', 'black');
            yAxis.setAttribute('stroke-width', '1');
            group.appendChild(yAxis);
        
            // Add labels to x-axis
            for (let i = 0; i < this.data.length; i++) {


              const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              label.setAttribute('x', i * (barWidth + this.args.barSpacing) + barWidth / 2);
              label.setAttribute('y', height + 15);
              label.setAttribute('text-anchor', 'middle');
              label.textContent = i.toString();
              group.appendChild(label);
            }
        
            // Add labels to y-axis
            for (let i = 0; i <= maxValue; i += Math.round(maxValue / 5)) {
              const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              label.setAttribute('x', -5);
              label.setAttribute('y', height - i * yScale);
              label.setAttribute('text-anchor', 'end');
              label.setAttribute('alignment-baseline', 'middle');
              label.textContent = i.toString();
              group.appendChild(label);
            }
        }

    } 
}
