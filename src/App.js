import { useState } from "react";
import "./styles.css";
import Header from "./Header";
import ColorCard from "./ColorCard";
import ColorPicker from "./ColorPicker";
import DropDown from "./DropDown";
import Button from "./Button";

export default function App() {
  const colorButtonText = "Get color scheme";
  const defaultColor = "#000000";
  const colorCardCount = 5;
  const colorSchemeURL =
    "https://www.thecolorapi.com/scheme?hex=hexValue&mode=colorSchemeMode&count=resultCount";
  const colorSchemeModes = [
    { value: "monochrome", text: "Monochrome" },
    { value: "monochrome-dark", text: "Monochrome Dark" },
    { value: "monochrome-light", text: "Monochrome Light" },
    { value: "analogic", text: "Analogic" },
    { value: "complement", text: "Complement" },
    { value: "analogic-complement", text: "Analogic Complement" },
    { value: "triad", text: "Triad" },
    { value: "quad", text: "Quad" },
  ];

  const [selectedColor, setSelectColor] = useState(defaultColor);
  const [colors, setColors] = useState([]);
  const [selectedSchemeMode, setSelectedSchemeMode] = useState(
    colorSchemeModes.length > 0 ? colorSchemeModes[0].value : ""
  );

  function onSelect(value) {
    setSelectedSchemeMode(value);
  }

  function onGetColor() {
    const url = colorSchemeURL
      .replace("hexValue", selectedColor.replace(/[^a-zA-Z0-9 ]/g, ""))
      .replace("colorSchemeMode", selectedSchemeMode)
      .replace("resultCount", colorCardCount);
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) =>
        setColors(
          data.colors.map((color) => ({
            colorName: color.hex.value,
            colorValue: color.hex.value,
          }))
        )
      );
  }

  function onChangeColor(color) {
    setSelectColor(color);
  }

  function onClickColorCard(color) {
    console.log(color);
  }

  return (
    <main className="flex flex-col min-h-screen w-full">
      <Header>
        <ColorPicker onChangeColor={onChangeColor} color={selectedColor} />
        <DropDown
          options={colorSchemeModes}
          onSelect={onSelect}
          selectedOption={selectedSchemeMode}
        />
        <Button text={colorButtonText} onClick={onGetColor} />
      </Header>
      <section className="color-cards-container grow flex w-full">
        {colors.map((color) => (
          <ColorCard
            key={color.colorName}
            {...color}
            onClick={onClickColorCard}
          />
        ))}
      </section>
    </main>
  );
}
