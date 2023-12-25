import { useState, useCallback } from "react";
import "./styles.css";
import Header from "./components/Header";
import ColorCard from "./components/ColorCard";
import ColorPicker from "./components/ColorPicker";
import DropDown from "./components/DropDown";
import Button from "./components/Button";
import Toast from "./components/Toast";
import debounce from "./helper";
import appData from "./constants";

export default function App() {
  const [selectedColor, setSelectColor] = useState(appData.defaultColor);
  const [colors, setColors] = useState([]);
  const [selectedSchemeMode, setSelectedSchemeMode] = useState(
    appData.colorSchemeModes.length > 0 ? appData.colorSchemeModes[0].value : ""
  );
  const [showToast, setShowToast] = useState(false);
  const [clickedColor, setClickedColor] = useState("");

  function onSelect(value) {
    setSelectedSchemeMode(value);
  }

  function onGetColor() {
    const url = appData.colorSchemeURL
      .replace("hexValue", selectedColor.replace(/[^a-zA-Z0-9 ]/g, ""))
      .replace("colorSchemeMode", selectedSchemeMode)
      .replace("resultCount", appData.colorCardCount);
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

  const hideToast = useCallback(
    debounce(() => setShowToast(false), 2000),
    []
  );

  async function onClickColorCard(color) {
    setShowToast(true);
    hideToast();
    navigator.clipboard.writeText(color);
    setClickedColor(color);
  }

  return (
    <>
      <main className="flex flex-col min-h-screen w-full">
        <Header>
          <ColorPicker onChangeColor={onChangeColor} color={selectedColor} />
          <DropDown
            options={appData.colorSchemeModes}
            onSelect={onSelect}
            selectedOption={selectedSchemeMode}
          />
          <Button text={appData.colorButtonText} onClick={onGetColor} />
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

      {showToast && (
        <Toast text={`Copied color ${clickedColor} to clipboard!`} />
      )}
    </>
  );
}
