import React from "react";
import First from "./Assets/first.png";
import Second from "./Assets/second.png";
import Third from "./Assets/third.png";

function Content() {
  return (
    <div>
      <div className="ui container">
        <div className="first">
          <div className="homepage-content">
            <p className="homepage-content-h3">Baat-ChIIT for everyone:</p>
            If you're an introvert, welcome to the world of no-hesitation talks
            and no-judgement talks!
            <br />
            If you're an extrovert, hail the lord for so many people around to
            talk!
          </div>
          <div className="firstImage">
            <img alt="vector1" src={First} className="homepage-content-img" />
          </div>
        </div>

        <div className="second">
          <div className="homepage-content ">
            <h3 className="homepage-content-h3">Experience security</h3>
            1. No collection of data, perfectly anonymous experience
            <br />
            2. No usage of G-Suite ID other than verification of your identity
            as an IITian
            <br />
            3. Secure connection; what you talk about here stays here!
          </div>
          <div className="secondImage">
            <img alt="vector2" src={Second} className="homepage-content-img" />
          </div>
        </div>

        <div className="third">
          <div className="homepage-content">
            <p className="homepage-content-h3">Chat as strangers</p>
            Find your interest-twins or brain-mates among fellow IITians! Have a
            chit-chat as strangers, without being judged.
          </div>
          <div className="thirdImage">
            <img alt="vector3" src={Third} className="homepage-content-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
