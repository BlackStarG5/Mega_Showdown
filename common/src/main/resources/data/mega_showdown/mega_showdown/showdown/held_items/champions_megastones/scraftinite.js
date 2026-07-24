({
  name: "Scraftinite",
	spritenum: 555,
  megaStone: { "Scrafty": "Scrafty-Mega" },
  itemUser: ["Scrafty"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2572,
	gen: 9,
	isNonstandard: "Future",
})