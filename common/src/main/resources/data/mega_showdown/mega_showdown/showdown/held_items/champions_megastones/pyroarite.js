({
    name: "Pyroarite",
    spritenum: 561,
    megaStone: { "Pyroar": "Pyroar-Mega" },
    itemUser: ["Pyroar"],
    onTakeItem(item, source) {
       return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: 2578,
    gen: 9,
    isNonstandard: "Future",
})