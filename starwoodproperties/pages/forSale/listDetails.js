import ShadedContainer from '@/components/ShadedContainer';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

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
    const totalRows = Math.ceil(parsedData.img.length / imagesPerRow); // Calculate the total number of rows

    const imageRows = Array.from(Array(totalRows), (_, rowIndex) => {
        const startIndex = rowIndex * imagesPerRow;
        const endIndex = startIndex + imagesPerRow;
        return parsedData.img.slice(startIndex, endIndex);
    });
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
                                        <img src={data} width="80%" />
                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </Container>
                </section>
            ) : (
                <h1>No data available</h1>
            )}
        </div>
    );
}
