import Modal from "@/Components/Modal.jsx";
import {useState} from "react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import DangerButton from "@/Components/DangerButton.jsx";
import {Link, router, useForm} from "@inertiajs/react";

function RenderBooksArchived({book}) {
    const [openModal, setOpenModal] = useState(false);
    const [openModalUnarchive, setOpenModalUnarchive] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const {put} = useForm();
    function unarchive() {
        put(route('book_update_archived', {book: book.id}), {
            onSuccess: () => setOpenModalUnarchive(true)
        });
    }
    function reloadPage() {
        router.get(route('book_index_archived'));
    }
    return (
        <>
            <button
                className={"border border-2 w-60 border-gray-500 m-2 text-start"}
                onClick={() => setOpenModal(true)}
            >
                <div className={"p-2"}>
                    <img src={book.cover} alt={"imagem do livro"} className={"w-60 h-60"}/>
                    <h2>{book.title}</h2>
                    <div className={"text-gray-600"}>Por {book.author}</div>
                    <div>Avaliação: {book.ratings} de 5</div>
                    <div>{book.format}</div>
                    <div className={"flex"}>
                        <div>R$</div>
                        <div className={"text-2xl"}>{book.value}</div>
                    </div>
                </div>
            </button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <div className={"m-2"}>
                    <div className={"flex justify-between"}>
                        <h2 className={"text-2xl"}>O que deseja fazer?</h2>
                        <SecondaryButton onClick={() => setOpenModal(false)}>Fechar</SecondaryButton>
                    </div>
                    <div className={"grid justify-center p-2 pt-4"}>
                        <Link
                            href={route('book_edit', {book: book.id})}
                            className={"m-1"}
                        >
                            <SecondaryButton className={"w-full"}>
                                Editar informações desse livro
                            </SecondaryButton>
                        </Link>
                        <PrimaryButton
                            className={"m-1"}
                            onClick={unarchive}
                        >Desarquivar este livro
                        </PrimaryButton>
                        <DangerButton
                            className={"m-1"}
                            onClick={() => setOpenModalDelete(true)}
                        >Excluir livro permanentemente
                        </DangerButton>
                    </div>
                </div>
                <Modal show={openModalDelete} onClose={() => setOpenModalDelete(false)}>
                    <div className={"m-4"}>
                        <h2 className={"text-2xl"}>Tem certeza que deseja apagar permanentemente esté livro?</h2>
                        <div className={"flex justify-end"}>
                            <SecondaryButton
                                onClick={() => setOpenModalDelete(false)}
                                className={"mr-2"}
                            >Cancelar
                            </SecondaryButton>
                            <Link
                                href={route('book_delete', {book: book.id})}
                                method="delete"
                            >
                                <DangerButton>
                                    Deletar
                                </DangerButton>
                            </Link>
                        </div>
                    </div>
                </Modal>
            </Modal>
            <Modal show={openModalUnarchive} onClose={reloadPage}>
                <div>
                    <h2 className={"text-2xl"}>Livro desarquivado com sucesso!</h2>
                    <SecondaryButton
                        onClick={reloadPage}
                    >OK
                    </SecondaryButton>
                </div>
            </Modal>
        </>
    );
}

export default RenderBooksArchived;
