
export class OzarqaPieChart {
    
    constructor(svg,args, data) {
        console.log('args',args);
        this.svg =svg;
        this.data = data;

        
        this.dataValues = this.data.map(function (item) {
            return item.value;
        });
    }
  
   
    draw() {
    

        const totalValue = this.dataValues.reduce((acc, val) => acc + val, 0);
        let startAngle = 0;
    
        // Clear the SVG
        this.svg.innerHTML = '';
    
        // Calculate the center coordinates of the pie chart
        const centerX = this.svg.clientWidth / 2;
        const centerY = this.svg.clientHeight / 2;
        const radius = Math.min(centerX, centerY);
    
        // Draw each slice of the pie chart
        for (let i = 0; i < this.data.length; i++) {

                 // Create a group for slices and labels
                 const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                 this.svg.appendChild(group);

                 
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
    
            group.appendChild(path);


          // Add label
            const labelX = centerX + (radius / 2) * Math.cos(startAngle + sliceAngle / 2);
            const labelY = centerY + (radius / 2) * Math.sin(startAngle + sliceAngle / 2);

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', labelX);
            label.setAttribute('y', labelY);
            label.setAttribute('fill', this.data[i].labelColor);
            label.setAttribute('text-anchor', 'middle');
            label.textContent = this.data[i].label.toString();

            group.appendChild(label);
    
            startAngle += sliceAngle;
        }
        }
}
