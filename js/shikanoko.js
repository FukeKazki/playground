const shika = "しか";
const noko = "のこ";
const koshi = "こし";
const tan = "たん";

const generator = function* (part, n) {
  for (let i = 0; i < n; ++i) {
    yield part;
  }
};

console.log(
  [
    ...generator(shika, 1),
    ...generator(noko, 3),
    ...generator(koshi, 1),
    ...generator(tan, 2),
  ].join(""),
);

console.log("saitouasuあすか")
