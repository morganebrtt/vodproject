$(document).ready(function(){

    class User{
        constructor(email, password){
            this.email = email;
            this.password = password; 
        }
    }

    $("#loginButton").on("click", function(){
        $("input:email").val();

        $("#category").change(function(ev) {
            let category_id = $(this).val();
            console.log(category_id);
            // ici faite un call sur la route de l'API qui retourne tout les films/series appartenant a la catégory dont l'id est spécifier dans l'url
            $.get( "https://brianboudrioux.fr/simplon/api/products/category/" + category_id, function( movies ) {

              console.log(movies)
            });
        })

        

    })

var user = new User(email, password);
console.log(user);




})