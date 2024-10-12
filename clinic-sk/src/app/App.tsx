import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImageBackdrop, PageWrapper } from "./styles";
import { Home } from "../pages/home";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <ImageBackdrop src="src/assets/images/stetoscope.jpg" />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
