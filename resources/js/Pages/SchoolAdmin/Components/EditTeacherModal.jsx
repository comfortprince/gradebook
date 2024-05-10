import { useForm } from '@inertiajs/react';

import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function RegisterNewTeacherModal({
	show,
	onClose,
  teacher
}) {
	const { data, setData, errors, processing } = useForm({
    name: teacher.name,
    surname: teacher.surname,
    email: teacher.email,
    subjects: teacher.subjects
  })

  const registerNewTeacher = (e) => {
    e.preventDefault()
    // register new teacher
    // post(route('admin.teachers.store'))
  }

	return (
		<Modal 
          show={show} 
          onClose={onClose}
    >
      <div className="p-6">
        <h2 className="text-2xl font-medium mb-4">
          Edit Teacher
        </h2>
        <form onSubmit={registerNewTeacher}>
            <div>
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                  id="name"
                  name="name"
                  className="mt-1 block w-full"
                  autoComplete="name"
                  isFocused={true}
                  required
                  value={data.name}
                  onChange={(e) => {setData('name', e.target.value)}}
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="surname" value="Surname" />

                <TextInput
                  id="surname"
                  name="surname"
                  value={data.surname}
                  className="mt-1 block w-full"
                  autoComplete="surname"
                  isFocused={true}
                  onChange={(e) => setData('surname', e.target.value)}
                  required
                />

                <InputError message={errors.surname} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  autoComplete="username"
                  onChange={(e) => setData('email', e.target.value)}
                  required
                />

                {<InputError message={errors.email} className="mt-2" />}
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email" value="Select Subjects" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  // value={data.subjects}
                  className="mt-1 block w-full"
                  autoComplete="username"
                  // onChange={(e) => setData('email', e.target.value)}
                  required
                />

                {/*<InputError message={errors.email} className="mt-2" />*/}
            </div>

            <div className="flex items-center justify-between mt-4">
                <SecondaryButton onClick={onClose}>
                  Cancel
                </SecondaryButton>
                <PrimaryButton disabled={processing}>
                  Save
                </PrimaryButton>
            </div>
        </form>
      </div>
    </Modal>
	)
}