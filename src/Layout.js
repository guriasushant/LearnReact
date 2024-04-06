import { useState } from "react";
import Home from "./Home";
import LearnCss from "./learncss";
import StudentRegistration from "./StudentRegistration";


function Layout() {

  const [activePage, setActivePage] = useState("Home");
  return (
    <div className="page">
      <div className="header">Layout Section</div>
      <div className="body">
        <div className="box1">
          <div
            className={
              activePage === "Home" ? "box-content active" : "box-content"
            }
            onClick={() => setActivePage("Home")}
          >
            Home{" "}
          </div>
          <div
            className={
              activePage === "StudentReg" ? "box-content active" : "box-content"
            }
            onClick={() => setActivePage("StudentReg")}
          >
            StudentReg
          </div>
          <div
            className={
              activePage === "LearnCss" ? "box-content active" : "box-content"
            }
            onClick={() => setActivePage("LearnCss")}
          >
            Learn Css
          </div>
        </div>
        <div className="box2">
          {activePage === "Home" && <Home />}
          {activePage === "StudentReg" && <StudentRegistration />}
          {activePage === "LearnCss" && <LearnCss />}
        </div>
      </div>
    </div>
  );
}
export default Layout;
