function getLatestCommitsFor(p1) {
    var request = new XMLHttpRequest();
    request.onload = printLatestCommits;
    request.open('get', 'https://api.github.com/repos/tryharddood/' + p1 + '/commits', true);
    request.send();
}

function printLatestCommits() {
    var responseObj = JSON.parse(this.responseText);
    var lenght = responseObj.length >= 5 ? 5 : responseObj.length;
    $('#commits').html('');
    for (var i = 0; i < lenght; i++) {
        var obj = responseObj[i];

        $('#commits').append('<li class="list-row"><a href="' + obj.html_url +
            '" target="_blank"><div class="list-row__primary"><i style="font-size: 30px;" class="mdi mdi-git"></i></div></a><div class="list-row__content"><span class="display-block tc-black">' + obj.commit.author.name + ' at ' + obj.commit
            .author.date + '</span><span class="display-block fs-body-1 tc-black-2">' + obj.commit.message + '</span></div></li>');
    }
}
