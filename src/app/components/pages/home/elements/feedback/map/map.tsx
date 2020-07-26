import React from 'react';
import { YMaps, Map, RoutePanel, FullscreenControl } from 'react-yandex-maps';

const routePanelSettings = (ref: any) => {
    if(ref) {
        ref.routePanel.state.set({
            toEnabled: false,
            to: 'Россия, Московская область, Богородский городской округ, Электроугли, Центральная улица, 59',
            fromEnabled: true,
            from: 'Россия, Московская область, Богородский городской округ, Электроугли, Центральная улица, 114',
            type: 'auto'
        });
    }
}

const YandexMapBlock: React.FunctionComponent = () => {
    return (
        <YMaps query={{
            apikey: "1b71717f-f1d4-48b3-8d45-e635b8d38ab8",
            lang: "ru_RU",
            mode: "release"
        }}>
            <Map
                defaultState={{ center: [55.724984, 38.206782], zoom: 10 }}
                width='100%'
                height='100%'>
                <RoutePanel instanceRef={(ref: any) => routePanelSettings(ref)}/>
                <FullscreenControl/>
            </Map>
        </YMaps>
    )
}

export default YandexMapBlock;