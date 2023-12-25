const appData = Object.freeze({
  colorButtonText: "Get color scheme",
  defaultColor: "#000000",
  colorCardCount: 5,
  colorSchemeURL:
    "https://www.thecolorapi.com/scheme?hex=hexValue&mode=colorSchemeMode&count=resultCount",
  colorSchemeModes: [
    { value: "monochrome", text: "Monochrome" },
    { value: "monochrome-dark", text: "Monochrome Dark" },
    { value: "monochrome-light", text: "Monochrome Light" },
    { value: "analogic", text: "Analogic" },
    { value: "complement", text: "Complement" },
    { value: "analogic-complement", text: "Analogic Complement" },
    { value: "triad", text: "Triad" },
    { value: "quad", text: "Quad" },
  ],
});

export default appData;
