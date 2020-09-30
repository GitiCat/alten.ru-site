import React from "react";
import { Link } from "react-router-dom";
import * as CSS from "csstype";

const getImageUrl = (path: string) => {
    return (name: string) => {
        return `${path}/${name}`;
    };
};

const getStyle = (imageUrl: string) => {
    const styleProps: CSS.Properties = {
        backgroundImage: `url(${imageUrl})`,
    };

    return styleProps;
};

const LicencesElement: React.FunctionComponent = () => {
    const logoUrl = getImageUrl("/static/assepts/images/logos");
    const licenceUrl = getImageUrl("/static/assepts/images/licences");

    return (
        <section className="container licences flex flex-dir-col">
            <div className="gerb-bg" style={{backgroundImage: `url(static/assepts/images/gerb_logo.png)`}}></div>
            <header className="light">
                <h2>Лицензии</h2>
                <p>Документы, подтверждающие нашу деятельность</p>
            </header>
            <div className="content flex">
                <div className="flex-block-1">
                    <div className="context flex">
                        <div className="logos flex flex-dir-col">
                            <div
                                className="logo"
                                style={getStyle(logoUrl("ross_logo.png"))}
                            />
                            <div
                                className="logo"
                                style={getStyle(logoUrl("fsb-logo.png"))}
                            />
                            <div
                                className="logo"
                                style={getStyle(logoUrl("prom_torg_logo.png"))}
                            />
                        </div>
                        <div className="text">
                            <p>
                                Мы имеем все необходимые документы, лицензии и
                                сертификаты от ФСБ, РОСКОСМОС, МИНПРОМТОРГ,
                                разрешающие нашу деятельность.
                            </p>
                            <Link
                                to="/company/licences"
                                className="_outlined light"
                            >
                                Перейти
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-block-2">
                    <div className="licences-images">
                        <div
                            className="licence-image image-1"
                            style={getStyle(licenceUrl("lic_1.png"))}
                        ></div>
                        <div
                            className="licence-image image-2"
                            style={getStyle(licenceUrl("lic_2.png"))}
                        ></div>
                        <div
                            className="licence-image image-3"
                            style={getStyle(licenceUrl("lic_3.png"))}
                        ></div>
                        <div
                            className="licence-image image-4"
                            style={getStyle(licenceUrl("lic_4.png"))}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LicencesElement;
