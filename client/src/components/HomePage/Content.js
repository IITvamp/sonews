import React from "react";
import FirstVideo from "./Assets/firstvideo.mp4"
import First from "./Assets/first.gif";
import Second from "./Assets/second.png";
import Third from "./Assets/third.png";

function Content() {
  return (
    <div>
      <div className="ui container">
        <div className="first">
          <div className="homepage-content">
            <p className="homepage-content-h3">Dating like never before:</p>
            All you gotta do is to click on start button and then just bilnk
            your eye before you get connected to a wonderful date.
            <br />
            Easy as that. Fast as that. Simple as that
          </div>
          <div className="firstImage">
            <video loop autoPlay muted controls className="homepage-content-img">
              <source src={FirstVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img alt="vector1" src={First} className="homepage-content-img" /> */}
          </div>
        </div>

        <div className="second">
          <div className="homepage-content ">
            <h3 className="homepage-content-h3">Connect with love</h3>
            Do you think this is your dream prince/princess you were looking
            for?
            <br />
            Just send the connection request and wait for other person to accept
            the request.
          </div>
          <div className="secondImage">
            <img alt="vector2" src={Second} className="homepage-content-img" />
          </div>
        </div>

        <div className="third">
          <div className="homepage-content">
            <p className="homepage-content-h3">No Strings Attached</p>
            Chat didn't go as expected? Don't worry🙂. Just say "shit" and end
            the chat.
            <br />
            if next time you get connected to same person it will be a fresh
            start with no strings attached to previous chat. Fun isn't it?🙂
          </div>
          <div className="thirdImage">
            <img alt="vector3" src={Third} className="homepage-content-img" />
          </div>
        </div>

        <div className="fourth">
          <div className="homepage-content">
            <p className="homepage-content-h3">know your dates more and more</p>
            see photos and videos of your connetion directly in your feed.
            <br />
            Is there a better way to know the person more and more?
          </div>
          <div className="thirdImage">
            <img alt="vector3" src={Third} className="homepage-content-img" />
          </div>
        </div>

        <div className="fifth">
          <div className="homepage-content">
            <p className="homepage-content-h3">know the person for you</p>
            Tired of looking at few photos of a person and deciding if thats the
            person you are looking for you?
            <br />
            Now, look at the posts you and your partner have liked in common to
            know what to talk about during conversation.
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
