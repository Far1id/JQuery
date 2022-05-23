$(function () {


    // $("button").click(function () {
    //     $("p").toggle(1000);
    //     $("#test").hide();
    //     $(".test").hide();
    // });

    // $("p").dblclick(function () {
    //     $(this).hide();
    // });

    // $("#p1").mouseenter(function () {
    //     alert("You entered p1!");
    // });

    // $("#p1").mouseleave(function () {
    //     alert("Bye! You now leave p1!");
    // });

    // $("#p1").mousedown(function(){
    //     alert("Mouse down over p1!");
    //   });

    $("#p1").mouseup(function () {
        alert("Mouse up over p1!");
    });

    $("#p1").hover(function () {
        alert("You entered p1!");
    });

    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "green");
    });

    $(".button1").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
});