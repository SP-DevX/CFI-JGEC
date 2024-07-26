import { ErrorMessage, useField } from "formik";
import { Label, Select } from "flowbite-react";

interface inputTypes {
    data: (string | number | Object)[];
    isInput?: boolean;
    label?: string;
    name: string;
    type?: string;
    disabled?: boolean;
    className?: string;
}

const SelectionField: React.FC<inputTypes> = ({
    data,
    className,
    label,
    ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="mb-3 z-10">
                <div className="mb-1 block">
                    <Label htmlFor={field.name} value={label} />
                </div>
                {
                    <Select
                        type="text"
                        className={className}
                        {...field}
                        {...props}
                        color={`${meta.touched && meta.error && "failure"}`}
                    >
                        {data.map((item: any) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </Select>
                }
                <ErrorMessage
                    component={"div"}
                    name={field.name}
                    className="text-red-600 text-xs"
                />
            </div>
        </>
    );
};
export default SelectionField;
