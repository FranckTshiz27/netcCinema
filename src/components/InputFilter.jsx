import { unstable_renderSubtreeIntoContainer } from "react-dom";

function InputFilter() {
  return (
    <div className="ipFilter">
      <input
        className="ipFilter__input"
        type="search"
        placeholder="Rechercher un film ou une série par son titre ici!"
      />
      <button type="submit" value="Rechercher">
        Rechercher
      </button>
    </div>
  );
}

export default InputFilter;
