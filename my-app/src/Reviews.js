import React from 'react';
import './App.css';


function Reviews() {
    // mempersiapkan data dumy JSON
    const users = [
        {
            "id": 1,
            "name": "Agung Prabowo",
            "image": "https://bangprabs.github.io/img/agungz.JPG",
            "review": "Magna ea ut occaecat nulla sit consectetur incididunt fugiat sunt consectetur cupidatat laborum reprehenderit."
        },
        {
            "id": 2,
            "name": "Rafi Raihan",
            "image": "https://bangprabs.github.io/img/agungz.JPG",
            "review": "Magna ea ut occaecat nulla sit consectetur incididunt fugiat sunt consectetur cupidatat laborum reprehenderit."
        },
        {
            "id": 3,
            "name": "Zulfikar Afifi",
            "image": "https://bangprabs.github.io/img/agungz.JPG",
            "review": "Magna ea ut occaecat nulla sit consectetur incididunt fugiat sunt consectetur cupidatat laborum reprehenderit."
        }
    ];
    const listReview = users.map((itemReview) =>
        <div className="Item">
            <img src={itemReview.image} />
            <div className="User">
                <h3>{itemReview.name}</h3>
                <p>{itemReview.review}</p>
            </div>
        </div>
    );
    return (
        <div className="Review-box">
            <h2>Review</h2>
            {listReview}
        </div>
    );
}

export default Reviews;