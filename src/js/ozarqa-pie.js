
class OzarqaPieChart {
    
    constructor(svg,args, data) {


        this.container = args.helpers.container;

        
        
        this.args =args;
        this.svg =svg;
        this.data = data;

        
        this.dataValues = this.data.map(function (item) {
            return item.value;
        });
    }
  
   
    draw() {
    

        const totalValue = this.dataValues.reduce((acc, val) => acc + val, 0);
        let startAngle = 0;
    

                // Calculate the center coordinates of the pie chart

                let width = this.args.canvas.width;
                let height = this.args.canvas.height;


                const centerX = width / 2;
                const centerY = height / 2;
                const radius = Math.min(centerX, centerY);

        

        //visualization group
           
 

 
    
 
    
        // Draw each slice of the pie chart
        for (let i = 0; i < this.data.length; i++) {

           
                 
            const sliceAngle = (2 * Math.PI * this.data[i].value) / totalValue;
    
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const endX = centerX + radius * Math.cos(startAngle + sliceAngle);
            const endY = centerY + radius * Math.sin(startAngle + sliceAngle);
            const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;
    
            const d = `M ${centerX} ${centerY}
                        L ${centerX + radius * Math.cos(startAngle)} ${centerY + radius * Math.sin(startAngle)}
                        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
                        Z`;
            path.setAttribute('d', d);
            path.setAttribute('fill', this.data[i].color);
    
            this.svg.appendChild(path);


          // Add label
            const labelX = centerX + (radius / 2) * Math.cos(startAngle + sliceAngle / 2);
            const labelY = centerY + (radius / 2) * Math.sin(startAngle + sliceAngle / 2);

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', labelX);
            label.setAttribute('y', labelY);
            label.setAttribute('fill', this.data[i].labelColor);
            label.setAttribute('text-anchor', 'middle');
            label.textContent = this.data[i].label.toString();

            this.svg.appendChild(label);
    
            startAngle += sliceAngle;
        }
        }
}
