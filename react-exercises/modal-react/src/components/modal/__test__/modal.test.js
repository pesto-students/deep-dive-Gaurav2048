import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import Modal from '../modal';

describe('Modal test suite', function () {

  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal>
    </Modal>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create dive with classname modal-area ', () => {

    let wrapper = shallow(
      <Modal onModalClosed={() => {
        isOpen = false
        console.log('inmpdalclosed,inmpdalclosed')
      }}  >
        <input id="userName" className="custom-input" placeholder="user name" />
      </Modal>
    );

    expect((wrapper).find('.modal-area').length).toBe(1);
    wrapper.unmount();

  });
});