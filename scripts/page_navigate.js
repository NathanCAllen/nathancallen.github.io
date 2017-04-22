function home () {
    document.getElementById('home').style.display = 'block';
    document.getElementById('bio').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('resume').style.display = 'none';

    document.body.style.backgroundColor = "#7ba4d4";
};

function bio () {
    document.getElementById('bio').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('resume').style.display = 'none';

    document.body.style.backgroundColor = "#7ba4d4";
};

function resume () {
    document.getElementById('resume').style.display = 'block';
    document.getElementById('bio').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';

    document.body.style.backgroundColor = "white";
};

function projects () {
    document.getElementById('projects').style.display = 'block';
    document.getElementById('bio').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('resume').style.display = 'none';

    document.body.style.backgroundColor = "white";
};

function showPDF () {
    if (document.getElementById('resume_pdf').style.display != 'block') {
        document.getElementById('resume_pdf').style.display = 'block';
        document.getElementById('pdf_text').innerHTML =
        'To hide my full resume, click ' +
            '<a href="javascript:showPDF()">here</a>';
    } else {
        document.getElementById('resume_pdf').style.display = 'none';
        document.getElementById('pdf_text').innerHTML =
            'To show my full resume, click ' +
                '<a href="javascript:showPDF()">here</a>';
    };
};

$(document).ready(function(){
    var slider = $("div#mySliderTabs").sliderTabs();
});