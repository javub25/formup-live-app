import { toast } from 'sonner'
import { ErrorsType } from '@/types/Form/Form.ts';

export const getErrors = (errors: ErrorsType) => {

    const errorMessages = Object.keys(errors)
        .map((key) => `${errors[key as keyof ErrorsType]?.message}`)
        .filter((message) => message).join('\n');

    if(errorMessages)
    {
        toast.error(errorMessages, {
            description: 'Check the following errors',
            duration: 3000,
            unstyled: true,
            classNames: {
                toast: 'p-4 shadow-md rounded-md',
                icon: 'mx-auto mb-4',
                title: 'whitespace-pre-line',
                description: 'text-sm my-4 mx-auto',
            },
        });
    }
};