import React, { useState } from "react";
import userData from "../../datas/userData.json";
import CertificateImage from "../../assets/certificate.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function CertificatePage() {
  const [form, setForm] = useState({
    generation: "",
    name: "",
    nickname: "",
    role: "",
  });
  const [matched, setMatched] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVerify = () => {
    const isValidUser = userData.some(
      (user) => user.generation === form.generation && user.name === form.name
    );

    if (isValidUser) {
      setMatched(true);
      setShowError(false);
    } else {
      setMatched(false);
      setShowError(true);
    }
  };

  const handleDownload = () => {
    const certificateElement = document.getElementById("certificate-preview");

    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 100);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="certificate-container">
      <h1>수료증 발급</h1>
      <div className="input-group">
        <input
          type="text"
          name="generation"
          placeholder="기수"
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="역할"
          onChange={handleChange}
        />
        <button onClick={handleVerify}>확인</button>
      </div>

      {showError && <p className="error-message">⚠️ 권한이 없습니다</p>}

      {matched && (
        <div>
          <div id="certificate-preview" className="certificate">
            <img src={CertificateImage} alt="certificate" />
            <div className="certificate-text">
              <p>{form.generation}기</p>
              <p>{form.name}</p>
              <p>{form.nickname}</p>
              <p>{form.role}</p>
            </div>
          </div>
          <button onClick={handleDownload}>PDF 다운로드</button>
        </div>
      )}
    </div>
  );
}

export default CertificatePage;
