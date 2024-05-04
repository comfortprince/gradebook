import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';

export default function Create({ auth }) {
    return (
      <AuthenticatedLayout
          user={auth.user}
      >
        <Head title="Admin Dashboard" />

        <div className="flex flex-col justify-center items-center text-gray-900 px-6 overflow-hidden rounded mt-6 h-full">
          <div className="flex justify-start mt-4">
            <h2 className="text-2xl font-medium">
              Register New Exam
            </h2>
          </div>

          <form className="mt-4 w-96 bg-white p-4 rounded-md shadow">
              <div>
                  <InputLabel htmlFor="session" value="Session" />

                  <TextInput
                      id="session"
                      type="text"
                      name="session"
                      className="mt-1 block w-full"
                      autoComplete="username"
                      isFocused={true}
                  />

                  {/*<InputError message={errors.email} className="mt-2" />*/}
              </div>

              <div className="mt-4">
                  <InputLabel htmlFor="start_date" value="Start Date" />

                  <TextInput
                      id="start_date"
                      type="date"
                      name="start_date"
                      className="mt-1 block w-full"
                      autoComplete="date"
                  />

                  {/*<InputError message={errors.password} className="mt-2" />*/}
              </div>

              <div className="mt-4">
                  <InputLabel htmlFor="end_date" value="End Date" />

                  <TextInput
                      id="end_date"
                      type="date"
                      name="end_date"
                      className="mt-1 block w-full"
                      autoComplete="date"
                  />

                  {/*<InputError message={errors.password} className="mt-2" />*/}
              </div>

              <div className="flex items-center justify-between mt-4">
                  <SecondaryButton>
                      Cancel
                  </SecondaryButton>
                  <PrimaryButton>
                      Next
                  </PrimaryButton>
              </div>

              <div className="flex justify-center mt-4 text-sm">
                Step 1 of 4
              </div>
          </form>         
        </div>
      </AuthenticatedLayout>
    );
}
