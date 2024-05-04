import { useState } from 'react';
import { Head } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';

export default function CreateTeachers({ auth }) {
    const [modalState, setModalState] = useState(false)

    return (
      <AuthenticatedLayout
          user={auth.user}
      >
        <Head title="Admin Dashboard" />

        <div className="flex flex-col justify-center items-center text-gray-900 px-6 overflow-hidden rounded mt-6 h-full">
          <div className="flex justify-between mt-4 w-96">
            <h2 className="text-2xl font-medium">
              Present Teachers
            </h2>
            <div>
              <PrimaryButton onClick={() => {setModalState(true)}}>
                  New
              </PrimaryButton>
            </div>
          </div>

          <ul className="mt-4 w-96 bg-white p-4 rounded-md shadow">
              <li>
                  Peter Hluyo
              </li>

              <li className="mt-4">
                  John Musademba
              </li>

              <div className="flex items-center justify-between mt-4">
                  <SecondaryButton>
                      Prev
                  </SecondaryButton>
                  <PrimaryButton>
                      Next
                  </PrimaryButton>
              </div>

              <div className="flex justify-center mt-4 text-sm">
                Step 2 of 4
              </div>
          </ul>         
        </div>

        <Modal 
          show={modalState} 
          onClose={() => {setModalState(false)}}
        >
          <form className="p-6">
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
        </Modal>
      </AuthenticatedLayout>
    );
}
