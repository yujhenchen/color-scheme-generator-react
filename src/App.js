import { useState } from "react";
import "./styles.css";
import Header from "./Header";
import CardContainer from "./CardContainer";
import ColorCard from "./ColorCard";
import ColorPicker from "./ColorPicker";
import DropDown from "./DropDown";
import Button from "./Button";

export default function App() {
  const [selectedColor, setSelectColor] = useState("#000000");
  function onGetColor() {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${selectedColor.replace(
        /[^a-zA-Z0-9 ]/g,
        ""
      )}&count=5`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function onChangeColor(color) {
    setSelectColor(color);
  }

  function onClickColorCard(color) {
    console.log(color);
  }

  const colors = [];
  const colorButtonText = "Get color scheme";

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
