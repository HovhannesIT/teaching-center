import "./scss/main.scss";
import "../components/AppBar";
import { AppBar } from "../components/AppBar";
export default function Home() {
  return (
    <main>
      <AppBar />
      <div className="lending">
        <p className="title">PLATFORM PROVIDES PLACE TO LEARN OR TEACH IN WWW</p>
        <ul className="professions">
          <h1>PROFESSIONS</h1>
          <ul>
            <li>Javascript Developer</li>
            <li>PHP Developer</li>
            <li>Web Developer</li>
            <li>Graphic Designer</li>
            <li>...</li>
            {/* <li>Business Analyst</li>
            <li>Content Writer</li>
            <li>Android Developer</li>
            <li>Swift Developer</li>
            <li>Go Developer</li>
            <li>C# Developer</li> */}
          </ul>
        </ul>
        <ul className="couches">
          <h1>COUCHES</h1>
          <ul>
          <li>Coming Soon</li>
          </ul>
          
        </ul>
      </div>
    </main>
  );
}
