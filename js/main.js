  function copymail() {
    var copyText = document.getElementById("copymail");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("copié dans le presse-papier: " + copyText.value);
  }
  function copytel() {
    var copyText = document.getElementById("copytel");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("copié dans le presse-papier: " + copyText.value);
  }
  function affichZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
  }
  function dateEtHeure() {
    const infos = new Date();
    document.getElementById('date').innerHTML = affichZero(infos.getDate()) + '/' + affichZero(infos.getMonth() + 1) + '/' + infos.getFullYear();
    document.getElementById('heure_exacte').innerHTML = affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes())+ ':' + affichZero(infos.getSeconds());
  }
  setInterval("dateEtHeure()");
  var heure = new Date().getHours();





