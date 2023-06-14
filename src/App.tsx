import { useState} from 'react';
import { DatePicker } from "./components/DatePicker/DatePicker";
import { DropDownItem, DropdownDateItems } from "./components/DropdownMenu/DropDownMock";
import { DropdownMenu } from "./components/DropdownMenu/DropdownMenu";



function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [dropdownElement, setDropdownElement] = useState(DropdownDateItems[0]);

  const getSelectedElementHandler = (elem: DropDownItem) => {
    setDropdownElement(elem)
  }

  const toggle = () => {
    setIsOpened(!isOpened)
  }

  return (
    <div className="App">
      <header>
        <h1>hello</h1>
      </header>
      <DatePicker value={dropdownElement.elem.textValue} onClick={toggle} />
      <DropdownMenu data={DropdownDateItems} isOpened={isOpened} closeDropdown={()=>setIsOpened(false)} getSelectedElement={getSelectedElementHandler} />


    </div>
  );
}

export default App;
