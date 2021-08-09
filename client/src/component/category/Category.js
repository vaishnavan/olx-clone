import React from 'react';
import './category.css';

function Category() {
    return (
        <div className="category-main">
            <div className="container category-item">
                <div className="category-dropdown">
                    <div className="category-head">
                        <span>ALL CATEGORIES</span>
                    </div>
                    <div className="category-angle">
                        <span><i className="fa fa-angle-down"></i></span>
                    </div>
                </div>
                <div className="category-list-data">
                    <ul>
                        <li>Cars</li>
                        <li>Motorcycles</li>
                        <li>Mobile Phones</li>
                        <li>For Sale: House & Apartments</li>
                        <li>Scooters</li>
                        <li>Commercial & Other Vehicles</li>
                        <li>For Rent: Houses & Apartments</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category
