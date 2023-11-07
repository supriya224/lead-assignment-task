import React, { ChangeEvent } from 'react'


interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value?: string | number
    name?: string
    placeholder?: string
    error?: boolean
    disabled?: boolean
    className?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
function Input({
    className,
    label,
    ...props
}: InputProps) {
    return (
        <div className='flex justify-center'>
            <label htmlFor="first_name" className=" flex my-9 text-lg items-center font-medium text-black ">{label}:
                <input
                    id="first_name"
                    className={`${className} bg-gray-50 border
                     border-gray-300 w-60 flex mx-6
                     text-gray-900 text-sm rounded-lg   
                     focus:ring-blue-500 focus:border-blue-500
                      p-2.5 `}
                    {...props}

                />
            </label>
        </div>
    )
}

export default Input