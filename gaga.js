let div = document.querySelector(
  "#content > div > div > div:nth-child(2) > div"
);
let iframe = div.querySelector("iframe");

function gaga() {
  document.addEventListener("keydown", (e) => {
    const { code } = e;
    if (code === "Space") {
      e.preventDefault();
      let rooms = iframe.contentDocument.getElementById("rooms");
      let btn = rooms.querySelector("button");
      btn.click();
    } else if (code === "Backquote") {
      e.preventDefault();
      const ad_toggle = document.getElementsByClassName("rchat_ad_toggle");
      ad_toggle[0].click();
    } else if (code == "Escape") {
      e.preventDefault();
      let vClose = iframe.contentDocument.querySelector(".v_close");
      vClose.click();
    }
  });
}

window.onload = gaga;
