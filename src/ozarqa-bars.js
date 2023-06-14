
export class OzarqaBarChart {
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
        this.svg.innerHTML = '';

        // Calculate the width and height of each bar
        const barWidth = (this.svg.clientWidth - (this.data.length - 1) * this.args.barSpacing) / this.data.length;

        //const barWidth = this.svg.clientWidth / this.data.length;
        const scaleFactor = this.svg.clientHeight / maxValue;
console.log(this.args);
        // Draw each bar
        for (let i = 0; i < this.data.length; i++) {

             // Create a group for slices and labels
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this.svg.appendChild(group);


            const barHeight = this.data[i].value * scaleFactor;
            const x = i * (barWidth + this.args.barSpacing);
            const y = this.svg.clientHeight - barHeight;

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('width', barWidth);
            rect.setAttribute('height', barHeight);
            rect.setAttribute('fill', this.data[i].color);
            group.appendChild(rect);

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', x + barWidth / 2);
            label.setAttribute('y', this.svg.clientHeight); // Adjust the vertical position of the label
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('fill', this.data[i].labelColor);
            label.textContent = this.data[i].label.toString();
            group.appendChild(label);
        }
    } 
}
