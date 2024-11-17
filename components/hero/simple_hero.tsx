import "./hero.css";

export default function SimpleHero({ title }: { title: string }) {
  return (
    <section className="hero">
      <div className="hero-body container is-max-widescreen">
        <h2 className="humanimal-title title is-2">
          <div>{title}</div>
        </h2>
      </div>
    </section>
  );
}
