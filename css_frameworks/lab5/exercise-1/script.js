$(document).ready(function () {
  $("#btn-1").on("click", function () {
    $("section").addClass("d-none");
    $("#about").removeClass("d-none");
  });

  $("#btn-2").on("click", function () {
    $("section").addClass("d-none");
    $("#gallery").removeClass("d-none");
  });

  $("#btn-3").on("click", function () {
    $("section").addClass("d-none");
    $("#complain-form").removeClass("d-none");
  });

  $("#complain-form").on("submit", function (event) {
    event.preventDefault();

    const nameValue = $("#name").val();
    const emailValue = $("#email").val();
    const phoneValue = $("#phone").val();
    const complainValue = $("#complain").val();

    $("#complain-review p:nth-child(1) span").text(complainValue);
    $("#complain-review p:nth-child(2) span").text(nameValue);
    $("#complain-review p:nth-child(3) span").text(emailValue);
    $("#complain-review p:nth-child(4) span").text(phoneValue);

    $("#complain-form").addClass("d-none");
    $("#complain-review").removeClass("d-none");
  });

  $("#edit-complain-btn").on("click", function (event) {
    event.preventDefault();
    $("#complain-review").addClass("d-none");
    $("#complain-form").removeClass("d-none");
  });
});

$(document).ready(function () {
  const imageList = [
    "./assets/images/1.jpg",
    "./assets/images/2.jpg",
    "./assets/images/3.jpg",
    "./assets/images/4.jpg",
    "./assets/images/5.jpg",
    "./assets/images/6.jpg",
    "./assets/images/7.jpg",
    "./assets/images/8.jpg",
  ];
  let currentIndex = 0;

  function updateImage() {
    $("#gallery-img").fadeOut(300, function () {
      $(this).attr("src", imageList[currentIndex]).fadeIn(300);
    });
  }

  $("#right-arrow").on("click", function () {
    if (currentIndex < imageList.length) {
      currentIndex += 1;
    }
    updateImage();
  });

  $("#left-arrow").on("click", function () {
    if (currentIndex >= 0) {
      currentIndex -= 1;
    }
    updateImage();
  });
});
