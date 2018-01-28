import React from 'react';
import { Gmaps, Marker } from 'react-gmaps';
import { Link } from 'react-router-dom';
import Modal from 'antd/lib/modal';

import './index.css';

const coords1 = {
  lat: 31.50170 ,
  lng: 34.46684
};
const coords2 = {
  lat: 31.50170 ,
  lng: 34.47784
};

const params = { v: '3.exp', key: 'AIzaSyAZWojwbNqzQJ9LcJF4GMFewsjyWHkn3Kc', language: 'ar' };

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      visible: false,
      confirmLoading: false
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onMapCreated = this.onMapCreated.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDblClick = this.onDblClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }
  onDblClick(e) {
    console.log('onDblClick', e);
  }

  showModal(e) {
    this.setState({
      visible: true
    });
  }
  handleOk(e) {
    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  }
  handleCancel(e) {
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div className='maps'>
        <Gmaps
          className='gmaps'
          onClick={this.onClick}
          width={'412px'}
          lat={coords1.lat}
          lng={coords1.lng}
          zoomControlOptions={'BOTTOM_RIGHT'}
          zoomControl={'true'}
          onDblClick={this.onDblClick}
          zoom={12}
          loadingMessage={'Loading'}
          params={params}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={coords1.lat}
            lng={coords1.lng}
            draggable={true}
            onDragEnd={this.onDragEnd}
            getPosition={this.getPosition}/>
          <Marker
            lat={coords2.lat}
            lng={coords2.lng}
            draggable={true}
            onDragEnd={this.onDragEnd}
            icon= 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          />
        </Gmaps>
        <button className='map__button' onClick={this.showModal}>Select Service</button>

        <Modal title='Title'
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <ul className='list'>
            <li> <Link to='/track'>Service 1</Link></li>
            <li> <Link to='/track'>Service 2</Link></li>
            <li> <Link to='/track'>Service 3</Link></li>
          </ul>
        </Modal>
      </div>
    );
  }
};

export default Map;
