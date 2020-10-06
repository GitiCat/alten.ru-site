(yandex_maps = () => {
    if (window.location.pathname == '/') {
        const loadScriptTimeout = 1500

        const
            apikey = '1b71717f-f1d4-48b3-8d45-e635b8d38ab8',
            mode = 'production',
            lang = 'ru_RU',
            load = '',
            onload = 'yandex_maps.onloadHandle'

        const script = document.createElement('script')

        setTimeout(() => {
            script.async = true
            script.src = `https://api-maps.yandex.ru/2.1?apikey=${apikey}&mode=${mode}&load=${load}&lang=${lang}&onload=${onload}`

            document.body.appendChild(script)

        }, loadScriptTimeout)
    }

    yandex_maps.onloadHandle = (ymaps) => {
        ymaps.modules.require(['Map'], (Map) => {
            ymaps.Map = Map

            var map = new ymaps.Map('ymap', {
                center: [55.726272, 38.206732],
                controls: [],
                zoom: 15.5
            })

            ymaps.destroy = () => {
                document.body.removeChild(script)
                map.destroy()
            }

            ymaps.modules.require(['control.RoutePanel'], (RoutePanel) => {
                ymaps.RoutePanel = RoutePanel

                var routeControl = new ymaps.RoutePanel()

                routeControl.routePanel.options.set({
                    allowSwitch: false,
                    reverseGeocoding: true,
                    types: {
                        masstransit: true,
                        pedestrian: true,
                        taxi: true
                    }
                })

                routeControl.routePanel.state.set({
                    tyle: "masstransit",
                    fromEnabled: true,
                    from: "Электроугли, Центральная 114",
                    toEnabled: false,
                    to: "Электроугли, Центральная 59"
                })

                map.controls.add(routeControl)
            })
        })
    }
})()