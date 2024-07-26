import { ErrorMessage, useField } from "formik";
import { Label, TextInput, Textarea } from "flowbite-react"
import { IconType } from "react-icons";

interface inputTypes {
    isInput?: boolean,
    label?: string,
    name: string,
    icon?: IconType,
    placeholder?: string,
    type?: string,
    disabled?: boolean
    className?: string
}


const InputField: React.FC<inputTypes> = ({ isInput = true, className, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className='mb-3 z-10'>
                <div className="mb-1 block opacity-85">
                    <Label htmlFor={field.name} value={label} />
                </div>
                {
                    isInput == true ?
                        <TextInput className={className}  type="text" {...field} {...props} color={`${meta.touched && meta.error && "failure"}`} /> :
                        <Textarea className={className}  rows={4} {...field} {...props} color={`${meta.touched && meta.error && "failure"}`} />
                }
                <ErrorMessage component={'div'} name={field.name} className="text-red-600 text-xs mt-1" />
            </div>
        </>
    )
}
export default InputField
