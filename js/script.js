$(document).ready(function() {
  $('#submenu-wrapper').hide();
	/* Assign Variables*/
	menu				= $('.menu li');
	submenuWrapper	= $('#submenu-wrapper');
	submenu			= submenuWrapper.children('ul');
	firstSubmenu 	= submenu.eq(0);

	/* menu on hover */
	menu.hover(
		function() {
			$('#submenu-wrapper').show();
			moveTo = $(this).index() * 11;
			showsubmenu(submenuWrapper);
			firstSubmenu.stop().animate({'marginTop' : '-'+moveTo+'em' });
		},

		function() { hidesubmenu(submenuWrapper); });

	/* sub menu hover */
	submenuWrapper.hover(
		function() { showsubmenu($(this)); },
		function() { hidesubmenu($(this));
	});

	/*Focus effect on selected child list item */
	submenu
		.children('li')
		.hover(	function() { $(this).siblings().stop().animate({'opacity':'0.5'}); },
					function() { $(this).siblings().stop().animate({'opacity':'1'}); });

	/* Focus effect on selected parent list item */
	submenu
		.hover(	function() { menu.eq($(this).index()).addClass('selected')  },
					function() { menu.eq($(this).index()).removeClass('selected') });

	/* Function to show sub menu */
	function showsubmenu(item) {
		if(!item.hasClass('show'))
			item.addClass('show').stop().animate({'marginTop' : '0'});
	}

	/* Function to hide sub menu */
	function hidesubmenu(item) {
		item.removeClass('show').stop().animate({'marginTop' : '-12em'});
	}

});
