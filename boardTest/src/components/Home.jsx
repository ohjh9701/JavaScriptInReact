import Header from "./Header";
import BoardList from "./BoardList";
import { BoardStateContext } from '../App'
import { useContext } from "react";

const Home = ()=>{
    const state = useContext(BoardStateContext);
    return <>
        <BoardList state={state} />
    </>
}
export default Home;