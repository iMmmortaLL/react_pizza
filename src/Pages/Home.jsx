import React from "react";


import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PlaceHolder from "../components/PizzaBlock/PlaceHolder";
import PizzaBlock from "../components/PizzaBlock";


const Home = () => {
    const [items,setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true)


    React.useEffect(() => {
        fetch("https://62ac642abd0e5d29af21d70c.mockapi.io/items")
            .then((res) => res.json())
            .then((arr)=> {
                setItems(arr);
                setIsLoading(false);
            });

    },[]);

    return(
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Всі піцци</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map (() =><PlaceHolder/>):
                        items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
        </>
    )
}

export default Home;