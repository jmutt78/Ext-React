import React, { useEffect, Component } from 'react';
import { ExtDataview } from '@sencha/ext-modern';
import { ExtGrid } from '@sencha/ext-react-modern';
import { ExtColumn } from '@sencha/ext-react-modern';

class Thumbnails extends Component {
  render() {
    console.log(this.props);
    return (
      <ExtGrid
        viewport={true}
        ref={(grid) => (this.grid = grid)}
        title='The Grid'
        store={this.props.store}
        onReady={this.extReactDidMount}
      >
        <ExtColumn text='name' dataIndex='name'></ExtColumn>
      </ExtGrid>
    );
  }
}
export default Thumbnails;

{
  /* <ExtDataview
store={this.props}
cls='albums-view'
layout={{
  type: 'hbox',
  pack: 'space-around',
  wrap: true,
}}
scrollable={true}
itemTpl={[
  '<figure>',
  '<div class="thumbnail" style="background-image:url(\'{image.url}\')"></div>',
  "<figcaption><div class='title'>{name}</div><div class='artist'>{artist}</div></figcaption>",
  '</figure>',
]}
itemCls='album'
/> */
}
