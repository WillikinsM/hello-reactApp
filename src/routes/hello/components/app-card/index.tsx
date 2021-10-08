import "./index.scss";
// import scrollSmooth from "./scrollSmth";

interface Props{
  title: string;
  description: string;
}

const AppCard = ({title, description}: Props)=>{
  // const scrollSmooth = (info)=>{
  //   var offset = document.getElementById(info).offsetTop;

  //   window.scroll({
  //     top: offset - 100,
  //     behavior: "smooth",
  //   });
  // }
  return (<span
    className="card-post img-effect1"
    // onClick={() => scrollSmooth(name[0])}
  >
    <div className="col">
      <div className="card h-100">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  </span>)
  // let name = ["html-info", "css-info", "javascript-info"];
  // return (
  //   <section className="cards">
  //     <div className="row row-cols-1 row-cols-md-3 g-4">
  //       <span
  //         className="card-post img-effect1"
  //         onClick={() => scrollSmooth(name[0])}
  //       >
  //         <div className="col">
  //           <div className="card h-100">
  //             <img
  //               src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
  //               className="card-img-top"
  //               alt="..."
  //             />
  //             <div className="card-body">
  //               <h5 className="card-title">
  //                 The HyperText Markup Language(HTML)
  //               </h5>
  //               <p className="card-text">
  //                 The HyperText Markup Language, or HTML is the standard markup
  //                 language for documents designed to be displayed in a web
  //                 browser also is a cornerstone technology of the World Wide
  //                 Web.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </span>

  //       <span
  //         className="card-post img-effect1"
  //         onClick={() => scrollSmooth(name[1])}
  //       >
  //         <div className="col">
  //           <div className="card h-100">
  //             <img
  //               src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
  //               className="card-img-top"
  //               alt="..."
  //             />
  //             <div className="card-body">
  //               <h5 className="card-title">Cascading Style Sheets (CSS)</h5>
  //               <p className="card-text">
  //                 Cascading Style Sheets (CSS) is a style sheet language used
  //                 for describing the presentation of a document written in a
  //                 markup language such as HTML also is a cornerstone technology
  //                 of the World Wide Web, alongside HTML and JavaScript.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </span>

  //       <span
  //         className="card-post img-effect1"
  //         onClick={() => scrollSmooth(name[2])}
  //       >
  //         <div className="col">
  //           <div className="card h-100">
  //             <img
  //               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
  //               className="card-img-top"
  //               alt="..."
  //             />
  //             <div className="card-body">
  //               <h5 className="card-title">JavaScript</h5>
  //               <p className="card-text">
  //                 JavaScript, often abbreviated as JS, is a programming language
  //                 that conforms to the ECMAScript specification. JavaScript is
  //                 high-level, often just-in-time compiled, and multi-paradigm.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </span>
  //     </div>
  //   </section>
  // );
}

export default AppCard;
