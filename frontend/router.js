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
            return
        },
    })
    return Router;
});
