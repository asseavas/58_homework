import './App.css';
import Modal from './Components/Modal/Modal';
import {useState} from 'react';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2 justify-content-evenly">
          <div className="col-5">
            <button className="w-100 btn btn-primary" onClick={() => setShowModal(true)}>Click</button>
            <Modal show={showModal} title="Hello" onClose={() => setShowModal(false)}>
              <div className="modal-body">
                Content
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </Modal>
          </div>
          <div className="col-5 ">
            ALert
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
