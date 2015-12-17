this["JST"] = this["JST"] || {};

this["JST"]["landing"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'hello\n';

}
return __p
};

this["JST"]["layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id=\'navigation\'></div>\n<div id=\'main\'></div>\n';

}
return __p
};

this["JST"]["navigation"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="main-header">\n  <!-- Logo -->\n  <a href="#leads/all" class="logo">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class="logo-mini"><b>B</b>S</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class="logo-lg">\n        <img src="frontend/assets/images/logo.png" id=\'brand-logo\' alt="Responsive image" class=\'img img-responsive\'/></a>\n    </span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class="navbar navbar-static-top" role="navigation">\n    <!-- Sidebar toggle button-->\n    <a class="sidebar-toggle"  role="button">\n      <span class="sr-only">Toggle navigation</span>\n    </a>\n    <div class="navbar-custom-menu">\n      <ul class="nav navbar-nav">\n          <li class="dropdown user user-menu">\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n              <span class="hidden-xs">' +
((__t = ( user.get_name() )) == null ? '' : __t) +
'</span>\n            </a>\n            <ul class="dropdown-menu">\n              <li class="user-footer">\n                  <a href="#logout" class="btn btn-default btn-flat">Sign out</a>\n              </li>\n            </ul>\n          </li>\n\n      </ul>\n    </div>\n  </nav>\n</header>\n<aside class="main-sidebar offcanvas">\n    <section class="sidebar">\n     <ul class="sidebar-menu">\n       <li class="header">MAIN NAVIGATION</li>\n       </li>\n       <li class="treeview">\n         <a role="button" data-toggle="collapse" href="#lead" aria-expanded="false" aria-controls="lead">\n           <i class="fa fa-laptop"></i>\n           <span>Leads</span>\n           <i class="fa fa-angle-left pull-right"></i>\n         </a>\n         <ul class="collapse" id="lead">\n           <li><a href="#leads/all" class=""><i class="fa fa-circle-o"></i> All Leads</a></li>\n           <li><a href="#leads/facebook"><i class="fa fa-circle-o"></i> Lead Facebook</a></li>\n           <li><a href="#leads/others"><i class="fa fa-circle-o"></i> Lead Others</a></li>\n           <li><a target="_blank" href="/admin/agent/lead/add/"><i class="fa fa-circle-o"></i> Add Lead</a></li>\n         </ul>\n       </li>\n       <li class="treeview">\n         <a role="button" data-toggle="collapse" href="#orders" aria-expanded="false" aria-controls="orders">\n           <i class="fa fa-laptop"></i>\n           <span>Orders</span>\n           <i class="fa fa-angle-left pull-right"></i>\n         </a>\n         <ul class="collapse" id=\'orders\'>\n           <li><a href="#orders/Received"><i class="fa fa-circle-o"></i> New/Received Orders</a></li>\n           <li><a href="#orders/Confirmed"><i class="fa fa-circle-o"></i> Confirmed Orders</a></li>\n           <li><a href="#orders/Allocated"><i class="fa fa-circle-o"></i> Allocated Orders</a></li>\n           <li><a href="#orders/Delievered"><i class="fa fa-circle-o"></i> Delievered Orders</a></li>\n           <li><a target="_blank" href="/admin/agent/order/"><i class="fa fa-circle-o"></i> + Add new orders</a></li>\n         </ul>\n       </li>\n\n       <li>\n           <a target="_blank" href="/admin/agent/service/">\n             <i class="fa fa-th"></i> <span>Manage Services</span>\n           </a>\n       </li>\n\n       <li>\n           <a target="_blank" href="/admin/agent/beautician/">\n             <i class="fa fa-th"></i> <span>Manage Beautician</span>\n           </a>\n       </li>\n       <li class="treeview">\n         <a role="button" data-toggle="collapse" href="#user" aria-expanded="false" aria-controls="user">\n           <i class="fa fa-laptop"></i>\n           <span>System</span>\n           <i class="fa fa-angle-left pull-right"></i>\n         </a>\n         <ul class="collapse" id=\'user\'>\n           <li><a target="_blank" href="/admin/agent/user/"><i class="fa fa-circle-o"></i> Manage Users</a></li>\n         </ul>\n       </li>\n\n     </ul>\n    </section>\n</aside>\n';

}
return __p
};

this["JST"]["login"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<br>\n<div class="container">\n    <div class="row">\n        <div class=\'col-sm-4 col-sm-offset-5\'>\n            <h3>Bigstylist CRM</h3>\n        </div>\n    </div>\n    <div class="row">\n        <div class=\'col-sm-4 col-sm-offset-4 well\' >\n            <div class="row">\n                <div class=\'col-sm-12\'>\n                    <h3>Log in</h3>\n                </div>\n            </div>\n            <ul id=\'error\'>\n            </ul>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="email">Email</label>\n                    <input id=\'email\' class=\'form-control\' required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="password">password</label>\n                    <input type=\'password\' id=\'password\' class=\'form-control\' required></input>\n                </div>\n            </div>\n             <button type="button" id=\'create\' class="btn btn-default">Submit</button>\n             <hr>\n             <div class="row">\n                 <div class=\'col-sm-12\'>\n                     <a href="#regi">Sign Up</a>\n                 </div>\n             </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["regi"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<br>\n<div class="container">\n    <div class="row">\n        <div class=\'col-sm-4 col-sm-offset-5\'>\n            <h3>Bigstylist CRM</h3>\n        </div>\n    </div>\n    <div class="row">\n        <div class=\'col-sm-4 col-sm-offset-4 well\' >\n            <div class="row">\n                <div class=\'col-sm-12\'>\n                    <h3>Add User</h3>\n                </div>\n            </div>\n            <ul id=\'error\'>\n            </ul>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="name">Name</label>\n                    <input id=\'name\' class=\'form-control\' required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="email">Email</label>\n                    <input id=\'email\' class=\'form-control\' required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="password">password</label>\n                    <input type=\'password\' id=\'password\' class=\'form-control\' required></input>\n                </div>\n            </div>\n             <button type="button" id=\'create\' class="btn btn-default">Submit</button>\n             <hr>\n             <div class="row">\n                 <div class=\'col-sm-12\'>\n                     <a href="#login">login</a>\n                 </div>\n             </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};