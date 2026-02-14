import Header from "./Header";
import BoardList from "./BoardList";
import { BoardStateContext } from '../App'
import { useContext, useState } from "react";

const Home = ()=>{
    const state = useContext(BoardStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e)=>{
        setSearch(e.target.value)
    }

    const getFilteredData = ()=>{
        if(search === "") {
            return state;
        } else {
           return state.filter((item) => {
        // 데이터가 없는 경우를 대비한 안전장치
        const title = item.title ? String(item.title).toLowerCase() : "";
        const writer = item.writer ? String(item.writer).toLowerCase() : "";
        const targetSearch = search.toLowerCase();

        return title.includes(targetSearch) || writer.includes(targetSearch);
    });
        }
    }

    const filteredData = getFilteredData();


    return <>
       <Header />
            {/* 검색창 섹션 */}
            <div className="search-section">
                <input 
                    className="search-input"
                    value={search}
                    onChange={onChangeSearch}
                    placeholder="검색어를 입력하세요 (제목, 작성자)" 
                />
            </div>
            <BoardList state={filteredData} />
    </>
}
export default Home;