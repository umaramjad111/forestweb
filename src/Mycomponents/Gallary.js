import React from 'react'

export default function Gallary() {
    const imagearay = [
        {
            image: "https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_960_720.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/04/18/10/17/wolf-1336229_960_720.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg"
        },
        {
             image: "https://cdn.pixabay.com/photo/2020/10/18/11/01/deer-5664425_960_720.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2019/08/01/12/19/raccoon-4377383_960_720.jpg"
        }, 
        {
            image: "https://cdn.pixabay.com/photo/2020/06/08/18/50/chipmunk-5275697_960_720.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2019/11/07/20/44/dog-4609870_960_720.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2020/03/04/15/50/pair-4901929_960_720.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/04/09/10/15/nature-3303721_960_720.jpg"
        }
    ]
    return (
        <div id="gallary" data-aos="fade-up">
            <div className="container">
            <h4 className="display-3 text-center mt-5 fw-normal">Gallary</h4>
            <div className="underline mx-auto"></div>
                <div className="row mt-2">
                   {imagearay.map(arr =>(
                       <div className="col-md-4 mt-4 d-flex justify-content-center">
                           <img src={arr.image} alt="gallary" width="400px" height="300px" className="roundimage"/>
                       </div>
                   ))}
                </div>
            </div>
        </div>
    )
}
