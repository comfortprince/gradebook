import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
      <AuthenticatedLayout
          user={auth.user}
      >
        <Head title="Admin Dashboard" />

        <div className="bg-white text-gray-900 px-6 overflow-hidden shadow rounded mt-6 h-full">
          <div className="flex justify-between mt-4">
            <h2 className="text-2xl font-medium">
              Manage Exams
            </h2>
            <PrimaryButton>New</PrimaryButton>
          </div>

          <ul className="mt-4 flex flex-col gap-2">
            <li className="text-lg">
              Term 3 2023
            </li>
            <li className="text-lg">
              Term 2 2023
            </li>

          </ul>          
        </div>
      </AuthenticatedLayout>
    );
}
