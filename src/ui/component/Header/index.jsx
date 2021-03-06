// import "./index.less";

const Header = ({children = null, extra = null}) => {
        return (
            <div className="pl8 pr8 bsbb df aic g_hr bc:fff">
                <div className="f1 c:s fs12 lh16">
                    {children}
                </div>
                {extra ? <div>{extra}</div> : null}
            </div>
        )
    }
;
export default Header;
