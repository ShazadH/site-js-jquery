$(function () {
    var dateFlormat = "mm/dd/yy";

    // on cree 2 datePickers de sélection de range
    var dateFormat = "mm/dd/yy";

    // datepicker permettant de selectionner le début de la periode
    var from = $("#from")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            showAnim: "fadeIn",
            numberOfMonths: 1,
            showButtonPanel: true,
        })
        .on("change", function () {
            // on configure le datepicker opposé en fonction du choix utilisateur
            to.datepicker("option", "minDate", getDate(this));
        });

    // datepicker permettant de selectionner la fin de la periode
    var to = $("#to")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            showAnim: "fadeIn",
            numberOfMonths: 1,
            showButtonPanel: true,
        })
        .on("change", function () {
            // on configure le datepicker opposé en fonction du choix utilisateur
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }

    // on permet aux click sur les icones de déclencher
    // l'ouverture des pickers
    $(".picker-from .triggerIcon").on("click", function (e) {
        from.datepicker("show");
    });

    $(".picker-to .triggerIcon").on("click", function (e) {
        to.datepicker("show");
    });

    // carousel
    var slideImg = [
        "./assets/img/background.jpg",
        "./assets/img/car2.jpg",
        "./assets/img/car3.jpg",
        "./assets/img/car4.jpg",
    ];

    let itemImg = [
        "./assets/img/vehicule1.png",
        "./assets/img/vehicule2.png",
        "./assets/img/vehicule3.png",
        "./assets/img/vehicule4.png",
    ];

    var sliderPrincipal = new MySlider($(".main-slider"), slideImg);

    let itemSlider1 = new MySlider($(".img-first-item"), itemImg);
    let itemSlider2 = new MySlider($(".img-second-item"), itemImg);
    let itemSlider3 = new MySlider($(".img-third-item"), itemImg);
    let itemSlider4 = new MySlider($(".img-fourth-item"), itemImg);
});
