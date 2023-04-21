import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "마음 처방전",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div>
          <h1 className="title">마음 처방전</h1>
          <p className="title-sub"> 사이트 명을 중간에 할지 왼쪽에 할지</p>
        </div> */}
        <div className="wrapper">
          <Link href="/" className="home">
            마음 처방전
          </Link>

          <ul className="menu">
            <Link href="/publicboard">
              <li>공유게시판</li>
            </Link>
            <Link href="/recommendedboard">
              <li>추천게시판</li>
            </Link>

            <Link href="/mypage">
              <li>마이페이지</li>
            </Link>
          </ul>
        </div>
        {/* page.js들어가는 부분이 아래 children */}
        {children}
      </body>
    </html>
  );
}
