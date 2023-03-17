import React from "react";

export default function Input(props) {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1">
                <input
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}