import React from "react";


import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PlaceHolder from "../components/PizzaBlock/PlaceHolder";
import PizzaBlock from "../components/PizzaBlock";


const Home = () => {
    const [items,setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType,setSortType] = React.useState({
        name: "популярності",sort: "rating",
    });



    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://62ac642abd0e5d29af21d70c.mockapi.io/items?${
            categoryId > 0 ? `category=${categoryId}`: ""}&sortBy=${sortType.sort}&order=desc`,
        )
            .then((res) => res.json())
            .then((arr)=> {
                setItems(arr);
                setIsLoading(false);
            });
            window.scrollTo(0,0)
    },[categoryId, sortType]);

    console.log(categoryId,sortType)

    return(
        <>
            <div className="content__top">
                <Categories value = {categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                <Sort  value = {sortType} onChangeSort={(id) => setSortType(id)}/>
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