/***********************************************************************
 * @description: 사업검색 페이지
 **********************************************************************/

const SearchBsns = () => {
    return(
        <div>
            <div className="px-3 py-3">
                <h1 className="font-bold text-[24px] mb-1.5">사업 검색</h1>
                <span className="text-sm" style={{color:"#6b6b6bff"}}>발주계획부터 개찰결과까지 하나의 흐름으로 검색합니다.</span>
            </div>
            <div className="border rounded-[12px] bg-white px-3 py-3">조회 조건</div>
            <div className="px-3 py-3">검색 결과</div>
        </div>
    );
};

export default SearchBsns;