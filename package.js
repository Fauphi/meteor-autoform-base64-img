Package.describe({
  name: 'fauphi:autoform-base64-img',
  git: 'https://github.com/Fauphi/meteor-autoform-base64-img',
  summary: 'Autoform Base64 image upload.',
  version: '0.1.2'
});

Package.onUse(function (api) {
  
  api.versionsFrom('1.3.2.4');

  api.use([
    'ecmascript',
    'es5-shim',
    'templating',
    'reactive-var',
    'blaze-html-templates'
  ], ['client', 'server']);

  api.addFiles([
    'fileUploadTmpl.js',
    'fileUploadTmpl.html'
  ], 'client');
  
});
