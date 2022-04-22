import styles from "./App.module.scss";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Header from "./components/Header/Header";

function App() {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");
  const safeHTML = DOMPurify.sanitize(marked.parse(markdown));

  return (
    <div className="App">
      <Header title="markdown" />
      <h1>Markdown editor</h1>
      <textarea
        name="markdown-editor"
        cols="30"
        rows="10"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <div
        className={styles.wrap}
        dangerouslySetInnerHTML={{ __html: safeHTML }}
      ></div>
    </div>
  );
}

export default App;
