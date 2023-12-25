import React from "react";
import ColorPicker from "./ColorPicker";
import DropDown from "./DropDown";
import Button from "./Button";

export default function Header({
  //   templateOptions,
  //   getColorButtonText,
  //   onGetColor,
  //   onChangeColor,
  children,
}) {
  return (
    <header>
      {/* <ColorPicker onChangeColor={onChangeColor} />
      <DropDown options={templateOptions} />
      <Button text={getColorButtonText} onClick={onGetColor} /> */}
      {children}
    </header>
  );
}
