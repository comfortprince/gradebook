import { useState } from 'react';
import { Head } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
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

        <div className="text-gray-900 overflow-hidden rounded mt-6 h-full">
          <div className="flex justify-between mt-4 w-full">
            <h2 className="text-2xl font-medium">
              Present Subjects and Teachers
            </h2>
            <div>
              <PrimaryButton onClick={() => {setModalState(true)}}>
                New
              </PrimaryButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {/*<Subject 
              name={'Computer Science'}
              teachers={['Peter Hluyo', 'Clive Sithole']}
            />*/}

            <div className="bg-white p-4 rounded-md shadow">
              <div className="flex justify-between w-full">
                <h2 className="text-xl font-medium">
                  Computer Science
                </h2>
                <PrimaryButton onClick={() => {setModalState(true)}}>
                  Add Teacher
                </PrimaryButton>
              </div>
              <ul className="mt-4">
                <li className="flex justify-between">
                  <div>
                    Peter Hluyo
                  </div>
                  <DangerButton>
                    Remove
                  </DangerButton>
                </li>

                <li className="mt-4 flex justify-between">
                  <div>
                    Clive Sithole
                  </div>
                  <DangerButton>
                    Remove
                  </DangerButton>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <div className="flex justify-between w-full">
                <h2 className="text-xl font-medium">
                  Geography
                </h2>
                <PrimaryButton onClick={() => {setModalState(true)}}>
                  Add Teacher
                </PrimaryButton>
              </div>
              <ul className="mt-4">
                <li className="flex justify-between">
                  <div>
                    John Musademba
                  </div>
                  <DangerButton>
                    Remove
                  </DangerButton>
                </li>

                <li className="mt-4 flex justify-between">
                  <div>
                    Mike Hlatshwayo
                  </div>
                  <DangerButton>
                    Remove
                  </DangerButton>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex w-96 items-center justify-between mt-4">
              <SecondaryButton>
                  Prev
              </SecondaryButton>
              <PrimaryButton>
                  Next
              </PrimaryButton>
            </div>

            <div className="flex justify-center mt-4 text-sm">
              Step 3 of 4
            </div>
          </div>        
        </div>

        <Modal 
          show={modalState} 
          onClose={() => {setModalState(false)}}
        >
          <div className="p-6">
            <h2 className="text-xl font-medium">
              Present Teachers
            </h2>
            <ul className="mt-4">
              <li className="flex justify-between">
                <div>
                  Peter Hluyo
                </div>
                <PrimaryButton onClick={() => {setModalState(true)}}>
                  Add To Computer Science
                </PrimaryButton>
              </li>

              <li className="mt-4 flex justify-between">
                <div>
                  Clive Sithole
                </div>
                <PrimaryButton onClick={() => {setModalState(true)}}>
                  Add To Computer Science
                </PrimaryButton>
              </li>
            </ul>
          </div>
        </Modal>
      </AuthenticatedLayout>
    );
}
