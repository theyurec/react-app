import './index.css'

const Modal = ({ post, onCloseModal }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseButtonClick = () => {
    onCloseModal();
  };

  const handleOverlayClick = () => {
    onCloseModal();
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
    <div className="modal__content" onClick={handleModalClick}>
      <h2 className='post__title'>{post.title}</h2>
      <p className='post__text'>{post.text}</p>
      <div className="close" onClick={handleCloseButtonClick}>
        close
      </div>
    </div>
  </div>
  );
};


  export default Modal;