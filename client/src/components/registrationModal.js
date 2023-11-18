import React from "react";

const registrationModal = ({ cancelRegiModal, address }) => {
  const user = {
    wallet: address,
    regiName: "untitle",
    profileImg: "defualt",
  };

  const handleSubmit = () => {
    fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
      cancelRegiModal();
  };

  return (
    <div className="container">
      <div className="modal-overlay" onClick={() => handleSubmit()}>
        <div className="walletModal">
          <div className="d-flex flex-column align-items-center">
            <p className="fs-3">가입 확인</p>
            <span>확인 후 계정이 자동으로 생성됩니다.</span>
            <p>프로필 화면에서 계정 정보를 수정할 수 있습니다.</p>
            <button className="catebtn col-4" onClick={() => handleSubmit()}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registrationModal;
