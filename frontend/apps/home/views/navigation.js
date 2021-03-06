define([
        'marionette',
        'apps/user/models/user',
],
function(
        Mn,
        User,
        Bootstrap,
        Offcanvas
) {
    var Navigation = Mn.ItemView.extend({
        model: new User(),
        template: JST['navigation'],
        templateHelpers: function() {
            return { user : this.model};
        },
    })
    return Navigation;
});
