let options = {
    title: "Test Window #1",
    modal: true,
    width: 500,
    buttons: {
        OK: function() {
            console.log("Hello, World!");
            $(this).dialog("close");
        },
        Cancel: function() {}
    }
};

let dateOptions = {
    changeYear: true,
    monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ],
    firstDay: 1,
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    dateFormat: "dd.mm.yy"
};

$("#faryd").datepicker(dateOptions);
$("#my-window").dialog(options);
$("#tabs").tabs();
