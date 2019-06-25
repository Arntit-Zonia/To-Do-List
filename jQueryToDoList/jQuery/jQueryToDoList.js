//when the li is clicked adds line-through
$("ul").on("click", "li",function() {
    $(this).toggleClass("done");
});

//When the span is clicked remove parent li
$("ul").on("click", "span", function(e) {
    e.stopPropagation(); //stops bubbling effect;
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

//When enter is clicked create an li using the val of the text input
$("input").on("keypress",function(e) {
    if(e.which === 13) { //charcode for Enter
        let text = $(this).val();
        $(this).val("");
        $("ul").append(`<li><span>Del</span> ${text}</li>`);
    }
});