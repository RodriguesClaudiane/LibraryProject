import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEffect} from "react";
import RenderBooks from "@/Components/Book/RenderBooks.jsx";
import NavLink from "@/Components/NavLink.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";

function Book({auth, paginate}) {
    const books = paginate.data;
    useEffect(() => {
        console.log(paginate);
    }, [])
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
                                <div className={"text-2xl"}>Bem vindo a nossa livraria!</div>
                                <div className={"flex justify-end"}>
                                    <div className={"grid"}>
                                        <Link
                                            href={route('book_create')}
                                        >
                                            <PrimaryButton type={"button"}>Registrar livro</PrimaryButton>
                                        </Link>
                                        <Link
                                            href={route('book_index_archived')}
                                            className={"mt-1"}
                                        >
                                            <SecondaryButton type="button">Livros arquivados</SecondaryButton>
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid grid-flow-row grid-cols-4 mt-4">
                                    {books.map(book => <RenderBooks key={book.id} book={book} /> )}
                                </div>
                                <div>
                                    {paginate.links.map( (link, index) =>
                                        <NavLink
                                            href={link.url}
                                            active={link.active}
                                        >
                                            {
                                                index === 0 ? '<' : index === paginate.links.length - 1 ? '>' : link.label
                                            }
                                        </NavLink>
                                    )}
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
