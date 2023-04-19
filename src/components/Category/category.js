import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import categoryImg01 from './../../image/category1.png'
import categoryImg02 from './../../image/category2.png'
import categoryImg03 from './../../image/category3.png'
import categoryImg04 from './../../image/category4.png'
import './category.scss'
const categoryData = [
    {
        display: 'Ngon Chuẩn Việt',
        imgUrl: categoryImg02
    },
    {
        display: 'Ăn Vặt Chiều',
        imgUrl: categoryImg01
    },
    {
        display: 'Cơm Nóng Sốt',
        imgUrl: categoryImg03
    },
    {
        display: 'Nóng Hổi Xì Xụp',
        imgUrl: categoryImg04
    },
]

const Category = () =>
{
    return <Container>
        <Row>
            {
                categoryData.map((item, index)=>(
                    <Col lg = '3' md = '4'>
                        <div className="category_item d-flex align-items-center gap-3">
                            <div className="category_img">
                                <img src = {item.imgUrl} alt ="category_item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>


                ))
            }

        </Row>
    </Container>
};
export default Category;