
class OzarqaLineChart {
    constructor(svg,args, data) {
       
        this.svg =svg;
        
        this.data = data;
        this.args = args;



        this.dataValues = this.data.map(function (item) {
            return item.value;
        });



 
        
    }

 

  
    draw() {
 

        const maxValue = Math.max(...this.dataValues);

            
        
         
            // Calculate the coordinates and dimensions
            const width = this.svg.clientWidth;
            const height = this.svg.clientHeight;
            const xScale = width / (this.data.length - 1);
            const yScale = height / maxValue;
        
            // Create the line path data
            const pathData = this.data
                .map((value, index) => `${index * xScale},${height - value.value * yScale}`)
                .join(' ');
        
            // Draw the line
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            path.setAttribute('points', pathData);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'blue');
            path.setAttribute('stroke-width', '2');
        
            this.svg.appendChild(path);




            
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
      label.setAttribute('x', i * xScale);
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
