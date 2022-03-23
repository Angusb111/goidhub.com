function reset(tabcontent) {
  console.log('test');
  for (let i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
}

function openDetail(evt, targetidName) {

  let tabcontent = document.getElementsByClassName("tabcontent");
  let target = document.getElementById(targetidName);
  console.log(target.style.display);
  if(target.style.display == "none"){
    reset(tabcontent)

    target.style.display = "block";
  }
  else if(target.style.display == "block") {
    reset(tabcontent)
  }
}

function myFunction() {
  var x = document.getElementById("mmdrop");
  if (x.style.maxHeight === "999px") {
    x.style.maxHeight = "0px";
  } else {
    x.style.maxHeight = "999px";
  }
}


function getInfo(code, auth) {
  let path = 'media/';
  let filepath = path.concat(''+code+'/');
  let video = filepath.concat(''+'vid.mp4');
  let titlepath = filepath.concat(''+'title.txt');

  var titlecontent = document.getElementById('title'+code).innerHTML;
  console.log(titlecontent);

  localStorage.setItem("titlecontents",titlecontent);
  localStorage.setItem("sfilepatht",titlepath);
  localStorage.setItem("sfilepath",video);
  localStorage.setItem("auths",auth);


  window.open("open.html","_self");

}

function pollBase(tgtVideo) {
  const title = document.getElementById("title");
  const content = localStorage.getItem("sfilepatht");
  auth = localStorage.getItem("auths");
  target = document.getElementById(auth);
  target.style.display = "flex";




  title.textContent = localStorage.getItem("titlecontents");



  var video = document.getElementById('videocontainer');

  document.getElementById("video").src = localStorage.getItem("sfilepath");

  video.load();
  video.play();
}
