import React, {Component} from 'react';


class Map extends Component {
    state = {
        mapIsReady: false
    };

    componentDidMount() {
        const ApiKey = 'AIzaSyAHZp4Qborg4k0saTj2sddMhpl6y8nJdmg';
        const script = document.createElement( 'script' );
        script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
        script.async = true;
        script.defer = true;
        script.addEventListener( 'load', () => this.setState({ mapIsReady: true }) );
        document.body.appendChild(script);

        // исправить добавление лишних скриптов карты
        // const mapScript = document.getElementsByTagName( 'script' );
        //     [].filter.call(
        //         mapScript,
        //         ( script ) => script.src.indexOf( `key=${ApiKey}` ) >= 0
        //     )[ 0 ].remove();
        window.google = {};
    }

    componentDidUpdate() {
        const { gMap } = this.props;
        const toNum = gMap.split(',');
        const coordinates = toNum.map( item => +item );
        const location = { lat: coordinates[0], lng: coordinates[1] };

        if (this.state.mapIsReady) {
            this.map = new window.google.maps.Map(document.getElementById('googleMap'), {
                center: location,
                zoom: 17,
                mapTypeId: 'roadmap'
            });

            this.map = new window.google.maps.Marker({
                position: location,
                map: this.map
            });
        }
    }

    render() {
        return (
            <div>
                <div id='googleMap' style={{ maxWidth:900, height:500 }} />
            </div>
        )
    }
}

export default Map;