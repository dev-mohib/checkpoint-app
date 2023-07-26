import { HTMLAttributes } from "react";


export function ErrorMessage({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={'text-sm text-red-600 my-2 ' + className}>
            {message}
        </p>
    ) : null;
}