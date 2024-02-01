import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

function Book({auth}) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book</h2>}
            >
                <Head title="Book" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div>Bem vindo a nossa livraria!</div>
                                <div className={"flex justify-end"}>
                                    <Link
                                        href={route('book_create')}
                                    >
                                        <PrimaryButton type={"button"}>Registrar livro</PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Book;