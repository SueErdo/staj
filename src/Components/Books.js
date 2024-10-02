import React, {useState} from 'react'
import items from './Datas/data'
import Modal from 'react-modal'

const Books = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="container" style={{ margin: 'auto', padding: '1rem' }}>
  <div className="row">
    {items.map((item, index) => (
      <div className="col-6 col-md-4 col-lg-3" key={index} style={{ marginBottom: '1rem', padding:'2rem' }}>
        <div className="card" onClick={() => openModal(item)} >
          <img className="card-img-top" src={item.image} alt={item.name} />
          <div className="card-body">
            <h6 className="card-title">{item.name}</h6>
          </div>
        </div>
      </div>
    ))}
  </div>
  <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
          },
        }}
      >
        {selectedItem && (
          <>
            <h5>{selectedItem.name}</h5>
            <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '100%' }} />
            <p >{selectedItem.description}</p>
            <p style={{fontSize:'13px', color:'grey'}}>{selectedItem.author}</p>
            <p style={{fontSize:'13px', color:'grey'}}>{selectedItem.edition}</p>
            <button onClick={closeModal} style={{border:'none', width:'100%',fontWeight:'bold'}}>X</button>
          </>
        )}
      </Modal>
</div>

  )
}

export default Books

