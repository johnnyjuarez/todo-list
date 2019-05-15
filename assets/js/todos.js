// Check Off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });

  e.stopPropagation();
});

// append an li with input value into ul
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    //   grabs new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //  create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-eraser'></i></span>" + todoText + "</li>"
    );
    console.log(todoText);
  }
});

$("#todo-toggle").click(function() {
  $("input[type='text']").slideToggle("slow", "linear");
});
