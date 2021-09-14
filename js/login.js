const addBtns = document.querySelectorAll('.js-by-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalcontainer = document.querySelector('.js-modal-container')
// hàm hiển thi modal để mua vé
        function showBytickets(){
            modal.classList.add('open')
          
        }
//  hàm ẩn tắt đi modal mua vé
        function hideBytickets(){
            modal.classList.remove('open')
        }

//  lập qua từng thẻ butom để nghe hành vi click
     for(const addbtn of addBtns){
         addbtn.addEventListener('click', showBytickets)
     }
// nghe hành vi click vao close
     modalClose.addEventListener('click',  hideBytickets)
// khi click ra bên ngoài thi modal sẽ bị đóng đi
     modal.addEventListener('click', hideBytickets)
// khắc phục lỗi bên trên khi mình đóng lại
     modalcontainer.addEventListener('click', function(event){
         event.stopPropagation()
     })
// modal dangky



    //  error login

    $(document).ready(function(){

        $("#submit").click(function(){
             
         var badError = false ;
         var username = $("#name").val();
         var userpass = $("#pass").val();
      
     
       if(username ===""){
           $("#name").css("border-bottom","1px red solid");
           badError = true;
           $("#error").css("display","block");
          //  $("#loi1").css("display","none");
           $("#false").css("display","none");
       }else if(username.length < '4'){
         $("#name").css("border-bottom","1px red solid");
         $("#error").css("display","none");
        //  $("#loi1").css("display","block");
         $("#false").css("display","block");
       }else{
         $("#name").css("border-bottom","1px white solid");
         $("#error").css("display","none");
        //  $("#loi1").css("display","none");
         $("#false").css("display","block");
        
       }
       if(userpass ===""){
         $("#pass").css("border-bottom","1px red solid");
         badError = true;
         $("#error1").css("display","block");
           $("#loi2").css("display","none");
         }else if(userpass.length < '8'){
           $("#pass").css("border-bottom","1px red solid");
           $("#error1").css("display","none");
           $("#loi2").css("display","block");
         }else{
           $("#pass").css("border-bottom","1px white solid");
           $("#error1").css("display","none");
           $("#loi2").css("display","none");
          
         }
         if(username ==="admin" && userpass ==="0123456789"){
           $("#false").css("display","none");
            
       }
     
            if(username ==="admin" && userpass ==="0123456789"){
               location.href = "index.html";
            }
            
            
      
      
        });
     
     });
     