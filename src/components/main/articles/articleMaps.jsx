import React, {Component} from 'react';


class Map extends Component {
    state = {
        mapIsReady: false,
    };

    componentDidMount() {
        const ApiKey = 'AIzaSyAHZp4Qborg4k0saTj2sddMhpl6y8nJdmg';
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => this.setState({ mapIsReady: true }) );
        document.body.appendChild(script);
    }

    componentDidUpdate() {
        const {gMap} = this.props;
        const toNum = gMap.split(',');
        const coordinates = toNum.map( item => +item );

        if (this.state.mapIsReady) {

            this.map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: coordinates[0], lng: coordinates[1] },
                zoom: 17,
                mapTypeId: 'roadmap',
            });

            const marker = new window.google.maps.Marker({
                position: { lat: coordinates[0], lng: coordinates[1] },
                map: this.map
            });


        }
    }

    render() {
        return (
            <div>
                <div id='map' style={{ maxWidth:900, height:500 }} />
            </div>
        )
    }
}

export default Map;