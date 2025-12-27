import Accordion from "./components/accordion";

function App() {
  return (
    <>
      <main className="flex flex-col  relative bg-amber-50/50 items-center justify-center pb-20 pt-5 min-h-screen">
        <Accordion />
        <footer className="absolute bottom-0 p-5">
          Made with 💖 By{" "}
          <a href="https://mustaphabouddahr.netlify.app">Mustapha Bouddahr</a>
        </footer>
      </main>
    </>
  );
}

export default App;
