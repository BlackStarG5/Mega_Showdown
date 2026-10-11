({
  name: "Falinksite",
	spritenum: 570,
  megaStone: { "Falinks": "Falinks-Mega" },
  itemUser: ["Falinks"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2587,
	gen: 9,
	isNonstandard: "Future",
})