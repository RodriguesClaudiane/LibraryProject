import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {useEffect, useState} from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import DangerButton from "@/Components/DangerButton.jsx";

function BookShow({auth, book}) {
    const [synopsisAll, setSynopsisAll] = useState(false);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={auth.user.role === "adm" ?
                <div className={"flex justify-between"}>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">{book.title}</h2>
                    <div>
                        <Link href={route('book_edit', {book: book})}>
                            <PrimaryButton>Editar</PrimaryButton>
                        </Link>
                        <DangerButton>Deletar</DangerButton>
                    </div>
                </div>
                : <h2 className="font-semibold text-xl text-gray-800 leading-tight">{book.title}</h2>
            }
        >
            <Head title={book.title}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className={"grid grid-flow-col grid-cols-3"}>
                                <div className={"p-1"}>
                                    <img src={book.cover} alt={`Capa do livro ${book.title}`} />
                                </div>
                                <div className={"p-1 col-span-2"}>
                                    <div className={"flex"}>
                                        <h2 className={"text-black text-xl"}>{book.title}</h2>
                                            <div className={"pl-1 text-gray-600 text-xl"}>{book.format} - Edição: {book.edition}</div>
                                    </div>
                                    <div className={"text-gray-600"}>
                                        <div>Por {book.author}</div>
                                        <div>Avaliação: {book.ratings} de 5</div>
                                    </div>
                                    <div>
                                        <p>{synopsisAll ? book.synopsis : book.synopsis.substring(0, 500) + '...'}
                                            <button
                                                className="hover:text-blue-700 text-blue-400 font-bold underline hover:underline-offset-4"
                                                onClick={() => setSynopsisAll(!synopsisAll)}
                                            >Ler {synopsisAll ? 'menos' : 'mais'}
                                            </button>
                                        </p>
                                    </div>
                                </div>
                                <div className={"p-1 w-60 border border-black h-96"}>
                                    <div className={"text-3xl"}>Area destinada para comprar o livro</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default BookShow;
