export const manifest = {
  screens: {
    scr_gymv28: { name: "Home", route: "/#home", position: { "x": 160, "y": 220 } },
    scr_jpns1s: { name: "About Us", route: "/#about", position: { "x": 1560, "y": 220 } },
    scr_97630l: { name: "Product Range", route: "/#products", position: { "x": 5760, "y": 220 } },
    scr_jwhg58: { name: "Why Us", route: "/#why-us", position: { "x": 2960, "y": 220 } },
    scr_yz2ax8: { name: "Industries", route: "/#industries", position: { "x": 4360, "y": 220 } },
    scr_1dj2gh: { name: "Our Process", route: "/#process", position: { "x": 7160, "y": 220 } },
    scr_0f4d8l: { name: "Bulk Requirement", route: "/#bulk-quote", position: { "x": 160, "y": 2200 } },
    scr_y0brna: { name: "Contact", route: "/#contact", position: { "x": 1560, "y": 2200 } },
    scr_wwhq0w: { name: "Quote Sent", route: "/#contact", state: { "status": "success" }, position: { "x": 2960, "y": 2200 } }
  },
  sections: {
    sec_hqbj3b: { name: "Marketing Navigation", x: 0, y: 0, width: 8520, height: 1180 },
    sec_wsvccd: { name: "Quote & Sales Flow", x: 0, y: 1980, width: 4320, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_hqbj3b", children: [
    { kind: "screen", id: "scr_gymv28" },
    { kind: "screen", id: "scr_jpns1s" },
    { kind: "screen", id: "scr_jwhg58" },
    { kind: "screen", id: "scr_yz2ax8" },
    { kind: "screen", id: "scr_97630l" },
    { kind: "screen", id: "scr_1dj2gh" }]
  },
  { kind: "section", id: "sec_wsvccd", children: [
    { kind: "screen", id: "scr_0f4d8l" },
    { kind: "screen", id: "scr_y0brna" },
    { kind: "screen", id: "scr_wwhq0w" }]
  }]

};