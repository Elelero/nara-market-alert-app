// 컴포넌트, 상태, UI 로직을 정의하는 "핵심엔진"
import React from "react";

// 컴포넌트를 실제 웹 브라우저 화면(HTML DOM)에 그려넣는 "출력 담당"
/** 왜 /client가 붙는가?
 *  => 서버에서 렌더링하는 방식과 브라우저에서 렌더링하는 방식이 api가 분리되면서,
 *  => "브라우저(client)에서 렌더링할 때는 이 경로를 써라"는 의미로 생김
 */
import ReactDOM from "react-dom/client";

// APP Component
import App from './App'

// CSS
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)