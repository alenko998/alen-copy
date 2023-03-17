import React from "react";

export default function ButtonGroup(props) {

  return (<span className="isolate inline-flex rounded-md shadow-sm">
        {generateButtons(props.buttonDictionary).map(item => item)}
    </span>)
}

const generateButtons2 = (nameList, functionList) => {
  let items = [];
  const isOnclick = nameList.length === functionList.length;
  for (let i = 0; i < nameList.length; i++) {
    if (i === 0) {
      items.push(<button
        type="button"
        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        onClick={isOnclick ? functionList[i] : null}
      >
        {nameList[0]}
      </button>);
    } else if (i === nameList.length - 1) {
      items.push(<button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        onClick={isOnclick ? functionList[i] : null}
      >
        {nameList[nameList.length - 1]}
      </button>)
    } else {
      items.push(<button
        type="button"
        className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        onClick={isOnclick ? functionList[i] : null}
      >
        {nameList[i]}
      </button>)
    }
  }
  return items;
}
const generateButtons = (buttonDictionary) => {
  let items = [];
  let i = 1;
  buttonDictionary.map((item) => {
    if (i === 1) {
      items.push(<button
        type="button"
        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        onClick={item.callBack}
      >
        {item.buttonText}
      </button>);
    } else if (i === Object.keys(buttonDictionary).length
    ) {
    items.push(<button
      type="button"
      className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      onClick={item.callBack}
    >
      {item.buttonText}
    </button>)
  } else {
    items.push(<button
      type="button"
      className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      onClick={item.callBack}
    >
      {item.buttonText}
    </button>)
  }
    i++;
  } );
  return items;
}