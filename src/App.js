import { useState } from "react";
import "./styles.css";
import Header from "./Header";
import CardContainer from "./CardContainer";
import ColorCard from "./ColorCard";
import ColorPicker from "./ColorPicker";
import DropDown from "./DropDown";
import Button from "./Button";

export default function App() {
  const colors = [];
  const colorButtonText = "Get color scheme";
  const defaultColor = "#000000";
  const colorCardCount = 5;
  const colorSchemeURL =
    "https://www.thecolorapi.com/scheme?hex=hexValue&count=resultCount";

  const [selectedColor, setSelectColor] = useState(defaultColor);
  function onGetColor() {
    const url = colorSchemeURL
      .replace("hexValue", selectedColor.replace(/[^a-zA-Z0-9 ]/g, ""))
      .replace("resultCount", colorCardCount);
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
      <main>
        {colors.map((color, index) => (
          <CardContainer key={index}>
            <ColorCard {...color} onClick={onClickColorCard} />
          </CardContainer>
        ))}
      </main>
    </>
  );
}
