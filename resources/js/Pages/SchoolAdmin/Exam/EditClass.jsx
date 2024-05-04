import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
      <AuthenticatedLayout
          user={auth.user}
      >
        <Head title="Admin Dashboard" />

        <div className="bg-white text-gray-900 px-6 pb-6 overflow-y-auto shadow rounded mt-6 h-full">
          <div className="flex justify-between mt-4">
            <h2 className="text-2xl font-medium">
              Present Class Details
            </h2>
          </div>

          <div className="mt-2">
            Class Name: 1 A
          </div>

          <div className="mt-2">
            Class Teacher: Peter Hluyo
          </div>

          <div className="w-[40rem] mt-2">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">
                Subjects
              </h3>
              <PrimaryButton>
                Add
              </PrimaryButton>
            </div>
            <table className="w-full mt-1">
              <thead>
                <tr>
                  <th className="text-start">
                    Name
                  </th>
                  <th className="text-start">
                    Teacher
                  </th>
                  <th className="text-start">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Geography
                  </td>
                  <td>
                    John Musademba
                  </td>
                  <td className="w-20">
                    <DangerButton className="w-full">
                      Remove
                    </DangerButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    Computer Science
                  </td>
                  <td>
                    Peter Hluyo
                  </td>
                  <td>
                    <DangerButton>
                      Remove
                    </DangerButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-[40rem] mt-6">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">
                Students
              </h3>
              <PrimaryButton>
                Add
              </PrimaryButton>
            </div>
            <table className="w-full mt-1">
              <thead>
                <tr>
                  <th className="text-start">
                    Name
                  </th>
                  <th className="text-start">
                    Surname
                  </th>
                  <th className="text-start">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Terrence
                  </td>
                  <td>
                    Hluyo
                  </td>
                  <td className="w-20">
                    <DangerButton className="w-full">
                      Remove
                    </DangerButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    Comfort
                  </td>
                  <td>
                    Hluyo
                  </td>
                  <td>
                    <DangerButton>
                      Remove
                    </DangerButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between w-[40rem] mt-6">
            <SecondaryButton>
              Back
            </SecondaryButton>
            <PrimaryButton>
              Save
            </PrimaryButton>
          </div>           
        </div>
      </AuthenticatedLayout>
    );
}
