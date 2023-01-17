function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if(document.getElementById('check').checked) {
    // console.log('on');
    const elem = document.getElementById('text');
    elem.style.backgroundColor = "red";
    // バックグラウンドカラーが赤色
  } else {
    const elem = document.getElementById('text');
    elem.style.backgroundColor = "white";
    // console.log('off');
    // 無色
  }
}
