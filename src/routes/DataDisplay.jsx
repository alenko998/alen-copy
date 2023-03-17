import React, {useState} from "react";
import SlideOver from "../components/SlideOver/index.jsx";
import Notification from "../components/Notification/index.jsx";
import ConfirmButton from "../components/ConfirmButton/index.jsx";
import CancelButton from "../components/CancelButton/index.jsx";
import CircularButton from "../components/CircularButton/index.jsx";
import NavigationButtons from "../components/NavigationButtons/index.jsx";
import ButtonGroup from "../components/ButtonGroup/index.jsx";
import SimpleStats from "../components/SimpleStats/index.jsx";
import Input from "../components/Input/index.jsx";
import ComboBox from "../components/ComboBox/index.jsx";
import CheckBox from "../components/CheckBox/index.jsx";
import ToggleButton from "../components/ToggleButton/index.jsx";
import SignInForm from "../forms/SignInForm.jsx";

export default function DataDisplay() {
  const [openSlideOver, setOpenSlideOver] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const slideOverContent = SignInForm;

  const stats = [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },

  ];
  return (
    <>
      <div className="space-y-4 mt-5">
        <SlideOver open={openSlideOver} setOpen={setOpenSlideOver} content={slideOverContent} title={'Panel title'} ></SlideOver>
        <Notification show={showNotification} setShow={setShowNotification}></Notification>
        <SimpleStats stats={stats}  title='Last 30 days' ></SimpleStats><br/>
        <ConfirmButton name={'Open SlideOver'} handleClick={() => setOpenSlideOver(true)} /><br/>
        <ConfirmButton name={'Show Notification'} handleClick={() => setShowNotification(true)} /><br/>
      </div>
    </>
  );
}