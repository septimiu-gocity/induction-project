import { useState } from "react";

export function useForm(initialState) {
    const [fields, setFields] = useState(initialState);

    return [
        fields,
        function (event) {
            const { name, value } = event.target;
            setFields((prevFields) => ({
                ...prevFields,
                [name]: value,
            }));
        },
    ];
}