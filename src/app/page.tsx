import TypewriterText from "./Components/TypeWritterEffect/TypeWritterText";

export default function Home() {
  return (
    <section className="min-h-screen text-sand-400 px-6 py-24 flex flex-col items-center justify-center font-sans">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-bold text-berry-500 font-heading">
          Simón Gómez Arango
        </h1>
          <TypewriterText speed={60}>
            <p className="text-lg sm:text-xl leading-relaxed">

            Fullstack developer crafting modern web experiences with a love for
            clean code, rich design, and a touch of nature.
            </p>
          </TypewriterText>
      </div>
    </section>
  );
}
