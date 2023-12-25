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
    "https://www.thecolorapi.com/scheme?hex=hexValue&count=resultCount";

  const [selectedColor, setSelectColor] = useState(defaultColor);
  const [colors, setColors] = useState([]);
  function onGetColor() {
    const url = colorSchemeURL
      .replace("hexValue", selectedColor.replace(/[^a-zA-Z0-9 ]/g, ""))
      .replace("resultCount", colorCardCount);
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) =>
        setColors(
          data.colors.map((color) => ({
            colorName: color.hex.value,
            colorValue: color.rgb.value,
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
    <>
      <Header>
        <ColorPicker onChangeColor={onChangeColor} color={selectedColor} />
        <DropDown options={[]} />
        <Button text={colorButtonText} onClick={onGetColor} />
      </Header>
      <main className="color-cards-container">
        {colors.map((color) => (
          <ColorCard
            key={color.colorName}
            {...color}
            onClick={onClickColorCard}
          />
        ))}
      </main>
    </>
  );
}
