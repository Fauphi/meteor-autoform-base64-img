# meteor-autoform-base64-img
Base64 image type for Meteor-Autoform.

## Features

* Simple image upload for autoform. Converts image to Base64 and saves it as a string.

## Usage

#### Install
```
meteor add fauphi:meteor-autoform-base64-img
```
#### Simple Schema
```
Blog.attachSchema(new SimpleSchema({
    titlePhoto: {
        type: String,
        label: "Title photo",
        autoform: {
            afFieldInput: {
                type: 'fileupload'
            }
        }
    }, 
}));
```

#### Autoform
```
{{> quickForm collection="Blog" type="insert"}}
```

#### Template
```
{{#with blogEntry}}
  <img src="{{titlePhoto}}" width="100%"/>
{{/with}}
```

## Todos

* Styling
