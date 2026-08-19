import { useState } from "react";

// 헤더 Component
const Header = () => {
    const [activeHead, setActiveHead] = useState("");

    const onClickHead = (e : React.MouseEvent<HTMLAnchorElement>) => {
        setActiveHead(e.currentTarget.innerText)
    };

    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
                <a className={`${activeHead} `} onClick={onClickHead}>사업검색</a>
                <a className="" onClick={onClickHead}>마이페이지</a>
            </nav>
        </header>
    )
}

export default Header;