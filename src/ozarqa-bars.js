
class OzarqaBarChart {
    constructor(svg,args, data) {
       
        this.svg =svg;
        
        this.data = data;
        this.args = args;



        this.dataValues = this.data.map(function (item) {
            return item.value;
        });



 
        
    }

 

  
    draw() {
 
        // Clear the SVG
        while (this.svg.firstChild) {
          this.svg.firstChild.remove();
        }
     
        const maxValue = Math.max(...this.dataValues);
    
        // Calculate the coordinates and dimensions
        let width = this.svg.clientWidth;
        let height = this.svg.clientHeight;
        let xScale = (width - this.args.barSpacing * (this.data.length - 1)) / this.data.length;
        let yScale = height / maxValue;
    console.log('height',height);
  
        // Draw the bars and labels
        for (let i = 0; i < this.data.length; i++) {
          const value = this.data[i].value;
          const barHeight = value * yScale;
          console.log('yScale',yScale);
          console.log('value',value);
          const barWidth = xScale;
          const x = i * (barWidth + this.args.barSpacing);
          const y = height - barHeight;
    
          // Draw the bar
          const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          bar.setAttribute('x', x);
          bar.setAttribute('y', y);
          bar.setAttribute('width', barWidth);
          bar.setAttribute('height', barHeight);
          bar.setAttribute('fill', 'blue');
          this.svg.appendChild(bar);
    
          // Add label
          const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          label.setAttribute('x', x + barWidth / 2);
          label.setAttribute('y', y - 5);
          label.setAttribute('text-anchor', 'middle');
          label.textContent = value.toString();
          this.svg.appendChild(label);
        }
    
        // Draw the x-axis
        const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        xAxis.setAttribute('x1', 0);
        xAxis.setAttribute('y1', height);
        xAxis.setAttribute('x2', width);
        xAxis.setAttribute('y2', height);
        xAxis.setAttribute('stroke', 'black');
        xAxis.setAttribute('stroke-width', '1');
        this.svg.appendChild(xAxis);
    
        // Draw the y-axis
        const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        yAxis.setAttribute('x1', 0);
        yAxis.setAttribute('y1', 0);
        yAxis.setAttribute('x2', 0);
        yAxis.setAttribute('y2', height);
        yAxis.setAttribute('stroke', 'black');
        yAxis.setAttribute('stroke-width', '1');
        this.svg.appendChild(yAxis);
    
        // Add labels to x-axis
        for (let i = 0; i < this.data.length; i++) {
          const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          label.setAttribute('x', i * (barWidth + this.barSpacing) + barWidth / 2);
          label.setAttribute('y', height + 15);
          label.setAttribute('text-anchor', 'middle');
          label.textContent = i.toString();
          this.svg.appendChild(label);
        }
    
        // Add labels to y-axis
        for (let i = 0; i <= maxValue; i += Math.round(maxValue / 5)) {
          const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          label.setAttribute('x', -5);
          label.setAttribute('y', height - i * yScale);
          label.setAttribute('text-anchor', 'end');
          label.setAttribute('alignment-baseline', 'middle');
          label.textContent = i.toString();
          this.svg.appendChild(label);
        }


    } 
}
