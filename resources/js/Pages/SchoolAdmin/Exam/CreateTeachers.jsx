import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';

export default function CreateTeachers({ auth, teachers }) {
    const [modalState, setModalState] = useState(false)

    return (
      <AuthenticatedLayout
          user={auth.user}
      >
        <Head title="Admin Dashboard" />

        <div className="text-gray-900 overflow-hidden rounded mt-6 h-full">
          <div className="flex justify-between mt-4">
            <h2 className="text-2xl font-medium">
              Verify Teachers
            </h2>
            <div>
              <PrimaryButton onClick={() => {setModalState(true)}}>
                  New
              </PrimaryButton>
            </div>
          </div>

          <table className="w-full bg-white rounded-md overflow-hidden shadow-md mt-4">
            <thead>
              <tr className="px-4">
                <th>
                  
                </th>
                <th className="text-start py-2">
                  Name
                </th>
                <th className="text-start">
                  Class Teacher
                </th>
                <th className="text-start">
                  Email
                </th>
                <th className="text-start">
                  Subject
                </th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, ndx) => (
                <tr 
                  key={teacher.id}
                  className={` ${ndx % 2 === 0 ? 'bg-gray-600 bg-opacity-10' : ''}`}
                >
                  <td className="pl-4">
                    {ndx + 1}
                  </td>
                  <td className="py-2">
                    {teacher.name + " " + teacher.surname}
                  </td>
                  <td>
                    {teacher.classTeacher}
                  </td>
                  <td>
                    {teacher.email}
                  </td>
                  <td>
                    {teacher.subjects.map((subject, ndx) => (
                      <span
                        key={subject.id} 
                        className={`
                          inline-block p-1 bg-green-500 text-white text-sm rounded-md 
                          ${ ndx !== 0 ? 'ml-1' : ''}
                        `}
                      >
                        {subject.name}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex flex-col items-center">
            <div className="bg-white w-96 p-4 rounded-md shadow-md"> 
              <div className="flex items-center justify-between">
                <SecondaryButton>
                  <Link href={route('admin.exams.create')}>
                    Prev
                  </Link>
                </SecondaryButton>
                <PrimaryButton>
                  Next
                </PrimaryButton>
              </div>

              <div className="flex justify-center mt-4 text-sm">
                Step 2 of 4
              </div>
            </div>
          </div>       
        </div>

        <Modal 
          show={modalState} 
          onClose={() => {setModalState(false)}}
        >
          <div className="p-6">
            <h2 className="text-2xl font-medium mb-4">
              Register New Teacher
            </h2>
            <form>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        required
                    />

                    {/*<InputError message={errors.name} className="mt-2" />*/}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="surname" value="Surname" />

                    <TextInput
                        id="surname"
                        name="surname"
                        // value={data.surname}
                        className="mt-1 block w-full"
                        autoComplete="surname"
                        isFocused={true}
                        // onChange={(e) => setData('surname', e.target.value)}
                        required
                    />

                    {/*<InputError message={errors.surname} className="mt-2" />*/}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        // value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        // onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    {/*<InputError message={errors.email} className="mt-2" />*/}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4">
                        Register
                    </PrimaryButton>
                </div>
            </form>
          </div>
        </Modal>
      </AuthenticatedLayout>
    );
}
