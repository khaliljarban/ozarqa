/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OzarqaBarChart: () => (/* binding */ OzarqaBarChart)
/* harmony export */ });

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


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OzarqaPieChart: () => (/* binding */ OzarqaPieChart)
/* harmony export */ });

class OzarqaPieChart {
    
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


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OzarqaLineChart: () => (/* binding */ OzarqaLineChart)
/* harmony export */ });

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


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ozarqa: () => (/* binding */ Ozarqa)
/* harmony export */ });
/* harmony import */ var _ozarqa_bars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _ozarqa_pie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _ozarqa_lines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





class Ozarqa {
    
    

    constructor(args, data) {

        const defaults = {
            barSpacing: 0
        };

        //append args to defaults
        args = { ...defaults,  ...args };

        //verify args paramets
        if(typeof args.svgSelector=='undefined'){
            console.warn('Missing svgId parameter.');
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
        const selector = args.svgSelector.slice(0,1);
        const selectorName = args.svgSelector.substring(1);
        switch(selector){
            case '#':
                this.svg = document.getElementById(selectorName);
            break;
            case '.':
                this.svg = document.getElementsByClassName(selectorName);
            break;
            default:
                this.svg = document.querySelectorAll(args.svgId);
            break;
        }
        if(typeof this.svg[0]!=='undefined'){
            this.svg= this.svg[0];
        }
         
        

         

         this.args = args;
         this.data = data;

                 //resize
        this.resizeObserver = new ResizeObserver(this.run.bind(this));
        this.resizeObserver.observe(this.svg);
   
         this.run();

         
 


        window.addEventListener('resize',this.run.bind(this));
 
    }

   


    run() {
        if (this.args.chartType === 'lines') {
            const chart = new _ozarqa_lines_js__WEBPACK_IMPORTED_MODULE_2__.OzarqaLineChart(this.svg,this.args, this.data);
            chart.draw();
        }else if (this.args.chartType === 'bars') {
            const chart = new _ozarqa_bars_js__WEBPACK_IMPORTED_MODULE_0__.OzarqaBarChart(this.svg,this.args, this.data);
            chart.draw();
        } else if (this.args.chartType === 'pie') {

            const chart = new _ozarqa_pie_js__WEBPACK_IMPORTED_MODULE_1__.OzarqaPieChart(this.svg,this.args, this.data);
            chart.draw();
        }
      }



 
}


  
 
  

 
})();

/******/ })()
;