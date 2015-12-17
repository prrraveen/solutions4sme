define([
        'marionette',
        'templates'
],
function(
        Mn
) {
    var Router = Marionette.AppRouter.extend({
        routes: {
            '':     'home',
        },

        home: function(){
            require(['apps/home/views/navigation',
                    'apps/home/views/landing',
            ],function(Navigation,
                       Landing
            ){
                app.layout.navigation.empty();
                app.layout.main_region.show(new Landing())
            })
        },
    })
    return Router;
});
