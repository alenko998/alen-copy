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

export default function AllComponents() {
    const [openSlideOver, setOpenSlideOver] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const handleClick = () => {
        alert("I was clicked");
    };
    const slideOverContent = <p>Vahan</p>;
    const options = [
        { id: 1, name: 'Jasar Ahmedovski' },
        { id: 2, name: 'Bora Drljaca' },
        { id: 3, name: 'Steve Jobs' },
        { id: 4, name: 'Hajro Cole' },
        { id: 5, name: 'Wahidonix Rahic' },
        // More users...
    ];
    const stats = [
        { name: 'Total Subscribers', stat: '71,897' },
        { name: 'Avg. Open Rate', stat: '58.16%' },
        { name: 'Avg. Click Rate', stat: '24.57%' },

    ];
    const buttons = [
        { buttonText: 'Apple', callBack: () => console.log('1') },
        { buttonText: 'Orange', callBack: () => console.log('2') },
        { buttonText: 'Watermelon', callBack: () => console.log('3') },
    ];

    return (
        <>
            <div className="space-y-4 mt-1">
                <SlideOver open={openSlideOver} setOpen={setOpenSlideOver} content={slideOverContent} title={'Panel title'} ></SlideOver>
                <Notification show={showNotification} setShow={setShowNotification}></Notification>
                <ConfirmButton name={'ConfirmButton'} handleClick={handleClick} /> <br/>
                <CancelButton name={'CancelButton'} handleClick={handleClick} /><br/>
                <CircularButton handleClick={handleClick} /><br/>
                <NavigationButtons handleBackClick={() => console.log('back')} handleForwardClick={() => console.log('forward')}/><br/>
                <ButtonGroup buttonDictionary={buttons} /><br/>
                <ToggleButton enabled={enabled} setEnabled={setEnabled} ></ToggleButton><br/>
                <SimpleStats stats={stats}  title='Last 30 days' ></SimpleStats><br/>
                <ConfirmButton name={'Open SlideOver'} handleClick={() => setOpenSlideOver(true)} /><br/>
                <ConfirmButton name={'Show Notification'} handleClick={() => setShowNotification(true)} /><br/>
                <ComboBox label={'Pipl'} options={options} ></ComboBox>
                <Input label={'Email label'} type={'email'}></Input>
                <Input label={'Password label'} type={'password'}></Input>
                <CheckBox title={'Title'} subtitle={'Subtitle'} ></CheckBox>
            </div>
        </>
    );
}