({
  name: "Malamarite",
	spritenum: 563,
  megaStone: { "Malamar": "Malamar-Mega" },
  itemUser: ["Malamar"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2580,
	gen: 9,
	isNonstandard: "Future",
})