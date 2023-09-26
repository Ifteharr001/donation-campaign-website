import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";

const Home = () => {
    const categorys = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Category categorys = {categorys}></Category>
        </div>
    );
};

export default Home;