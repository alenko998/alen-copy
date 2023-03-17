import Input from "../components/Input/index.jsx";
import ComboBox from "../components/ComboBox/index.jsx";
import CheckBox from "../components/CheckBox/index.jsx";

export default function Forms() {
  const options = [
    { id: 1, name: 'Jasar Ahmedovski' },
    { id: 2, name: 'Bora Drljaca' },
    { id: 3, name: 'Steve Jobs' },
    { id: 4, name: 'Hajro Cole' },
    { id: 5, name: 'Wahidonix Rahic' },
    // More users...
  ];
  return (
    <>
      <div className="space-y-16 mt-5">
        <ComboBox label={'Pipl'} options={options} ></ComboBox>
        <Input label={'Email label'} type={'email'}></Input>
        <Input label={'Password label'} type={'password'}></Input>
        <CheckBox title={'Title'} subtitle={'Subtitle'} ></CheckBox>
      </div>
    </>
  );
}