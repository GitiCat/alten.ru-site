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
    const logoUrl = getImageUrl("/images/logos");
    const licenceUrl = getImageUrl("/images/licences");

    return (
        <div className="container licences">
            <div className="gerb-bg"></div>
            <div className="big-title light">
                <h2>Лицензии</h2>
                <span>Документы, подтверждающие нашу деятельность</span>
            </div>
            <div className="content">
                <div className="block">
                    <div className="context">
                        <div className="logos">
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
                                className="light-link-1"
                            >
                                Перейти
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="block">
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
        </div>
    );
};

export default LicencesElement;
