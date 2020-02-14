const OnFileLoad = () => {
  var file = document.getElementById("FileReader").files[0];
  var textType = /text.*/;
  var fileDisplayArea = document.getElementById("input");
  if (file.type.match(textType)) {
    var reader = new FileReader();

    reader.onload = function (e) {
      fileDisplayArea.value = reader.result;
    }

    reader.readAsText(file);
  } else {
    fileDisplayArea.value = "File not supported!"
  }
}
