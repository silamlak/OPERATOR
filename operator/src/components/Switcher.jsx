import React, { useState } from "react";
import useDarkSide from "../theme";
import Switch from "react-switch";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <Switch
          onChange={toggleDarkMode}
          checked={darkSide}
          offColor="#888"
          onColor="#333"
          height={16}
          width={32}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
    </>
  );
}
