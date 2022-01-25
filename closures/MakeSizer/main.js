const makeSizer = (size) => {
  return () => {
    document.body.style.fontSize = size + "px";
  };
};

let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
