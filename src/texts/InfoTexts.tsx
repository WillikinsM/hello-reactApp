import React from "react";
import "./InfoTexts.css";

function TextsInfo() {
  return (
    <section>
      <div id="html-info">
        <img
          className="img-logos"
          src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-8.png"
          alt="HTML5 default logo"
          height="130"
        />
        <p id="html" className="text-paragraph html-text">
          <strong>
            The HyperText Markup Language, or HTML is the standard markup
            language for documents designed to be displayed in a web browser. It
            can be assisted by technologies such as Cascading Style Sheets (CSS)
            and scripting languages such as JavaScript. <br />
            Web browsers receive HTML documents from a web server or from local
            storage and render the documents into multimedia web pages. HTML
            describes the structure of a web page semantically and originally
            included cues for the appearance of the document.
            <br />
            HTML can embed programs written in a scripting language such as
            JavaScript, which affects the behavior and content of web pages.
            Inclusion of CSS defines the look and layout of content.
            <br />
            The World Wide Web Consortium (W3C), former maintainer of the HTML
            and current maintainer of the CSS standards, has encouraged the use
            of CSS over explicit presentational HTML since 1997.
          </strong>
        </p>
      </div>

      <div id="css-info">
        <img
          className="img-logos"
          src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-6.png"
          alt="Default css logo"
          height="130"
        />
        <p id="css" className="text-paragraph cascade-text">
          <strong>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML.
            <br />
            CSS is a cornerstone technology of the World Wide Web, alongside
            HTML and JavaScript. CSS is designed to enable the separation of
            presentation and content, including layout, colors, and fonts.
            <br />
            This separation can improve content accessibility, provide more
            flexibility and control in the specification of presentation
            characteristics, enable multiple web pages to share formatting by
            specifying the relevant CSS in a separate .css file which reduces
            complexity and repetition in the structural content as well as
            enabling the .css file to be cached to improve the page load speed
            between the pages that share the file and its formatting.
            <br />
            In addition to HTML, other markup languages support the use of CSS
            including XHTML, plain XML, SVG, and XUL.
          </strong>
        </p>
      </div>

      <div id="javascript-info">
        <img
          className="img-logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
          alt="JavaScript default logo"
          height="130"
        />
        <p id="javascript" className="text-paragraph javascript-text">
          <strong>
            JavaScript, often abbreviated as JS, is a programming language that
            conforms to the ECMAScript specification. JavaScript is high-level,
            often just-in-time compiled, and multi-paradigm. It has
            curly-bracket syntax, dynamic typing, prototype-based
            object-orientation, and first-class functions. Alongside HTML and
            CSS, JavaScript is one of the core technologies of the World Wide
            Web.
            <br />
            Over 97% of websites use it client-side for web page behavior, often
            incorporating third-party libraries. Most web browsers have a
            dedicated JavaScript engine to execute the code on the user's
            device. As a multi-paradigm language, JavaScript supports
            event-driven, functional, and imperative programming styles.
            <br />
            It has application programming interfaces (APIs) for working with
            text, dates, regular expressions, standard data structures, and the
            Document Object Model (DOM). The ECMAScript standard does not
            include any input/output (I/O), such as networking, storage, or
            graphics facilities. In practice, the web browser or other runtime
            system provides JavaScript APIs for I/O.
            <br />
            JavaScript engines were originally used only in web browsers, but
            they are now core components of other software systems, most notably
            servers and a variety of applications. Although there are
            similarities between JavaScript and Java, including language name,
            syntax, and respective standard libraries, the two languages are
            distinct and differ greatly in design.
          </strong>
        </p>
      </div>
    </section>
  );
}

export default TextsInfo;
