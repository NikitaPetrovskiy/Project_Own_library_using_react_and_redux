import React from 'react';
import { connect } from "react-redux";
import { BookStatuses } from "../Store";
import { deleteBookAC } from "../Store";
import { Link } from "react-router-dom";

const statusToText = {
    [BookStatuses.NONE]: '',
    [BookStatuses.TO_READ]: 'Хочу прочитать',
    [BookStatuses.READING]: 'Читаю',
    [BookStatuses.READ]: 'Прочитал'
};

export const OwnLibraryTable = ({books, onDelete}) => {
    return (
        <>
            <Link to="/books/new">Добавить книгу</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Автор</th>
                        <th>Название</th>
                        <th>Рейтинг</th>
                        <th>Статус</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.author}</td>
                        <td>{book.title}</td>
                        <td>{book.rating}</td>
                        <td>{statusToText[book.status]}</td>
                        <td>
                            <button onClick={() => onDelete(book.id)}>Удалить</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

const mapStateToProp = (state) => {
    return {
        books: state.books
    }
};
const mapDispatchToProp = (dispatch) => {
    return {
        onDelete: id => dispatch(deleteBookAC(id))
    };
};

export const ConnectedOwnLibrary = connect(mapStateToProp, mapDispatchToProp)(OwnLibraryTable);
