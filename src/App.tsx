import { useState } from "react";
import { Select } from "./Select";
type SelectOption = {
  value: string | number;
  label: string;
};
const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];
function App() {
  const [value1, setvalue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setvalue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <>
      <Select
        multiple={true}
        value={value1}
        options={options}
        onChange={(e) => setvalue1(e)}
      />
      <br />
      <Select
        multiple={false}
        value={value2}
        options={options}
        onChange={(e) => setvalue2(e)}
      />
    </>
  );
}

export default App;
