import React, { useEffect, useState } from 'react';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';

const Home = () => {
    // Example product availability data
    const productAvailability = {
        airpodes: true,
        watches: true,
        mobiles: true,
        mouse: true,
        televisions: true,
        camera: true,
        earphones: true,
        speakers: true,
        refrigerator: true,
        trimmers: true,
        laptops: true, 
        printers: true,
        accessories: true
    };

    const [productData, setProductData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const categories = Object.keys(productAvailability);
            const dataFetchPromises = categories.map(category => {
                if (productAvailability[category]) {
                    return fetchCategoryWiseProduct(category)
                        .then(response => ({
                            category,
                            data: response.data
                        }))
                        .catch(error => ({
                            category,
                            data: [],
                            error: true,
                            message: error.message || 'Error fetching data'
                        }));
                }
                return Promise.resolve({ category, data: [] });
            });

            const fetchedData = await Promise.all(dataFetchPromises);
            const updatedData = {};
            fetchedData.forEach(item => {
                updatedData[item.category] = item.data;
            });
            setProductData(updatedData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <CategoryList />
            <BannerProduct />

            {Object.keys(productAvailability).map(category => {
                if (productAvailability[category]) {
                    return (
                        
                        <React.Fragment key={category}>
                            {productData[category]?.length > 0 && (
                                <VerticalCardProduct category={category} heading={category.charAt(0).toUpperCase() + category.slice(1)} />
                            )}
                        </React.Fragment>
                    );
                }
                return null;
            })}

        </div>
    );
};

export default Home;
