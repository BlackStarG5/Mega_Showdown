({
  name: "Barbaracite",
	spritenum: 564,
  megaStone: { "Malamar": "Malamar-Mega" },
  itemUser: ["Malamar"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2581,
	gen: 9,
	isNonstandard: "Future",
})