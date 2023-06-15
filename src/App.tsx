import { useState} from 'react';
import { DatePicker } from "./components/FilterMenu/DatePicker/DatePicker";
import { DropDownItem, DropdownDateItems } from "./components/FilterMenu/DropdownMenu/DropDownMock";
import { DropdownMenu } from "./components/FilterMenu/DropdownMenu/DropdownMenu";
import { DateFilterMenu } from './components/FilterMenu/DateFilterMenu';
import { FilterMenu } from './components/FilterMenu/FilterMenu';



function App() {


  return (
    <div className="App">
      <header>
        <h1>hello</h1>
      </header>
      <FilterMenu />


    </div>
  );
}

export default App;
