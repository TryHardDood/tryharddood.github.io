$('#header').load("https://tryharddood.github.io/web/elements/header.html");
$('#header-tabs').load("https://tryharddood.github.io/web/elements/header-tabs.html");

$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: true,
    hover: false,
    gutter: 0,
    belowOrigin: true,
    alignment: 'left'
});

$(".dropdown-content").on({
    mouseenter: function() {
        $(this).parent().addClass("active");
    },
    mouseleave: function() {
        $(this).parent().removeClass("active");
    }
});

$('.button-collapse').sideNav({
    menuWidth: 350,
    edge: 'left',
    closeOnClick: false,
    draggable: true
});

function getLatestCommitsFor(p1) {
    var request = new XMLHttpRequest();
    request.onload = printLatestCommits;
    request.open('get', 'https://api.github.com/repos/tryharddood/' + p1 + '/commits', true)
    request.send()
}

function printLatestCommits() {
    var responseObj = JSON.parse(this.responseText);
    var lenght = responseObj.length >= 5 ? 5 : responseObj.length;
    for (var i = 0; i < lenght; i++) {
        var obj = responseObj[i];

        $('#commits').append('<div class="divider"></div><div class="section"><h5><a href="' + obj.html_url + '" target="_blank">' + obj.commit.author.name + ' at ' + obj.commit.author.date +'</a></h5><p>' + obj.commit.message + '</p></div>')
    }
}
