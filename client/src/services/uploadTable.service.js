import axios from "axios";

const UploadTable = async (body, history) => {
  await axios
    .post(`http://localhost:1400/api/add-table`, body)
    .then(() => {
      history.push("/sentsuccess");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default UploadTable;
