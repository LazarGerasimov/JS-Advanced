function search() {
   let listElements = document.querySelectorAll("ul#towns li"); // !!!!!!!! parent tag
   let resultElement = document.getElementById("result");
   let searchText = document.getElementById("searchText").value;
   let matches = 0; 

   for (let element of listElements) {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "";
   }

   for (let element of listElements) {
      let text = element.textContent;
      
      if (text.match(searchText)) {       // or includes()
         matches++;
         element.style.fontWeight = "bold";     // or textContent
         element.style.textDecoration = "underline";
      }
   }

   resultElement.textContent = `${matches} matches found`


}
