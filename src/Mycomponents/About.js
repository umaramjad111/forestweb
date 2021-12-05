import React from 'react'

export default function About() {
    const arraydata = [
          {
              image: "https://live.staticflickr.com/3313/5717224960_2b9b2206a8_b.jpg",
              name: "ondla Wildlife Sanctuary is located in northeastern Goa, India in Ponda taluka. The total area of the park is 8 km2. It is a popular destination for both tourists and schoolchildren. A wide variety of animal life can be encountered, including: sambar deer, Indian bison, Malabar giant squirrel, Indian peafowl and many species of snakes Bondla provides sanctuary to leopards who have been injured in human-wildlife conflict, as well as dancing bears and cobras who, along with their trainers, need a new life after this treatment of endangered wildlife. Bondla zoo is known for its successful breeding of gaur. As it is the only zoo in Goa, many visit the zoo. The zoo provides an excellent environment to breed and do researches on animals"
          },
          {
            image: "https://customercarecontacts.com/wp-content/uploads/2019/09/nagarhole-park-1024x571.jpg",
            name: "Nagarhole National Park is a national park located in Kodagu district and Mysore district in Karnataka, India. This park was declared the 37th Tiger Reserve of India in 1999. It is part of the Nilgiri Biosphere Reserve. The Western Ghats Nilgiri Sub-Cluster of 6,000 km2 (2,300 sq mi), including all of Nagarhole National Park, is under consideration by the UNESCO World Heritage Committee for selection as a World Heritage Site.The park has rich forest cover, small streams, hills, valleys and waterfalls, and populations of Bengal tiger, gaur, Indian elephant, Indian leopard, chital and Sambar deer. including all of Nagarhole National Park, is under consideration by the UNESCO World Heritage Committee for selection as a World Heritage Site.The park has rich forest cover, small streams, hills, valleys and waterfalls, and populations of Bengal tiger, gaur, Indian elephant, Indian leopard, chital and Sambar deer. "
        },
        {
            image: "https://www.gocoorgtourism.in/wp-content/uploads/2015/09/Nagarhole-National-Park-1.jpg",
            name: "ondla Wildlife Sanctuary is located in northeastern Goa, India in Ponda taluka. The total area of the park is 8 km2. It is a popular destination for both tourists and schoolchildren. A wide variety of animal life can be encountered, including: sambar deer, Indian bison, Malabar giant squirrel, Indian peafowl and many species of snakes Bondla provides sanctuary to leopards who have been injured in human-wildlife conflict, as well as dancing bears and cobras who, along with their trainers, need a new life after this treatment of endangered wildlife. Bondla zoo is known for its successful breeding of gaur. As it is the only zoo in Goa, many visit the zoo. The zoo provides an excellent environment to breed and do researches on animals"

        }
    ]
    return (
        <div id="about"  data-aos="fade-up">
            <h4 className="display-3 text-center mt-5 fw-normal">About Us</h4>
            <div className="underline mx-auto"></div>
            <div className="container">     
                    {arraydata.map(arr =>(
                        <div className="row mt-4 align-items-center">
                            <hr/>
                                <img src={arr.image} alt="" className="col-md-4 rounded-pill"/>
                                <p className="lead text-center col mt-3" >{arr.name}</p>
                            </div>
                      
                    ))}

                </div>
           
        </div>
    )
}
