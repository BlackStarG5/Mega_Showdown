({
  name: "Dragalgite",
	spritenum: 565,
  megaStone: { "Dragalge": "Dragalge-Mega" },
  itemUser: ["Dragalge"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2582,
	gen: 9,
	isNonstandard: "Future",
})