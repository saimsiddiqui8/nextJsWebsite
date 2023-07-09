import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { MdLocationPin } from "react-icons/md"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from 'next/link';
import { HiCube } from "react-icons/hi"
import { AiFillDelete } from "react-icons/ai"
import { FaBed } from "react-icons/fa"
import { MdWhatsapp } from "react-icons/md";
import styles from '@/styles/ForSale.module.css';
import db from '../api/firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Card, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';
import Slider from 'react-slick';

export default function Admin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [allProduct, setAllProduct] = useState(false);

    useEffect(() => {
        // Check if user is already logged in
        const isLoggedIn = localStorage.getItem('loggedIn');
        if (isLoggedIn) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Set logged in state to true
            setLoggedIn(true);
            // Save login status in local storage
            localStorage.setItem('loggedIn', 'true');
            // Clear form fields and error message
            setEmail('');
            setPassword('');
            setError('');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            // Set logged in state to false
            setLoggedIn(false);
            // Remove login status from local storage
            localStorage.removeItem('loggedIn');
            // Redirect to login page
            router.push('/admin');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const AdminAddProduct = () => {
        const [names, setNames] = useState('');
        const [price, setPrice] = useState('');
        const [bed, setBed] = useState('');
        const [area, setArea] = useState('');
        const [cartDescription, setCartDescription] = useState('');
        const [description, setDescription] = useState('');
        const [location, setLocation] = useState('');
        const [images, setImages] = useState([]);
        const [uploading, setUploading] = useState(false);

        const handleImageChange = (e) => {
            const fileList = e.target.files;
            const imageFiles = Array.from(fileList);
            setImages(imageFiles);
        };

        const handleRemoveImage = (index) => {
            const updatedImages = [...images];
            updatedImages.splice(index, 1);
            setImages(updatedImages);
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                setUploading(true);

                // Upload images to Firebase Storage
                const storage = getStorage();
                const imageUrls = [];
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const storageRef = ref(storage, `images/${image.name}`);
                    await uploadBytes(storageRef, image);
                    const imageUrl = await getDownloadURL(storageRef);
                    imageUrls.push(imageUrl);
                }

                // Add the form data to db
                await addDoc(collection(db, 'propertyForSale'), {
                    names,
                    price,
                    bed,
                    area,
                    cartDescription,
                    description,
                    location,
                    imageUrls,
                });

                // Reset the form inputs and state
                setNames('');
                setPrice('');
                setBed('');
                setArea('');
                setCartDescription('');
                setDescription('');
                setLocation('');
                setImages([]);

                console.log('Data added successfully');
            } catch (error) {
                console.error('Error adding data:', error);
            } finally {
                setUploading(false);
            }
        };

        return (
            <>
                <h2 className="text-center mt-3 mb-2">Add Product</h2>
                <Container className="my-5 w-75 rounded" id="adminContainer">
                    <Form onSubmit={handleSubmit} className="p-5">
                        <Form.Group className="mb-3" controlId="names">
                            <Form.Label>Names</Form.Label>
                            <Form.Control
                                type="text"
                                value={names}
                                onChange={(e) => setNames(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bed">
                            <Form.Label>Bed</Form.Label>
                            <Form.Control
                                type="number"
                                value={bed}
                                onChange={(e) => setBed(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="area">
                            <Form.Label>Area (Also Include Size For Eg: 1,983 Sq.Ft.)</Form.Label>
                            <Form.Control
                                type="text"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cartDescription">
                            <Form.Label>Cart Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                value={cartDescription}
                                onChange={(e) => setCartDescription(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Images</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} multiple required accept="image/*" />
                        </Form.Group>

                        <Button
                            className="w-100 d-flex align-items-center justify-content-center bg-dark"
                            type="submit"
                            disabled={uploading}
                        >
                            {uploading ? 'Uploading...' : <BsPlus size={20} />}
                        </Button>
                    </Form>
                    <Row className="container px-5 mx-auto ">
                        {images.map((image, index) => (
                            <Col xs={12} lg={3} sm={6} md={4} key={index} className='text-center'>
                                <Card id='' className='my-3 ' >
                                    <Card.Img variant="top" src={URL.createObjectURL(image)} className="img-fluid" />
                                    <Card.Body>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleRemoveImage(index)}
                                            className="w-100"
                                        >
                                            Remove
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    };

    const AllProducts = () => {
        const [isLoading, setIsLoading] = useState(true);
        const [renderData, setRenderData] = useState([]);
        const [showModal, setShowModal] = useState(false);
        const [isDeleting, setIsDeleting] = useState(false);
        const [selectedProductId, setSelectedProductId] = useState('');

        useEffect(() => {
            loadData();
        }, []);

        const loadData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'propertyForSale'));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setRenderData(data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 800);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const handleDeleteProduct = async (productId, imageUrls) => {
            try {
                setShowModal(true);
                setSelectedProductId(productId);

                // Delete product from Firestore
                await deleteDoc(doc(db, 'propertyForSale', productId));

                // Delete images from storage bucket
                const storage = getStorage();
                for (const imageUrl of imageUrls) {
                    const imageRef = ref(storage, imageUrl);
                    await deleteObject(imageRef);
                }

                // Remove deleted product from the renderData state
                setRenderData((prevRenderData) => prevRenderData.filter((data) => data.id !== productId));
            } catch (error) {
                console.error('Error deleting product:', error);
            } finally {
                setShowModal(false);
                setSelectedProductId('');
            }
        };

        return (
            <>
                {isLoading ? (
                    <div className="text-center mt-5 pt-5">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <>
                        <h1 className='text-center'>All Products</h1>

                        <Container>
                            {renderData.map((data, index) => (
                                <Row className="justify-content-evenly mt-5" id={index} key={data.id}>
                                    <Col lg={4} md={12} sm={12} className="mt-5" key={index}>
                                        {data.imageUrls && data.imageUrls.length > 0 ? (
                                            <Slider autoplay={true} autoplaySpeed={3500}>
                                                {data.imageUrls.map((image, imageIndex) => (
                                                    <img key={imageIndex} src={image} className={styles.img} />
                                                ))}
                                            </Slider>
                                        ) : (
                                            <div className="text-center">
                                                <img src="/images/noImgAvailable.jpg" width="75%" className={styles.noImgAvailable} />
                                            </div>
                                        )}
                                    </Col>
                                    <Col lg={5} md={12} sm={12} className="mt-5">
                                        <p>{data.names}</p>
                                        <h3 className="" id={styles.offPlanProjects}>
                                            AED {data.price}
                                        </h3>
                                        <div className="my-1">
                                            <p className={styles.sizes}>
                                                <FaBed className={styles.icon2} /> {data.bed} bed &nbsp; &nbsp; &nbsp;
                                                <FaBed className={styles.icon2} /> {data.bed} bed &nbsp; &nbsp;
                                                <HiCube className={styles.icon2} /> {data.area}
                                            </p>
                                        </div>
                                        <p className="mb-2 fw-bold">{data.cartDescription}</p>
                                        <p className={styles.viewDetails}>
                                            <Link
                                                href={{
                                                    pathname: '/forSale/listDetails',
                                                    query: { data: JSON.stringify(data) },
                                                }}
                                            >
                                                <p>View Details &gt;</p>
                                            </Link>
                                        </p>
                                        <hr className="my-1 mt-1" />
                                        <div className="">
                                            <p className={styles.offPlanProjectsParagraph}>
                                                <a href="#" onClick={() => openMap(data.location)}>
                                                    <MdLocationPin className={styles.icon2} /> {data.location}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="mt-3 w-100 text-center overflow-hidden">
                                            <Row>
                                                <Col lg={6} md={6} sm={6} className="col-6 py-3" id={styles.button1}>
                                                    <span className={styles.span} onClick={() => handleDeleteProduct(data.id, data.imageUrls)}>
                                                        {isDeleting && selectedProductId === data.id ? (
                                                            <Spinner animation="border" role="status" size="sm">
                                                                <span className="visually-hidden">Deleting...</span>
                                                            </Spinner>
                                                        ) : (
                                                            <>
                                                                <AiFillDelete className={styles.iconz} />
                                                                Delete
                                                            </>
                                                        )}
                                                    </span>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} className="col-6 py-3" id={styles.button2}>
                                                    <span className={styles.span}>
                                                        <MdWhatsapp /> Whatsapp
                                                    </span>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Body>
                                <div className="text-center">
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Deleting...</span>
                                    </Spinner>
                                    <p>Deleting product...</p>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </>
                )}
            </>
        );
    };



    const HandleComponents = () => {
        const [addProduct, setAddProduct] = useState(false);
        const [showAllCategories, setShowAllCategories] = useState(false);
        const [selectedCategory, setSelectedCategory] = useState('');

        const handleCategoryClick = (category) => {
            setSelectedCategory(category);
            setAddProduct(false);
            setShowAllCategories(false);
        };

        const handleSeeAllProducts = () => {
            setShowAllCategories(true);
            setSelectedCategory('');
            setAddProduct(false);
        };

        return (
            <>
                <div className="text-end">
                    <Button className="mb-3" variant="secondary" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>

                {!showAllCategories && !addProduct && !selectedCategory && (
                    <div className="container w-50 text-center">
                        <Button
                            className="w-100 py-5 mt-3 bg-dark text-white"
                            onClick={() => setAddProduct(true)}
                            variant=""
                            type="submit"
                        >
                            Add Product
                        </Button>
                    </div>
                )}

                {!showAllCategories && !addProduct && !selectedCategory && (
                    <div className="text-center container w-50">
                        <Button
                            className="w-100 py-5 mt-3 bg-dark text-white"
                            onClick={handleSeeAllProducts}
                            variant=""
                            type="submit"
                        >
                            See All Products
                        </Button>
                    </div>
                )}

                {addProduct && <AdminAddProduct />}

                {showAllCategories && !addProduct && !selectedCategory && (
                    <div className="grid-container container w-75 text-center">
                        <Button
                            className="category-btn bg-dark text-white w-100 my-3 p-4"
                            variant=""
                            onClick={() => handleCategoryClick('propertyForSale')}
                        >
                            Property for Sale
                        </Button>
                        <Button
                            className="category-btn bg-dark text-white w-100 my-3 p-4"
                            variant=""
                            onClick={() => handleCategoryClick('rentProperty')}
                        >
                            Rent Property
                        </Button>
                        <Button
                            className="category-btn bg-dark text-white w-100 my-3 p-4"
                            variant=""
                            onClick={() => handleCategoryClick('apartments')}
                        >
                            Apartments
                        </Button>
                        <Button
                            className="category-btn bg-dark text-white w-100 my-3 p-4"
                            variant=""
                            onClick={() => handleCategoryClick('flats')}
                        >
                            Flats
                        </Button>
                        <Button
                            className="category-btn bg-dark text-white w-100 my-3 p-4"
                            variant=""
                            onClick={() => handleCategoryClick('terrace')}
                        >
                            Terrace
                        </Button>
                        <Button
                            className="category-btn bg-dark text-white w-100 my-3 p-4"
                            variant=""
                            onClick={() => handleCategoryClick('ballroom')}
                        >
                            Ballroom
                        </Button>
                    </div>
                        )}
               
                {selectedCategory && (
                    <AllProducts selectedCategory={selectedCategory} />
                )}
            </>
        );
    };





    return (
        <Container className="my-5">
            {loggedIn ? (
                <HandleComponents />
            ) : (
                <>
                    <h1 className="text-center">LOGIN</h1>
                    <Form onSubmit={handleLogin} className="w-50 mx-auto mt-4">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mt-3 mb-1' controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        {error && <p className="text-danger ">{error}</p>}
                        <Button className="w-100 mt-3 bg-dark text-white" variant="" type="submit">
                            {loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Login'}
                        </Button>
                    </Form>
                </>
            )}
        </Container>
    );
}
