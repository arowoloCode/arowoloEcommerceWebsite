// import { useState } from "react";
// import axios from "axios";

// function Cloudinary() {
//   const [loading, setLoading] = useState(false);
//   const [imageURL, setImageURL] = useState("");
//   const [image, setImage] = useState("");
//   const [previewURl, setPreviewURl] = useState("");

//   const uploadImage = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const res = await axios.post(
//       "https://api.cloudinary.com/v1_1/tomiwaadetayo/image/upload",
//       image
//     );

//     setLoading(false);
//     console.log(res);
//     setImageURL(res.data.secure_url);
//   };
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     previewFile(file);
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "shoppingimages");
//     setImage(formData);
//   };

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreviewURl(reader.result);
//       console.log(reader.result);
//     };
//   };

//   return (
//     <div>
//       <form action=''>
//         <input type='file' name='' id='' onChange={handleImageChange} />
//         <br />
//         <button type='submit' onClick={uploadImage}>
//           Upload
//         </button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {previewURl && (
//         <img
//           src={previewURl}
//           alt='Clodinary Demo'
//           style={{ maxHeight: "300px" }}
//         />
//       )}
//     </div>
//   );
// }

// export default Cloudinary;
