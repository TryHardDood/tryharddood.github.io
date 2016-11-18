$('#header').load("https://tryharddood.github.io/web/elements/header.html", function() {
    initMaterialize();
    alert("Load was performed.");
});
$('#header-tabs').load("https://tryharddood.github.io/web/elements/header-tabs.html", function() {
    initMaterialize();
    alert("Load was performed.");
});

function initMaterialize() {
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

    var section = GetURLParameter("section");
    var tabElement = $('ul.tabs');

    $.when(tabElement.tabs()).then(function() {
        console.log(section);

        switch (section) {
            case "installation":
                tabElement.tabs('select_tab', 'installation');
            case "commands":
                tabElement.tabs('select_tab', 'commands');
            case "configuration":
                tabElement.tabs('select_tab', 'configuration');
            case "flags_and_variables":
                tabElement.tabs('select_tab', 'flags_and_variables');
            default:
                tabElement.tabs('select_tab', 'getstarted');
        }
    });
}
initMaterialize();

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
};

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

        $('#commits').append('<div class="divider"></div><div class="section"><h5><a href="' + obj.html_url + '" target="_blank">' + obj.commit.author.name + ' at ' + obj.commit.author.date + '</a></h5><p>' + obj.commit.message + '</p></div>')
    }
}
