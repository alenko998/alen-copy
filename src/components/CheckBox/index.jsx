export default function CheckBox(props) {
    return (
            <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        id={props.id}
                        aria-describedby="comments-description"
                        name={props.name}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        {props.title}
                    </label>
                    <p id="comments-description" className="text-gray-500">
                        {props.subtitle}
                    </p>
                </div>
            </div>
    )
}
