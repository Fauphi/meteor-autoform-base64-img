/*
* @Author: philipp
* @Date:   2016-11-03 12:03:24
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 17:33:04
*/

'use strict';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './fileUploadTmpl.html';

Template.fileUpload.onCreated(function() {
	this.base64 = new ReactiveVar(this.data.value);
});

Template.fileUpload.helpers({
	base64() {
		const tmpl = Template.instance();
		return tmpl.base64.get();
	},
	hasValue() {
		const tmpl = Template.instance();
		return tmpl.base64.get();
	}
});

Template.fileUpload.events({
	'click [data-action="del-img"]'(ev, tmpl) {
		ev.preventDefault();
		tmpl.base64.set('');
	},
	'change input'(ev, tmpl) {
		var preview = document.querySelector('img.preview')
		,	file    = document.querySelector('input[type=file]').files[0]
		,	reader  = new FileReader();

		reader.addEventListener("load", function () {
			tmpl.base64.set(reader.result);
		}, false);

		if(file) {
			reader.readAsDataURL(file);
		}
	}
});

Meteor.startup(function() {
	import { Autoform } from 'meteor/aldeed:autoform';

	if(AutoForm) {
		return AutoForm.addInputType('fileupload', {
	        template: 'fileUpload',
	        valueOut: function () {
	            return this.attr('data-img-base');
	        }
	    });	
	} else {
		return;
	}
});