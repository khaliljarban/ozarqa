
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

            // Clear the SVG
            while (this.svg.firstChild) {
                this.svg.firstChild.remove();
            }
        
         
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


 

 


    } 
}
