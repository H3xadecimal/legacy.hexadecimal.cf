$(function() {
    $('.button-collapse').sideNav();
    particlesJS.load('particles-js', '../resources/particles-js.json', function() {
        console.log('Loaded particles.js config.');
    });

    $.getJSON('../resources/tabs.json', function(tabJSON) {
        for (var i in tabJSON) {
            var tab = tabJSON[i];
            var tabHTML = '<div id="' + tab.name.toLowerCase().replace(/\s+/g, '-') + '"><div class="col l8 m10 s12 offset-l2 offset-m1">';
            $('#main-tabs').append('<li class="tab"><a href="#' + tab.name.toLowerCase().replace(/\s+/g, '-') + '" class="text light">' + tab.name + '</a></li>');

            if (tab.title) tabHTML += '<h4 class="text">' + tab.title + '</h4>';
            if (tab.description) tabHTML += '<p class="text secondary">' + tab.description + '</p>';
            if (tab.cards) {
                for (var n in tab.cards) {
                    var card = tab.cards[n];
                    tabHTML += ''
                    tabHTML += '<div class="card horizontal">';
                    if (card.image) tabHTML += '<div class="card-image"><img src="' + card.image.src + '" alt="' + card.image.alt + '"></div>';

                    tabHTML += '<div class="card-stacked"><div class="card-content"><span class="card-title text">' + card.title + '</span><p class="text">' + card.body.join('<div class="divider"></div>') + '</p></div>';

                    if (card.button) tabHTML += '<div class="card-action"><a href="' + card.button.url + '" class="waves-effect waves-purple btn-flat text action">' + card.button.text + '</a></div>';

                    tabHTML += '</div></div>';
                }
            }

            tabHTML += '</div></div></div>';
            $('#container').append(tabHTML);
        }

        $('ul.tabs').tabs();
    });
});