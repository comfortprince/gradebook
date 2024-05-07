import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RegisterNewTeacherModal from '../Components/RegisterNewTeacherModal'
import EditTeacherModal from '../Components/EditTeacherModal'

import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';

export default function CreateTeachers({ auth, teachers }) {
    const [teacherRegistrationModalState, setTeacherRegistrationModalState] = useState(false)
    const [teacherEditModalState, setTeacherEditModalState] = useState(false)
    const [teacherToBeEdited, setTeacherToBeEdited] = useState(null)

    return (
      <AuthenticatedLayout
          user={auth.user}
      >
        <Head title="Admin Dashboard" />

        <div className="text-gray-900 rounded mt-6 h-full">
          <div className="flex justify-between mt-4">
            <h2 className="text-2xl font-medium">
              Verify Teachers
            </h2>
            <div>
              <PrimaryButton onClick={() => {setTeacherRegistrationModalState(true)}}>
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
                  <td>
                    <SecondaryButton
                      onClick={() => { 
                        setTeacherToBeEdited(teacher) 
                        setTeacherEditModalState(true) 
                      }}
                    >
                      Edit
                    </SecondaryButton>
                    <DangerButton className="ml-1">
                      Delete
                    </DangerButton>
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

        <RegisterNewTeacherModal 
          show={teacherRegistrationModalState}
          onClose={() => {setTeacherRegistrationModalState(false)}}
        />

        {teacherEditModalState &&
          <EditTeacherModal 
            show={teacherEditModalState}
            onClose={() => {setTeacherEditModalState(false)}}
            teacher={teacherToBeEdited}
          />
        }
      </AuthenticatedLayout>
    );
}
