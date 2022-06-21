window.addEventListener('load', solve);

function solve() {
    
    let inputModel = document.getElementById('model');    // input fields
    let inputYear = document.getElementById('year'); // input fields
    let inputDescription = document.getElementById('description'); // input fields
    let inputPrice = document.getElementById('price'); // input fields

    let addButton = document.getElementById('add');    // add button 

    let form = document.getElementById('model');        // left form
    let tableElement = document.getElementById('information'); // right form
    let furnitureListTable = document.getElementById('furniture-list'); // table body !!!
    

    addButton.addEventListener('click', onAdd);

    let totalSum = 0;

    
    function onAdd(e) {
        e.preventDefault();

        if (inputModel.value == '' || inputDescription.value == '') {
            return
        }

        if (Number(inputYear.value) < 0 || Number(inputPrice.value) < 0) {
            return
        }

        if (inputYear.value == '' || inputPrice.value == '') {
            return
        }

        // table creation (class Info) start: 
        let tableRowInfo = document.createElement('tr'); // first main child to tablebody
        tableRowInfo.className = 'info';
        furnitureListTable.appendChild(tableRowInfo);

        let tableModel = document.createElement('td'); // Table Model
        tableModel.textContent = inputModel.value;
        tableRowInfo.appendChild(tableModel);

        let tablePrice = document.createElement('td'); // Table Price
        tablePrice.textContent = Number(inputPrice.value).toFixed(2);
        tableRowInfo.appendChild(tablePrice)  
        
        let tableButtons = document.createElement('td'); // Table butons TD parent
        tableRowInfo.appendChild(tableButtons);
        
        let moreBtn = document.createElement('button'); // More button create
        moreBtn.className = 'moreBtn';
        moreBtn.textContent = 'More Info';
        tableButtons.appendChild(moreBtn);

        let buyBtn = document.createElement('button'); // Buy button create
        buyBtn.className = 'buyBtn';
        buyBtn.textContent = 'Buy it';
        tableButtons.appendChild(buyBtn);

        // class hide creation

        let tableRowHide = document.createElement('tr'); // second main child to tablebody
        tableRowHide.className = 'hide';
        furnitureListTable.appendChild(tableRowHide);

        let tableYear = document.createElement('td'); // Table Year
        tableYear.textContent = `Year: ${inputYear.value}`;
        tableRowHide.appendChild(tableYear);

        let tableDescription = document.createElement('td'); // Table Description
        tableDescription.textContent = `Description: ${inputDescription.value}`;
        tableDescription.colSpan = '3';
        tableRowHide.appendChild(tableDescription);

        // Table created

        // clearing input fields: 

        inputModel.value = '';    
        inputYear.value = ''; 
        inputDescription.value = '';
        inputPrice.value = '';

        // adding event listeners for buttons

        moreBtn.addEventListener('click', onMore);
        buyBtn.addEventListener('click', onBuy);

        function onMore(e) {
            if (moreBtn.textContent == 'More Info') {
            moreBtn.textContent = 'Less Info';
            document.querySelector("#furniture-list > tr.hide").style.display = 'contents';
            } else if (moreBtn.textContent == 'Less Info') {
            moreBtn.textContent = 'More Info';
            document.querySelector("#furniture-list > tr.hide").style.display = 'none';
            }    
        }

        function onBuy(e) {

            
            let targetPrice = e.currentTarget.parentElement.parentElement.childNodes[1].textContent;

            let totalPriceField = document.getElementsByClassName('total-price')[0];
            
            totalSum += Number(targetPrice);

            totalPriceField.textContent = totalSum.toFixed(2);

            e.currentTarget.parentElement.parentElement.textContent = '';
            
        }

    }  // onAdd() closing bracket


}
