import lupa from "../assets/img/lupa.png";
import logo from "../assets/img/logo.png";

export const Header = ({ value, setvalue }) => {
    const userInputValue = (e) => {
        const getInputValue = e.target.value.toLocaleLowerCase();
        setvalue(getInputValue);
    };

    return (
        <div className="c-header" role="banner">
            <div>
                <img
                    src={logo}
                    alt="logo icon"
                    className="c-header__logo"
                    data-cy="logo"
                />
            </div>
            <div className="c-header__input-search" data-cy="inputsearch">
                <img
                    src={lupa}
                    alt="magnifier icon"
                    className="c-header__icon"
                />
                <input
                    type="search"
                    value={value}
                    tabIndex={0}
                    onChange={userInputValue}
                    className="c-header__input"
                    placeholder="You're looking for something?"
                ></input>
            </div>
        </div>
    );
};
