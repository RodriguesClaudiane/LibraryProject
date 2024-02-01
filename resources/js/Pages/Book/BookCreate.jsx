import {Head, useForm} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";

function BookCreate({auth}) {
    const form = useForm({
        title: '',
        cover: '',
        author: '',
        rating: '',
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
    function handlerInput(e) {
        form.setData(e.target.name, e.target.value);
    }
    function handlerInputFile(e) {
        form.setData(e.target.name, e.target.files[0]);
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
                                <form>
                                    <div>
                                        <InputLabel value="Titulo"/>
                                        <TextInput
                                            name="title"
                                            onChange={handlerInput}
                                        />
                                        <InputError message={form.errors.title}/>
                                    </div>
                                    <div className={"mt-4"}>
                                        <InputLabel value="Capa"/>
                                        <TextInput
                                            name="cover"
                                            type="file"
                                            accept="image/*"
                                            onChange={handlerInputFile}
                                        />
                                        <InputError message={form.errors.cover}/>
                                    </div>
                                    <div className={"mt-4"}>
                                        <InputLabel value="Autor"/>
                                        <TextInput
                                            name="author"
                                            onChange={handlerInput}
                                        />
                                        <InputError message={form.errors.author}/>
                                    </div>
                                    <div className={"mt-4"}>
                                        <InputLabel value="Sinopse"/>
                                        <textarea
                                            name="synopsis"
                                            onChange={handlerInput}
                                        />
                                        <InputError message={form.errors.synopsis}/>
                                    </div>
                                    <div className={"mt-4"}>
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
