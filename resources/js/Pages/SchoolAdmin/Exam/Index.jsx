import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, exams }) {
    console.log(exams)

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
            <PrimaryButton>
              <Link
                href={route('admin.exams.create')}
              >
                New
              </Link>
            </PrimaryButton>
          </div>

          <ul className="mt-4 flex flex-col gap-2">
            {exams.map((exam) => (
              <li key={exam.id} className="text-lg">
                <Link href="#!" className="flex justify-between">
                  <span>
                    {exam.name + " " + new Date(exam.end_date).getFullYear()}
                  </span>
                  
                  {!exam.registered && 
                    <span className="text-white bg-red-600 rounded p-1 px-2 text-sm">
                      Complete Exam Registeration
                    </span>
                  }

                  {exam.registered && exam.results_pending && 
                    <span className="text-white bg-blue-600 rounded p-1 px-2 text-sm">
                      Results Pending
                    </span>
                  }
                </Link>
              </li>
            ))}
          </ul>          
        </div>
      </AuthenticatedLayout>
    );
}
