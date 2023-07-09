import React, { useState } from 'react';
import ShadedContainer from '@/components/ShadedContainer';
import { useRouter } from 'next/router';

import { Col, Container, Row, Modal } from 'react-bootstrap';

export default function ListDetails() {
  const router = useRouter();
  const { data } = router.query;
  let parsedData = null;

  if (data) {
    try {
      parsedData = JSON.parse(data);
    } catch (error) {
      console.error('Error parsing data:', error);
    }
  }
  console.log(parsedData);

  const imagesPerRow = 4; // Number of images to render per row
  const totalRows = Math.ceil(parsedData.imageUrls.length / imagesPerRow); // Calculate the total number of rows

  const imageRows = Array.from(Array(totalRows), (_, rowIndex) => {
    const startIndex = rowIndex * imagesPerRow;
    const endIndex = startIndex + imagesPerRow;
    return parsedData.imageUrls.slice(startIndex, endIndex);
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {parsedData && parsedData.names ? (
        <section>
          <ShadedContainer mainHeading={parsedData.names} currentPage={parsedData.names} />
          <Container>
            <p className='mt-3'>{parsedData.description}</p>
          </Container>
          <Container className='text-center w-75'>
            {imageRows.map((rowImages, rowIndex) => (
              <Row key={rowIndex} className="mt-4">
                {rowImages.map((data, index) => (
                  <Col lg={3} md={3} sm={12} key={index}>
                    <img src={data} width="80%" onClick={() => handleImageClick(data)} />
                  </Col>
                ))}
              </Row>
            ))}
          </Container>
          <Modal show={showModal} onHide={handleCloseModal} centered size='lg' className="custom-modal">
            <Modal.Body>
              <img src={selectedImage} alt="Full Size" className="img-fluid" />
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary w-100 bg-dark" onClick={handleCloseModal}>Close</button>
            </Modal.Footer>
          </Modal>
        </section>
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
}
