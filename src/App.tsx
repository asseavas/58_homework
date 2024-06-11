import './App.css';
import Modal from './Components/Modal/Modal';
import {useState} from 'react';
import Alert from './Components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPrimaryAlert, setShowPrimaryAlert] = useState(true);
  const [showSuccessAlert] = useState(true);
  const [showWarningAlert] = useState(true);
  const [showDangerAlert, setShowDangerAlert] = useState(true);

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
            <Alert show={showPrimaryAlert} type="primary" onDismiss={() => setShowPrimaryAlert(false)}>
              An example primary alert
            </Alert>
            <Alert show={showSuccessAlert} type="success">
              An example success alert
            </Alert>
            <Alert show={showWarningAlert} type="warning">
              An example warning alert
            </Alert>
            <Alert show={showDangerAlert} type="danger" onDismiss={() => setShowDangerAlert(false)}>
              An example danger alert
            </Alert>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
