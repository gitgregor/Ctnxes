import React from 'react';
import './sortingTable.styles.css';

// const date = Date.now();
// console.log(date)

// const dateUTC = new Date.UTC(2012, 11, 20, 3, 0, 0).toUTCString();
// console.log(dateUTC)

// const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
// const utcDate1Format = utcDate1.toUTCString();
// console.log(utcDate1Format)

// request a weekday along with a long date

let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(date.toLocaleString('pl-PL', options));
// → "Donnerstag, 20. Dezember 2012"



const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <caption>Products</caption>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}
                        >
                            Name
            </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('price')}
                            className={getClassNamesFor('price')}
                        >
                            Price
            </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('stock')}
                            className={getClassNamesFor('stock')}
                        >
                            In Stock
            </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('date')}
                            className={getClassNamesFor('date')}
                        >
                            Date
            </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default function App() {
    return (
        <div className="App">
            <ProductTable
                products={[
                    { id: 1, name: 'Cheese', price: 4.9, stock: 20, date: '01 - 09 - 2020' },
                    { id: 2, name: 'Milk', price: 1.9, stock: 32, date: '02 - 09 - 2020' },
                    { id: 3, name: 'Yoghurt', price: 2.4, stock: 12, date: '03 - 09 - 2020' },
                    { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9, date: '04 - 09 - 2020' },
                    { id: 5, name: 'Butter', price: 0.9, stock: 99, date: '05 - 09 - 2020' },
                    { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86, date: '06 - 09 - 2020' },
                    { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12, date: '07 - 09 - 2020' },
                ]}
            />
        </div>
    );
}
