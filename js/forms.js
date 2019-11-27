$(document).ready(function(){

    class User{
        constructor(email, password){
            this.username = username;
            this.email = email;
            this.password = password; 
        }
    }

    $("#registerButton").on("click", function(){
        let username = $("#registerForm")[0].val();
        console.log(username);

    })
    
    
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