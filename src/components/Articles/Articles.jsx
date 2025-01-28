import Carousel from "../Carousel/Carousel";
import "./Articles.css";

function Articles() {
  return (
    <section id="nav-articles-target" className="articles">
      <div className="articles__header">
        <h2 className="articles__title">Stay Infomed</h2>
        <p className="articles__subtitle">
          The latest emergency alerts in your area
        </p>
      </div>
      {/* <Carousel slideCount={3}>
        <div className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </div>
        <div className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </div>
        <div className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </div>
        <div className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </div>
        <div className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </div>
      </Carousel> */}
      <ul className="articles__cards-container">
        <li className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </li>
        <li className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </li>
        <li className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </li>
        <li className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </li>
        <li className="articles__card">
          <h3 className="atricle__title">Article Title</h3>
          <p className="article__content">Article content.</p>
        </li>
      </ul>
    </section>
  );
}

export default Articles;
