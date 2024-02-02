function RenderBooks({book}) {
    return (
        <div className={"border border-2 w-60 border-gray-500"}>
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
        </div>
    );
}

export default RenderBooks;
