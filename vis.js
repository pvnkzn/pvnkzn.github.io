
// visualization 1: bar chart visualization of number of times I listened to songs in a week

const svg = document.getElementById('barChart');



const numberOfSongs = [62, 120, 141, 97, 65, 138, 124];
const date = ["Sep 21", "Sep 22", "Sep 23", "Sep 24", "Sep 25", "Sep 26", "Sep 27"];


const svgWidth = svg.clientWidth;
const svgHeight = svg.clientHeight;
const padding = 50;

const barWidth = (svgWidth - 2 * padding) / numberOfSongs.length;

const maxValue = Math.max(...numberOfSongs);
const interval = 10;
const chartMax = Math.ceil(maxValue / interval) * interval;

//create the bar
function createBar(x, y, width, height, fill = "#eb49e1") {
    const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bar.setAttribute('x', x);
    bar.setAttribute('y', y);
    bar.setAttribute('width', width);
    bar.setAttribute('height', height);
    bar.setAttribute('fill', fill);
    return bar;
}

//text
function createText(x, y, textContent, anchor = 'middle', rotate = 0) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('text-anchor', anchor);
    text.setAttribute('font-size', '12');
    if (rotate !== 0) {
        text.setAttribute('transform', `rotate(${rotate}, ${x}, ${y})`);
    }
    text.textContent = textContent;
    return text;
}

//line for axes
function createLine(x1, y1, x2, y2, stroke = 'black', strokeWidth = 1) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', stroke);
    line.setAttribute('stroke-width', strokeWidth);
    return line;
}

//draw the bars
for (let i = 0; i < numberOfSongs.length; i++) {
    const barHeight = (numberOfSongs[i] / chartMax) * (svgHeight - 2 * padding);
    const x = padding + i * barWidth;
    const y = svgHeight - padding - barHeight;

    const bar = createBar(x, y, barWidth * 0.6, barHeight);
    svg.append(bar);

    // X-axis label
    svg.append(createText(x + barWidth*0.3, svgHeight - padding + 15, date[i]));

    // Value on top of bar
    svg.append(createText(x + barWidth*0.3, y - 5, numberOfSongs[i]));
}

//y-axis
for (let value = 0; value <= chartMax; value += interval) {
    const y = svgHeight - padding - (value / chartMax) * (svgHeight - 2 * padding);

    //tick
    svg.append(createLine(padding - 5, y, padding, y, 'black'));

    // number
    svg.append(createText(padding - 10, y + 4, value, 'end'));
}

// draw axes
// y-axis
svg.append(createLine(padding, padding, padding, svgHeight - padding, 'black', 1.5));
// x-axis
svg.append(createLine(padding, svgHeight - padding, svgWidth - padding, svgHeight - padding, 'black', 1.5))

// axis titles
// x-axis title
svg.append(createText(svgWidth / 2, svgHeight - 10, 'Date', 'middle'));

// y-axis title
svg.append(createText(15, svgHeight / 2, 'Number of Times I Listened to a Song', 'middle', -90));
//main title
svg.append(createText(svgWidth / 2, padding / 2,'Number of Times I Listened to Songs During the Past Week', 'middle'));


