import React, { useEffect, Component } from 'react';
import Thumbnails from './components/thumbnails/Thumbnails';
const Ext = window['Ext'];

class App extends Component {
  constructor(props) {
    super(props);
    this.newReleases = Ext.create('Ext.data.Store', {
      fields: [
        {
          name: 'image',
          mapping: 'images[1]',
        },
      ],
      proxy: {
        type: 'ajax',
        url: 'https://api.spotify.com/v1/browse/new-releases',
        reader: {
          type: 'json',
          rootProperty: 'albums.items',
        },
      },
      autoLoad: true,
    });
  }

  render() {
    return (
      <div layout='fit'>
        <Thumbnails store={this.newReleases} />
      </div>
    );
  }
}
export default App;
