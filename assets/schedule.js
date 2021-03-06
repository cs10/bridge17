/* Shortcuts for creating schedule objects
 * Parameters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[slides folder]', '[video URL]', '[Guest Name]')
 * lab1:     (title, 'topic file path', [boolean -- Reading Quiz?], 'video link')
 * disc:    (title, [boolean -- Resources available?])
 * HW:      (title, due, submission, spec)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    work     = lab, // shortcut for work sessions.
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject,
    exam     = cs10.newExamObject,
    startDate = new Date('01/14/2017'); // The SATURDAY before the first week of the calendar.

function docs(id) {
    return 'assign.html?//docs.google.com/document/d/' + id + '/pub';
}

function lectureURL(googId) {
   return 'https://docs.google.com/a/berkeley.edu/presentation/d/' +
           googId +  '/edit?usp=sharing';
}

// CONSTANTS:
var hw1Spec         = docs('12892Y0YgHAuA-V0kLmam7jKsDKAoPWg7rcf_fu5AhJg')
    hw2Spec         = docs('1X4Oq4aZSsNBl-f5xEwWAkNxUo7-ktAWFKRyEr9fHDUQ')
    finalProjSpec   = docs('1Kbx4UqaFafS2Au7y1qIVu2lIOAFGT2QwcukqmpUUZ3M')
    hw0             = hw('HW0', '06/30', 'quizzes/2270065')
    hw1             = hw('HW1: Word Guessing', '07/07', 'assignments/7803899', hw1Spec)
    hw2             = hw('HW2: Encryptify', '07/19', 'assignments/7803900', hw2Spec)
    fProposal       = hw('Final Project Proposal', '07/20', 'assignments/7803898', finalProjSpec)
    fProject        = hw('Final Project', '08/02', 'assignments/7803896', finalProjSpec)

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JUN 26 - 30
cs10.week1 = {
    readings: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                docs('1PZJ_LYYWRYu12cTbBKF9IyY4BqEG-BibgisBoQn9BpY')),
        reading('Learning to Code!', 'http://www.youtube.com/watch?v=dU1xS07N-FA'),
        reading('Dan Garcia\' TEDxBerkeley Talk', 'https://www.youtube.com/watch?v=ozRovyDwKEM')
    ],
    lectures: [
        lect('Welcome & Abstraction', "https://www.icloud.com/keynote/0fewPMRrDWfv3pkmykATfo87Q#Lecture_01_Welcome_and_Abstraction",
                "https://youtu.be/REEwEi5CLak"), 
        lect('Subroutines, Data types and D&R', "https://www.icloud.com/keynote/0RFy51kT09cBgejwtxGvUVTYg#Lecture_02-_Subroutines._Data_types._D.R",
                "https://youtu.be/Qsyc1_fvLrM"),
        lect('Numbers and Abstraction', "https://www.icloud.com/keynote/0F8poTDN8FuN7G6KWgoYWrxcQ#Lecture_03-_Numbers_and_Abstraction",
                "https://youtu.be/l0n-dBCp6mY") 
    ],
    labs: [lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_pair/1-introduction.topic"),
           lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic'),
           lab('Conditionals and Reporters', 'berkeley_bjc/intro_pair/3-conditionals.topic')
    ],
    disc: [disc('Welcome to CS10!'),
            disc('Power of Binary and Booleans')
    ],
    hw: hw0
};

// JUL 3 - 7
cs10.week2 = {
    readings: [
         reading('The Story of Alan Turing &amp; His Machine',
                 'https://youtu.be/CQhrMmbiaM0'),
         reading('Binary in History',
                 'http://www.nature.com/news/polynesian-people-used-binary-numbers-600-years-ago-1.14380'),
         reading('What is information theory?',
                 'https://www.youtube.com/watch?v=d9alWZRzBWk&t=1s'),
         reading('Maya Math!', 'http://www.jaguarstones.com/maya/mayamath.html', 'optional')
    ],
    lectures: [
        lect('Programming Paradigms', "https://www.icloud.com/keynote/0e0cMOv8pJwRCHOzhHxPx_HVQ#Lecture_04-_Programming_Paradigms",
                "https://youtu.be/50K98Cb4STc"), 
        lect('Scoping and Lists', "https://www.icloud.com/keynote/0nQnHkCwGP4acAHJXRZHHBTIA#Lecture_05-_Scoping_._Lists",
                "https://youtu.be/EMroJaUnMck")
    ],
    labs: [
        lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic'),
        lab('Lists', 'berkeley_bjc/lists/lists-I.topic')
    ],
    disc: [disc('Functions'),
            disc('Lists')
    ],
    hw: hw1
};

// JUL 10 - FEB 14
cs10.week3 = {
    readings: [
         reading('What is an Algorithm (book excerpts)?',
                 bcourses('60735934')),
         reading('How Algorithms Shape Our World',
                 'http://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),
         reading('Algorithms Are Great and All...',
                 'http://www.wired.com/2014/11/algorithms-great-can-also-ruin-lives/'),
         reading('The real 10 algorithms that dominate our world',
                 'https://medium.com/@_marcos_otero/the-real-10-algorithms-that-dominate-our-world-e95fa9f16c04',
                 'optional'),
         reading('Our brains have a basic algorithm that enables our intelligence',
                 'https://www.sciencedaily.com/releases/2016/11/161121165921.htm',
                 'optional')
    ],
    lectures: [
        lect('Mutability and HOFs', "https://www.icloud.com/keynote/0EHgud9G8hw9fjvq_PTY0ZgoA#Lecture_06-_Mutability_and_HOFs",
                "https://www.youtube.com/watch?v=Gel6EOmf1d4"),
        lect('Algorithms I', "https://www.icloud.com/keynote/0NvQgncfVTCLfvkyxOPpSPDQw#Lecture_07__Algorithms_I",
                "https://youtu.be/UhUKr4YkrQY"),
        lect('Algorithms II', "https://www.icloud.com/keynote/0RSZtjTbP98tLe_K7Nn8uyljA#Lecture_08__Algorithms_II",
                "https://youtu.be/-bRj_Ic-8JY")
    ],
    labs: [
        lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic'),
        lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic')
    ],
    disc: [disc('Algoritmic Complexity'),
            disc('Internet & Midterm Review')
    ],
    hw: hw2,
    exams: [exam("Paper Midterm", "<br> <strong> Friday 07/14 </strong> <br> <u> 5-7PM 306 Soda </u>")]
};
// cs10.week3.lect3.classes = 'exam';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';
//lab('Tic-Tac-Toe, Boards', 'berkeley_bjc/lists/tic-tac-toe.topic'),
//lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
//lab('The Internet', 'berkeley_bjc/areas/internet.topic', true)

// JUL 17 - 21
cs10.week4 = {
    readings: [
        reading("What is the Internet?", "https://www.youtube.com/watch?v=Dxcc6ycZ73M"),
        reading("The Internet: Packets, Routing & Reliability", "https://www.youtube.com/watch?v=AYdF7b3nMto"),
        reading("The Internet: Cybersecurity and Crime", "https://www.youtube.com/watch?v=AuYNXgO_f3Y"),
        reading("The Future of Computer Chips", 
                "https://www.nytimes.com/2015/09/27/technology/smaller-faster-cheaper-over-the-future-of-computer-chips.html?_r=0"),
         reading('A World Without Work', 'http://www.theatlantic.com/magazine/archive/2015/07/world-without-work/395294/',
                 'optional')
    ],
    lectures: [
        lect('Recursion I', 'https://www.icloud.com/keynote/07Helahs2isAqdmUpipdiylzA#Lecture_10__Recursion_I',
                'https://www.youtube.com/watch?v=4QCZ3CQLodg'),
        lect('Recursion II', 'https://www.icloud.com/keynote/0C7GLVygj3H2X9TOad1vqaf3A#Lecture_11__Recursion_II',
                'https://www.youtube.com/watch?v=TsoEHHK3OFQ&feature=youtu.be'),
        lect('Guest Lecture: Geopolitics', 'https://docs.google.com/presentation/d/1q9-tepHglcE8GFxWx6Moy1zkYHOvd5QzNiU2i5z8_rE/pub?start=false&loop=false&delayms=3000&slide=id.p4',
                'https://youtu.be/38rnMphlVeE')
    ],
    labs: [
        lab('Recursive Reporters', 'berkeley_bjc/recur/recursive-reporters-part1.topic'),
        lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic')
    ],
    disc: [disc('Recursion I'),
            disc('Recursion II & Concurrency')
    ],
    hw: [hw2, fProposal]
};

// JUL 23 - 28
cs10.week5 = {
    readings: [
         reading(
             'Why Python is a Great First Language',
             'http://blog.trinket.io/why-python/')
    ],
    lectures: [
        lect('Python I', 'https://drive.google.com/open?id=1frVJMI0nzOyctZi9uOdLqNP2P4-WaaFaCf5t791GVho',
                'https://youtu.be/Og-LUTwoxVY'),
        lect('Python II', 'https://docs.google.com/a/berkeley.edu/presentation/d/1_Q_4c1qraTWCqghe6Gq7dcJxAseTGJOPR04fE_vXVok/edit?usp=sharing',
                'https://youtu.be/8E6WsJPU80Y'), 
        lect('Guest Lecture: Design', 'https://docs.google.com/presentation/d/1rPSR2X57vu_Vh-VmUr-7GpB1XxI7CkyGpMdvyRtPeWc/edit#slide=id.p4') 
    ],
    labs: [
        lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic')
    ],
    disc: [disc('Python'),
            disc('Farewell')
    ],
    hw: fProject,
    exams: [
        exam("With-snap<i>!</i> Final", "<br> <strong> Friday 07/28 </strong> <br> <u> 10AM-12PM in Lab </u>")
    ]
};


// AUG 31 - 4
cs10.week6 = {
    readings: [
//         reading('Humans Need Not Apply - Video',
//                 'https://www.youtube.com/watch?v=7Pq-S557XQU'),
//         reading('Present Shock -- When Everything Happened Now', 'https://www.youtube.com/watch?v=_z2oFCR-0pc&feature=youtu.be')
    ],
    lectures: [
        lect('Summary and Farewell', 'https://docs.google.com/a/berkeley.edu/presentation/d/1CB_QdUih56j0uCY5pf8i9tLxCDXbiOgJQtvzOBRXO9Q/edit?usp=sharing')
    ],
    labs: [
        lab("Project Work Session")
    ],
    hw: fProject,
    exams: [
        exam("Paper Final", "<br> <strong> Wednesday 08/02 </strong> <br> <u> 10-12PM 56 Barrows </u>")
    ]
};


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar(startDate);
});
