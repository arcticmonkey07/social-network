import React from 'react';
import ava from './../../../../img/ava.jpg';
import './Post.css'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}

class Post extends React.Component {
  static whyDidYouRender = true;
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return (
      <div className="post">
        <img className="post__img" src={ava} alt="ava"/>
        <p className="post__text">{this.props.message}</p>
        <button className="post__like" onClick={this.incrementCount}>
          <svg className="post__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.308 11.794c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z"/>
          </svg>
        </button>
        <span className="post__like-count">{this.state.count}</span>
      </div>
    )
  }
}

export default Post;
