 let nextbtn =document.querySelector(".next-btn");
 let video =document.querySelector(".hero-video");

 let movielist = ["hero-1.mp4","hero-2.mp4","hero-3.mp4","hero-4.mp4"];
    let index = 0;

    nextbtn.addEventListener("click",function(){
        index += 1;
        video.src = movielist[index];

        if(index===3){
            index = -1;
        }
    });
    