({
  name: "Staraptite",
	spritenum: 500,
  megaStone: { "Staraptor": "Staraptor-Mega" },
  itemUser: ["Staraptor"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2639,
	gen: 9,
	isNonstandard: "Future",
})