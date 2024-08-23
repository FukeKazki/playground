const proxy = new Proxy(
  {
    shika: {
      count: 1,
      label: "しか",
    },
    noko: {
      count: 3,
      label: "のこ",
    },
    koshi: {
      count: 1,
      label: "こし",
    },
    tan: {
      count: 2,
      label: "たん",
    },
  },
  {
    get(target, prop) {
      let str = "";
      for (let i = 0; i < target[prop].count; ++i) {
        str += target[prop].label;
      }
      return str;
    },
  },
);

console.log(`${proxy.shika}${proxy.noko}${proxy.koshi}${proxy.tan}`);
