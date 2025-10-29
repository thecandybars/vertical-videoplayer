// CountryCodeSelect.jsx
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const countryCodes = [
  { code: "+1", label: "🇺🇸 USA / Canada" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+33", label: "🇫🇷 France" },
  { code: "+49", label: "🇩🇪 Germany" },
  { code: "+34", label: "🇪🇸 Spain" },
  { code: "+39", label: "🇮🇹 Italy" },
  { code: "+57", label: "🇨🇴 Colombia" },
  { code: "+55", label: "🇧🇷 Brazil" },
  { code: "+52", label: "🇲🇽 Mexico" },
  { code: "+81", label: "🇯🇵 Japan" },
  { code: "+86", label: "🇨🇳 China" },
  { code: "+91", label: "🇮🇳 India" },
  { code: "+61", label: "🇦🇺 Australia" },
  { code: "+64", label: "🇳🇿 New Zealand" },
  { code: "+27", label: "🇿🇦 South Africa" },
  { code: "+82", label: "🇰🇷 South Korea" },
  { code: "+7", label: "🇷🇺 Russia" },
  { code: "+46", label: "🇸🇪 Sweden" },
  { code: "+31", label: "🇳🇱 Netherlands" },
  { code: "+32", label: "🇧🇪 Belgium" },
  { code: "+41", label: "🇨🇭 Switzerland" },
  { code: "+90", label: "🇹🇷 Turkey" },
  { code: "+970", label: "🇵🇸 Palestine" },
  { code: "+972", label: "🇮🇱 Israel" },
  { code: "+966", label: "🇸🇦 Saudi Arabia" },
  { code: "+20", label: "🇪🇬 Egypt" },
  { code: "+234", label: "🇳🇬 Nigeria" },
  { code: "+254", label: "🇰🇪 Kenya" },
  { code: "+63", label: "🇵🇭 Philippines" },
  { code: "+62", label: "🇮🇩 Indonesia" },
];

export default function CountryCodeSelect({ value, onChange, sx }) {
  const [selected, setSelected] = useState(value || "+57");

  const handleChange = (event) => {
    setSelected(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  return (
    <FormControl size="small">
      {/* <InputLabel id="country-code-label">Country Code</InputLabel> */}
      <Select
        // labelId="country-code-label"
        value={selected}
        // label="Country Code"
        onChange={handleChange}
        width={"30px"}
        sx={sx}
      >
        {countryCodes.map((c) => (
          <MenuItem key={c.code} value={c.code}>
            {c.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
