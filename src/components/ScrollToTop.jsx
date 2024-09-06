import useScrollTop from "../hooks/useScroll";

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollTop();
  if (stick) {
    return (
      <button
        aria-label="Scroll to top"
        type="button"
        className="scroll-top"
        onClick={onClickHandler}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    );
  }
  return null;
};

export default ScrollToTop;
