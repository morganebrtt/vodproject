// "https://brianboudrioux.fr/simplon/api/categories"

// =================================AFFICHER TOUTES LES CATEGORIES=============

$(document).ready(function() {

    // console.log('clicked');
    $.ajax({
        url: 'https://brianboudrioux.fr/simplon/api/categories',
        dataType: 'json',
        type: 'GET',

    }).done(function(data) {
        // console.log(data)
        $.each(data,

            function(index, value) {

                if (value.name !== 'ragga dancehall' && value.name !== 'soul jazz' && value.name !== 'house/techno' && value.name !== 'neo soul' && value.name !== 'rock indie' && value.name !== 'raggamuffin' && value.name !== 'hip hop instrumental' && value.name !== 'reggae' && value.name !== 'reggae') {
                    // console.log(value.name);
                    let container = $('#all-category');
                    let row = $('<article class="row"></article>').attr('data-id', value._id);
                    let col = $('<div class="col"></div>');
                    let flipbox = $('<div class="flip-box"></div>');
                    let flipBoxInner = $('<div class="flip-box-inner"></div>');
                    let flipBoxFront = $('<div class="flip-box-front"></div>');
                    let img = $('<img class="picmg" src="' + value.picture + '" />');
                    let flipBoxBack = $('<article class="flip-box-back"></article>');
                    let h2 = $('<h2 class="synopsis"></h2>');
                    let playBtn = $('<button><i class="fas fa-list-alt"></i>Plus de Choix</button><br>');

                    $(h2).append(playBtn);
                    $(col).append(flipbox);
                    $(flipBoxFront).append(img);
                    $(flipBoxInner).append(flipBoxFront);
                    $(flipBoxFront).after(flipBoxBack);
                    $(flipBoxBack).append(h2);
                    $(h2).append(value.description);
                    $(flipbox).append(flipBoxInner);
                    $(row).append(col);
                    $(container).append(row);
                }
            })
    })


    // ==============AU CLICK AFFICHER LES FILMS D'UNE CATEGORIE=================


    //             $('#all-category').on('click','.row',function(){
    //             let categoryId = $(this).data("id");
    //             console.log(categoryId);
    //             const urlCategory ='//https:brianboudrioux.fr/simplon/api/products/category/5dbeff05cbd3166665f3a45a' + categoryId;
    //
    //             $.get(urlCategory, function(index, value){
    //             console.log(data);
    //
    //     })
    //   })
    // })

    $('#all-category').on('click', '.row', function() {

        $('#all-category').hide();
        let categoryId = $(this).data("id");
        console.log(categoryId);

        const urlCategory = 'https://brianboudrioux.fr/simplon/api/products/category/' + categoryId;

        $.ajax({
            url: urlCategory,
            dataType: 'json',
            type: 'GET',

        }).done(function(data) {
            console.log(data)
            $.each(data,

                function(index, value) {


                    console.log(value.name);
                    let container = $('#previsual');
                    let row = $('<article class="row"></article>').attr('data-id', value._id);
                    let col = $('<div class="col"></div>');
                    let flipbox = $('<div class="flip-box"></div>');
                    let flipBoxInner = $('<div class="flip-box-inner"></div>');
                    let flipBoxFront = $('<div class="flip-box-front"></div>');
                    let img = $('<img class="picmg" src="' + value.picture + '" />');
                    let flipBoxBack = $('<article class="flip-box-back"></article>');
                    let h2 = $('<h2 class="synopsis"></h2>');
                    let playBtn = $('<button><i class="fas fa-video"></i>Lancer la Video</button><br><br>');

                    $(h2).append(playBtn);
                    $(col).append(flipbox);
                    $(flipBoxFront).append(img);
                    $(flipBoxInner).append(flipBoxFront);
                    $(flipBoxFront).after(flipBoxBack);
                    $(flipBoxBack).append(h2);
                    $(h2).append(value.description);
                    $(flipbox).append(flipBoxInner);
                    $(row).append(col);
                    $(container).append(row);

                })
        })
    })
})
