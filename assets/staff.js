// Instructors

var carlosF = {
    name: 'Instructor Carlos Flores',
    img: 'Fa16/CarlosFlores.jpg',
    bio: 'CarlosBio',
    imgSrc: '../Fa16/CarlosFlores.jpg',
    //imgCrazy: '../small/CarlosFloresCrazy.jpg',
    email: 'carlos@cs10.org',
    web: 'http://carlos.codes'
};

// TAs

var lizzyS = {
    name: 'TA Lizzy Steger',
    img: 'Fa16/LizzySteger.JPG',
    imgSrc: '../Fa16/LizzySteger.JPG',
    bio: 'LizzyBio',
    email: 'lizzy@cs10.org'
};

var laraM = {
    name: 'Head TA Lara McConnaughey',
    img: 'LaraMcConnaughey.jpg',
    imgSrc: '../Sp17/LaraMcConnaughey.jpg',
    imgCrazy: '../small/LaraMcConnaugheyCrazy.jpg',
    web: 'http://laralinmcc.github.io/',
    bio: 'LaraBio',
    email: 'lara@cs10.org'
};


// Readers

var arvindN = {
    name: 'Reader Arvind Nandakumar',
    imgSrc: '../Sp17/las/ArvindNandakumar.jpg',
    img: 'ArvindNandakumar.jpg'
//     email: 'an179438@berkeley.edu'
};

var niketK = {
    name: 'Reader Niket Kulkarni',
    imgSrc: '../small/NPY.jpg',
    img: 'NPY.jpg.jpg'
//     email: 'niket.kul@berkeley.edu'
};

 //Lab Assistants

 //var amyL = {
    //name: 'LA Amy Lee',
    //imgSrc: '../Sp17/las/AmyLee.jpg',
    //img: '../Sp17/las/AmyLee.jpg',

 //};

//var andresG = {
    //name: 'LA Andres Gonzalez',
    //imgSrc: '../Sp17/las/AndresGonzalez.jpg',
    //img: 'AndresGonzalez.jpg',
//};

//var aprillaJ = {
    //name: 'LA Aprillia Judokusumo',
    //imgSrc: '../Sp17/las/AprilliaJudokusumo.jpg',
    //img: 'AprilliaJudokusumo.jpg',
//};

//var bardiaB = {
    //name: 'LA Bardia Barahman',
    //imgSrc: '../Sp17/las/BardiaBarahman.jpg',
    //img: 'BardiaBarahman.jpg',
//};

 //var batoolN = {
    //name: 'LA Batool Naqvi',
    //imgSrc: '../Sp17/las/BatoolNaqvi.jpg',
    //img: 'BatoolNaqvi.jpg',

 //};

//var bhumikaG = {
    //name: 'LA Bhumika Goel',
    //imgSrc: '../Sp17/las/BhumikaGoel.jpg',
    //img: 'BhumikaGoel.jpg',
//};

//var calvinP = {
    //name: 'LA Calvin Price',
    //imgSrc: '../Sp17/las/CalvinPrice.jpg',
    //img: 'CalvinPrice.jpg',
//};

//var gabrielV = {
    //name: 'LA Gabriel Venditti',
    //imgSrc: '../Sp17/las/GabrielVenditti.jpg',
    //img: 'GabrielVenditti.jpg',
//};

//var hannahV = {
    //name: 'LA Hannah Verdonk',
    //imgSrc: '../Sp17/las/HannahVerdonk.jpg',
    //img: 'HannahVerdonk.jpg',
//};

 //var jingjingJ = {
    //name: 'LA JingJing Jia',
    //imgSrc: '../Sp17/las/JingJingJia.jpg',
    //img: 'JingJingJia.jpg',

 //};

//var jocelynS = {
    //name: 'LA Jocelyn Sun',
    //imgSrc: '../Sp17/las/JocelynSun.jpg',
    //img: 'JocelynSun.jpg',
//};

 //var leonorA = {
    //name: 'LA Leonor Alcaraz',
    //imgSrc: '../Sp17/las/LeonorGuzman.jpg',
    //img: 'LeonorGuzman.jpg',

 //};

//var lyricY = {
    //name: 'LA Lyric Yu',
    //imgSrc: '../Sp17/las/LyricYu.jpg',
    //img: 'LyricYu.jpg',
//};

//var maxY = {
    //name: 'LA Max Yao',
    //imgSrc: '../Sp17/las/MaxYao.jpg',
    //img: 'MaxYao.jpg',
//};

//var michelleC = {
    //name: 'LA Michelle Chan',
    //imgSrc: '../Sp17/las/MichelleChan.jpg',
    //img: 'MichelleChan.jpg',
//};

//var rafaelF = {
    //name: 'LA Rafael Félix',
    //imgSrc: '../Sp17/las/RafaelFelix.jpg',
    //img: 'RafaelFelix.jpg',
//};

//var samuelS = {
    //name: 'Head LA Samuel Starks',
    //img: 'Fa16/SamStarks.jpg',
    //imgSrc: '../Fa16/SamStarks.jpg',
//};

 //var vardaS = {
    //name: 'LA Varda Shrivastava',
    //imgSrc: '../Sp17/las/VardaShrivastava.jpg',
    //img: 'VardaShrivastava.jpg',

 //};

 //var veraG = {
    //name: 'LA Vera Gold',
    //imgSrc: '../Sp17/las/VeraGold.jpg',
    //img: 'VeraGold.jpg',

 //};
/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

var inst = [ carlosF ];
var tas = [laraM, lizzyS];
var readers = [arvindN, niketK];
//var las = [samuelS, amyL, andresG, aprillaJ, arvindN, bardiaB, batoolN, bhumikaG, calvinP, gabrielV, hannahV, jingjingJ, jocelynS, leonorA, lyricY, maxY, michelleC, rafaelF, vardaS, veraG];

// If you need to add a new SECTION add it to this object.
// Follow the same formt.
var all = {
    readers: readers,
    tas: tas,
    inst: inst,
    //las: las
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/

// Build a basic object for a person from the current semester.
function baseObj(name, baseDir) {
    var src = name.replace(/ /g , '');
    var baseDir = baseDir || 'Sp14/';
    return { name: name,
             img: baseDir + src + '.jpg',
             imgSrc: src + '.jpg' };
}

function buildPerson(data, width) {
    var imgPathBase, imgPath, cls, elm, crazyPath;
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.
    // Build data objects for very simple cases with nothing special.
    if (data.constructor === String) {
        data = baseObj(data);
    }
    // when developing load images from a submodule, else load from /resources
    var hostName = window.location.hostname;
    if (hostName === 'localhost' || hostName == '127.0.0.1') {
        imgPathBase = '{{ site.baseurl }}'
    } else {
        imgPathBase = '';
    }
    imgPath = imgPathBase + '/resources/images/small/' + data.imgSrc;
    // Date Hacks for fun!
    if (Date().substr(4, 6) == 'Apr 01') {
        imgPath = 'https://www.cs.berkeley.edu/~ddgarcia/i/DanGarciaUCBFaculty2004Eyebrow_320.jpg';
    }
    // Create a div with this person's data, setting a class for width
    // Col-md- is based on standard bootstrap classes, md-20 is my own addition.
    cls = 'col-md-' + (width === 5 ? '20' : Math.floor(12/width));
    elm = '<div class="'+ cls + '">';
    if (data.img) {
        elm += '<a href="' + imgPathBase + '/resources/images/' + data.img + '">';
    }
    elm += '<img class="staff" align="center" ';
    elm += 'alt=" Staff Photo: ' + data.name + '" title="' + data.name + '" src="';
    elm += imgPath + '"';
    if (data.imgCrazy) {
        crazyPath = imgPath.replace('.jpg', 'Crazy.jpg');
        elm += ' onmouseenter="crazyImage(this, ' + " '" + crazyPath + "'" + ')"';
        elm += ' onmouseleave="normalImage(this,' + " '" + imgPath + "'" + ')"';
    }
    elm += '/>';
    if (data.img) {
        elm += '</a>';
    }
    elm += '<br><strong>';
    if (data.web) {
        elm += '<a href="' + data.web + '" target="_blank">' + data.name + '</a>';
    } else {
        elm += data.name;
    }
    elm += '</strong> ';
    if (data.bio) {
        elm += '(<a href="{{ site.baseurl }}/bios/' + data.bio + '">bio</a>)';
    }
    if (data.email) {
        elm += '<br><a href="mailto:' + data.email +
        '?subject=[CS10] SUBJECT"><code>' + data.email + '</code></a>';
    }
    if (data.office) {
        elm +=  '<br>' + data.office;
    }
    elm += '</div>';
    return elm;
}

function buildGroup(group, w) {
    // Create image elements for all photos in the group (HTML ID)
    // with a WIDTH of w photos per row.
    var ppl = all[group];
    var doc = document.getElementById(group);
    var content = '';
    for (var i = 0; i < ppl.length; i += w) {
        content += '<div class="row staffimgrow">';
        for (var j = i; j < (i + w) && j < ppl.length; j += 1) {
            if (i + w > ppl.length) {
                 w = ppl.length - i;
             }
            content += buildPerson(ppl[j], w);
        }
        content += '</div>';
        content += '<div class="clearfix"></div>';
    }
    doc.innerHTML += content;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

function crazyImage(image, crazyPath) {
    image.src = crazyPath;
}

function normalImage(image, normalPath) {
    image.src = normalPath;
}

/* more code to run on page load */
// Parameters: a section (HTML 'id') and num of images per row.
buildGroup('inst', 5);
buildGroup('tas', 2);
buildGroup('readers', 2);
//buildGroup('las', 5);
