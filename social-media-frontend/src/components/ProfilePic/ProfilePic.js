import React, { useRef } from "react";
import ReactDom from "react-dom";



const ProfilePic = () => {


    //user selects file
  //file gets passed into function to upload
  //file gets uploaded, stored on user object
  //When profilePic component re-renders,


  <input id="inputFileToLoad" type="file" onchange="encodeImageFileAsURL();" />

 


 function encodeImageFileAsURL() {

    const filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      const fileToLoad = filesSelected[0];

      const fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        const srcData = fileLoadedEvent.target.result; // <--- data: base64

        const newImage = document.createElement('img');
        newImage.src = srcData;

        document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }



  return (
    <div>

      {/* If user has a profile pic, display it. If not, display button to trigger function to upload one */}
    </div>
  )

} 

export default ProfilePic
