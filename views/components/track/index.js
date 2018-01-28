import Avatar from 'antd/lib/avatar';
import Divider from 'antd/lib/divider';
import Rate from 'antd/lib/rate';
import Steps from 'antd/lib/steps';
import Button from 'antd/lib/button';
import { Gmaps, Marker } from 'react-gmaps';
import React, { Component } from 'react';
import Navbar from '../track-NavBar/';
import * as trackActions from '../../actions/track-actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
const Step = Steps.Step;

const coords = {
  lat: 31.50170 ,
  lng: 34.46684
};

const params = { v: '3.exp', key: 'AIzaSyAZWojwbNqzQJ9LcJF4GMFewsjyWHkn3Kc', language: 'ar' };

class Track extends Component {
  constructor() {
    super();
    this.onMapCreated = this.onMapCreated.bind(this);
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
  componentDidMount() {
    const { fetchProviderData } = this.props;
    fetchProviderData();
  }

  render() {
    const { provider } = this.props;

    return (
      <div className='track'>
        <Navbar />
        <div className= 'steps'>
          <Steps progressDot current={provider.currentStep}>
            <Step title= 'Closed' />
            <Step title= 'In progress' />
            <Step title='Completed' />
          </Steps>
        </div>
        <Divider />
        <div className = 'service_provider'>
          <div id='container-avatar'>
            <Avatar className= 'img' src='http://doubletreesfarm.co.uk/wp-content/uploads/2013/10/avatar-2.png' />
          </div>
          <div className='username'>
            <h3>{provider.username}</h3>
            <Rate allowHalf defaultValue={3.5} />
            <div className= 'buttons'>
              <Button className = 'button_1' type='primary'>Call Provider</Button>
              <Button className = 'button_2' type='primary'>End</Button>
            </div>
          </div>
        </div>
        <div className= 'mainMap'>
          <Gmaps
            className='gmaps'
            onClick={this.onClick}
            width={'412px'}
            height= {'50vh'}
            lat={coords.lat}
            lng={coords.lng}
            zoomControlOptions={'BOTTOM_RIGHT'}
            zoomControl={'true'}
            onDblClick={this.onDblClick}
            zoom={12}
            loadingMessage={'Loading'}
            params={params}
            onMapCreated={this.onMapCreated}>
            <Marker
              lat={coords.lat}
              lng={coords.lng}/>
          </Gmaps>
        </div>
      </div>
    );
  }
}

Track.propTypes = {
  provider: PropTypes.object,
  fetchProviderData: PropTypes.func
};

const mapStateToProps = state => {
  return {
    provider: state.provider.provider,
    error: state.provider.error,
    isFetching: state.provider.isFetching
  };
};

export default connect(mapStateToProps, trackActions)(Track);
