import React, { useState, useEffect } from "react";
import "./Articles.css";
import loadArticles from "../../Utils/loadArticles";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (article) => {
    setModalContent(article);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const loadedArticles = await loadArticles();
      setArticles(loadedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <section id="nav-articles-target" className="articles">
      <div className="articles__header">
        <h2 className="articles__title">Stay Infomed</h2>
        <p className="articles__subtitle">Emergency Tips and Articles</p>
      </div>

      <ul className="articles__cards-container">
        {articles.map((article, index) => (
          <li
            key={index}
            className="articles__card"
            onClick={() => openModal(article)}
          >
            <div className="articles__container">
              <h3 className="articles__title">{article.title}</h3>
              <p className="articles__content">
                {article.content.length > 100
                  ? `${article.content.substring(0, 100)}...`
                  : article.content}
              </p>
            </div>
            {/* <div className="articles__img"></div> */}
          </li>
        ))}
      </ul>
      {modalContent && (
        <div className="modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{modalContent.title}</h2>

            <div className="modal-text">{modalContent.content}</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Articles;
