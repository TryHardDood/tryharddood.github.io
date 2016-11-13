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
$('#header').load(window.location.host + "/web/elements/header.html");
