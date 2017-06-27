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
var hw1Spec         = docs('1ybuatsrUMCI-tHHRPwxUpGoZoGxk_SEiGEArocQtIlI')
    hw2Spec         = docs('1X4Oq4aZSsNBl-f5xEwWAkNxUo7-ktAWFKRyEr9fHDUQ')
    finalProjSpec   = docs('1dJdqxrLtC6q5kSXazyhxoOUM0ERc1kkGiPAGH60ajtw')
    hw0             = hw('HW0', '06/30', 'quizzes/2270065')
    hw1             = hw('HW1: Word Guessing', '07/05', 'assignments/7803899') //, hw1Spec)
    hw2             = hw('HW2: Encryptify', '07/19', 'assignments/7803900') //, hw2Spec)
    fProposal       = hw('Final Project Proposal', '07/20') //, 'assignments/7803898', finalProjSpec)\
    fProject        = hw('Final Project', '08/02') //, 'assignments/7803896', finalProjSpec)

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
                null, "https://youtu.be/REEwEi5CLak"), 
        lect('Subroutines, Data types and D&R', "https://www.icloud.com/keynote/0RFy51kT09cBgejwtxGvUVTYg#Lecture_02-_Subroutines._Data_types._D.R",
                null, "https://youtu.be/Qsyc1_fvLrM"),
        lect('Numbers and Abstraction') //, 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QeGNQakQxN3FmMnc')
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
        reading('BtB Chapter 1',
                '{{ site.baseurl }}/resources/readings/btb/chapter1.pdf'),
        reading('Maya Math!', 'http://www.jaguarstones.com/maya/mayamath.html', 'optional')
    ],
    lectures: [
        lect('Programming Paradigms'), //, 'https://drive.google.com/drive/folders/0B7pxUEY76zATb1ZMRDFXN25oLVU?usp=sharing'),
        lect('Lists'), //, 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTTE3TjVfY0xIMG8')
        lect('Scoping and Mutability') //, 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTTE3TjVfY0xIMG8'),
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
        reading('The 10 Algorithms That Dominate Our World',
                'http://io9.com/the-10-algorithms-that-dominate-our-world-1580110464',
                'optional'),
        reading('The real 10 algorithms that dominate our world',
                'https://medium.com/@_marcos_otero/the-real-10-algorithms-that-dominate-our-world-e95fa9f16c04',
                'optional')
    ],
    lectures: [
        lect('Algorithms I'), //, 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QNXJoT0RKSEc3N2M'),
        lect('Algorithms II'), //, 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QZU1VbTlMLWVhNVE'),
        lect('The Internet')
    ],
    labs: [
        lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic'),
        lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic')
    ],
    disc: [disc('Algoritmic Complexity'),
            disc('Internet & Midterm Review')
    ],
    hw: hw2,
    exams: [exam("Paper Midterm", "", "<br> <strong> Friday 07/14 </strong> <br> <u> 3-5PM 306 Soda </u>")]
};
// cs10.week3.lect3.classes = 'exam';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';
//lab('Tic-Tac-Toe, Boards', 'berkeley_bjc/lists/tic-tac-toe.topic'),
//lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
//lab('The Internet', 'berkeley_bjc/areas/internet.topic', true)

// JUL 17 - 21
cs10.week4 = {
    readings: [
        reading('TED: What is the Internet?', 'https://www.ted.com/talks/andrew_blum_what_is_the_internet_really?language=en'),
        reading('A World Without Work', 'http://www.theatlantic.com/magazine/archive/2015/07/world-without-work/395294/')
    ],
    lectures: [
        lect('Recursion I'), //, 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTklZQkNYS0NtTlk')
        lect('Recursion II'), //, 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTklZQkNYS0NtTlk'),
        lect('Guest Lecture: Concurrency & Distributed Systems') //, 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QUlpxdXR4MXV2cWM'),
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
            'http://blog.trinket.io/why-python/'),
        reading('As We May Think',
                'http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/', 'optional')
    ],
    lectures: [
        lect('Python I'), //, 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QbmFTWlhEa25IZHc?usp=sharing'),
        lect('Python II'), //, 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QRnFnY0VKNmMyY3M?usp=sharing'),
        lect('Guest Lecture: Geopolitics') //, 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QVWxuQzlMcHJKVlk')
    ],
    labs: [
        lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic'),
        exam("With-snap<i>!</i> and Python Final", "", "<br> <strong> Friday 07/28 </strong> <br> <u> 10-12AM at 277 Soda </u> ")
    ],
    disc: [disc('Python'),
            disc('Farewell')
    ],
    hw: fProject
};


// AUG 31 - 4
cs10.week6 = {
    readings: [
        reading('Humans Need Not Apply - Video',
                'https://www.youtube.com/watch?v=7Pq-S557XQU'),
        reading('Present Shock -- When Everything Happened Now', 'https://www.youtube.com/watch?v=_z2oFCR-0pc&feature=youtu.be')
    ],
    lectures: [
        lect('Summary and Farewell')
    ],
    labs: [
        lab("Project Work Session")
    ],
    hw: fProject,
    exams: [exam("Paper Final", "", "<br> <strong> Tuesday 08/01 </strong> <br> <u> 9-11PM 306 Soda </u>")
    ]
};


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar(startDate);
});
