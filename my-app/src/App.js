import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="coming" category="SNEAKERS" name="Air Max 2" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto" >
      <img src="nikeimage.jpg" />
    </div >
  )
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  }
  else if (isDiscount == "coming") {
    return (
      <p>Diskon 50% Off</p>
    );
  }
  else {
    return (
      <p>Belum Ada Diskon</p>
    );
  }

}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak membuat gerah kaki"]
  const listBenefits = benefits.map((itemBenefits) =>
    <li>{itemBenefits}</li>
  );
  return (
    <div>
      <div className="Desc">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 12.000.000</p>
        <strong><CheckDiscount isDiscount={isDiscount} ></CheckDiscount></strong>
        <p className="Info">
          Cupidatat consectetur adipisicing officia esse. Consequat aliquip quis excepteur consectetur dolore in. Eu deserunt ea Lorem enim. Magna excepteur voluptate ea ullamco ad anim duis ea laboris magna sint eiusmod commodo eiusmod.
          Aliquip sunt amet cillum fugiat velit. Nulla nisi id nisi anim veniam esse aliqua duis nostrud aliqua ipsum qui. Elit velit labore laborum in adipisicing exercitation tempor duis. Ea proident incididunt ullamco elit velit ad ut commodo eiusmod sit magna duis nulla.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => AddCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div >
  );
}

function AddCart(e) {
  return console.log("Membeli Produk " + e)
}


export default App;
