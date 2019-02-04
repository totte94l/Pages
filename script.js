$(function () {
    var list = $("#list");
    let listArray = ["Camilla", "Stefan", "Rebecca", "Christoffer", "Elliot", "Jonne", "Kerstin", "Aura"];

    // Config Start
    var itemsPerPage = 3;
    // Config End

    // Trycker på någon av sidorna
    $("#pages").on("click", "a", function () {
        generateContent($(this).attr("data-page"));

        $(".page-selector").removeClass("active");
        $(this).addClass("active");
        
    })

    function generateContent(page) {
        /*
            Här genereras listan med alla namn
        */
        let currentPage = page - 1;
        // Tömmer listan
        list.html("");

        // Räknar ut vart i arrayen den ska leta, alltså vilken sida du klickat på
        let startPosition = itemsPerPage * currentPage;

        // Genererar listan
        for (let i = 0; i < itemsPerPage; i++) {
            // Kollar ifall det finns någonting i listan
            if (listArray[startPosition]) {
                list.append(`<li>${listArray[startPosition]}</li>`);
            }
            startPosition++;
        }
    }

    function generatePages() {
        let totalItems = listArray.length;
        let totalPages = totalItems / itemsPerPage;

        for (let i = 0; i < totalPages; i++) {
            $("#pages").append(`<a href="#" class="page-selector" data-page="${i + 1}">${i + 1}</a>`);
        }
    }

    generatePages();
    generateContent(1);

    // Gör den först sidan till active
    jQuery('#pages').find('.page-selector:first').addClass( 'active' );
})