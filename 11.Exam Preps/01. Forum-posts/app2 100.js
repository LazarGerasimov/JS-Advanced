window.addEventListener('load', solve);

function solve() {

    let titleInput = document.getElementById('post-title');
    let categoryInput = document.getElementById('post-category');
    let textInput = document.getElementById('post-content');
    
    let reviewListElement = document.getElementById('review-list');
    let publishedListElement = document.getElementById('published-list');
    
    let publishButton = document.getElementById('publish-btn');
    let clearButton = document.querySelector("#clear-btn");
    
    let postsForReviewElement = document.querySelector("#relatedPosts > div > h2");
    let uploadedPostsElement = document.querySelector("#published-container > div > div > h2");
    
    publishButton.addEventListener('click', onPublish);
    
    
    function onPublish(e) { // PUBLISH BUTTON
        e.preventDefault();
    
        if (titleInput.value == '' || categoryInput.value == '' || textInput.value == '') {
            return;
        }
    
            let publishLiElement = document.createElement('li');
            publishLiElement.className = 'rpost';
            reviewListElement.appendChild(publishLiElement);
        
            let publishArticleElement = document.createElement('article');
            publishLiElement.appendChild(publishArticleElement);
        
            let publishTitleElement = document.createElement('h4');
            publishTitleElement.textContent = titleInput.value;
            publishArticleElement.appendChild(publishTitleElement);
            titleInput.value = '';
        
            let publishCategoryElement = document.createElement('p');
            publishCategoryElement.textContent = `Category: ${categoryInput.value}`;
            publishArticleElement.appendChild(publishCategoryElement);
            categoryInput.value = '';
        
            let publishCommentElement = document.createElement('p');
            publishCommentElement.textContent = `Content: ${textInput.value}`;
            publishArticleElement.appendChild(publishCommentElement);
            textInput.value = '';

            let approveButtonElement = document.createElement('button');
            approveButtonElement.textContent = 'Approve';
            approveButtonElement.className = 'action-btn approve';
    
            let editButtonElement = document.createElement('button');
            editButtonElement.textContent = 'Edit';
            editButtonElement.className = "action-btn edit";
        
            publishLiElement.appendChild(approveButtonElement);  // DOUBLE CHECK
            publishLiElement.appendChild(editButtonElement); // DOUBLE CHECK
            
            editButtonElement.addEventListener('click', onEdit);
            approveButtonElement.addEventListener('click', onApprove);
    
            function onEdit(e) { // EDIT BUTTON
                e.preventDefault(); 

                titleInput.value = document.querySelector("#review-list > li > article > h4").textContent;
                categoryInput.value = document.querySelector("#review-list > li > article > p:nth-child(2)").textContent.slice(10);
                textInput.value = document.querySelector("#review-list > li > article > p:nth-child(3)").textContent.slice(9);
               
                reviewListElement.textContent = '' // clears the whole <ul>
               
                
            } 

            function onApprove(e) {
               e.preventDefault();
                
                reviewListElement.removeChild(publishLiElement);
                publishedListElement.appendChild(publishLiElement);

                publishLiElement.removeChild(approveButtonElement);
                publishLiElement.removeChild(editButtonElement);

                //approveButtonElement.remove();
                //editButtonElement.remove();
            }

            clearButton.addEventListener('click', onClear);

            function onClear(e) {
                e.preventDefault();
                publishLiElement.remove();
            }

        }; // publishButton closing bracket
    
    } // solve closing bracket

