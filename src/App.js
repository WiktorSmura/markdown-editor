import styles from "./App.module.scss";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useAppContext } from "./context/AppContext";
import Header from "./components/Header/Header";
import Textarea from "./components/Textarea/Textarea";
import PreviewBox from "./components/PreviewBox/PreviewBox";

function App() {
  const { showPreview, markdown, setMarkdown } = useAppContext();

  return (
    <div className="App" data-testid="app">
      <Header title="markdown" />
      <div className={styles.editorBox}>
        <Textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></Textarea>
        {showPreview && (
          <PreviewBox
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked.parse(markdown)),
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
