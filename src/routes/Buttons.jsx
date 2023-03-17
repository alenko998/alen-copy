import React, {useState} from "react";
import ConfirmButton from "../components/ConfirmButton/index.jsx";
import CancelButton from "../components/CancelButton/index.jsx";
import CircularButton from "../components/CircularButton/index.jsx";
import NavigationButtons from "../components/NavigationButtons/index.jsx";
import ButtonGroup from "../components/ButtonGroup/index.jsx";
import ToggleButton from "../components/ToggleButton/index.jsx";

export default function Buttons() {
  const [enabled, setEnabled] = useState(false)
  const handleClick = () => {
    alert("I was clicked");
  };
  const buttons = [
    { buttonText: 'Apple', callBack: () => console.log('1') },
    { buttonText: 'Orange', callBack: () => console.log('2') },
    { buttonText: 'Watermelon', callBack: () => console.log('3') },
    { buttonText: 'Plum', callBack: () => console.log('4') },
  ];
  return (
    <>
      <div className="space-y-16 mt-5">
        <ConfirmButton name={'ConfirmButton'} handleClick={handleClick} /> <br/>
        <CancelButton name={'CancelButton'} handleClick={handleClick} /><br/>
        <CircularButton handleClick={handleClick} /><br/>
        <NavigationButtons handleBackClick={() => console.log('back')} handleForwardClick={() => console.log('forward')}/><br/>
        <ButtonGroup buttonDictionary={buttons} /><br/>
        <ToggleButton enabled={enabled} setEnabled={setEnabled} ></ToggleButton><br/>
      </div>
    </>
  );
}