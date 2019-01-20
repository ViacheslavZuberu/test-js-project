let options = {
    autoOpen: false,
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

$("#my-window").dialog(options);

setTimeout(() => {
    $("#my-window").dialog("open");
}, 2000);
