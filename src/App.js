import styles from "./App.module.scss";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useLocalStorage } from "./utils/hooks/useLocalStorage";
import { useAppContext } from "./context/AppContext";
import Header from "./components/Header/Header";
import Textarea from "./components/Textarea/Textarea";
import PreviewBox from "./components/PreviewBox/PreviewBox";

function App() {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");
  const safeHTML = DOMPurify.sanitize(marked.parse(markdown));
  const { showPreview } = useAppContext();

  return (
    <div className="App">
      <Header title="markdown" />
      <div className={styles.editorBox}>
        <Textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></Textarea>
        {showPreview && (
          <PreviewBox dangerouslySetInnerHTML={{ __html: safeHTML }} />
        )}
      </div>
    </div>
  );
}

export default App;
