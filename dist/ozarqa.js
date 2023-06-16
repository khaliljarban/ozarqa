class OzarqaBarChart{constructor(t,e,s){this.svg=t,this.data=s,this.args=e,this.dataValues=this.data.map(function(t){return t.value})}draw(){var e=Math.max(...this.dataValues),s=this.args.canvas.width,i=this.args.canvas.height,a=(s-this.args.barSpacing*(this.data.length-1))/this.data.length,r=i/e;if(this.args.barShowHorizintalLines)for(let t=1;t<=e;t+=Math.round(e/5)){var h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("transform","translate(30 30)"),h.setAttribute("x1",0),h.setAttribute("y1",i-t*r),h.setAttribute("x2",s),h.setAttribute("y2",i-t*r),h.setAttribute("stroke","black"),h.setAttribute("stroke-width","1"),this.svg.appendChild(h)}if(this.args.showGuide){var n=document.createElementNS("http://www.w3.org/2000/svg","g");n.classList.add("ozarqaGuide"),n.setAttribute("transform","translate(0 60)"),n.setAttribute("width",s),n.setAttribute("height",i),this.svg.appendChild(n);for(let t=0;t<this.data.length;t++){var d=document.createElementNS("http://www.w3.org/2000/svg","g"),l=(n.appendChild(d),this.data[t]),o=document.createElementNS("http://www.w3.org/2000/svg","rect"),o=(o.setAttribute("x",0),o.setAttribute("y",i),o.setAttribute("width",30),o.setAttribute("height",20),o.setAttribute("fill",this.data[t].color),d.appendChild(o),document.createElementNS("http://www.w3.org/2000/svg","text"));o.setAttribute("x",0),o.setAttribute("y",i+30),o.setAttribute("text-anchor","middle"),o.textContent=l.label,d.appendChild(o)}}var g=document.createElementNS("http://www.w3.org/2000/svg","g");g.classList.add("ozarqaVisualization"),g.setAttribute("transform","translate(30 30)"),g.setAttribute("width",s),g.setAttribute("height",i),this.svg.classList.add("ozarqaBars"),this.svg.appendChild(g);for(let t=0;t<this.data.length;t++){var u=document.createElementNS("http://www.w3.org/2000/svg","g"),c=(u.classList.add("ozarqaItemGroup"),g.appendChild(u),this.data[t].value),w=c*r,b=a,v=t*(b+this.args.barSpacing),p=i-w,A=document.createElementNS("http://www.w3.org/2000/svg","rect");A.setAttribute("x",v),A.setAttribute("y",p),A.setAttribute("width",b),A.setAttribute("height",w),A.setAttribute("fill",this.data[t].color),u.appendChild(A),void 0!==this.data[t].hoverText&&((A=document.createElementNS("http://www.w3.org/2000/svg","text")).classList.add("ozarqaHoverText"),A.setAttribute("x",v+b/2),A.setAttribute("y",p+w/2),void 0!==this.data[t].hoverTextColor&&A.setAttribute("fill",this.data[t].hoverTextColor),A.setAttribute("text-anchor","middle"),A.textContent=this.data[t].hoverText,u.appendChild(A)),this.args.barHideLabel||((w=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("x",v+b/2),w.setAttribute("y",p-5),w.setAttribute("text-anchor","middle"),w.textContent=c.toString(),u.appendChild(w))}if(!this.args.barHideAxis){this.svg.classList.add("ozarqaAxisEnabled");var m=document.createElementNS("http://www.w3.org/2000/svg","g"),x=(m.classList.add("ozarqaAxis"),m.setAttribute("transform","translate(30 30)"),this.svg.appendChild(m),a),t=document.createElementNS("http://www.w3.org/2000/svg","line"),t=(t.setAttribute("x1",0),t.setAttribute("y1",i),t.setAttribute("x2",s),t.setAttribute("y2",i),t.setAttribute("stroke","black"),t.setAttribute("stroke-width","1"),m.appendChild(t),document.createElementNS("http://www.w3.org/2000/svg","line"));t.setAttribute("x1",0),t.setAttribute("y1",0),t.setAttribute("x2",0),t.setAttribute("y2",i),t.setAttribute("stroke","black"),t.setAttribute("stroke-width","1"),m.appendChild(t);for(let t=0;t<this.data.length;t++){var C=document.createElementNS("http://www.w3.org/2000/svg","text");C.setAttribute("x",t*(x+this.args.barSpacing)+x/2),C.setAttribute("y",i+15),C.setAttribute("text-anchor","middle"),C.textContent=t.toString(),m.appendChild(C)}for(let t=0;t<=e;t+=Math.round(e/5)){var S=document.createElementNS("http://www.w3.org/2000/svg","text");S.setAttribute("x",-5),S.setAttribute("y",i-t*r),S.setAttribute("text-anchor","end"),S.setAttribute("alignment-baseline","middle"),S.textContent=t.toString(),m.appendChild(S)}}}}class OzarqaLineChart{constructor(t,e,s){this.svg=t,this.data=s,this.args=e,this.dataValues=this.data.map(function(t){return t.value})}draw(){var e=Math.max(...this.dataValues),t=this.svg.clientWidth;const s=this.svg.clientHeight,i=t/(this.data.length-1),a=s/e;var r=this.data.map((t,e)=>e*i+","+(s-t.value*a)).join(" "),h=document.createElementNS("http://www.w3.org/2000/svg","polyline"),r=(h.setAttribute("points",r),h.setAttribute("fill","none"),h.setAttribute("stroke","blue"),h.setAttribute("stroke-width","2"),this.svg.appendChild(h),document.createElementNS("http://www.w3.org/2000/svg","line")),h=(r.setAttribute("x1",0),r.setAttribute("y1",s),r.setAttribute("x2",t),r.setAttribute("y2",s),r.setAttribute("stroke","black"),r.setAttribute("stroke-width","1"),this.svg.appendChild(r),document.createElementNS("http://www.w3.org/2000/svg","line"));h.setAttribute("x1",0),h.setAttribute("y1",0),h.setAttribute("x2",0),h.setAttribute("y2",s),h.setAttribute("stroke","black"),h.setAttribute("stroke-width","1"),this.svg.appendChild(h);for(let t=0;t<this.data.length;t++){var n=document.createElementNS("http://www.w3.org/2000/svg","text");n.setAttribute("x",t*i),n.setAttribute("y",s+15),n.setAttribute("text-anchor","middle"),n.textContent=t.toString(),this.svg.appendChild(n)}for(let t=0;t<=e;t+=Math.round(e/5)){var d=document.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("x",-5),d.setAttribute("y",s-t*a),d.setAttribute("text-anchor","end"),d.setAttribute("alignment-baseline","middle"),d.textContent=t.toString(),this.svg.appendChild(d)}}}class OzarqaPieChart{constructor(t,e,s){console.log("args",e),this.svg=t,this.data=s,this.dataValues=this.data.map(function(t){return t.value})}draw(){var e=this.dataValues.reduce((t,e)=>t+e,0);let s=0;var i=this.svg.clientWidth/2,a=this.svg.clientHeight/2,r=Math.min(i,a);for(let t=0;t<this.data.length;t++){var h=document.createElementNS("http://www.w3.org/2000/svg","g"),n=(this.svg.appendChild(h),2*Math.PI*this.data[t].value/e),d=document.createElementNS("http://www.w3.org/2000/svg","path"),l=i+r*Math.cos(s+n),o=a+r*Math.sin(s+n),g=n>Math.PI?1:0,g=`M ${i} ${a}
                        L ${i+r*Math.cos(s)} ${a+r*Math.sin(s)}
                        A ${r} ${r} 0 ${g} 1 ${l} ${o}
                        Z`,l=(d.setAttribute("d",g),d.setAttribute("fill",this.data[t].color),h.appendChild(d),i+r/2*Math.cos(s+n/2)),o=a+r/2*Math.sin(s+n/2),g=document.createElementNS("http://www.w3.org/2000/svg","text");g.setAttribute("x",l),g.setAttribute("y",o),g.setAttribute("fill",this.data[t].labelColor),g.setAttribute("text-anchor","middle"),g.textContent=this.data[t].label.toString(),h.appendChild(g),s+=n}}}class Ozarqa{constructor(t,e){if(void 0===(t={showGuide:!1,barShowHorizintalLines:!1,barHideAxis:!1,barHideLabel:!1,barSpacing:0,...t}).svgSelector)console.warn("Missing svgId parameter.");else if(void 0===t.chartType)console.warn("Missing chartType parameter.");else if(void 0===e)console.warn("Missing data parameter.");else if(0===typeof e.length)console.warn("data empty.");else{var s=t.svgSelector.slice(0,1),i=t.svgSelector.substring(1);switch(s){case"#":this.svg=document.getElementById(i);break;case".":this.svg=document.getElementsByClassName(i);break;default:this.svg=document.querySelectorAll(t.svgId)}void 0!==this.svg[0]&&(this.svg=this.svg[0]),this.args=t,this.data=e,this.resizeObserver=new ResizeObserver(this.run.bind(this)),this.resizeObserver.observe(this.svg),this.run(),window.addEventListener("resize",this.run.bind(this))}}run(){this.args.canvas={width:args.barHideAxis?this.svg.clientWidth:this.svg.clientWidth-60,height:args.barHideAxis?this.svg.clientHeight:this.svg.clientHeight-60},this.args.showGuide&&(this.args.canvas.height-=60),this.svg.innerHTML="",this.svg.classList.add("ozarqa"),"lines"===this.args.chartType?new OzarqaLineChart(this.svg,this.args,this.data).draw():"bars"===this.args.chartType?new OzarqaBarChart(this.svg,this.args,this.data).draw():"pie"===this.args.chartType&&new OzarqaPieChart(this.svg,this.args,this.data).draw()}}