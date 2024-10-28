document.body.onclick = function() {
  annyang.start();
  console.log('Ready to receive a color command.');
}

if (annyang) {
  var comandos = {
    hola: function() {
      // alert("Hola bro");
      openInNewTab('https://www.google.com');
      annyang.abort();
    },
    reproducir: reproducirVideo,
    pausar: pausarVideo
  };
  
  annyang.addCommands(comandos);
  annyang.setLanguage("es-PE");
  // annyang.start();
}

var video = document.getElementById("mivideo");
function reproducirVideo() {
  openInNewTab('https://www.facebook.com')
  annyang.abort();
}
function pausarVideo() {
  video.pause();
}


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  // win.focus();
}
