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
    hw0             = hw('HW0', '06/30', 'quizzes/2266425')
    hw1             = hw('HW1: Word Guessing', '07/07', 'assignments/7768716') //, hw1Spec)
    hw2             = hw('HW2: Encryptify', '07/21', 'assignments/7768717') //, hw2Spec)
    fProposal       = hw('Final Project Proposal', '07/23') //, 'assignments/7768715', finalProjSpec)
    fMilestone      = hw('Final Project Milestone', '07/28') //, 'assignments/7768714')
    fProject        = hw('Final Project', '08/04') //, 'assignments/7768713', finalProjSpec)

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JAN 16 - 20
cs10.week1 = {
    readings: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                docs('1PZJ_LYYWRYu12cTbBKF9IyY4BqEG-BibgisBoQn9BpY')),
        reading('Learning to Code!', 'http://www.youtube.com/watch?v=dU1xS07N-FA'),
        reading('Is Abstraction the Key to Computing?',
                bcourses('59744797'),
                'optional'),
    ],
    lectures: [
        lect('Abstraction', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QS21oamFTYmN5aWM'),
        lect('Building Blocks', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QS21oamFTYmN5aWM'),
        lect('Numbers and Abstraction', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QeGNQakQxN3FmMnc')
    ],
    labs: [lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_pair/1-introduction.topic"),
           lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic'),
           lab('Conditionals and Reporters', 'berkeley_bjc/intro_pair/3-conditionals.topic')
    ],
    disc: disc('Welcome to CS10!'),
    hw: hw0
};

// JAN 23 - 27
cs10.week2 = {
    readings: [
        reading('The Story of Alan Turing &amp; His Machine',
                'https://youtu.be/CQhrMmbiaM0'),
        reading('BtB Chapter 1',
                '{{ site.baseurl }}/resources/readings/btb/chapter1.pdf')
    ],
    lectures: [
        lect('Scoping', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTTE3TjVfY0xIMG8'),
        lect('Programming Paradigms', 'https://drive.google.com/drive/folders/0B7pxUEY76zATb1ZMRDFXN25oLVU?usp=sharing'),
        lect('Lists', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTTE3TjVfY0xIMG8')
    ],
    labs: [
        lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic'),
        lab('Lists', 'berkeley_bjc/lists/lists-I.topic')
    ],
    disc: disc('Power of Binary and Functions'),
    hw: hw1
};

// JAN 30 - FEB 3
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
        lect('Algorithms', 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QNXJoT0RKSEc3N2M'),
        lect('Algorithmic Complexity', 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QZU1VbTlMLWVhNVE'),
        lect('Recursion I', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTklZQkNYS0NtTlk')
    ],
    labs: [
        lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic'),
        lab('Algorithmic Complexity', 'berkeley_bjc/areas/algorithm-complexity.topic')
    ],
    disc: disc('Lists, and Algorithmic Complexity'),
    hw: hw2,
    exams: [exam("With-Snap<i>!</i> Midterm", "", "<br> <strong> Friday 07/14 </strong> <br> <u> 10-12AM at 277 Soda </u>"),
        exam("Paper Midterm", "", "<br> <strong> Friday 07/14 </strong> <br> <u> 3-5PM TBD </u>")
    ]
};
// cs10.week3.lect3.classes = 'exam';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';
//lab('Tic-Tac-Toe, Boards', 'berkeley_bjc/lists/tic-tac-toe.topic'),
//lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
//lab('The Internet', 'berkeley_bjc/areas/internet.topic', true)

// FEB 6 - 10
cs10.week4 = {
    readings: [
        reading(
            'Why Python is a Great First Language',
            'http://blog.trinket.io/why-python/'),
        reading('A World Without Work', 'http://www.theatlantic.com/magazine/archive/2015/07/world-without-work/395294/')
    ],
    lectures: [
        lect('Recursion II', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QTklZQkNYS0NtTlk'),
        lect('Concurrency', 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QUlpxdXR4MXV2cWM'),
        lect('The Internet')
    ],
    labs: [
        lab('Trees and Fractals Using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic'),
        lab('Recursive Reporters', 'berkeley_bjc/recur/recursive-reporters-part1.topic')
    ],
    disc: disc('Recursion'),
    hw: [hw2, fProposal]
};

// FEB 13 - 17
cs10.week5 = {
    readings: [
        reading('TED: What is the Internet?', 'https://www.ted.com/talks/andrew_blum_what_is_the_internet_really?language=en'),
        reading('As We May Think', 'http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/', 'optional')
    ],
    lectures: [
        lect('Python I', 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QbmFTWlhEa25IZHc?usp=sharing'),
        lect('Python II', 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QRnFnY0VKNmMyY3M?usp=sharing'),
        lect('Social Implications of Computing I', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QVWxuQzlMcHJKVlk')
    ],
    labs: [
        lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic'),
        lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
    ],
    disc: disc('Python'),
    hw: fMilestone
};


// FEB 20 - 24
cs10.week6 = {
    readings: [
        reading('Humans Need Not Apply - Video',
                'https://www.youtube.com/watch?v=7Pq-S557XQU'),
        reading('Present Shock -- When Everything Happened Now', 'https://www.youtube.com/watch?v=_z2oFCR-0pc&feature=youtu.be')
    ],
    lectures: [
        lect('Social Implications of Computing II'),
        lect('Summary and Farewell'),
        lect('<strong> Final Exam Review </strong>')
    ],
    labs: [
        lab("Project Work Session")
    ],
    disc: disc('Future of Computing'),
    hw: fProject,
    exams: [exam("With-snap<i>!</i> and Python Final", "", "<br> <strong> Friday 08/04 </strong> <br> <u> 10-12AM at 277 Soda </u> "),
        exam("Paper Final", "", "<br> <strong> Friday 07/14 </strong> <br> <u> 5-7PM TBD </u>")
    ]
};

// FEB 27 - MAR 3
cs10.week7 = {
    readings: [
        reading('BtB Chapter 6','http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf'),
    ],
    lect1: lect('Recursion II', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QWHY3Q0owczNaR3c'),
    lect2: lect('Social Implications of Computing I', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QVWxuQzlMcHJKVlk'),
    lab1: lab('Recursive Reporters', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    lab2: lab('Tic-Tac-Toe, Boards', 'berkeley_bjc/lists/tic-tac-toe.topic'),
    disc: disc('Recursion and Social Implications'),
    hw: fProject
};

// MAR 6 - 10
cs10.week8 = {
    readings: [
        reading('Rest of BtB chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
    ],
    lect1: lect('Procedures as Data - Higher Order Procedures',
            'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QMGJwdUxXd05GODA'),
    lab1: lab('Midterm Project Work Session', null, true),
    //lect2: lect('Social Implications of Computing II'),
    lect2: lect('Privacy', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QX2xjOV8xTnd3cmc', "Gerald Friedland"),
    lab2: lab('Functions as Data and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic'),
    disc: disc('Social Implications and HOFs'),
    hw: mProject
};

// MAR 13 - 17
cs10.week9 = {
    readings: [
        reading('The End of Moore\'s Law',
                'http://www.nytimes.com/2015/09/27/technology/smaller-faster-cheaper-over-the-future-of-computer-chips.html?_r=0'),
    ],
    disc: disc('Midterm Prep'),
    lab1: lab('Midterm Project Work Session', null, true),
    /* AI */
    lect1: lect('Artificial Intelligence', 'https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QNFVHVUdfbXYzcWM', "Pat Virtue"),
    //lect1: lect('Social Implications of Computing III'),
    lect2: lect('Concurrency', 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QUlpxdXR4MXV2cWM'),
    hw: mProject
};


// MAR 20 - 24
cs10.week10 = {
    readings: 'No Readings for this Week - Study for the Midterm!',
    disc: disc('Midterm Debrief'),
    lect1: lect('<br><br><div class="exam inner">Midterm Exam Part I</a><br><br>Monday 3/20<br>Evans 10</div>'
    ),
    lect2: lect('<br><br><div class="exam inner">Midterm Exam Part II</a><br><br>Wednesday 3/22<br>Evans 10</div>'
    ),
    lab1: lab('Online <span class="snap">snap</span> Midterm'),
    lab2: lab('Recursion with HOFs', 'berkeley_bjc/hofs/hofs-with-recursion.topic'),
    hw: 'Start Thinking about Explore Post'
};

 cs10.week10.lect1.classes = 'exam';
 cs10.week10.lect2.classes = 'exam';

// MAR 27 - 31
cs10.week11 = {
    special: 'Spring Break -- No Class',
    readings: 'No Reading.',
    hw: hw('Have fun!')
};

// cs10.week11 = {
//     readings: [
//         reading(
//             'BtB pg. 295-304, 309',
//             'https://drive.google.com/file/d/0B3vESj3HTRTkbVo1dTV5SUp4T0U/view?usp=sharing'),
//         reading(
//             'What is the Internet?',
//             'https://www.youtube.com/watch?v=UlJku_CSyNg',
//             'optional'),
//         reading(
//             'BtB pg. 305-316',
//             'https://drive.google.com/file/d/0B3vESj3HTRTkbVo1dTV5SUp4T0U/view?usp=sharing',
//             'optional'
//         )
//     ],
//     disc: disc('Midterm Review', true),
//     lect1: lect('Procedures as Data - Higher Order Procedures', 'https://drive.google.com/drive/folders/0B7pxUEY76zATZ1JSUFZpYlQ5eFE?usp=sharing'
//             //lectureURL('12n7JQXQCJHBt7SjKjGGkVNP5iyhAngOLMVeMpg40D8I')
//             //lectureURL('1TwO63UECd9I4ufKDYUj9LDFT6RrDOtFQlbbcC9oBebE')
//     ),
//     lect2: lect('Python I', 'https://drive.google.com/drive/folders/0B7pxUEY76zATckZVaUlZblY4aW8?usp=sharing'
//             //lectureURL('1kZ2LwxKUTJLyo5GlLUdX72S9xT_9YqblN5WLD8y8Gg0')
//             //lectureURL('1Ouz8QdPT-L0x3lg77S2yBGbsqjmuKJLAG3SjxtD7zLQ')
//     ),
//     //lab1: lab('The Internet', 'berkeley_bjc/areas/internet.topic', true),
//     lab1: lab('Functions as Data and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic', true),
//     lab2: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
//     hw: 'No homework - Study for the Midterm Exam!'
// };



// APR 3 - 7
cs10.week12 = {
    readings: [
        reading(
            'The GNU Manifesto Turns Thirty',
            'http://www.newyorker.com/business/currency/the-gnu-manifesto-turns-thirty',
            'optional'),
        reading(
            'Python vs. COBOL (parody)',
            'https://medium.com/@oceankidbilly/python-vs-r-vs-cobol-which-is-best-for-data-science-7b2979c6a000',
            'optional')
    ],
    disc: disc('Python'),
    lect1: lect('Python I', 'https://drive.google.com/drive/folders/0B4KuCtIkhB7QbmFTWlhEa25IZHc?usp=sharing'),
    lab1: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
    lab2: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    hw: [explorePost, explorePostDoc]
};

// APR 10 - 14
cs10.week13 = {
    readings: [
        reading('Addicted to Apps', 'http://www.nytimes.com/2013/08/25/sunday-review/addicted-to-apps.html?_r=0'),
        reading('CS8 lecture 1', 'https://www.youtube.com/watch?v=69hHbVza7XI&t=27m49s', 'optional')
    ],
    lect1: lect('Saving the World with Computing', "https://drive.google.com/drive/u/1/folders/0B4KuCtIkhB7QcUVuaDF1MHhoZFE", "Kathy Yelick"),
    lect2: lect('Human Computer Interface', null, "Bjoern Hartmann"),
    lab1: lab('Besides Blocks: Text Processing in Python', 'berkeley_bjc/python/besides-blocks-text-processing.topic'),
    lab2: lab('Project Work Session', null, true), //, 'berkeley_bjc/python/besides-blocks-data.topic'),
    disc: disc('TBD'),
    hw: [exploreComments, fProposal]
};


// APR 17 - 21
cs10.week14 = {
    readings: [
        reading('Gladwell vs. Shirky: A Year Later, Scoring the Debate Over Social-Media Revolutions', 'http://www.wired.com/2011/12/gladwell-vs-shirky/'),
        reading('P vs. NP and the Computational Complexity Zoo - Video', ' https://youtu.be/YX40hbAHx3s', 'optional')
    ],
    lab1: lab('Final Project Work Session', null, true),
    lab2: lab('The Internet', 'berkeley_bjc/areas/internet.topic'),
    lect1: lect('Limits of Computing'),
    lect2: lect('The Internet', null, "Steven Traversi, and Yifat Amir"),
    disc: disc('The Internet'),
    hw: fMilestone
};

// APR 24 - 28
cs10.week15 = {
    readings: [
        reading('A Quantum Leap in Computing?', 'http://www.newyorker.com/tech/elements/a-quantum-leap-in-computing', 'optional')
    ],
    disc: disc('Farewell! Recap and Feedback'),
    lab1: lab('Project Work Session', null, true),
    lect1: lect('Alumni Panel'),
    lect2: lect('Conclusion'),
    lab2: lab('In-Lab Final Exam'),
    hw: fProject
};

// DEAD WEEK
// MAY 1 - 5
cs10.week16 = {
    special: 'RRR Week -- No Class',
    readings: 'No Reading.',
    hw: 'Study for the Final'
};

// MAY 8 - 12
cs10.week17 = {
    readings: 'No Reading.',
    lab1: lab('<br><br><div class="exam inner">Final Exam<br><br>Tuesday 5/8<br> TBD <br>TBD</div>'),
    hw: 'Enjoy your Summer Break!'
};
cs10.week17.lab1.classes = 'exam';


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar(startDate);
});
