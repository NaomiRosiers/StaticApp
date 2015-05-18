var main = function () {
  "use strict";

$(".link1").on("mouseover", function () {
    $(".huis1").addClass("onzichtbaar");
    $(".huis2").addClass("zichtbaar");
    $(".popup1").css("display", "block");
    });

$(".link1").on("mouseout", function () {
    $(".huis1").removeClass("onzichtbaar");
    $(".huis2").removeClass("zichtbaar");
    $(".popup1").css("display", "none");
    });

$(".link2").on("mouseover", function () {
    $(".blog1").addClass("onzichtbaar");
    $(".blog2").addClass("zichtbaar");
    $(".popup2").css("display", "block");
    });

$(".link2").on("mouseout", function () {
    $(".blog1").removeClass("onzichtbaar");
    $(".blog2").removeClass("zichtbaar");
    $(".popup2").css("display", "none");
    });

$(".link4").on("mouseover", function () {
    $(".ab1").addClass("onzichtbaar");
    $(".ab2").addClass("zichtbaar");
    $(".popup4").css("display", "block");
    });

$(".link4").on("mouseout", function () {
    $(".ab1").removeClass("onzichtbaar");
    $(".ab2").removeClass("zichtbaar");
    $(".popup4").css("display", "none");
    });

}
/* Rosiers Naomi, 1GDMb */
$("document").ready(main);