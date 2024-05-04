import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center font-medium text-[17px] rounded w-full p-3 leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'bg-indigo-200 text-gray-900 focus:border-indigo-700 '
                    : 'text-gray-500 hover:text-gray-700 hover:bg-indigo-100 hover:bg-opacity-50 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
