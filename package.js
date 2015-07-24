Package.describe({
    summary: "UI Framework for Meteor based on UIKit",
    version: "0.1.0",
    name: "derektbrown:meteorkit",
    git:"https://github.com/DerekTBrown/MeteorKit.git",
    documentation: "README.md"
});

Package.onUse(function(api){
    /* Dependencies */
        api.use(['jquery'], 'client');
        api.use(["mrt:external-file-loader"], 'client');
        api.use(['templating'], 'client');

    /* Include UIKit Core */
        api.addFiles(['dist/js/uikit.min.js',],['client']);
        api.addFiles(['dist/css/uikit.min.css',],['client']);
        api.use(["fortawesome:fontawesome"], 'client');

    /* Include UIKit Components as Assets */
      /** JS **/
        api.addFiles(['dist/js/components/accordion.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/htmleditor.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/search.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/sticky.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/autocomplete.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/lightbox.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/slider.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/timepicker.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/datepicker.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/nestable.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/slideset.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/tooltip.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/form-password.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/notify.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/slideshow-fx.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/upload.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/form-select.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/pagination.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/slideshow.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/grid.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/parallax.min.js'],['client'], {isAsset: true});
        api.addFiles(['dist/js/components/sortable.min.js'],['client'], {isAsset: true});

    /** CSS **/
        api.addFiles(['dist/css/components/accordion.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/form-select.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/slidenav.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/autocomplete.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/htmleditor.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/slider.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/datepicker.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/nestable.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/slideshow.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/dotnav.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/notify.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/sortable.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/form-advanced.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/placeholder.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/sticky.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/form-file.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/progress.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/tooltip.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/form-password.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/search.min.css'],['client'], {isAsset: true});
        api.addFiles(['dist/css/components/upload.min.css'],['client'], {isAsset: true});

    /* Include MeteorKit */
        api.addFiles(['meteor/meteorkit.html',],['client']);
        api.addFiles(['meteor/meteorkit.js',],['client']);
});
