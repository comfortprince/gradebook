import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, errors, post, processing } = useForm({
      session: '',
      start_date: '',
      end_date: '',
    });

    const submit = (e) => {
      e.preventDefault();
      post(route('admin.exams.store'));
    }

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

          <form 
            onSubmit={submit}
            className="mt-4 w-96 bg-white p-4 rounded-md shadow"
          >
              <div>
                  <InputLabel htmlFor="session" value="Session" />

                  <TextInput
                      id="session"
                      type="text"
                      name="session"
                      className="mt-1 block w-full"
                      autoComplete="username"
                      isFocused={true}
                      value={data.session}
                      onChange={(e) => { setData('session', e.target.value) }}
                  />

                  <InputError message={errors.session} className="mt-2" />
              </div>

              <div className="mt-4">
                  <InputLabel htmlFor="start_date" value="Start Date" />

                  <TextInput
                      id="start_date"
                      type="date"
                      name="start_date"
                      className="mt-1 block w-full"
                      autoComplete="date"
                      value={data.start_date}
                      onChange={(e) => { setData('start_date', e.target.value) }}
                  />

                  <InputError message={errors.start_date} className="mt-2" />
              </div>

              <div className="mt-4">
                  <InputLabel htmlFor="end_date" value="End Date" />

                  <TextInput
                      id="end_date"
                      type="date"
                      name="end_date"
                      className="mt-1 block w-full"
                      autoComplete="date"
                      value={data.end_date}
                      onChange={(e) => { setData('end_date', e.target.value) }}
                  />

                  <InputError message={errors.end_date} className="mt-2" />
              </div>

              <div className="flex items-center justify-between mt-4">
                  <SecondaryButton>
                    <Link href={route('admin.exams.index')}>
                      Cancel
                    </Link>
                  </SecondaryButton>
                  <PrimaryButton type="submit" disabled={processing}>
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
