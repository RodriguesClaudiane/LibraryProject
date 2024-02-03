import {Head, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";

function BookCreate({auth}) {
    const form = useForm({
        title: '',
        cover: '',
        author: '',
        synopsis: '',
        value: '',
        number_of_pages: '',
        weight: '',
        edition: '',
        genre: '',
        stock_quantity: '',
        ISBN: '',
        format: '',
        language: '',
        add_info: ''
    });
    const [showImg, setShowImg] = useState(null);
    function handlerInput(e) {
        form.setData(e.target.name, e.target.value);
    }
    function handlerInputFile(e) {
        form.setData(e.target.name, e.target.files[0]);
        setShowImg(URL.createObjectURL(e.target.files[0]));
    }
    function submit(e) {
        e.preventDefault();
        form.post(route('book_store'), {
            onError: (e) => console.log('error:',e),
        });
    }

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Adicionar Livro</h2>}
            >
                <Head title="Create book" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <form onSubmit={submit}>
                                    <div className={"grid grid-rows-1 grid-flow-col-dense mt-4"}>
                                        <div>
                                            <InputLabel value="Titulo"/>
                                            <TextInput
                                                name="title"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.title}/>
                                        </div>
                                        <div>
                                            <InputLabel value="Autor"/>
                                            <TextInput
                                                name="author"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.author}/>
                                        </div>
                                    </div>

                                    <div className={"mt-4 flex"}>
                                        <div>
                                            <InputLabel value="Capa"/>
                                            <TextInput
                                                name="cover"
                                                type="file"
                                                accept="image/*"
                                                onChange={handlerInputFile}
                                            />
                                            <InputError message={form.errors.cover}/>
                                        </div>
                                        <div className="w-32 ml-1">
                                            {showImg ? <img src={showImg} alt="Imagem selecionada" /> : ''}
                                        </div>
                                    </div>

                                    <div className={"mt-4"}>
                                        <InputLabel value="Sinopse"/>
                                        <textarea
                                            name="synopsis"
                                            onChange={handlerInput}
                                            rows={3}
                                            className={"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"}
                                        />
                                        <InputError message={form.errors.synopsis}/>
                                    </div>

                                    <div className={"grid grid-rows-1 grid-flow-col-dense mt-4"}>
                                        <div>
                                            <InputLabel value="Valor"/>
                                            <TextInput
                                                name="value"
                                                type="number"
                                                step="0.01"
                                                placeholder="00,00"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.value}/>
                                        </div>
                                        <div>
                                            <InputLabel value="Numero de paginas"/>
                                            <TextInput
                                                name="number_of_pages"
                                                type="number"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.number_of_pages}/>
                                        </div>
                                        <div>
                                            <InputLabel value="Peso do livro"/>
                                            <TextInput
                                                name="weight"
                                                type="number"
                                                placeholder="Coloque o peso em KG"
                                                step="0.01"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.weight}/>
                                        </div>
                                        <div>
                                            <InputLabel value="Quantidade em estoque"/>
                                            <TextInput
                                                name="stock_quantity"
                                                type="number"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.stock_quantity}/>
                                        </div>
                                    </div>
                                    <div className={"grid grid-rows-1 grid-flow-col-dense mt-4"}>
                                        <div>
                                            <InputLabel value="Edição"/>
                                            <TextInput
                                                name="edition"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.edition}/>
                                        </div>
                                        <div>
                                            <InputLabel value="Genero"/>
                                            <TextInput
                                                name="genre"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.genre}/>
                                        </div>
                                        <div>
                                            <InputLabel value="Formato do livro"/>
                                            <TextInput
                                                name="format"
                                                onChange={handlerInput}
                                                placeholder="Exemplo: capa dura..."
                                            />
                                            <InputError message={form.errors.format}/>
                                        </div>
                                        <div>
                                            <InputLabel value="Idioma"/>
                                            <TextInput
                                                name="language"
                                                onChange={handlerInput}
                                            />
                                            <InputError message={form.errors.language}/>
                                        </div>
                                    </div>
                                    <div className={"mt-4"}>
                                        <InputLabel value="ISBN (Padrão Internacional de Numeração de Livro)"/>
                                        <TextInput
                                            name="ISBN"
                                            onChange={handlerInput}
                                        />
                                        <InputError message={form.errors.ISBN}/>
                                    </div>

                                    <div className={"mt-4"}>
                                        <InputLabel value="Outras informações (opcional)"/>
                                        <textarea
                                            name="add_info"
                                            onChange={handlerInput}
                                            rows={3}
                                            className={"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"}
                                        />
                                        <InputError message={form.errors.add_info}/>
                                    </div>
                                    <PrimaryButton className={"mt-4"} type="submit">Cadastra livro</PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default BookCreate;
