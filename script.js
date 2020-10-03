/*assigner le nombre d'avatars à messages total*/
   $("#total").text($(".avatar").length);

/*supprimer le parent au clic sur poubelle*/
   $("#all-appli").on("click",".poub",function(){
      $(this).parent().remove();
      $("#total").text($(".avatar").length);
   });


/*fonction bouton ajouter*/
   $("#btn-add").click(
      function(){
         $("#all-appli").append(`
         <div class="mail">
            <img class="avatar" src="https://res.cloudinary.com/dvx36h3ub/image/upload/v1601718270/mymail/avatar-6_nlp6sa.jpg">
            <div class="opensans">
               <h6>Manon Lecareux</h6>
               <p>${$("#new-message").val()}</p>
            </div>
            <img class="poub" src="https://res.cloudinary.com/dvx36h3ub/image/upload/v1601718270/mymail/trash_crihxr.png">
         </div>`
         );

      $('#new-message').val(""); 
      $("#total").text($(".avatar").length);

      }
   );


/*fonction bouton rechercher*/
   $("#btn-search").click(
      function(){
            
         $("h6").each(
            function(){
            if($(this).text() != $('#search-message').val()){
               $(this).parent().parent().fadeOut();
            }else{
               $(this).parent().parent().fadeIn();
            }
            }
         );

         $('#search-message').val("");

   });
      


      

 