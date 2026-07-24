({
  name: "Scolipite",
	spritenum: 554,
  megaStone: { "Scolipede": "Scolipede-Mega" },
  itemUser: ["Scolipede"],
  onTakeItem(item, source) {
    return !item.megaStone?.[source.baseSpecies.baseSpecies];
  },
  num: 2571,
	gen: 9,
	isNonstandard: "Future",
})