/* 
All javascript taken from reference d3 class demo 1 
*/

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};


// DATA FROM REPOSITORY
const data2 = [55000, 48000, 27000, 66000, 90000]; 


const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME3 = d3.select("#visualization")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

const MAX_X = d3.max(data2, (d) => { return d; }); 
console.log("Max x: " +MAX_X);  

const X_SCALE = d3.scaleLinear() 
                  .domain([0, (MAX_X + 10000)]) 
                  .range([0, VIS_WIDTH]); 

console.log("Input: 40000, X_SCALE output: " + X_SCALE(40000));

FRAME3.selectAll("points")  
    .data(data2)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (X_SCALE(d) + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 

FRAME3.append("g") // g is a "placeholder" svg
      .attr("transform", "translate(" + MARGINS.left + 
            "," + (VIS_HEIGHT + MARGINS.top) + ")") 
      .call(d3.axisBottom(X_SCALE).ticks(4))
        .attr("font-size", '20px'); 






