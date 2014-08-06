/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [
		{
		title: 'Sidebar - tiny graphic (left)',
		image: 'sidebar-tinyg-l.png',
		description: 'Headline, graphic, and text, with credit at the bottom',
		html: '<aside class="med lt inlay figure-only">' +
			'<h4 class="sidebar-hed gray-tight">' +
			'Type the Sidebar Title Here' +
			'</h4>' +
			'<h5 class="sidebar-dek">' +
			'Type the Sidebar Dek Here' +
			'</h5>' +
			'<figure role="img">' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" class="xsm lt" />' +
			'<p>' +
			'<strong>' +
			'Type bold lede-in here' +
			'</strong>' +
			' and then the rest of the text here' +
			'</p>' +
			'<figcaption class="hi-cap">' +
			'Illustration: Type graphic credit here' +
			'</figcaption>' +
			'</figure>' +
			'</aside>'
	},
		{
		title: 'Sidebar - loaded (full-width)',
		image: 'sidebar-loaded-full.png',
		description: 'Companion story with eyebrow, hed, dek, text, and graphic',
		html: '<aside class="xlrg inlay">' +
			'<hgroup class="big-serif">' +
			'<h5 class="sidebar-eyebrow">' +
			'Type the Eyebrow Here' +
			'</h5>' +
			'<h3 class="sidebar-hed">' +
			'Type the Sidebar Title Here' +
			'</h3>' +
			'<h4 class="sidebar-dek">' +
			'Type the Sidebar Dek Here' +
			'</h4>' +
			'</hgroup>' +
			'<figure class ="med lt" role="img">' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" />' +
			'<figcaption class="hi-cap">' +
			'Illustration: Type graphic credit here' +
			'</figcaption>' +
			'</figure>' +
			'<p>' +
			'<strong>' +
			'Type bold lede-in here' +
			'</strong>' +
			' and then the rest of the text here' +
			'</p>' +
			'</aside>'
	},
			{
		title: 'Sidebar - small photo list (left)',
		image: 'sidebar-imagelist-l.png',
		description: 'Headline, graphic, and text, with credit at the bottom',
		html: '<aside class="sm lt inlay photo-list">' +
			'<hgroup class="extra-bold">' +
			'<h3 class="sidebar-hed">' +
			'Type the Sidebar Title Here' +
			'</h3>' +
			'<h4 class="sidebar-dek">' +
			'Type the Sidebar Dek Here' +
			'</h4>' +
			'</hgroup>' +
			'<figure role="img">' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" />' +
			'<figcaption>' +
			'<h5 class="photo-title">' +
			'Type the Photo Title Here' +
			'</h5>' +
			'Type photo description here' +
			'</figcaption>' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" />' +
			'<figcaption>' +
			'<h5 class="photo-title">' +
			'Type the Photo Title Here' +
			'</h5>' +
			'Type photo description here' +
			'</figcaption>' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" />' +
			'<figcaption>' +
			'<h5 class="photo-title">' +
			'Type the Photo Title Here' +
			'</h5>' +
			'Type photo description here' +
			'</figcaption>' +
			'<figcaption class="hi-cap">' +
			'Photos: Type all photo credits here' +
			'</figcaption>' +
			'</figure>' +
			'</aside>'
	},
		{
		title: 'Pullquote (left)',
		image: 'pullquote-r.png',
		description: '1/2 column quote pulled left',
		html: '<aside class="inlay lt med pullquote">' +
			'Type the text here' +
			'</aside>'
	},
		{
		title: 'Pullquote (right)',
		image: 'pullquote-l.png',
		description: '1/2 column quote pulled right',
		html: '<aside class="inlay rt med pullquote">' +
			'Type the text here' +
			'</aside>'
	},
		{
		title: 'Listicle',
		image: 'listicle.png',
		description: 'Listicle with images and headlines',
		html: '<ul class="listicle">' +
			'<li>' +
			'<figure class ="xlrg" role="img">' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" />' +
			'<figcaption class="hi-cap">' +
			'Photo: Type photo credit here' +
			'</figcaption>' +
			'</figure>' +
			'<h3>' +
			'Type the List Item Title Here' +
			'</h3>' +
			'<p>' +
			'Type list item text here' +
			'</p>' +
			'</li>' +
			'<li>' +
			'<figure class ="xlrg" role="img">' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" />' +
			'<figcaption class="hi-cap">' +
			'Photo: Type photo credit here' +
			'</figcaption>' +
			'</figure>' +
			'<h3>' +
			'Type the List Item Title Here' +
			'</h3>' +
			'<p>' +
			'Type list item text here' +
			'</p>' +
			'</li>' +
			'<li>' +
			'<figure class ="med lt" role="img">' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" />' +
			'<figcaption class="hi-cap">' +
			'Photo: Type photo credit here' +
			'</figcaption>' +
			'</figure>' +
			'<h3>' +
			'Type the List Item Title Here' +
			'</h3>' +
			'<p>' +
			'Type list item text here' +
			'</p>' +
			'</li>' +
			'</ul>'
	}
	/*,
		{
		title: 'Image and Title',
		image: 'template1.gif',
		description: 'One main image with a title and text that surround the image.',
		html: '<h3>' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="img" style="margin-right: 10px" height="100" width="100" align="left" />' +
			'Type the title here' +
			'</h3>' +
			'<p>' +
			'Type the text here' +
			'</p>'
	},
		{
		title: 'Strange Template',
		image: 'template2.gif',
		description: 'A template that defines two colums, each one with a title, and some text.',
		html: '<table cellspacing="0" cellpadding="0" style="width:100%" border="0">' +
			'<tr>' +
				'<td style="width:50%">' +
					'<h3>Title 1</h3>' +
				'</td>' +
				'<td></td>' +
				'<td style="width:50%">' +
					'<h3>Title 2</h3>' +
				'</td>' +
			'</tr>' +
			'<tr>' +
				'<td>' +
					'Text 1' +
				'</td>' +
				'<td></td>' +
				'<td>' +
					'Text 2' +
				'</td>' +
			'</tr>' +
			'</table>' +
			'<p>' +
			'More text goes here.' +
			'</p>'
	},
		{
		title: 'Text and Table',
		image: 'template3.gif',
		description: 'A title with some text and a table.',
		html: '<div style="width: 80%">' +
			'<h3>' +
				'Title goes here' +
			'</h3>' +
			'<table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1">' +
				'<caption style="border:solid 1px black">' +
					'<strong>Table title</strong>' +
				'</caption>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
			'</table>' +
			'<p>' +
				'Type the text here' +
			'</p>' +
			'</div>'
	}
	*/
	]
} );
