$("#submit").click(function(){
var name = $("#electricMing").val();
var email = $("#electricGod").val();
var phone = $("#electricTalk").val();

if(name ==''|| phone==''){
alert("Some fields are blank");     
}
else{
// Returns successful data submission message when the entered information is stored in database.
alert("感谢您报名槟中总青商团启动网络线上转型工作坊，zoom链接将于活动前两天提供。若有任何询问，可以致电Ms Choo 04-250 4050, whatsapp 010-900 4050 或电邮 woanshinc@pccc.org.my 谢谢！");  
$.post("process.php",{
 Name: name,
 Email: email,
 Phone: phone
},
      function(data) {
      //alert(data);
      $('#form')[0].reset(); //To reset form fields after submission

      $('#alert').animate({ //for fade in animation
        opacity:'show',
        height:'show',
        marginTop:'show',
        marginBottom:'show',
        paddingTop:'show',
        paddingBottom:'show'
      });
      
        $('#alert').fadeTo(2000,500).slideUp(500,function(){ //fade out
          $('#alert').addClass('hiden'); //adds a class .hidden
        });
    
      });
    
    }
});
});