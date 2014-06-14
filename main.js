$(function($) {
  var allAccordions = $('.accordion div.data'); // creates a var of all .data divs within the div of .accordion
  var allAccordionItems = $('.accordion .accordion-item'); // creates a var of all accordion-item divs
  var allAccordionIcons = $('.accordion-item .type span');

  // function to run when an accordion-item is clicked
  $('.accordion > .accordion-item').click(function() {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(".type span", this).removeClass('glyphicon-minus').addClass('glyphicon-plus');
      $(this).next().slideUp("slow");
    } else {
      allAccordions.slideUp("slow"); // hides all open data divs
      allAccordionItems.removeClass('open'); // removes .open from all divs.accordion-item
      allAccordionIcons.removeClass('glyphicon-minus').addClass('glyphicon-plus'); // changes the icons for all - to +
      $(this).addClass('open'); // adds .open to div.accordion-item when clicked
      $(".type span", this).removeClass('glyphicon-plus').addClass('glyphicon-minus');
      $(this).next().slideDown("fast"); // Shows the div.data next to div.accordion-item
      return false;
    }
  });
});