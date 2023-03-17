import React from "react";
import { PlusIcon as PlusIconOutline } from '@heroicons/react/24/outline'
export default function CircularButton(props) {
    return (
        <>
            <button
                type="button"
                className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={props.handleClick}
            >
                <PlusIconOutline className="h-6 w-6" aria-hidden="true" />
            </button>
        </>
    )
}