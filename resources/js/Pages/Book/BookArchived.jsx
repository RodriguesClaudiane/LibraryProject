import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import NavLink from "@/Components/NavLink.jsx";
import {useEffect} from "react";
import RenderBooksArchived from "@/Components/Book/RenderBooksArchived.jsx";

function BookArchived({auth, paginate}) {
    const books = paginate.data;
    useEffect(() => {
        console.log(paginate);
    }, []);
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Livros arquivados</h2>}
            >
                <Head title="Book archived" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div>Livros arquivados</div>
                                <div className="grid grid-flow-row grid-cols-4 mt-4">
                                    {books.map(book => <RenderBooksArchived key={book.id} book={book} /> )}
                                </div>
                                <div>
                                    {paginate.links.map( (link, index) =>
                                        <NavLink
                                            href={link.url}
                                            active={link.active}
                                            key={index}
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

export default BookArchived;
