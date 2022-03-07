import React, { useState } from "react";
import Avatar from "../../Avatar";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Button } from "@material-ui/core";

// import FindButton from "./FindButton";
// import CommonLikedPosts from "./CommonLikedPosts";

const AnanomMessageCard = (props) => {
  // const { theme } = useSelector((state) => state);
  // const [onEdit, setOnEdit] = useState(false);
  //   const handleCloseAll = () => {
  //     if (handleClose) handleClose();
  //     if (setShowFollowers) setShowFollowers(false);
  //     if (setShowFollowing) setShowFollowing(false);
  //   };
  return (
    <div
      className={`d-flex justify-content-between p-2 w-100 align-items-center`}
    >
      <Link
        to={`/`}
        className="d-flex align-items-center"
        style={{ textDecoration: "none" }}
      >
        <div>
          <div className="outer-shadow big-avatar-cover ">
            <Avatar
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              size="big-avatar"
            />
          </div>
          <div className="ms-2" style={{ transform: "translateY(-2px)" }}>
            <span className="d-block color-c2">{"Ananomous User"}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnanomMessageCard;
