define([
        'marionette',
        'apps/user/models/user',
],
function(
        Mn,
        User
) {
    var Navigation = Mn.ItemView.extend({
        model: new User(),
        template: JST['landing'],
        templateHelpers: function() {
            return { user : this.model};
        },
    })
    return Navigation;
});
