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

$("#birthday").datepicker({
    changeYear: true,
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    dateFormat: "dd.mm.yy"
});
$("#my-window").dialog(options);
$("#tabs").tabs();
