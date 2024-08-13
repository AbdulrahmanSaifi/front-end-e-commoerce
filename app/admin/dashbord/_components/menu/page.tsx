import React from "react";
import './style.scss';
import Link from "next/link";

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <div className="menu__header">
                <h1 className="menu__text_header">Dash<span>Bord</span></h1>
            </div>
            <div className="menu__grup_elements">
                <Link href="./dashbord/overviwe">Overviwes</Link>
                <Link href="./dashbord/products">Products</Link>
                <Link href="./dashbord/orderlist">Order List</Link>
                <Link href="./dashbord/productstock">Products Stock</Link>
            </div>
            <span className="menu__border_line" />
        </div>
    );
}

export default Menu;
