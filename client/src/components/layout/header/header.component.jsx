import lupa from "../../../assets/img/lupa.png";
import logo from "../../../assets/img/logo.png";

export const Header = () => {
    return (
        <div className="c-header" role="banner">
            <div>
                <img src={logo} alt="logo icon" className="c-header__logo" />
            </div>
            <div className="c-header__input-search">
                <img
                    src={lupa}
                    alt="magnifier icon"
                    className="c-header__icon"
                />
                <input
                    className="c-header__input"
                    placeholder="You're looking for something?"
                ></input>
            </div>
        </div>
    );
};
