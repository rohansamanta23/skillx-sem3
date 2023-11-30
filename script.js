var d = new Date();
      var time = d.getHours();
      var sound = document.querySelector("h2");
      console.log(time);
      if(time>12){
        sound.innerHTML = "Good afternoon";
      }
      else if(time>18){
        sound.innerHTML = "Good evening";
      }
      else if(time>22 || time<4){
        sound.innerHTML = "Good night";
      }
      else if(time>4){
        sound.innerHTML = "Good morning";
      }
      else{
        sound.innerHTML = "Good morning";
      }
      
      var mrbtn = document.querySelector(".btnmor");
      mrbtn.addEventListener("click",function(){
        var more = document.getElementsByClassName("artist-list")[1]
        more.classList.toggle("artist-hide");
        var temp = document.querySelector(".artist-hide");
        console.log(temp);
        if(temp == null){
          mrbtn.innerHTML = "show less";
        }else{
          mrbtn.innerHTML = "show more";
        }
      });
