({
  name: "Eelektrossite",
	spritenum: 556,
  megaStone: { "Eelektross": "Eelektross-Mega" },
  itemUser: ["Eelektross"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2573,
	gen: 9,
	isNonstandard: "Future",
})