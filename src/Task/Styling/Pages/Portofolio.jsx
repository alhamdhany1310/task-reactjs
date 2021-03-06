import React from 'react';
import '../Style/Portofolio.css';
class Portofolio extends React.Component {
  render() {
    return (
      <section id="portofolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">Portofolio</div>
              <div className="row pb-5">
                <div className="col-md-12">
                  <div className="container">
                    <div className="gallery">
                      <div className="gallery-item">
                        <img className="gallery-image" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" alt="" />
                      </div>
                      <div className="gallery-item">
                        <img className="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" alt="sunset behind San Francisco city skyline" />
                      </div>
                      <div className="gallery-item">
                        <img
                          className="gallery-image"
                          src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                          alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                        />
                      </div>
                      <div className="gallery-item">
                        <img
                          className="gallery-image"
                          src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                          alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                        />
                      </div>
                      <div className="gallery-item">
                        <img
                          className="gallery-image"
                          src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                          alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                        />
                      </div>
                      <div className="gallery-item">
                        <img
                          className="gallery-image"
                          src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                          alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Portofolio;
