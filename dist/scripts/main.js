"use strict";function renderStars(){var e=$(".body"),n=window.innerWidth,o=(window.innerHeight,[{width:0,height:0},{width:50,height:0},{width:0,height:50},{width:50,height:50}]),a={small:600,medium:992,large:1200},l=0;n>a.medium?l=20:n>a.small?l=10:n<=a.small&&(l=5),e.each(function(){var e=this;o.forEach(function(n){for(var o=0;l>o;o++){var a=Math.floor(50*Math.random())+n.height,i=Math.floor(50*Math.random())+n.width,t=1e3*o;$(e).append('<div class="star" style="top:'+a+"vh; left: "+i+"vw; animation-delay:"+t+'ms">')}})})}function disableScroll(){$.fn.fullpage.setAutoScrolling(!1)}function enableScroll(){$.fn.fullpage.setAutoScrolling(!0)}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){e()}}(),$(document).ready(function(){var e=!1,n=!1;$("#fullpage").fullpage({verticalCentered:!1,loopBottom:!0,scrollingSpeed:400,onLeave:function(o,a,l){$(this);requestAnimFrame(function(){if(console.log({index:o,direction:l,moving:e,menu:n}),"down"==l&&!e){if(3==o){var a=$(".header-slide.active");console.log({active:a}),a.hasClass("team")&&(e=!0,$.fn.fullpage.moveTo(4,0)),a.hasClass("internal")&&(e=!0,$.fn.fullpage.moveTo(5,0)),a.hasClass("speakers")&&(e=!0,$.fn.fullpage.moveTo(6,0)),a.hasClass("events")&&(e=!0,$.fn.fullpage.moveTo(7,0)),a.hasClass("achievements")&&(e=!0,$.fn.fullpage.moveTo(8,0)),a.hasClass("social")&&(e=!0,$.fn.fullpage.moveTo(9,0))}o>=4&&n&&(e=!0,$.fn.fullpage.moveTo("menu",0))}"up"!=l||e||(4==o&&(e=!0,$.fn.fullpage.moveTo("headers",0)),5==o&&(e=!0,$.fn.fullpage.moveTo("headers",1)),6==o&&(e=!0,$.fn.fullpage.moveTo("headers",2)),7==o&&(e=!0,$.fn.fullpage.moveTo("headers",3)),8==o&&(e=!0,$.fn.fullpage.moveTo("headers",4)),9==o&&(e=!0,$.fn.fullpage.moveTo("headers",5)))})},afterLoad:function(o,a){e=!1,n=a>=4}})}),$(window).load(function(){renderStars()});