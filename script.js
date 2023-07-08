function count() {
  var start = document.getElementById("txtstart").value;
  var end = document.getElementById("txtend").value;
  var step = document.getElementById("txtstep").value;
  var result = document.getElementById("result");
  if (start.length === 0 || end.length === 0 || step.length === 0) {
    window.alert("Error! Data is Missing");
    result.innerHTML = "Impossible to Count!";
  } else {
    result.innerHTML = "Counting: <br>";
    var i = Number(start);
    var f = Number(end);
    var p = Number(step);
    if (p <= 0) {
      window.alert("Invalid Step! Consider 1");
      p = 1;
    }
    if (i < f) {
      for (var c = i; c <= f; c += p) {
        result.innerHTML += `${c} \u{1F449}`; //emoji codelist
      }
      result.innerHTML += `\u{1F3C1}`;
    } else {
      for (var c = i; c >= f; c -= p) {
        result.innerHTML += `${c} \u{1F449}`;
      }
      result.innerHTML += `\u{1F3C1}`;
    }
  }
}
