
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



// visualization 2: iPod

const svg2 = document.getElementById("iPod");
const svgWidth2 = svg2.clientWidth;
const svgHeight2 = svg2.clientHeight;

const iPodWidth = 300;
const iPodHeight = 450;

//iPod Body
const iPodBody = document.createElementNS("http://www.w3.org/2000/svg", "rect");
iPodBody.setAttribute("width", iPodWidth); 
iPodBody.setAttribute("height", iPodHeight); 
iPodBody.setAttribute("x", (svgWidth2 - iPodWidth) / 2);
iPodBody.setAttribute("y", (svgHeight2 - iPodHeight) / 2);
iPodBody.setAttribute("fill", "white");
iPodBody.setAttribute("stroke", "silver");
iPodBody.setAttribute("stroke-width", "2");
iPodBody.setAttribute("rx", 25);
iPodBody.setAttribute("ry", 25);

svg2.appendChild(iPodBody);

//iPod screen
const iPodScreen = document.createElementNS("http://www.w3.org/2000/svg", "rect");
iPodScreen.setAttribute("width", iPodWidth - 25); 
iPodScreen.setAttribute("height", iPodHeight - 250); 
iPodScreen.setAttribute("x", (svgWidth2 - iPodWidth +25) / 2);
iPodScreen.setAttribute("y", (svgHeight2 - iPodHeight+25) / 2);
iPodScreen.setAttribute("fill", "white");
iPodScreen.setAttribute("stroke", "black");
iPodScreen.setAttribute("stroke-width", "3");
iPodScreen.setAttribute("rx", 10);
iPodScreen.setAttribute("ry", 10);

svg2.appendChild(iPodScreen);


//iPod buttons
const iPodOuterCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

const circleRadius = 80;
const circleCX = svgWidth2 / 2;
const circleCY = (svgHeight2 / 2) + 100;

// outer circle
iPodOuterCircle.setAttribute("cx", circleCX);
iPodOuterCircle.setAttribute("cy", circleCY);
iPodOuterCircle.setAttribute("r", circleRadius);
iPodOuterCircle.setAttribute("fill", "silver");
iPodOuterCircle.setAttribute("stroke", "gray");
iPodOuterCircle.setAttribute("stroke-width", "1");

svg2.appendChild(iPodOuterCircle);

//inner circle
const iPodInnerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
iPodInnerCircle.setAttribute("cx", circleCX);
iPodInnerCircle.setAttribute("cy", circleCY);
iPodInnerCircle.setAttribute("r", circleRadius-50);
iPodInnerCircle.setAttribute("fill", "white");
iPodInnerCircle.setAttribute("stroke", "gray");
iPodInnerCircle.setAttribute("stroke-width", "1");

svg2.appendChild(iPodInnerCircle);

//button text

//menu
const menuText = document.createElementNS("http://www.w3.org/2000/svg", "text");
menuText.textContent = "MENU";

// Position above the circle
menuText.setAttribute("x", circleCX);
menuText.setAttribute("y", circleCY - 60);
menuText.setAttribute("text-anchor", "middle");
menuText.setAttribute("fill", "white");
menuText.setAttribute("font-size", "12");      
menuText.setAttribute("font-family", "Helvetica");

svg2.appendChild(menuText);

//play/pause button
const playPause = document.createElementNS("http://www.w3.org/2000/svg", "text");
// playPause.textContent = "⏯";
playPause.textContent = "▶⏸";

playPause.setAttribute("x", circleCX);
playPause.setAttribute("y", circleCY + 70);
playPause.setAttribute("text-anchor", "middle");
playPause.setAttribute("fill", "white");
playPause.setAttribute("font-size", "12");      
playPause.setAttribute("font-family", "Helvetica");

svg2.appendChild(playPause);


//skip forward button
const skipForward = document.createElementNS("http://www.w3.org/2000/svg", "text");
skipForward.textContent = "⏭";

skipForward.setAttribute("x", circleCX+65);
skipForward.setAttribute("y", circleCY+2);
skipForward.setAttribute("text-anchor", "middle");
skipForward.setAttribute("fill", "white");
skipForward.setAttribute("font-size", "14");      
skipForward.setAttribute("font-family", "Helvetica");
skipForward.setAttribute("style", "cursor: pointer;");

svg2.appendChild(skipForward);

//skip back button
const skipBack = document.createElementNS("http://www.w3.org/2000/svg", "text");
skipBack.textContent = "⏮";

skipBack.setAttribute("x", circleCX-65);
skipBack.setAttribute("y", circleCY+2);
skipBack.setAttribute("text-anchor", "middle");
skipBack.setAttribute("fill", "white");
skipBack.setAttribute("font-size", "14");      
skipBack.setAttribute("font-family", "Helvetica");

svg2.appendChild(skipBack);

//now playing top bar

//now playing bar
const nowPlayingBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
nowPlayingBar.setAttribute("width", iPodWidth-40); 
nowPlayingBar.setAttribute("height", 15); 
nowPlayingBar.setAttribute("x", (svgWidth2 - iPodWidth+40) / 2);
nowPlayingBar.setAttribute("y", (svgHeight2 - iPodHeight) / 2+14);
nowPlayingBar.setAttribute("fill", "silver");

svg2.appendChild(nowPlayingBar);



//now playing text
const nowPlayingText = document.createElementNS("http://www.w3.org/2000/svg", "text");
nowPlayingText.setAttribute("x", (svgWidth2 - iPodWidth) / 2+120);
nowPlayingText.setAttribute("y", (svgHeight2 - iPodHeight) / 2+25);
nowPlayingText.setAttribute("font-size", "12");
nowPlayingText.setAttribute("font-family", "Helvetica");
nowPlayingText.setAttribute("fill", "black");
nowPlayingText.textContent = "Now Playing";
svg2.appendChild(nowPlayingText);



// iPod display: shows songs and when the skip forward button is pressed, displays the next song

//array of songs
const songs = [
    {
        albumCover: "img/siamese-dream-album.jpg",
        songName: "Today",
        artistName: "The Smashing Pum...",
        albumName: "Siamese Dream",
        timestamp: "3:21"
    },
    {
        albumCover: "img/wish-album.jpg",
        songName: "Friday I'm in Love",
        artistName: "The Cure",
        albumName: "Wish",
        timestamp: "3:34"
    },
    {
        albumCover: "img/by-the-way-album.jpg",
        songName: "The Zephyr Song",
        artistName: "Red Hot Chili Peppers",
        albumName: "By the Way",
        timestamp: "3:51"
    },
    {
        albumCover: "img/demon-days-album.jpg",
        songName: "Feel Good Inc.",
        artistName: "Gorillaz, De La Soul",
        albumName: "Demon Days",
        timestamp: "3:42"
    },
    {
        albumCover: "img/discovery-album.jpg",
        songName: "Digital Love",
        artistName: "Daft Punk",
        albumName: "Discover",
        timestamp: "5:01"
    },
    {
        albumCover: "img/ok-computer-album.jpg",
        songName: "Karma Police",
        artistName: "Radiohead",
        albumName: "OK Computer",
        timestamp: "4:24"
    },
    {
        albumCover: "img/mtv-unplugged-album.jpg",
        songName: "The Man Who Sold T...",
        artistName: "Nirvana",
        albumName: "MTV Unplugged In N...",
        timestamp: "4:21"
    },
]

let currentSongIndex = 0;

function displaySong(song) {
    // remove previous song
    const oldGroup = svg2.querySelector(".songGroup");
    if (oldGroup) oldGroup.remove();

    // song group with all the song details
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("songGroup");

    // album cover
    const albumCover = document.createElementNS("http://www.w3.org/2000/svg", "image");
    albumCover.setAttribute("href", song.albumCover);
    albumCover.setAttribute("width", iPodWidth - 200); 
    albumCover.setAttribute("height", iPodHeight - 250); 
    albumCover.setAttribute("x", (svgWidth2 - iPodWidth +25) / 2 +15);
    albumCover.setAttribute("y", (svgHeight2 - iPodHeight+25) / 2);
    group.appendChild(albumCover);

    //song name
    const songName = document.createElementNS("http://www.w3.org/2000/svg", "text");
    songName.setAttribute("font-size", "14");
    songName.setAttribute("font-family", "Helvetica");
    songName.setAttribute("x", (svgWidth2 - iPodWidth) / 2 +140);
    songName.setAttribute("y", (svgHeight2 - iPodHeight) / 2+85);
    songName.textContent = song.songName;
    group.appendChild(songName);
    
    // artist name
    const artistName = document.createElementNS("http://www.w3.org/2000/svg", "text");
    artistName.setAttribute("font-size", "14");
    artistName.setAttribute("font-family", "helvetica");
    artistName.setAttribute("x", (svgWidth2 - iPodWidth) / 2 +140);
    artistName.setAttribute("y", (svgHeight2 - iPodHeight) / 2+115);
    artistName.textContent = song.artistName;
    group.appendChild(artistName);

    // album name
    const albumName = document.createElementNS("http://www.w3.org/2000/svg", "text");
    albumName.setAttribute("font-size", "14");
    albumName.setAttribute("font-family", "helvetica");
    albumName.setAttribute("x", (svgWidth2 - iPodWidth) / 2 +140);
    albumName.setAttribute("y", (svgHeight2 - iPodHeight) / 2+145);
    albumName.textContent = song.albumName;
    group.appendChild(albumName);

    // displays song index and total number of songs
    const songIndex = document.createElementNS("http://www.w3.org/2000/svg", "text");
    songIndex.setAttribute("font-size", "12");
    songIndex.setAttribute("font-family", "helvetica");
    songIndex.setAttribute("x", (svgWidth2 - iPodWidth) / 2 +30 );
    songIndex.setAttribute("y", (svgHeight2 - iPodHeight) / 2+55);
    songIndex.textContent = `${currentSongIndex + 1} of ${songs.length}`;
    group.appendChild(songIndex);

    // progress bar
    const progressBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    progressBar.setAttribute("width", iPodWidth-55); 
    progressBar.setAttribute("height", 10); 
    progressBar.setAttribute("x", (svgWidth2 - iPodWidth+55) / 2);
    progressBar.setAttribute("y", (svgHeight2 - iPodHeight) / 2+175);
    progressBar.setAttribute("fill", "silver");
    group.appendChild(progressBar);

    //progress bar timestamps

    //start time 0:00
    const progressTimestampStart = document.createElementNS("http://www.w3.org/2000/svg", "text");
    progressTimestampStart.setAttribute("x", (svgWidth2 - iPodWidth+55) / 2);
    progressTimestampStart.setAttribute("y", (svgHeight2 - iPodHeight) / 2+200);
    progressTimestampStart.setAttribute("font-size", "12");
    progressTimestampStart.setAttribute("font-family", "Helvetica");
    progressTimestampStart.setAttribute("fill", "black");
    progressTimestampStart.textContent = "0:00";
    group.appendChild(progressTimestampStart);

    //end time depends on the time specified in the array
    const progressTimestampEnd = document.createElementNS("http://www.w3.org/2000/svg", "text");
    progressTimestampEnd.setAttribute("x", (svgWidth2 - iPodWidth) / 2+250);
    progressTimestampEnd.setAttribute("y", (svgHeight2 - iPodHeight) / 2+200);
    progressTimestampEnd.setAttribute("font-size", "12");
    progressTimestampEnd.setAttribute("font-family", "Helvetica");
    progressTimestampEnd.setAttribute("fill", "black");
    progressTimestampEnd.textContent = song.timestamp;
    group.appendChild(progressTimestampEnd);

    // append all the parts
    svg2.appendChild(group);
}

// displays the first song
displaySong(songs[currentSongIndex]);

// if the skip forward button is clicked, it goes to the next song
skipForward.addEventListener("click", () => {
    currentSongIndex++; // next song
    if (currentSongIndex >= songs.length) currentSongIndex = 0; // loops back to first song 
    displaySong(songs[currentSongIndex]);
});


//music notes: music notes translate up and fade

// function so i can add multiple music notes
function createMusicNoteGroup(x = 0, y = 0) {

    const musicNoteGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"); // group for the parts

    //left oval
    const musicNoteLeftOval = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    musicNoteLeftOval.setAttribute("cx", circleCX+200);
    musicNoteLeftOval.setAttribute("cy", circleCY);
    musicNoteLeftOval.setAttribute("rx", circleRadius-75);
    musicNoteLeftOval.setAttribute("ry", circleRadius-70);
    musicNoteLeftOval.setAttribute("transform", `rotate(45, ${circleCX + 200}, ${circleCY})`);
    musicNoteLeftOval.setAttribute("fill", "#eb49e1");

    musicNoteGroup.appendChild(musicNoteLeftOval);

    //right oval
    const musicNoteRightOval = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    musicNoteRightOval.setAttribute("cx", circleCX+220);
    musicNoteRightOval.setAttribute("cy", circleCY-20);
    musicNoteRightOval.setAttribute("rx", circleRadius-75);
    musicNoteRightOval.setAttribute("ry", circleRadius-70);
    musicNoteRightOval.setAttribute("transform", `rotate(45, ${circleCX + 200}, ${circleCY})`);
    musicNoteRightOval.setAttribute("fill", "#eb49e1");

    musicNoteGroup.appendChild(musicNoteRightOval);

    //left line
    const musicNoteLeftLine = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    musicNoteLeftLine.setAttribute("width", 5); 
    musicNoteLeftLine.setAttribute("height", 30); 
    musicNoteLeftLine.setAttribute("x", (svgWidth2 - iPodWidth) / 2+353);
    musicNoteLeftLine.setAttribute("y", (svgHeight2 - iPodHeight) / 2+290);
    musicNoteLeftLine.setAttribute("fill", "#eb49e1");

    musicNoteGroup.appendChild(musicNoteLeftLine);

    //right line

    const musicNoteRightLine = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    musicNoteRightLine.setAttribute("width", 5); 
    musicNoteRightLine.setAttribute("height", 30); 
    musicNoteRightLine.setAttribute("x", (svgWidth2 - iPodWidth) / 2+381.2);
    musicNoteRightLine.setAttribute("y", (svgHeight2 - iPodHeight) / 2+290);
    musicNoteRightLine.setAttribute("fill", "#eb49e1");

    musicNoteGroup.appendChild(musicNoteRightLine);

    //top line
    const musicNoteTopLine = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    musicNoteTopLine.setAttribute("width", 30); 
    musicNoteTopLine.setAttribute("height", 5); 
    musicNoteTopLine.setAttribute("x", (svgWidth2 - iPodWidth) / 2+353);
    musicNoteTopLine.setAttribute("y", (svgHeight2 - iPodHeight) / 2+290);
    musicNoteTopLine.setAttribute("fill", "#eb49e1");

    musicNoteGroup.appendChild(musicNoteTopLine);

    // can translate the position
    musicNoteGroup.setAttribute("transform", `translate(${x}, ${y})`);

    //append the parts of the music note as one group
    svg2.appendChild(musicNoteGroup);
    return musicNoteGroup;
}



const notes = [
    { x: 0, y: 0 }, // og pos
    { x: -450, y: 60 }, // bottom left
    { x: -300, y: -100 }, // middle left
    { x: 50, y: -200 }, // // top right
    { x: -130, y: -300 }, // top middle
    { x: -410, y: -250 } // top left
];


//function to animate the music notes so they translate upwards
function floatMusicNote(musicNote, x, y, distance = 60, speed = 2) {
    let pos = 0;
    const intervalTime = 10;
    const step = distance / (speed * 100);

    setInterval(() => {
        pos -= step;
        if (pos <= -distance) pos = 0;
        musicNote.setAttribute("transform", `translate(${x}, ${y + pos})`);
        musicNote.setAttribute("opacity", 1 + pos/distance);
     }, intervalTime);
}

const noteGroups = notes.map(n => createMusicNoteGroup(n.x, n.y));

// animate the notes
noteGroups.forEach((noteGroup, i) => {

    //use math random to choose a random distance between 40 and 80
    const distance = 40 + Math.random() * 40;

    // use math random to choose a random speed between 1 and 3
    const speed = 1 + Math.random() * 2;
    floatMusicNote(noteGroup, notes[i].x, notes[i].y, distance, speed);
});

//-----------------------------------------------------------------------------------

// assignment 3 vegalite
// Load data from datasets/videogames_wide.csv using d3.csv and then make visualizations
async function fetchData() {
    const data = await d3.csv("./dataset/videogames_wide.csv");
    return data;
}

fetchData().then(async (data) => {

    // visualization 1: genre
    const vlSpec = vl
        .markBar()
        .data(data)
        .encode(
            vl.y().fieldN("Genre").sort("-x"),
            vl.x().fieldQ("Global_Sales").aggregate("sum").title("Total Global Sales (in millions of units)"),
            vl.color().value("orange"),
            vl.tooltip(
                [
                    {field: "Genre"},
                    {field: "Global_Sales", title: "Global Sales", aggregate: "sum"}
                ]
            )
        )
        .title("Global Sales of Video Games by Genre")
        .width(600)
        .toSpec();

    // visualization 1: platform
    const vlSpec2 = vl
        .markBar()
        .data(data)
        .encode(
            vl.y().fieldN("Platform").sort("-x"),
            vl.x().fieldQ("Global_Sales").aggregate("sum").title("Total Global Sales (in millions of units)"),
            vl.color().value("skyblue"),
            vl.tooltip(
                [
                    {field: "Platform"},
                    {field: "Global_Sales", title: "Global Sales", aggregate: "sum"}
                ]
            )
        )
        .title("Global Sales of Video Games by Platform")
        .width(950)
        .toSpec();


    // visualization 2: platform
    const vlSpec3 = vl
        .markLine()
        .data(data)
        .encode(
            vl.x().fieldQ("Year").axis({tickMinStep: 5}),
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Total Global Sales (in millions of units)"),
            vl.color().fieldN("Platform").scale({scheme:"category20"}),
            vl.tooltip(
                [
                    {field: "Platform"},
                    {field: "Year"},
                    {field: "Global_Sales", title: "Global Sales", aggregate: "sum"},
                ]
            )
        )
        .title("Global Sales of Video Games Over Time by Platform")
        .width(950)
        .height(500)
        .toSpec();

    // visualization 2: genre
    const vlSpec4 = vl
        .markLine()
        .data(data)
        .encode(
            vl.x().fieldQ("Year").axis({tickMinStep: 5}),
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Total Global Sales (in millions of units)"),
            vl.color().fieldN("Genre").scale({scheme:"category20"}),
            vl.tooltip(
                [
                    {field: "Genre"},
                    {field: "Year"},
                    {field: "Global_Sales", title: "Global Sales", aggregate: "sum"},
                ]
            )
        )
        .title("Global Sales of Video Games Over Time by Genre")
        .width(950)
        .height(500)
        .toSpec();

    // visualization 3: NA sales by platform
    const vlSpec5 = vl
        .markBar()
        .data(data)
        .encode(
            vl.y().fieldN("Platform").sort("-x"),
            vl.x().fieldQ("NA_Sales").aggregate("sum").title("North America Sales (in millions of units)"),
            vl.color().value("lightseagreen"),
            vl.tooltip(
                [
                    {field: "Platform"},
                    {field: "NA_Sales", title: "NA Sales", aggregate: "sum"}
                ]
            )
        )
        .title("Sales of Video Games by Platform in North America")
        .width(600)
        .toSpec();

    // visualization 3: EU sales by platform
    const vlSpec6 = vl
        .markBar()
        .data(data)
        .encode(
            vl.y().fieldN("Platform").sort("-x"),
            vl.x().fieldQ("EU_Sales").aggregate("sum").title("Europe Sales (in millions of units)"),
            vl.color().value("darkorchid"),
            vl.tooltip(
                [
                    {field: "Platform"},
                    {field: "EU_Sales", title: "EU Sales", aggregate: "sum"}
                ]
            )
        )
        .title("Sales of Video Games by Platform in Europe")
        .width(600)
        .toSpec();

    // visualization 3: JP sales by platform
    const vlSpec7 = vl
        .markBar()
        .data(data)
        .encode(
            vl.y().fieldN("Platform").sort("-x"),
            vl.x().fieldQ("JP_Sales").aggregate("sum").title("Japan Sales (in millions of units)"),
            vl.color().value("firebrick"),
            vl.tooltip(
                [
                    {field: "Platform"},
                    {field: "JP_Sales", title: "JP Sales", aggregate: "sum"}
                ]
            )
        )
        .title("Sales of Video Games by Platform in Japan")
        .width(600)
        .toSpec();

    // visualization 3: Other sales by platform
    const vlSpec8 = vl
        .markBar()
        .data(data)
        .encode(
            vl.y().fieldN("Platform").sort("-x"),
            vl.x().fieldQ("Other_Sales").aggregate("sum").title("Other Sales (in millions of units)"),
            vl.color().value("sandybrown"),
            vl.tooltip(
                [
                    {field: "Platform"},
                    {field: "Other_Sales", title: "Other Sales", aggregate: "sum"}
                ]
            )
        )
        .title("Sales of Video Games by Platform in Other Regions")
        .width(600)
        .toSpec();

    // visualization 4: Number of SEGA Role-Playing Games Released per Year
    const vlSpec9 = vl
        .markBar()
        .data(data)
        .filter("datum.Publisher === 'Sega' && datum.Genre === 'Role-Playing'")
        .encode(
            vl.x().fieldQ("Year"),
            vl.y().fieldN("Genre").aggregate("count").title("Number of RPGs"),
            vl.tooltip(
                [
                    {field: "Year"},
                    {field: "Genre", title: "Number of RPGs", aggregate: "count"}
                ]
            )
        )
        .title("Number of SEGA Role-Playing Games Released per Year")
        .width(750)
        .toSpec();
    
    //render
    render("#view", vlSpec);
    render("#view2", vlSpec2);
    render("#view3", vlSpec3);
    render("#view4", vlSpec4);
    render("#view5", vlSpec5);
    render("#view6", vlSpec6);
    render("#view7", vlSpec7);
    render("#view8", vlSpec8);
    render("#view9", vlSpec9);

});

async function render(viewID, spec) {
    const result = await vegaEmbed(viewID, spec);
    result.view.run();
}