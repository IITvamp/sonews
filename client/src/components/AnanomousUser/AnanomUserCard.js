import React, {useState} from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import FindButton from "./FindButton";
import CommonLikedPosts from "./CommonLikedPosts";
import { createRequest } from "../../redux/actions/matchRequestAction";


const AnanomUserCard = (props) => {
  const { theme, auth, socket } = useSelector(state => state);
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();
  const onMatchHandler = () => {
    dispatch(createRequest({sender:auth.user._id, receiver:props.receiver, auth, socket,user:auth.user}))
  }
  return (
    <div
      className={`d-flex justify-content-between p-2 w-100 align-items-center`}
    >
      <Link
        to={`/`}
        //   onClick={handleCloseAll}
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

            {/* <small className="d-flex text-muted" style={{ flexWrap: "wrap" }}>
              Connect with someone you goona love
            </small> */}
          </div>
        </div>
      </Link>
      <button
        className="btn-1 outer-shadow hover-in-shadow"
        onClick={() => setOnEdit(true)}
      >
        Common Interests
      </button>
      {/* <Button onClick={onMatchHandler}>Match Request</Button> */}
      <FindButton
        find={props.find}
        setFind={props.setFind}
        end={props.end}
        setEnd={props.setEnd}
        bcode={props.bcode}
        setBcode={props.setBcode}
      />

      {onEdit && <CommonLikedPosts setOnEdit={setOnEdit} receiver={props.receiver} />}
    </div>
  );
};

export default AnanomUserCard;
