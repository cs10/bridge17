var cs10 = cs10 || {};

// Sunday at the start of the semester
cs10.startDate = '{{ site.startDate }}';
cs10.endDate   = '{{ site.endDate }}';
cs10.bCoursesID = '{{ site.bCourses }}';
cs10.NUM_WEEKS_TO_RENDER = 6;
cs10.gradingScheme = { 'A+': 485,
    'A' : 470,
    'A-': 450,
    'B+': 445,
    'B' : 420,
    'B-': 400,
    'C+': 385,
    'C' : 370,
    'C-': 350,
    'D' : 300,
    'F' : 299
};

function bcourses(id) {
    var base = 'https://bcourses.berkeley.edu/courses/';
    var reading = '/files/folder/Readings?preview='
    return base + cs10.bCoursesID + reading + id;
}

// ==================================================
// ==========     OBJECT CREATION          ==========
// ==================================================
// Return the week of the course in range [1, 17] else -1
function getWeekOfDate(date) {
    var now = new Date();
    var from = date;
    if (typeof from === 'string') {
        from = new Date(date);
    }
    var dist = from - now;
    if (dist < 0) {
        return -1;
    }
    var weeks = Math.floor(dist / (MS_DAY * 7));
    return weeks <= 17 ? weeks : -1;
}

cs10.newLabObject = function(title, url, rq, video) {
    var baseURL = '{{ site.labsurl }}/topic/topic.html?topic=';
    var urlEnd  = '&novideo&noreading&noassignment&course={{ site.labsCourse }}';
    var lab = { type: 'Lab' };
    lab.title = title;
    // Global Counter for lecture
    cs10.rqCounter = cs10.rqCounter || 0;
    cs10.labCounter = cs10.labCounter || 0;
    if (!title) {
        lab.title = 'No Lab';
    }
    if (url) {
        cs10.labCounter += 1;
        lab.title = cs10.labCounter + ': ' + lab.title;
        lab.url = baseURL + url + urlEnd;
    }
    if (rq) {
        cs10.rqCounter += 1;
        rq = cs10.rqCounter;
    }
    if (title.indexOf('Project Work') !== -1 || title.indexOf('Work Session') !== -1) {
        lab.classes = 'project';
    }
    if (title.indexOf('No Lab') !== -1 || title.indexOf('No Class') !== -1) {
        lab.classes = 'noClass';
    }
    lab.RQ = rq;
    lab.video = video;
    return lab;
};

cs10.newReadingsObject = function(title, url, classes) {
    var reading = {
        type: 'Reading',
        title: title,
        url: url
    };
    if (!classes) {
        classes = 'required'; // Default option
    }
    reading.classes = 'reading ' + classes;
    return reading;
};

cs10.newLectureObject = function(title, path, presenter, video) {
    var lect = { type: 'Lecture' };
    cs10.lectCounter = cs10.lectCounter || 0;
    if (!title) {
        lect.title = 'No Lecture';
        return lect;
    } else if (title.indexOf('Exam') === -1) {
        cs10.lectCounter += 1;
        lect.title = cs10.lectCounter + ": " + title;
    } else {
        lect.title = title;
    }
    if (title.indexOf('No Lecture') !== -1 || title.indexOf('No Class') !== -1) {
        lect.classes = 'noClass';
    }
    lect.url = path;
    lect.guest = presenter;
    lect.video = video;
    return lect;
};

cs10.newDiscussionObject = function(title, files) {
    var disc = { type: 'Discussion' };
    disc.title = title;
    if (!title) {
        disc.title = 'No Discussion';
    }
    if (title.indexOf('No Discussion') !== -1 || title.indexOf('No Class') !== -1) {
        disc.classes = 'noClass';
    }
    // Global Counter for discussions
    cs10.discussionCounter = cs10.discussionCounter || 0;
    cs10.discussionCounter += 1;
    if (files) {
        var count = cs10.discussionCounter;
        disc.url = 'discussion/' + (count < 10 ? '0' : '') + count + '/';
    }
    return disc;
};

cs10.newHomeworkObject = function(title, due, submission, spec) {
    var obj = {
        type: 'Homework',
        urls: []
    };
    // TODO: Consider refactoring this....
    if (!title) {
        obj.title = 'No Homework!<br />But you might want to check next week\'s';
        return obj;
    }
    obj.title = title;
    if (due) {
        obj.classes = 'due';
        obj.due = '<u>' + due + '</u>';
    }
    if (spec) {
        obj.urls.push({
            title: "Spec",
            url: spec
        });
    }
    if (submission) {
        // Allow multiple submissions per assignment
        // but keep shorthand for a common single URL
        if (submission.constructor !== Array) {
            submission = [ {
                title: "Submit",
                url: submission
            } ];
        }
        submission.forEach(function(subm) {
            obj.urls.push({
                title: subm.title || "LINK -- FIXME",
                url: 'https://bcourses.berkeley.edu/courses/' + cs10.bCoursesID +
              '/' + subm.url
            });
        });
    }
    return obj;
};

cs10.newExamObject = function(title, url, loc) {
    var exam = {};
    exam['title'] = title;
    exam['url'] = url;
    exam['loc'] = loc;
    console.log(exam);
    return exam;
};

// ==================================================
// ==========     RENDERING CODE           ==========
// ==================================================
// REQUIRES MOMENTJS

cs10.getWeekStartDate = function(week) {
    var start = moment(cs10.startDate);
    return start.add((week - 1) * 7 + 1, 'd');
}

cs10.renderTableCalendar = function() {
    var result = $('<tbody>');
    var table = $('.calendar.table');
    if (table.length === 0) { return; }
    for(var i = 1; i <= cs10.NUM_WEEKS_TO_RENDER; i += 1) {
        result.append(cs10.renderTableRow(i, cs10['week' + i]));
    }
    table.append(result);
};

cs10.weeklyFormat = [
    'readings', // Readings
    'lectures',
    'labs',
    'disc',     
    'hw',
    'exams'
];

cs10.renderTableRow = function(week, data) {
    var row = $('<tr>').addClass('cal');
    // TODO: Special Case For data.special
    // TODO: Handle Exams (data.exams)
    row.append($('<td>').html(week))                        // Week Number
          .append($('<td>').html(cs10.getDateString(week))) // Dates
    cs10.weeklyFormat.forEach(function (key) {
        console.log(key);
        console.log(data[key]);
        row.append(cs10.renderCell(key, data[key]));
    });
    return row;
};

/*
    Given a cellType, and some data, find renderFunction for that type
    and call it with data.
    Note that this handles calling the function based on a somewhat arbitrary
    naming scheme.
*/
cs10.renderCell = function(cellType, data) {
    var renders,
        functionName = ('renderTable' + cellType).toLowerCase(),
        functionNoNum = functionName.slice(0, -1);
    // Slice of the last character which may be a number like lab1 or lect2
    // This allows multiple of the same type of item in a week.
    // TODO: Use indexOf or key.match(/functionName|functionNoNum/i) ?
    console.log(functionNoNum);
    console.log("heeeeeere");
    var render = Object.getOwnPropertyNames(cs10).filter(function(x) {
        var key = x.toLowerCase();
        // console.log(cellType, x);
        // console.log(functionName, key.indexOf(functionName),
        //             functionNoNum, key.indexOf(functionNoNum));
        return  key.indexOf(functionName) === 0 || key.indexOf(functionNoNum) === 0;
    });
    if (render.length > 0) {
        return cs10[render[0]](data);
    }
    console.log('TRIED TO RENDER %s BUT COULDNT', cellType);
    return data;
}

cs10.getDateString = function(week) {
    var start = cs10.getWeekStartDate(week);
    var end   = moment(start).add(4, 'd');
    return (start.month() + 1) + '-' + start.date() + ' to ' +
            (end.month() + 1) + '-' + end.date();
};

cs10.renderTableReading = function(readings) {
    var result = $('<td>');
    if (!readings) {
        result.append('No Reading');
    } else if (typeof readings === 'string') {
        result.append(readings);
    } else {
        for (var i = 0; i < readings.length; i += 1) {
            var rd = readings[i];
            var a = $('<a>').html(rd.title).attr(
                {'class': rd.classes, 'href': rd.url, 'target': '_blank'} );
            result.append(a);
            result.append('<br>');
        }
    }
    return result;
};

cs10.renderTableLecture = function(lectures) {
    var result = $('<td>');
    result.append('<br>');
    if (!(lectures instanceof Array)) {
        lectures = [ lectures ];
    }
    for (var i = 0; i < lectures.length; i += 1) {
        var lect = lectures[i];
        if (!lect) {
            result.append('No Lecture');
            result.attr({'class': 'noClass'});
        } else if (typeof lect === 'string') {
            result.append(lect);
        } else {
            if (lect.guest) {
                result.append($('<strong>').html('Guest Lecturer: ' + lect.guest));
                result.append($('<br>'));
            }
            var title = lect.title;
            if (lect.url) {
                title = $('<a>').attr({href: lect.url}).html(lect.title);
            }
            result.append(title);
            result.append('<br>');
            if (lect.video) {
                result.append(
                    $('<a>').attr({href: lect.video}).html('(Video)')
                )
            }
            result.attr({ 'class' : lect.classes });
            if (i + 1 < lectures.length) {
                result.append('<hr style="height:1px;color:white;background-color:white;" />');
            }
        }
    }
    result.append('<br>');
    return result;
};

cs10.renderTableLab = function(labs) {
    var result = $('<td>');
    if (!(labs instanceof Array)) {
        labs = [ labs ];
    }
    for (var i = 0; i < labs.length; i += 1) {
        var lab = labs[i];
        var tag = lab.url ? '<a>' : '<span>';
        var title = $(tag).html(lab.title).attr({
            'href': lab.url, 'target': '_blank'
        });
        lab.title = title;
        result.append(lab.title);
        if (lab.RQ) {
            result.append($('<br>'));
            result.append($('<strong>').html('Reading Quiz ' + lab.RQ +' (in lab)'));
        }
        result.attr({ 'class' : lab.classes });
        if (i + 1 < labs.length) {
            result.append('<hr style="height:1px;color:white;background-color:white;" />');
        }
    }
    return result;
};

cs10.renderTableDiscussion = function(disc) {
    var result = $('<td>');
    if (!disc) {
        result.append('No Discussion');
        result.attr({'class': 'noClass'});
    } else if (typeof disc === 'string') {
        result.append(disc);
    } else {
        result.append(disc.title);
        result.append('<br>');
        result.attr({ 'class' : disc.classes });
        if (disc.url) {
            var url = $('<a>').html('Resources').attr({'href' : disc.url});
            result.append($('<br>'));
            result.append($('<strong>').html('(' + url[0].outerHTML + ')'));
        }
    }
    return result;
};

cs10.renderTableHW = function(hw) {
    var result = $('<td>');
    if (!hw) {
        hw = [cs10.newHomeworkObject('No Homework')];
    } else if (typeof hw === 'string') {
        hw = [cs10.newHomeworkObject(hw)];
    } else if (!(hw instanceof Array)) { // HW is a list.
        hw = [ hw ];
    }
    for (var i = 0; i < hw.length; i += 1) {
        var assn = hw[i];
        result.append(assn.title);
        result.append('<br>');
        result.attr({ 'class' : assn.classes });
        var j = 0, links = assn.urls.length, item;
        for (; j < links; j += 1) {
            item = assn.urls[j];
            result.append($('<a>').html(item.title).attr({
                href: item.url,
                target: '_blank'
            }));
            if (j + 1 < links) {
                result.append(' | ');
            }
        }
        if (assn.url) {
            result.append($('<a>').html('Submit').attr({
                'href' : assn.url, }));
        }
        if (assn.due) {
            result.append('<br>');
            result.append($('<i>').html('due ' + assn.due + ' at 11:59pm'));
        }
        if (i + 1 < hw.length) {
            result.append('<hr>');
        }
    }
    return result;
};

cs10.renderTableExam = function(exams) {
    if (!(exams)) {
        exams = [{}];
    }
    var result = $('<td>');
    console.log("From rendertableexam");
    if (!(exams instanceof Array)) {
        exams = [ exams ];
    }
    console.log(exams);
    for (var i = 0; i < exams.length; i += 1) {
        var exam = exams[i];
        var t = exam.title ? exam.title : "";
        exam.title = title = $('<a>').attr({href: exam.url}).html(exam.title);
        result.append(exam.title);
        result.append(exam.loc);
        if (i + 1 < exams.length) {
            result.append('<hr style="height:1px;color:white;background-color:white;" />');
        }
    }
    return result;
};
