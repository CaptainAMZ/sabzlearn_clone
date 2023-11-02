import React, { useEffect, useState } from "react";

type Props = {};

const TopBar = (props: Props) => {
  const [adminInfo, setAdminInfo] = useState<any>({});
  const [adminNotifications, setAdminNotifications] = useState<any>([]);
  const [isShowNotificationsBox, setIsShowNotificationsBox] =
    useState<boolean>(false);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    fetch(`http://localhost:4000/v1/auth/me`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdminInfo(data);
        setAdminNotifications(data.notifications);
      });
  }, [seeNotification]);

  function seeNotification(notficationID: string): void {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    fetch(`http://localhost:4000/v1/notifications/see/${notficationID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <div
          className={`home-header ${
            isShowNotificationsBox && "active-modal-notfication"
          }`}
        >
          <div className="home-right">
            <div className="home-searchbar">
              <input
                type="text"
                className="search-bar"
                placeholder="جستجو..."
              />
            </div>
            <div className="home-notification">
              <button
                type="button"
                onMouseEnter={() => setIsShowNotificationsBox(true)}
              >
                <i className="far fa-bell"></i>
              </button>
            </div>
            <div
              className="home-notification-modal"
              onMouseEnter={() => setIsShowNotificationsBox(true)}
              onMouseLeave={() => setIsShowNotificationsBox(false)}
            >
              <ul className="home-notification-modal-list">
                {adminNotifications.length === 0 ? (
                  <li className="home-notification-modal-item">
                    نوتیفکیشنی برای نمایش وجود ندارد
                  </li>
                ) : (
                  <>
                    {adminNotifications.map(({ msg, _id }) => (
                      <li className="home-notification-modal-item">
                        <span className="home-notification-modal-text">
                          {msg}
                        </span>
                        <label className="switch">
                          <a
                            href="javascript:void(0)"
                            onClick={() => seeNotification(_id)}
                          >
                            دیدم
                          </a>
                        </label>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="home-left">
            <div className="home-profile">
              <div className="home-profile-image">
                <a href="#">
                  <img src={adminInfo.profile} alt="" />
                </a>
              </div>
              <div className="home-profile-name">
                <a href="#">{adminInfo.name}</a>
              </div>
              <div className="home-profile-icon">
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
