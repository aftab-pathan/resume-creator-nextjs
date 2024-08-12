
import MainContent from "./MainContent";
import StepsContent from "./StepsContent";

function HomePage() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <MainContent />
      <StepsContent />
    </main>
  );
}

export default HomePage;
